
/*Css */

import './css/client.css';
import './css/Footer1.css';
import './App.css';
import './css/offe.css';

/*Layouts*/
import ClientHead from './components/layout/cHeader'
import Footer1 from './components/layout/Footer1'
import Home2 from './components/layout/home2'
import About from './components/layout/About'

/*user*/

import Login from './components/user/Login';
import Register from './components/user/Register';
import ForgotPassword from './components/user/ForgotPassword';
import Profile from './components/user/Profile';
import Logout from './components/user/Logout';

/*cart and offer*/
import AddCart from './components/cart_offer/AddCart';
import AllCart from './components/cart_offer/AllCart';
import UpdateCart from './components/cart_offer/UpdateCart'

/* feedback */
import AddFeedback from './components/feedback/Feedback';
import AddInquiry from './components/feedback/Inquiry';
import Myfeedback from './components/feedback/Myfeedback';
import Updatefeedback from './components/feedback/Updatefeedback';
import Myinquiry from './components/feedback/Myinquiry';

/* Order */
import Checkout from './components/order/checkout';
import payMethod from'./components/order/payMethod';
import CardDetails from './components/order/cardDetails';
import AddCard from './components/order/AddCard';
import UpdateCard from './components/order/UpdateCard';
import ViewCard from './components/order/ViewCard';
import PaySuccess from './components/order/PaySuccess';
import AllOrders from './components/order/AllOrders';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
     <div className="App">
        <ClientHead/>
           <Switch>
           <Route path="/home2" exact component={Home2}/>
   
             <Route path="/" exact component={Login}/>
             <Route path="/signup" exact component={Register}/>
             <Route path="/reset" exact component={ForgotPassword}/>
             <Route path="/myprofile" exact component={Profile}/>
             <Route path="/home" exact component={Home2}/>
             <Route path="/about" exact component={About}/>
             <Route path="/logout" exact component={Logout}/>

             <Route path="/add_cart/:id" exact component={AddCart} />
             <Route path="/cart" exact component={AllCart} />
             <Route path="/update/:id" exact component={UpdateCart} />
             <Route path="/feedback" exact component={AddFeedback} />
             <Route path="/inquiry" exact component={AddInquiry} />
             <Route path="/Myfeedback" exact component={Myfeedback} />
             <Route path="/Updatefeed/:id" exact component={Updatefeedback} />
             <Route path="/Myinquiry" exact component={Myinquiry} />
             <Route path="/checkout" exact component={Checkout}/>
             <Route path="/payMethod" exact component={payMethod}/>
             <Route path="/cardDetails" exact component={CardDetails}/>
             <Route path="/addCard" exact component={AddCard}/>
             <Route path="/updatecard/:id" exact component={UpdateCard}/>
             <Route path="/viewcard/:id" exact component={ViewCard}/>
             <Route path="/paySuccess" exact component={PaySuccess}/>
             <Route path="/orders" exact component={AllOrders}/>
  
           </Switch>
         <Footer1/>
       </div>
    </Router>
  );
}



export default App;

