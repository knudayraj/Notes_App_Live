import React, { useState, useEffect } from "react";
import axios from '../config/axios'
import NotesItem from "./NotesItem";
import bootstrap from '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const AddNotes = (props) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [notes, setNotes] = useState('')


    const handleChange = (e) => {
        if(e.target.name  === "title"){
            // console.log(e.target.value)
            setTitle(e.target.value)
        } else if(e.target.name === "body"){
            // console.log(e.target.value)
            setBody(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title : title,
            body : body
        }
        setTitle('')
        setBody('')
        // console.log(formData)
        axios.post('/api/notes', formData, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err.errors)
            })

    }

    // const addNotes = (note) => {
    //     setNotes(note)
    // }


    return (
        <div className="row">
                <form className="col-md-6" onSubmit={handleSubmit}>
                    <input className="form-control mt-3" type="text" name="title" value={title} placeholder="Enter title" onChange={handleChange} required /> <br />
                    <textarea className="form-control" type="text" cols="23" name="body" value={body} placeholder="Enter body" onChange={handleChange} required /> <br /> 
                    <input style={{color : "green", backgroundColor : "black", borderRadius : "5px"}} type="Submit" value="Save" />
                </form>
                <NotesItem />
        </div>
    )
}

export default AddNotes