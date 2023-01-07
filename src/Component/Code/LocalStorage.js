import React, { useState, useEffect} from "react";
import RegistrationForm from "../Form/RegisterationForm";
import { v1 as uuidv1 } from 'uuid';
import LoginForm from "../Form/LoginForm";
import HeaderComponent from "../UserInterface/Header/HeaderComponent";
import { Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { registerUsers } from '../../redux/action/formAction';
//Child Component: LoginForm

function LocalStorage  (props) 
{
    const dispatch = useDispatch();
    const LOCAL_STORAGE_KEY = "users";
    const [user, setUser] = useState([]);
    const registerUser = (User) =>
    {
        setUser([...user, { id: uuidv1(), ...User }]);
    };
    console.log( props.value );
    useEffect(() =>
    {
        const retrieve_registerUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrieve_registerUser)
        {
            setUser( retrieve_registerUser )
        }
        }, []);
  
    useEffect(() =>
    {
        localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify( user ) )
        //Saving userList into the Redux Store
        dispatch( registerUsers( user ) );
        
    }, [ user ] )
  
    return ( <div>
        
        <Segment >
            {( props.value === "Sign-in" ) && <LoginForm user={ user } />}
            { ( props.value === "Register" ) && <RegistrationForm registerUser={ registerUser } />}
            </Segment>
        
    </div>)
    
};

export default LocalStorage;