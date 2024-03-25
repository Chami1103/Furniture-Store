import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../common/sidebar/sidebar'
import { TypeAnimation } from 'react-type-animation';


function WelcomePage() {
    return (
        <>
            <Sidebar/>

                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Welcome to Admin Panel. You Can Manage Customers.',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Welcome to Admin Panel. You Can Manage Orders.',
                        1000,
                        'Welcome to Admin Panel. You Can Manage Staff.',
                        1000,
                        'Welcome to Admin Panel. You Can Manage Catalogue.',
                        1000,
                        'Welcome to Admin Panel. You Can Manage Payment.',
                        1000,
                        'Welcome to Admin Panel. You Can Manage Delivery.',
                        1000,
                        'Welcome to Admin Panel. You Can Manage Inventory.',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ 
                        fontSize: '4em', 
                        textAlign: 'center',
                        color: '#ffffff', 
                        fontWeight: '600',
                        display: 'inline-block',
                        marginTop: '10%',
                     }}
                    repeat={Infinity}
                    />
        </>
    );
}

export default WelcomePage; 
