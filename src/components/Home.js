import React from "react";

const Home = (props) => {
    const {userLoggedIn} = props

    return (
    <div className='container'>
        <div>
            <h1 className='display-6'> Welcome to Anywhere <strong>NoteBook</strong></h1>
            { userLoggedIn ? (
                <p> To add/manage notes please register/login </p>
            ) : (
                <p> Now you can add/manage your personal notes </p>
            ) }
            
        </div>
    </div>
    )
}

export default Home