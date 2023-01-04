import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'


class RegistrationForm extends React.Component
{
    state = {
        firstName: "", 
      lastName: "",
      email: "",
        password:""
  };
   addUser = (e, props) => {
       e.preventDefault();
       if (this.state.firstName === "" || this.state.lastName === ""|| this.state.email === "" || this.state.password === ""){
       alert ("Both fields are mandatory!");
       return;
    }
     this.props.registerUser( this.state );
     console.log( this.props.activeButton );
       console.log(this.state);
       this.setState({firstName: "", lastName:"", email:"", password:""})
   }
  changeHandlerfirstName = ( event ) => { this.setState( { firstName: event.target.value } ); }
  changeHandlerlastName = ( event ) => { this.setState( { lastName: event.target.value } ); }
  changeHandlerEmail = ( event ) => { this.setState( { email: event.target.value } ); }
  changeHandlerPassword = ( event ) => { this.setState( { password: event.target.value } ); }
  //On Form submit 
  
  render(){
    return (
      <Segment>
        <Segment><h2> Create Customer Account</h2>
          </Segment>
    <Form onSubmit={this.addUser}>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' value={ this.state.firstName} onChange={this.changeHandlerfirstName} />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' value={ this.state.lastName} onChange={this.changeHandlerlastName} />
      </Form.Field>
      <Form.Field>
        <label>Email</label>
        <input placeholder='email' type="email" value={ this.state.email} onChange={this.changeHandlerEmail}/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='password' type="password" value={ this.state.password} onChange={this.changeHandlerPassword}/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
      <Button type='submit'>Cancel</Button>
        </Form>
        </Segment>
  
      )
    }
};
export default RegistrationForm;