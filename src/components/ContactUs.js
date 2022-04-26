import React, { useState } from "react"
import Swal from 'sweetalert2'

const ContactUs = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')


    const handleChange = (e) => {
        const inputValue = e.target.value
        if(e.target.name =="title"){
            setTitle(inputValue)
        } else {
            setBody(inputValue)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitle('')
        setBody('')
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Your inquiry has been successfully submitted",
            showConfirmButton: false,
            timer: 1500
          })
    }

    return (
        <div>
            <form style={{marginLeft:'25%', marginRight:'25%', width:'50%'}} onSubmit={handleSubmit}>
            <h1 className="mt-5 mb-5"> Contact Us</h1>
                <input className="form-control mt-3" type="text" name="title" value={title} placeholder="Enter title" onChange={handleChange} required /> <br />
                <textarea className="form-control" type="password" name="body" value={body} placeholder="Enter details" onChange={handleChange} rows={5} required /> <br />
                <input style={{color : "yellow", backgroundColor : "black", borderRadius : "5px"}} type="Submit" />
            </form>
        </div>
    )
}

export default ContactUs