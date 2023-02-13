import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import LocalStorage from './LocalStorage';
import { ActiveUser } from "../Stores/action/UserAction";
import {useNavigate} from 'react-router-dom';
import { LoginSchema } from "../Validations/Validation";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginForm = () =>
{
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(LoginSchema)
    });
  const activeUser = useSelector( ( state ) => state.activeUser );
  const registerUser = useSelector( ( state ) => state.allUser.user );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  


    const onSubmit = (data) =>
    {
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
            { ...register( 'email')}/> {/*//<--- This is name="email"*/}
          {errors.email &&(<span style={ {
                        color:"red"} } >{errors.email.message}</span>) }    
        </Form.Field>
            
           <Form.Field>
        <label>password</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder='Password'
            { ...register( 'password' ) } />
          {errors.password &&(<span style={ {
                        color:"red"} } >{errors.password.message}</span>) }    
      </Form.Field>
      
            <Button type='submit'>Login</Button>
        </Form>
      
    </> );
};

export default LoginForm;