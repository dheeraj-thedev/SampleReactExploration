import React, {Component} from "react"

import  {Container,Button, Table,Form} from "react-bootstrap"
// why import is there in {}
import {UserForm} from "../components/FormComponent"
// default export or named export


class ProfileData extends Component{

    render(){
        return(
            <Container>
                <UserForm></UserForm>
                
            </Container>
        )
    }

}

export default  ProfileData