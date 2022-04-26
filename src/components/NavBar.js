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


const NavBar = (props) => {
    // const [userLoggedIn, setUserLoggedIn] = useState(false)
    const { userLoggedIn, handleAuth } = props


    return (
        <div className='container mt-5'>
          <h1 className='display-6' style={{textAlign : "center"}} > Digi NoteBook </h1>
            <div className="d-flex justify-content-end">
                <ul>
                    <><Link to="/" >Home</Link> | </>
                    { userLoggedIn ? 
                    <React.Fragment>
                        <><Link to="/account">Account</Link> | </>
                        <> <Link to="/mynotes">My Notes</Link> | </>
                        <><Link to="" onClick={() => {
                                alert('Successfully logged out')
                                localStorage.removeItem('token')
                                handleAuth()
                                props.history.push('/')
                        }}>Logout</Link></>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <> <Link to="/register">Register</Link> | </>
                        <> <Link to="/login" >Login</Link> | </>
                    </React.Fragment>
                    }   
                </ul>
            </div>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} />
          <Route path="/login" render={(props) => {
              return <Login 
                    {...props}
                    handleAuth={handleAuth} />
          }} />
          <PrivateRoute path="/account" component={Account} />
          <PrivateRoute path="/mynotes" component={MyNotes} />
        </div>
      )
}

// const WrappedComponent = withRouter(NavBar)
// export default WrappedComponent

export default withRouter(NavBar)