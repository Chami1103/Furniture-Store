import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

const Profile = () => {


    return (
        <Fragment>
                    <h2 className="mt-5 ml-5">My Profile</h2>
                    <div className="row justify-content-around mt-5 user-info">
                        <div className="col-12 col-md-3">
                            <figure className='avatar avatar-profile'>
                                <img className="rounded-circle img-fluid"  />
                            </figure>
                            <Link to="/me/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                                Edit Profile
                            </Link>
                        </div>

                        <div className="col-12 col-md-5">
                            <h4>Full Name</h4>
                            <h4>Email Address</h4>
                            <h4>Joined On</h4>
                           
                            
                                <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
                                    My Orders
                                </Link>
                            

                            <Link to="/forgotpassword" className="btn btn-primary btn-block mt-3">
                                Change Password
                            </Link>
                        </div>
                    </div>
            
        </Fragment>
    )
}

export default Profile
