import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../Component/Home/Home';
import LoginForm from '../Container/LoginForm/JS index';
import RegistrationForm from '../Container/RegistrationForm/JS index';
import SingleProductDetail from '../Component/SingleProductDetail/JS index';
import ShoppingCartModal from '../Container/ShoppingCartModal/JS index';
import Checkout from '../Component/Checkout/Checkout';
import Payment from '../Component/Payment/JS index';
import ShoppingBag from '../Component/ShoppingBag/JS index';

const Navigators = () => {
    return ( 
     <Router>
                <Routes>
                    <Route path="/" element={ <Home/> }></Route>
                    <Route path="/Home" element={ <Home /> }></Route>
                    <Route path="/Login" element={ <LoginForm /> }></Route>
                    <Route path ="/Registration" element={<RegistrationForm />}></Route>
                    <Route path="/product/:productId" element={ <SingleProductDetail /> } />
                    <Route path="ShoppingBag" element={ <ShoppingBag /> } />
                    <Route path="shoppingCartModal" element={<ShoppingCartModal />}></Route>
                    <Route path="/ShoppingBag/Checkout" element={ <Checkout /> } />
                    <Route path="/Checkout" element={ <Checkout /> } />
                    <Route path="/Payment" element={ <Payment/> } />
                </Routes>     
    
    </Router>
    
     );
};
export default Navigators;
