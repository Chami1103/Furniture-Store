import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import {Link} from 'react-router-dom';
import swal from 'sweetalert';
import '../../css/AdminLogin.css';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import AdminFooter from '../common/adminFooter';
import { IconContext } from 'react-icons/lib';


const Nav = styled.div`
  background: #15171c;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AdminLogin = () => {

    let history = useHistory();

    const [empEmail,setEmpEmail] = useState('');
    const [empPassword, setEmpPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res   =  await fetch('http://localhost:8081/api/staff/staff/adminlogin', {

            method :"POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                empEmail,
                empPassword
            })
        });
 
        const data =  res.json();
        if(res.status === 400 || !data){
            swal({

                title: "Warning",
    
                text: "Invalid Credentials. Try Again!",
    
                icon: "warning",
    
                button: "OK"
    
              });
         
            console.log("Invalid Credentials");

        }else{

            swal({

                title: "Success",
    
                text: "Login Successfully !!",
    
                icon: "success",
    
                button: "OK"
    
              });
            
            console.log("Login Successfully !!");
            history.push("/welcomepage")
        }
    }


          const [type, setType]=useState('empPassword');
          const [icon, setIcon]=useState(eyeOff);

          const handleToggle=()=>{    
            if(type==='empPassword'){
              setIcon(eye);      
              setType('text');
            }
            else{
              setIcon(eyeOff);     
              setType('empPassword');
            }
          }

    
        return (
        <>

           <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                     <h2 className='furny-logo'style={{ marginLeft: '40px' }}> Furny</h2>
                </Nav>

            </IconContext.Provider>

            <div class="center">
            <h1>Admin Login</h1>
            <form method="POST">
              <div class="txt_field">
                <input type="email" id="empEmail" name="empEmail" 
                value={empEmail}
                onChange={(e) => setEmpEmail(e.target.value)}
                required/>

                <span></span>
                <label>Email</label>
              </div>
              
              <div class="txt_field">
             
                <input type={type} id="empPassword"name="empPassword"
                value={empPassword}
                
                onChange={(e) => setEmpPassword(e.target.value)}
                required
                
                />
                  <Icon className='hash' id="empPassword" onClick={handleToggle} icon={icon} size={20}/>
                 
                <label>Password</label>
              </div>

              <Link to={'/welcomepage'}><div class="pass">Forgot Password?</div></Link>
              <input type="submit" name = "signin" id="signin" 
               value="Login"
               onClick = {loginUser}
              
              />
              
              <div class="signup_link">
                Provide your email and password !
              </div>
            </form>
          </div>
          <AdminFooter /> 
         </>  
         
    );

};



export default AdminLogin;