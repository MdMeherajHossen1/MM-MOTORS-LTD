import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const token = localStorage.getItem('token')
    const handleOnBlur = e => {
        setEmail(e.target.value)

    }
    const handleOnSubmit = e => {

        const user = { email }
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',

            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }


    return (
        <div>
            <h2> Make an Admin</h2>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
            <form onSubmit={handleOnSubmit}>
                <TextField
                    label="Standard"
                    variant="standard"
                    name="email"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <Button type="submit" variant="contained">ADD AS ADMIN</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;