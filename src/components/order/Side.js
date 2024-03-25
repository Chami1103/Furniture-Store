import React from 'react'

import { Link } from 'react-router-dom'

 

const Side = () => {

    return (

        <div className="sidebar-wrapper">

            <nav id="sidebar">

                <ul className="list-unstyled components">

                    <li>

                        <Link to="/home2"><i className="fa fa-home"></i> Home</Link>

                    </li>

                    
                </ul>

            </nav>

        </div>

    )

}

 

export default Side;
