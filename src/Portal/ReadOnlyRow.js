import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function ReadOnlyRow({ contact, index, handleEditClick, handleDeleteClick }) {
    const [salary, setSalary] = useState(0);
    const navigate = useNavigate()

    // const userlogout = () => {
    //     localStorage.removeItem("book")
    //     navigate("/login");
    // }

    // const handleEditClick = (val) => {
    //     console.log(val)
    //     // setEditValue(val)
    //     // setEditBox(true)
    //     // navigate('/editpage')
    //     // console.log(editValue)
    // }

    return (
        <tr key={index}>
            <td>{contact.firstName}</td>
            <td>{contact.allottedId}</td>
            <td>{contact.email}</td>
            <td className='action'><button onClick={(event) => handleEditClick(event, contact)}><i className="ri-pencil-line"></i></button><button onClick={() => handleDeleteClick(contact.index)}><i className="ri-delete-bin-6-line"></i></button></td>
            {/* <td>{index}</td> */}
        </tr>
    )
}

export default ReadOnlyRow