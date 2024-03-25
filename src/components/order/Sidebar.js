import React from 'react'

import { Link } from 'react-router-dom'

 

const Sidebar = () => {

    return (

        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/home2"><i className="fa fa-home"></i> Home</Link>

                    </li>

 

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-star"></i> Payment</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/addCard"><i className="fa fa-plus"></i> New Card</Link>

                            </li>

                            <li>
                                <Link to="/cardDetails"><i className="fa fa-clipboard"></i> My Cards</Link>
                            </li>

                        </ul>

                    </li>
                    
                </ul>

            </nav>

        </div>

    )

}

 

export default Sidebar
