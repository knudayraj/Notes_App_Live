import React, { useState } from 'react'
import { Link, Route, withRouter } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import axios from '../config/axios'
import Account from './Account'
import MyNotes from './MyNotes'
import bootstrap from '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import PrivateRoute from '../helpers/PrivateRoute'
import ContactUs from './ContactUs'
import Swal from 'sweetalert2'


const NavBar = (props) => {
    // const [userLoggedIn, setUserLoggedIn] = useState(false)
    const { userLoggedIn, handleAuth } = props


    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "do you want to log out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Logged Out!',
                'You are sucessfully logged out.',
                'success'
              )
            localStorage.removeItem('token')
            handleAuth()
            props.history.push('/')
            }
          })
          
    }   
// }
    


    return (
        <div className='container mt-5'>
          <h1 className='display-6' style={{textAlign : "center"}} > Digi NoteBook </h1>
            <div className="d-flex justify-content-end">
                <ul>
                    <><Link to="/" >Home</Link> | </>
                    { userLoggedIn ? 
                    <React.Fragment>
                        <><Link to="/account">Profile</Link> | </>
                        <> <Link to="/mynotes">My Notes</Link> | </>
                        <><Link to="/contactus" >Contact us</Link> | </>
                        <><Link to="" onClick={handleLogOut}>Logout</Link></>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <> <Link to="/register">Register</Link> | </>
                        <> <Link to="/login" >Login</Link> | </>
                    </React.Fragment>
                    }   
                </ul>
            </div>
          <Route path="/" render={(props) => {
              return <Home 
                        {...props}
                        userLoggedIn={userLoggedIn}
              />
          }}
          component={Home} exact />
          <Route path="/register" component={Register} />
          <Route path="/login" render={(props) => {
              return <Login 
                    {...props}
                    handleAuth={handleAuth} />
          }} />
          <PrivateRoute path="/contactus" component={ContactUs} exact />
          <PrivateRoute path="/account" component={Account} />
          <PrivateRoute path="/mynotes" component={MyNotes} />
        </div>
      )
}

// const WrappedComponent = withRouter(NavBar)
// export default WrappedComponent

export default withRouter(NavBar)