import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

import Search from './Search'



const Header = () => {
 
    return (
        <Fragment>


            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src="/images/logo2.jpg" width={150} height={60}/>
                        </Link>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                  <Route render={({ history }) => <Search history={history} />} />
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <Link to="/cart" style={{ textDecoration: 'none' }} >
                        <span id="cart" className="ml-3">Cart</span>
                        <span className="ml-1" id="cart_count"></span>
                    </Link>

                    
                        <div className="ml-4 dropdown d-inline">
                            <Link to="#!" className="btn dropdown-toggle text-white mr-4" type="button" id="dropDownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                <figure className="avatar avatar-nav">
                                    <img
                                     
                                        className="rounded-circle"
                                    />
                                </figure>
                                <span></span>
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropDownMenuButton">

                              
                                   
                                <Link className="dropdown-item" to="">Dashboard</Link>
                                <Link className="dropdown-item" to="">Orders</Link>
                                <Link className="dropdown-item" to="">Profile</Link>
                                <Link className="dropdown-item text-danger" to="/" >
                                    Logout
                                </Link>

                            </div>


                        </div>

                      <Link to="/" className="btn ml-4" id="login_btn">Login</Link>


                </div>
            </nav>
        </Fragment>
    )
}

export default Header;
