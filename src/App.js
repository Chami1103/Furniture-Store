import './App.css';
import './css/admin.css';

//Common
import AdminFooter from './components/common/adminFooter';

//Customer
import WelcomePage from './components/User/welcomePage';
import Welcome from './components/User/welcome';
import AdminLogin from './components/User/adminLogin';
import CustomerList from './components/User/allCustomers';
import CustomerReport from './components/User/customerReportView';
import ReportGen1 from './components/User/ReportGen1';

// Delivery
import DriverList from './components/Delivery/driver';
import CreateDriver from './components/Delivery/addNewDriver';
import UpdateDriver from './components/Delivery/updateDriver';

import VehicleList from './components/Delivery/vehicles';
import CreateVehicle from './components/Delivery/addNewVehicle';
import UpdateVehicle from './components/Delivery/updateVehicle';
import VehicleReport from './components/Delivery/vehicleReportView';
import ReportGen5 from './components/Delivery/reportGen5';

import AllDeliveries from './components/Delivery/deliveries';
import NewDelivery from './components/Delivery/newDelivery';
import UpdateDelivery from './components/Delivery/updateDelivery';
import DeliveryReport from './components/Delivery/deliveryReportView';
import ReportGen6 from './components/Delivery/reportGen6';


//Staff
import EmployeeList from './components/Staff/employees';
import CreateEmployee from './components/Staff/addNewEmployee';
import UpdateEmployee from './components/Staff/updateEmployee';

// import EmployeeSalaries from './components/Staff/employeeSalaries';
// import AddNewSalary from './components/Staff/addNewEmpSalary';
// import UpdateSalary from './components/Staff/updateSalary';

import EmployeeTasks from './components/Staff/employeeTasks';
import AssignTask from './components/Staff/assignEmployeeTask';
import UpdateTasks from './components/Staff/updateTasks';
import EmployeeReport from './components/Staff/employeeReportView';
import ReportGen3 from './components/Staff/reportGen3';



// Inventory
import Inventory from './components/Inventory/inventory';
import AddItem from './components/Inventory/addItem';
import UpdateInventory from './components/Inventory/updateItem';
import InventoryReport from './components/Inventory/storeReportView';
import ReportGen8 from './components/Inventory/reportGen8';

import Suppliers from './components/Inventory/suppliers';
import AddNewSupplier from './components/Inventory/addNewSupplier';
import UpdateSupplier from './components/Inventory/updateSupplier';
import SupplierReport from './components/Inventory/supplierReportView';
import ReportGen9 from './components/Inventory/reportGen9';


// Catalogue
import Categories from './components/Catalogue/categories';
import AddNewCategory from './components/Catalogue/addNewCategory';
import UpdateCategory from './components/Catalogue/updateCategory';

import Items from './components/Catalogue/items';
import AddNewItem from './components/Catalogue/addNewItem';
import UpdateItem from './components/Catalogue/updateItem';
import ItemReport from './components/Catalogue/itemReportView';
import ReportGen4 from './components/Catalogue/reportGen4';

// Payments
import Payments from './components/Payment/payments';
import ViewPayment from './components/Payment/viewPayment';
import Card from './components/Payment/cards';
import PaymentReport from './components/Payment/paymentReportView';
import ReportGen10 from './components/Payment/reportGen10';


//Orders

import Orders from './components/Order/orders';
import OrderReport from './components/Order/orderReportView';
import ReportGen2 from './components/Order/reportGen2';

