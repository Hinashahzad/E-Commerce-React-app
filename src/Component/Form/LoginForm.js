import React from "react";
import { Form, Button, Segment } from 'semantic-ui-react';
import ActiveUser from "../Code/ActiveUser"

//This is class Component
class LoginForm extends React.Component
{
    constructor ( props )
    {
        super( props );
        this.state = {
            email: "",
            pass: "",
            verifyEmail: "",
            verifyPass: ""
        };
    }
    
    login = ( e ) =>
    {
       e.preventDefault();
       if (this.state.email === "" || this.state.pass === ""){
            alert ("Both fields are mandatory!");
            return;
        }
       console.log ( this.props.activeButton );
       this.props.user.map( ( user ) =>
       {
           if ( user.email === this.state.email && user.password === this.state.pass )
           {
               console.log( "VALID USER" );
               this.setState( { verifyEmail: user.email } );
               this.setState( { verifyPass: user.password } );
               return;
           }
       } );
       this.setState( { email: "", pass: ""} )
    }
    render(){
        return (
            <div>
                {
                    this.state.verifyEmail && this.state.verifyPass ? <ActiveUser /> :
                        
                    <Form onSubmit={ this.login } width="equal">
                        <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email'
                                type="email"
                                value={ this.state.email }
                                onChange={ ( e ) => this.setState( { email: e.target.value } ) } />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder='Password'
                                type="password"
                                name="password"
                                value={ this.state.pass }
                                onChange={ ( e ) => this.setState( { pass: e.target.value } ) } />
                        </Form.Field>
                        <Button type='submit'>Login</Button>
                        <Button>Cancel</Button>
                    </Form>
                }
                </div>
        );
    }
    
}

export default LoginForm;