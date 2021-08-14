
export default function Weclome (props){
    const {name,age,contact,adddess}=props //Destructred Props
    return <> <table border="12px">
        <thead>
            <tr>
                <th>Name</th><th>Age</th>  <th>Contact</th><th>Address</th>
            </tr>
        </thead>
        <tbody>
            <tr> <td>{name}</td><td>{age}</td><td>{contact}</td><td>{adddess}</td></tr>
        </tbody>
        <tfoot><td colSpan="4">THat is we havew</td></tfoot>
        </table>  
        </>
} 


// Virtual DOm 
// React Component and lifecyle
// States
//     diffs  
// Props