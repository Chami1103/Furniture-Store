import React from 'react'

import { Link } from 'react-router-dom'

 

const Sidebar = () => {

    return (

        <div className="sidebar-wrapper">

            <nav id="sidebar">

                <ul className="list-unstyled components">

                    <li>

                        <Link to="/home"><i className="fa fa-home"></i> Home</Link>

                    </li>

 

                    <li>

                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i

                            className="fa fa-star"></i> Feedback</a>

                        <ul className="collapse list-unstyled" id="productSubmenu">

                            <li>

                                <Link to="/feedback"><i className="fa fa-plus"></i> New Feedback</Link>

                            </li>

 

                            <li>

                                <Link to="/Myfeedback"><i className="fa fa-clipboard"></i> My Feedbacks</Link>

                            </li>

                        </ul>

                    </li>
                    
                    <li>

                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i

                            className="fa fa-star"></i> Inquiry</a>

                        <ul className="collapse list-unstyled" id="productSubmenu">

                            <li>

                                <Link to="/inquiry"><i className="fa fa-plus"></i> New Inquiry</Link>

                            </li>

                            
                            <li>

                                <Link to="/Myinquiry"><i className="fa fa-clipboard"></i> My Inquiry</Link>

                            </li>

                        </ul>

                    </li>
 

                </ul>

            </nav>

        </div>

    )

}

 

export default Sidebar
