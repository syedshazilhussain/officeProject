import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className='error d-flex flex-column justify-content-lg-center align-item-center'>
                <h4>404 Error ! Page Not Found 😭</h4>
                <button className='btn btn-primary' onClick={() => navigate("/portal")}>Redirect Login Page</button>
            </div>
        </div>
    )
}

export default Error