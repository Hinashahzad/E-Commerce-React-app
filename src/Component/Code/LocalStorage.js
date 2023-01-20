import { useDispatch } from 'react-redux';
import React, { useEffect } from "react";
import { UserAction } from '../../redux/action/UserAction';

const LocalStorage = () =>
{
    const LOCAL_STORAGE_KEY = "users";
    const dispatch = useDispatch();
/**
 * This component will manage the Redux store 
 * It takes the Local storage data and diapatch it into the Redux store
 * Redux does not contain the states permanent */
    useEffect(() =>
    {
        const retrieve_registerUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrieve_registerUser)
        {
          dispatch( UserAction( ( retrieve_registerUser ) ) );
        }
        }, []);
  
  
    return ( <>
    </> );
};

export default LocalStorage;