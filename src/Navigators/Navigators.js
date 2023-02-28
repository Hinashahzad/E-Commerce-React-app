import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../Component/Home/Home';
import LoginForm from '../Component/features/user/LoginForm';
import RegistrationForm from '../Component/features/user/RegistrationForm';
import SelectProduct from '../Component/features/product/SelectProduct';
import ShoppingCart from '../Component/features/shoppingCart/ShoppingCart';
import ShoppingCartModal from '../Component/features/shoppingCart/ShoppingCartModal';
import Checkout from '../Component/Checkout/Checkout';
import Payment from '../Component/Payment/Payment';
const Navigators = () => {
    return ( 
     <Router>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/Home" element={ <Home /> }></Route>
                    <Route path="/Login" element={ <LoginForm /> }></Route>
                    <Route path ="/Registration" element={<RegistrationForm />}></Route>
                    <Route path="/product/:productId" element={ <SelectProduct /> } />
                    <Route path="ShoppingCart" element={ <ShoppingCart /> } />
                    <Route path="shoppingCartModal" element={<ShoppingCartModal />}></Route>
                    <Route path="/ShoppingCart/Checkout" element={ <Checkout /> } />
                    <Route path="/Checkout" element={ <Checkout /> } />
                    <Route path="/Payment" element={ <Payment/> } />
                </Routes>     
    
    </Router>
    
     );
};
export default Navigators;
