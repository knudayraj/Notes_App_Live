import React, { useState } from "react";
import axios from '../config/axios'
import bootstrap from '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'

const Login = (props) => {
    const { handleAuth } = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [token, setToken] = useState('')

    const handleChange = (e) => {
        if(e.target.name === "email") setEmail(e.target.value)
        else if(e.target.name === "password") setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email : email, 
            password : password
        }
        console.log(formData)

        axios.post('/users/login', formData)
            .then(response => {
                // console.log(response.data)
                const result = response.data
                // setToken(result)
                if(result.hasOwnProperty('errors')){
                    alert(result.errors)
                } else {
                    // alert('Successfully logged in')
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Successfully logged in",
                        showConfirmButton: false,
                        timer: 1500
                      })
                    localStorage.setItem('token', result.token)
                    props.history.push('/')
                    props.handleAuth()
                }
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
    <div>
        <h1>Login</h1>
        <form style={{marginLeft:'25%', marginRight:'25%', width:'50%'}} onSubmit={handleSubmit}>
            <input className="form-control mt-3" type="text" name="email" value={email} placeholder="Enter email" onChange={handleChange} required /> <br />
            <input className="form-control" type="password" name="password" value={password} placeholder="Enter password" onChange={handleChange} required /> <br />
            <input style={{color : "yellow", backgroundColor : "black", borderRadius : "5px"}} type="Submit" />
        </form>
    </div>
    )
}

export default Login