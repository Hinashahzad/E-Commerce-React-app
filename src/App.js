// Parent Functional Component
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import ProductDetails from "./Component/Code/ProductDetails";
import Home from "./Component/UserInterface/Home";
import LoginForm from "./Component/Form/LoginForm";
import RegistrationForm from "./Component/Form/RegistrationForm";

function App ()
{
    return (
        <Segment>
         <Router>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/Login" element={ <LoginForm /> }></Route>
                    <Route path ="/Registration" element={<RegistrationForm />}></Route>
                    <Route path="/product/:productId" element={ <ProductDetails /> } />
                </Routes>     
    </Router>
        </Segment>
    );
}
export default App; 