//Customer Care
import AllInquiries from './components/CustomerCare/inquiries';
import InquiryReport from './components/CustomerCare/inquiryReportView';
import ReportGen7 from './components/CustomerCare/reportGen7';
import AllFeedbacks from './components/CustomerCare/feedbacks';
import FeedbackReport from './components/CustomerCare/feedbackReportView';
import ReportGen11 from './components/CustomerCare/reportGen11';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
function App() {

  return (
    <Router>

          <div className="App">

          <Switch>

            {/* Customer   ~Shamrina*/}

            <Route path="/welcomepage" exact component={WelcomePage}/>
            <Route path="/welcome" exact component={Welcome}/>
            <Route path="/" exact component={AdminLogin}/>
            <Route path="/all-customers" exact component={CustomerList}/>
            <Route path="/report-view1" exact component={CustomerReport}/>
            <Route path="/report-gennarate1" exact component={ReportGen1}/>
            
            

              {/* Delivery  ~Ganeesha*/}

              <Route path="/driver-list" exact component={DriverList}/>
              <Route path="/new-driver" exact component={CreateDriver}/>
              <Route path="/update-driver/:id" exact component={UpdateDriver}/>

              <Route path="/vehicle-list" exact component={VehicleList}/>
              <Route path="/new-vehicle" exact component={CreateVehicle}/>
              <Route path="/update-vehicle/:id" exact component={UpdateVehicle}/>
              <Route path="/report-view5" exact component={VehicleReport}/>
              <Route path="/report-gennarate5" exact component={ReportGen5}/>

              <Route path="/all-deliveries" exact component={AllDeliveries}/>
              <Route path="/new-delivery" exact component={NewDelivery}/>
              <Route path="/update-delivery/:id" exact component={UpdateDelivery}/>
              <Route path="/report-view6" exact component={DeliveryReport}/>
              <Route path="/report-gennarate6" exact component={ReportGen6}/>
              

              {/* Staff  ~_____ */}

              <Route path="/employee-list" exact component={EmployeeList}/>
              <Route path="/new-employee" exact component={CreateEmployee}/>
              <Route path="/update-employee/:id" exact component={UpdateEmployee}/>
              <Route path="/report-view3" exact component={EmployeeReport}/>
              <Route path="/report-gennarate3" exact component={ReportGen3}/>
              {/* <Route path="/employee-salaries" exact component={EmployeeSalaries}/> */}
              {/* <Route path="/new-salaryfield" exact component={AddNewSalary}/> */}
              {/* <Route path="/update-salary/:id" exact component={UpdateSalary}/> */}

              <Route path="/employee-tasks" exact component={EmployeeTasks}/>
              <Route path="/assign-task" exact component={AssignTask}/>
              <Route path="/update-task/:id" exact component={UpdateTasks}/>


              {/* Inventory  ~Halis*/}

              <Route path="/inventory" exact component={Inventory}/>
              <Route path="/new-item" exact component={AddItem}/>
              <Route path="/update-item/:id" exact component={UpdateInventory}/>
              <Route path="/report-view8" exact component={InventoryReport}/>
              <Route path="/report-gennarate8" exact component={ReportGen8}/>
              

              <Route path="/suppliers" exact component={Suppliers}/>
              <Route path="/new-supplier" exact component={AddNewSupplier}/>
              <Route path="/update-supplier/:id" exact component={UpdateSupplier}/>
              <Route path="/report-view9" exact component={SupplierReport}/>
              <Route path="/report-gennarate9" exact component={ReportGen9}/>
              

              {/* Catalogue  ~Pasindu*/}
              
              <Route path="/categories" exact component={Categories}/>
              <Route path="/new-category" exact component={AddNewCategory}/>
              <Route path="/update-category/:id" exact component={UpdateCategory}/>
              
              <Route path="/items" exact component={Items}/>
              <Route path="/add-Item" exact component={AddNewItem}/>
              <Route path="/edit-item/:id" exact component={UpdateItem}/>
              <Route path="/report-view4" exact component={ItemReport}/>
              <Route path="/report-gennarate4" exact component={ReportGen4}/>
              
              {/* Payment  ~Sanka*/}

              <Route path="/payments" exact component={Payments}/>
              <Route path="/view-payment/:id" exact component={ViewPayment}/>
              <Route path="/cards" exact component={Card}/>
              <Route path="/report-view10" exact component={PaymentReport}/>
              <Route path="/report-gennarate10" exact component={ReportGen10}/>
              

              {/* Payment  ~Chamika*/}

              <Route path="/orders" exact component={Orders}/>
              <Route path="/report-view2" exact component={OrderReport}/>
              <Route path="/report-gennarate2" exact component={ReportGen2}/>
              

              {/* Customer Care  ~kithmi*/}
              <Route path="/inquiries" exact component={AllInquiries}/>
              <Route path="/report-view7" exact component={InquiryReport}/>
              <Route path="/report-gennarate7" exact component={ReportGen7}/>
              <Route path="/feedbacks" exact component={AllFeedbacks}/>
              <Route path="/report-view11" exact component={FeedbackReport}/>
              <Route path="/report-gennarate11" exact component={ReportGen11}/>


          </Switch>
          <AdminFooter />
        </div>

  </Router>
  );
}

export default App;