import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../Stores/action/UserAction';
import { v1 as uuidv1 } from 'uuid';
import LocalStorage from './LocalStorage';

const RegistrationForm = () =>
{ 
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
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
          
            { ...register( 'firstname', //<--- This is name="firstname"
              {required:"First Name is required"} ) } />
        <p color="red">{errors?.firstname && (
        <span color="red">{errors?.firstname?.message}</span>)}</p>
        </Form.Field>
        <Form.Field>
        <label>Last Name</label>
          <input type="text"
            name="lastname"
            autoComplete="off"
            placeholder='LastName'
            { ...register( 'lastname',//<--- This is name="lastname"
              {
                required:"Last Name is required"
            })}/>
        </Form.Field>
        <p>{errors?.lastname && (
        <span color="red">{errors?.lastname?.message}</span>)}</p>
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
        <p>{errors?.email && (
        <span color="red">{errors?.email?.message}</span>)}</p>
        <Form.Field>
        <label>password</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            placeholder='Password'
            { ...register( 'password', //<--- This is name="password"
              {
                required: "Password is Required",
                maxLength:{value: 10, message:"Password cannot exceed more than 10 characters"},
                minLength: { value: 4, message: "Password must be more than four characters" }
              } ) } />
      </Form.Field>
      <p>{errors?.password && (
        <span color="red">{errors?.password?.message}</span>)}</p>
      <Button type='submit'>Submit</Button>
    </Form>
    </>
   );
};

export default RegistrationForm;