
import { useState } from "react";
import  {Container,Button,Form, Table} from "react-bootstrap"

export const  UserForm=()=>{

    const [userData,setUserData] = useState({})
   

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        
    }

    const handleOnChange =(e)=>{
      
        switch (e.target.name) {
            case "firstName":
              //  firstName:e.target.name;
              setUserData({firstName:e.target.value});
                break;
            case "lastName":
                
              setUserData({lastName:e.target.value});
                break;
            case "contactNumber":
                setUserData({contactNumber:e.target.value});
                    break;
            case "emailAddress":
                setUserData({emailAddress:e.target.value});
                break;
        
            default:
                console.log("Error Not a valid handeler")
                break;
        }
    }


    return(
        <div>



             <Form onSubmit={handleOnSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control 
    onChange={handleOnChange}
        type="text"
     id="firstName"
      name="firstName"
       placeholder="Enter first name" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" onChange={handleOnChange} id="lastName" name="lastName" placeholder="Enter last Nname" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contact Number</Form.Label>
    <Form.Control type="number" onChange={handleOnChange} id="contactNumber" name="contactNumber" placeholder="Enter contact number" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" onChange={handleOnChange} id="emailAddess" name="emailAddress"
     placeholder="Enter email id" />
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

<Container>

                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>1</td>
      <td>{userData.firstName}</td>
      <td>{userData.lastName}</td>
      <td>{userData.contactNumber}</td>
      <td>{userData.emailAddress}</td>
    </tr>
   
   
  </tbody>
</Table>
                </Container>
        </div>
    )
} 

