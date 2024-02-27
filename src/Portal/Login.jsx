import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BasicModal from './Modal'
// import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { signInWithEmailAndPassword } from "firebase/auth";
// import { firestore } from '../officeProjectConfig';
import { auth } from '../officeProjectConfig'

function Login() {
    const [RegistrationInput, setRegistrationInput] = useState(
        {
            allottedId: "",
            email: "",
            password: "",
        }
    )

    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setRegistrationInput({ ...RegistrationInput, [name]: value });
        console.log({ ...RegistrationInput, [name]: value })
    }
    // const dbref = collection(firestore, "login");

    const sudmitData = (event) => {
        event.preventDefault();
        if (RegistrationInput.email === "kazim222@gmail.com") {
            navigate('/Drawers')
        }
        if (!RegistrationInput.firstName || !RegistrationInput.lastName || !RegistrationInput.allottedId || !RegistrationInput.email || !RegistrationInput.password || !RegistrationInput.data) {
            setMessage('Fill Your Fields')
        }
        else {
            signInWithEmailAndPassword(auth, RegistrationInput.email, RegistrationInput.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                });
        }
        // {
        //     const matchAllottedId = query(dbref, where('AllottedId', '==', RegistrationInput.allottedId))
        //     try {
        //         const snapshot = await getDocs(matchAllottedId)
        //         const allottedidMatchingArray = snapshot.docs.map((doc) => doc.data())
        //         if (allottedidMatchingArray.length > 0) {
        //             alert("This AllotttedId Address Already exsist")
        //         }
        //         else {
        //             await addDoc(dbref, { allottedId: RegistrationInput.allottedId, password: RegistrationInput.password })
        //         }
        //     }
        //     catch (error) {
        //         alert(error)
        //     }
        // }
        console.log(RegistrationInput)
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <h1>Login Form</h1>
                <div className='login__form'>
                    <input type="number" placeholder='Company Allotted Id' name='allottedId' value={RegistrationInput.allottedId} onChange={postUserData} />
                    <input type="email" placeholder='Enter Your Email' name='email' value={RegistrationInput.email} onChange={postUserData} />
                    <input type="password" placeholder='Enter Your Password' name='password' value={RegistrationInput.password} onChange={postUserData} />
                    <p>Already Have An Account <Link to='/portal'> Registration</Link></p>
                    <p>{message}</p>
                    <button onClick={sudmitData}><BasicModal /></button>
                </div>
            </div>
        </div>
    )
}

export default Login