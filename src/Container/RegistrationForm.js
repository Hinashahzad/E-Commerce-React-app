import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../Stores/action/UserAction';
import { v1 as uuidv1 } from 'uuid';
import LocalStorage from './LocalStorage';
import { yupResolver } from "@hookform/resolvers/yup";
import { UserRegistrationSchema } from "../Validations/Validation";

const RegistrationForm = () =>
{ 
  const { register, handleSubmit, formState: { errors }, reset } = useForm(
    { resolver: yupResolver( UserRegistrationSchema ) } );
  const users= useSelector((state)=>state.allUser.user) // Access Global state(user) from Redux store
  const dispatch = useDispatch(); //Send data to Redux store
  const LOCAL_STORAGE_KEY = "users"; //Manage Local Storage
  // Function to perform Global states in REDUX store and add the id with respect to each user
  
  const onSubmit = ( data ) =>
  {
    dispatch( UserAction( [ ...users, { id: uuidv1(), ...data } ] ) );
    localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify( [ ...users, { id: uuidv1(), ...data } ] ) )
    reset();
   }
  return ( <>
    <LocalStorage />
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>First Name</label>
          <input
            type="text"
            name="firstname"
            autoComplete="off"
            placeholder='FirstName'
          
            { ...register( 'firstname' ) } />
             {errors.firstname &&(<span style={ {
                        color:"red"} } >{errors.firstname.message}</span>) }   
        </Form.Field>
        <Form.Field>
        <label>Last Name</label>
          <input type="text"
            name="lastname"
            autoComplete="off"
            placeholder='LastName'
          { ...register( 'lastname' ) } />
         {errors.lastname &&(<span style={ {
                        color:"red"} } >{errors.lastname.message}</span>) }   
        </Form.Field>
       
        <Form.Field>
        <label>Email: </label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder='Email'
          { ...register( 'email' ) } />
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
      
      <Button type='submit'>Submit</Button>
    </Form>
    </>
   );
};

export default RegistrationForm;