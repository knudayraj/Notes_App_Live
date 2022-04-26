import React, { useState, useEffect } from 'react'
import axios from '../config/axios'
import bootstrap from '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const Account = (props) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('/users/account', {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                // console.log(response.data)
                setUser(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    return (
    <div className='container'> 
        <div className='card' style={{width: "25rem", textAlign:"center"}}>
            <h1 className='header'>Profile Details</h1>
            <hr />
            <h4 className='card-text'> Email - { user.email} </h4>
            <h4 className='card-body'> Username - { user.username} </h4>
        </div>
    </div>
    )
}

export default Account