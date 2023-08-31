import { Routes as RoutesDom } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import HomePage from "./HomePage/HomePage";
import ParcelPage from "./ParcelPage/ParcelPage";
import InvoicePage from "./InvoicePage/InvoicePage";
import UserPage from "./UserPage/UserPage";
import CalendarPage from "./CalendarPage/CalendarPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import AppRoutes from "../components/AppRoutes";


export default function Routes (){
    return <RoutesDom>

<Route path="/" element={<LoginPage/>}/>
<Route path="/parcel" element={<ParcelPage/>}/>
<Route path="/invoice" element={<InvoicePage/>}/>
<Route path="/user" element={<UserPage/>}/>
<Route path="/calendar" element={<CalendarPage/>}/>
<Route path="/home" element={<HomePage/>}/>
<Route path="/register" element={<RegisterPage/>}/>

</RoutesDom>

}