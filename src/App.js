// Parent Functional Component
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import ProductDetails from './Services/Api/SingleProductApi';
import Home from "./Component/Home/Home";
import LoginForm from "./Container/LoginForm";
import RegistrationForm from "./Container/RegistrationForm";
import ActiveUserHeader from "./Component/UserInterface/Header/ActiveUserHeader";
import ShoppingCardModal from './Component/UserInterface/Body/ShoppingCardModal/ShoppingCardModal';

function App ()
{
    return (
        <Segment>
         <Router>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/Home" element={ <Home /> }></Route>
                    <Route path="/Login" element={ <LoginForm /> }></Route>
                    <Route path ="/Registration" element={<RegistrationForm />}></Route>
                    <Route path="/product/:productId" element={ <ProductDetails /> } />
                    <Route path="/activeUser" element={ <ActiveUserHeader /> } />
                    <Route path="/ShoppingCart" element={ <ShoppingCardModal /> } />
                </Routes>     
    </Router>
        </Segment>
    );
}
export default App; 