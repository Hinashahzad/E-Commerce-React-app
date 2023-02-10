import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import LocalStorage from './LocalStorage';
import { ActiveUser } from "../Stores/action/UserAction";
import {useNavigate} from 'react-router-dom';

const LoginForm = () =>
{
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const registerUser = useSelector( ( state ) => state.allUser.user );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
    const onSubmit = (data) =>
    {
      
        console.log( registerUser );
        registerUser.map( ( user ) =>
        {
            if ( data.email === user.email && data.password === user.password ){
              console.log( "USER HAS FOUND" );
              alert( "VALID USER" );
              dispatch( ActiveUser( user ) );
              //navigate( "/activeUser" );
            }
        } )
        reset();
    }
    return ( <>
        <LocalStorage />
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
        <label>Email: </label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder='Email'
            { ...register( 'email',//<--- This is name="email"
              {
                required: "Email is Required", 
                pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message:"This is not a valid email" }
            })}/>
        </Form.Field>
            
           <Form.Field>
        <label>password</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder='Password'
            { ...register( 'password', //<--- This is name="password"
              {
                required: "Password is Required"
              } ) } />
      </Form.Field>
      
            <Button type='submit'>Login</Button>
        </Form>
      
    </> );
};

export default LoginForm;