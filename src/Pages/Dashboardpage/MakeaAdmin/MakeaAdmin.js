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
        fetch('https://mysterious-atoll-03905.herokuapp.com/users/admin', {
            method: 'PUT',

            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    setSuccess(true);
                }
            })
        e.preventDefault()
    }


    return (
        <div style={{ backgroundColor: '#1C0C5B', height: '400px', color: 'white' }}>
            <h2> Make an Admin</h2>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
            <form onSubmit={handleOnSubmit}>
                <TextField
                    required
                    sx={{ width: "85%", m: 1 }}
                    onBlur={handleOnBlur}
                    name="email"
                    type="email"
                    color="secondary" focused
                    variant="filled" />
                <Button type="submit" sx={{ width: "85%", m: 1, bgcolor: 'secondary.main' }} variant="contained">ADD AS ADMIN</Button>
            </form>
        </div>

    );
};

export default MakeAdmin;