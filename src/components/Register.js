import React, { useState } from "react";
import axios from '../config/axios'
import bootstrap from '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const Register = (props) => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        if(e.target.name === "username") setUserName(e.target.value)
        else if(e.target.name === "email") setEmail(e.target.value)
        if(e.target.name === "password") setPassword(e.target.value)
        // if(e.target.name==='name') setName(e.target.value)
        // ("name" === "email" && setEmail(e.target.value))
        // ("name" === "passowrd" && setPassword(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username : userName,
            email : email, 
            password : password
        }
        setUserName('')
        setEmail('')
        setPassword('')
        // console.log(formData)
        axios.post('/users/register', formData)
            .then(response => {
                // console.log(response.data)
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                } else {
                    // <div class="successfully created an account" role="alert">
                    //     A simple primary alert—check it out!
                    // </div>
                    alert('successfully created an account')
                    props.history.push('/login')
                }
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
    <div className="container">
        <h1>Register with us</h1>
        <form style={{marginLeft:'25%', marginRight:'25%', width:'50%'}} onSubmit={handleSubmit}>
            <input className="form-control mt-3" type="text" name="username" value={userName} placeholder="Enter username" onChange={handleChange} required /> <br />
            <input className="form-control" type="text" name="email" value={email} placeholder="Enter email" onChange={handleChange} required /> <br />
            <input className="form-control" type="text" name="password" value={password} placeholder="Enter password" onChange={handleChange} required /> <br />
            <input style={{color : "yellow", backgroundColor : "black", borderRadius : "5px"}} type="Submit" />
        </form>
    </div>
    )
}

export default Register