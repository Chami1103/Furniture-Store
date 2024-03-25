import React, { Fragment, useState, useEffect } from 'react'
import {Link} from 'react-router-dom';

const ForgotPassword = () => {

   
    return (
        <Fragment>

            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" >
                        <h1 className="mb-3">Forgot Password</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Enter Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                            
                            />
                        </div>
                        
                        <button
                            id="forgot_password_button"
                            type="submit"
                            className="btn btn-block py-3"
                         
                          >
                            Send Email
                         </button>
                         <Link to="/" className="float-right mt-3">Login ?</Link>

                    </form>
                    
                </div>
            </div>

        </Fragment>
    )
}

export default ForgotPassword