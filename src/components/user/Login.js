import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
// import { UserContext } from '../../UserContext'; // Import the UserContext

const Login = () => {
  const history = useHistory();
//   const { setUser } = useContext(UserContext); // Access setUser from the UserContext

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginCustomer = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8081/api/customer/customer/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      swal({
        title: 'Warning',
        text: 'Invalid Credentials !!',
        icon: 'warning',
        button: 'OK',
      });
      console.log('Invalid Credentials');
    } else {
      swal({
        title: 'Success',
        text: 'Login Successfully !!',
        icon: 'success',
        button: 'OK',
      });
      console.log('Login Successfully !!');

      // Set the user ID in the context
    //   setUser(data.cusId);

      history.push('/home2');
    }
  };

  return (
    <Fragment>
      <div className="row wrapper">
        <div className="col-10 col-lg-4">
          <form method="POST" className="shadow-lg">
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>

              <input
                className="form-control"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Link to="/reset" className="float-right mb-4">
              Forgot Password?
            </Link>

            <button
              id="signin"
              name="signin"
              value="Login"
              onClick={loginCustomer}
              type="submit"
              className="btn btn-block py-3"
            >
              LOGIN
            </button>

            <Link to="/signup" className="float-right mt-3">
              New User?
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;







// import React,{Fragment, useState} from 'react';
// import {useHistory }  from "react-router-dom";
// import {Link} from 'react-router-dom';
// import swal from 'sweetalert';


// const Login = () => {

//     let history = useHistory();

//     const [email,setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const loginCustomer = async (e) => {
//         e.preventDefault();

//         const res   =  await fetch('http://localhost:8081/api/customer/customer/login', {

//             method :"POST",
//             headers : {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 email,
//                 password
//             })
//         });
 
//         const data =  res.json();
//         if(res.status === 400 || !data){
//             swal({

//                 title: "Warning",
    
//                 text: "Invalid Credentials !!",
    
//                 icon: "warning",
    
//                 button: "OK"
    
//               });
         
//             console.log("Invalid Credentials");

//         }else{

//             swal({

//                 title: "Success",
    
//                 text: "Login Successfully !!",
    
//                 icon: "success",
    
//                 button: "OK"
    
//               });
            
//             console.log("Login Successfully !!");
//             history.push("/home2")
//         }
//     }

    
   
//     return (
//         <Fragment>
           
//                     <div className="row wrapper">
//                         <div className="col-10 col-lg-4">
//                             <form  method="POST" className="shadow-lg">
//                                 <h1 className="mb-3">Login</h1>
//                                 <div className="form-group">
//                                     <label htmlFor="email_field">Email</label>
//                                     <input
//                                         className="form-control"
//                                         type="email" id="email" name="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         required
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="password_field">Password</label>
                                
//                                     <input
//                                         className="form-control"
//                                         type="password" id="password" name="password"
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         required
                                      
//                                     />
                                    

//                                 </div>

//                                 <Link to="/reset" className="float-right mb-4">Forgot Password?</Link>

//                                 <button
//                                     id="signin"
//                                     name='signin'
//                                     value='Login'
//                                     onClick = {loginCustomer}
//                                     type="submit"
//                                     className="btn btn-block py-3"
//                                 >
//                                     LOGIN
//                                 </button>

//                                 <Link to="/signup" className="float-right mt-3">New User?</Link>
//                             </form>
//                         </div>
//                     </div>
               
        
//         </Fragment>
//     )
// }

// export default Login
