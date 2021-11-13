import { useState, useEffect } from 'react'
import initializeAuthentication from "../Pages/Loginpage/Firebase/firebase.init";
import {
    getAuth, createUserWithEmailAndPassword,
    updateProfile, signInWithPopup,
    GoogleAuthProvider, signOut, onAuthStateChanged,
    signInWithEmailAndPassword, getIdToken
} from "firebase/auth";

initializeAuthentication()


const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [admin, setAdmin] = useState(false)




    const googleProvider = new GoogleAuthProvider()
    const handleRegister = (email, password, name, history) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                saveUsertoDB(email, name, 'POST')
                const newUser = { email, displayName: name }
                setUser(newUser)
                // send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { }).catch((error) => { });

                history.push('/')
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setLoading(false))
    }
    const handleLogin = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const destination = location?.state?.from || '/'
                history.replace(destination);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }

    const handleSignOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.meassage)
        })
            .finally(() => setLoading(false))
    }



    // google sign in btn
    const handleGoogleSignIn = (location, history) => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                if (user) {
                    saveUsertoDB(user.email, user.displayName, 'PUT')
                    const destination = location?.state?.from || '/'
                    history.push(destination)
                    setUser(result.user)
                    setError('')
                }
            })

            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }
    // observer user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        localStorage.setItem('token', JSON.stringify(idToken))
                    })
            }
            else {
                setUser({})
            }
            setLoading(false)
        })


        return () => unSubscribe

    }, [])

    const saveUsertoDB = (email, displayName, method) => {
        const user = { email, displayName }
        fetch(`https://mysterious-atoll-03905.herokuapp.com/users`, {
            method: method,
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    // ADMIN API
    useEffect(() => {
        fetch(`https://mysterious-atoll-03905.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user?.email])
    return {
        user,
        error,
        handleRegister,
        handleSignOut,
        handleLogin,
        loading,
        handleGoogleSignIn,
        admin
    }
}

export default useFirebase;