import React, { useState, useEffect } from "react";
import axios from '../config/axios'
import swal from 'sweetalert';
import bootstrap from '/node_modules/bootstrap/dist/css/bootstrap.min.css'
// import swal from '@sweetalert/with-react'

const NotesItem = (props) => {
    // const { addNotes } = props
    const [notes, setNotes]  = useState([]) 
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('/api/notes', {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                setNotes(response.data.reverse())
            })
            .catch(err => {
                console.log(err.message)
            })
    })

    const handleRemove = (_id) => {
        // console.log(_id)
        const confirmRemove = window.confirm('Are you sure?')
        // const confirmRemove = swal("Are you sure you want to do this?", {
        //     buttons: ["Cancel", "Yes"],
        //   })
          console.log(confirmRemove)
        if(confirmRemove)
        axios.delete(`/api/notes/${_id}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response._id)
                // let result = response
                // setNotes(response)
            })
            .catch(err => {
                // console.log(err)
            })
    }

    const handleClick = (_id) => {
        // console.log(_id)
        axios.get(`/api/notes/${_id}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then(response => {
            // console.log(response.data)
            let result = response.data
            setItems(result)
            alertBox(result._id)
        },[])
    }

    const alertBox = (_id) => {
        console.log(_id)
        const result = notes.filter(e => {
            if(e._id === _id){
                // swal(`${e.title} - ${e.body}`)
                // swal(<h2>{e.title}</h2>, <h3>{e.body}</h3>)
                swal({  
                    title: `${e.title}`,  
                    text: `${e.body}`,  
                    icon: "info",  
                    button: "Done" 
                  }); 
            }
        })
    }

    return (
        <div className="col-md-6">
            { notes.length === 0 ? 
                (
                <div> 
                    <h3> No notes found </h3>
                    <p>Add your first note</p>
                </div>
                ) : (
                    <div>
                        <h3> My notes lists </h3>
                    { notes.map((e,i) => {
                        return (
                            <div className="container" key={e._id}>
                                <div className="row">
                                    <div className="col-md-10">
                                        <li className="list-group-item list-group-item-action mt-2" key={i} onClick={() => handleClick(e._id)}> {e.title} </li> 
                                    </div>
                                    <div className="col-md-2">
                                        <button style={{float : 'right', color : "red", backgroundColor : "black", margin : '10px 0px', borderRadius : "5px", padding : "5px"}} onClick={() => handleRemove(e._id)}>Remove</button> 
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                )
            }
        </div>
    )
}

export default NotesItem