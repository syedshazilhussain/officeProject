import React from 'react'
import UseForm from './UseForm'

function EditPage() {
    const { inputValue, handleInputChange, resetForm } = UseForm({
        name: '',
        allottedId: '',
        email: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
        resetForm()
    }
    return (
        <div className='edit__page'>
            <div className='edit__container'>
                <h3> Edit Employment</h3>
                <input type="text" placeholder='Enter Your Name' name="name" value={inputValue.name} onChange={handleInputChange} id="" />
                <input type="number" placeholder='Enter Your Allotted ID' name="allottedId" value={inputValue.allottedId} onChange={handleInputChange} id="" />
                <input type="email" placeholder='Enter Your Email' name="email" value={inputValue.email} onChange={handleInputChange} id="" />
                <button onClick={handleSubmit}>Add Employment</button>
            </div>
        </div>
    )
}

export default EditPage