import React from 'react'

const EditTableRow = ({ editFormData, handleEditFormChange, handleEditCancel }) => {
    console.log(editFormData.email)
    return (
        <tr>
            <td>
                <input className='editInp' type='text' required="required" placeholder='Enter a Name' value={editFormData.name} name='name' onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input className='editInp' type='number' required="required" placeholder='Enter a Allotted ID' value={editFormData.allottedId} name='allottedId' onChange={handleEditFormChange}></input>
            </td>
            <td>
                <input className='editInp' type='email' required="required" placeholder='Enter a Email' value={editFormData.email} name='email' onChange={handleEditFormChange}></input>
            </td>
            <td className='btn btn d-flex gap-4 justify-content-center align-item-center button'>
                <button className='check' type='submit'><i className="ri-check-line"></i></button>
                <button className='check' type='button' onClick={handleEditCancel}><i className="ri-close-fill"></i></button>
            </td>
        </tr>
    )
}

export default EditTableRow