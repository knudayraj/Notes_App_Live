import React, { useState, useEffect } from "react";
import AddNotes from "./AddNotes";
import bootstrap from '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const MyNotes = (props) => {


    return (
    <div className="container">
        <h2> My Notes </h2>
        <AddNotes />
    </div>
    )
}

export default MyNotes