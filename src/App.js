// Parent Functional Component
import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/UserInterface/Home";
import { Segment } from "semantic-ui-react";
import LocalStorage from "./Component/Code/LocalStorage";
import ProductDetails from "./Component/Code/ProductDetails";

function App ()
{
    const [ value, setValue ] = useState( "" )
    //Function to receive (Sign-in and Register from MenuRight (Child Component))
    const receiveData = (status) =>
    {
        //Update the receiving value in useState to send in Local Storage Component 
        setValue(status)
    }
    //Receiving state from child component to Parent component
    return (
        <Segment>
         <Router>
                <Routes>
                    <Route path="/" exact element={ <Home receiveData={ receiveData} /> } />
                    <Route path="/Home" element={ <Home receiveData={ receiveData}/> } />
                    <Route path="/loginForm" element={ <LocalStorage value={ value} />  } /> 
                    <Route path="/registrationForm" element={ <LocalStorage value={ value } /> } /> 
                    <Route path="/product/:productId" element={ <ProductDetails /> } />
                </Routes>     
    </Router>
        </Segment>
    );
}
export default App; 