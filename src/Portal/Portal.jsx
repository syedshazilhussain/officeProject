import React, { useState, useRef, useEffect } from 'react'
import '../Portal/Portal.css'
import BasicModal from './Modal'
// import { firestore } from '../officeProjectConfig'
import { auth } from '../officeProjectConfig'
// import { collection, addDoc, getDocs, where, query } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';


const getDataFromLS = () => {
    const data = window.localStorage.getItem('book');
    if(data) {
        return JSON.parse(data)
    }else {
        return []
    }
}

function Portal() {
    const [RegistrationInput, setRegistrationInput] = useState(
        {
            firstName: "",
            lastName: "",
            allottedId: "",
            email: "",
            password: "",
            data: "",
        }
    )
    const [dataInp, setDataInp] = useState(getDataFromLS)
    const firstName = useRef();
    const allottedId = useRef();
    const email = useRef();
    const password = useRef();
    const data = useRef();
    const [message, setMessage] = useState('')
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setRegistrationInput({ ...RegistrationInput, [name]: value });
        console.log(RegistrationInput)
    }
    // const dbref = collection(firestore, "Auth");
    
    const sudmitData = (event) => {
        event.preventDefault();
        if(RegistrationInput.email === "kazim222@gmail.com") {
            navigate('/inbox')
        }
        if (!RegistrationInput.firstName || !RegistrationInput.lastName || !RegistrationInput.allottedId || !RegistrationInput.email || !RegistrationInput.password || !RegistrationInput.data) {
            setMessage('Fill Your Fields')
        }
        else {
            createUserWithEmailAndPassword(auth, RegistrationInput.email, RegistrationInput.password)
            .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: RegistrationInput.firstName
                      }).then((res) => {
                        // Profile updated!
                        console.log(res)
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        console.log(error)
                        // ...
                    });
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    console.log(errorCode)
                    // ..
                });

            }
            var books1 = {
                firstName: RegistrationInput.firstName,
                allottedId: RegistrationInput.allottedId,
                email: RegistrationInput.email,
                password: RegistrationInput.password,
                data: RegistrationInput.data,
            }
            setDataInp([...dataInp, books1])
        console.log(books1)
        // {
        //     const matchAllottedId = query(dbref, where('AllottedId', '==', RegistrationInput.allottedId))
        //     try {
        //         const snapshot = await getDocs(matchAllottedId)
        //         const allottedidMatchingArray = snapshot.docs.map((doc) => doc.data())
        //         if (allottedidMatchingArray.length > 0) {
            //             alert("This AllotttedId Address Already exsist")
        //         }
        //         else {
            //             await addDoc(dbref, { firstName: RegistrationInput.firstName, lastName: RegistrationInput.lastName, allottedId: RegistrationInput.allottedId, password: RegistrationInput.password, date: RegistrationInput.data })
            //         }
            //     }
            //     catch (error) {
                //         alert(error)
                //     }
                // }
        const {firstName, allottedId, email, password, data } = RegistrationInput
        if(firstName === '') {
            alert('Name Feild is Required')
        }else if (allottedId === '') {
            alert('Allotted Id Feild is Required')
        }else if (email === '') {
            alert('Email Feild is Required')
        }else if(!email.includes('@')) {
            alert('Plz Enter Valid Email Address')
        }else if (password === '') {
            alert('Password Field is Required')
        }else if(password.length < 5) {
            alert('Password Length Greater Five')
        }else if (data === '') {
            alert('Password Field is Required')
        }
        else {
            console.log('data added succesfully')
            setModal(!modal)
            setMessage(false)
            navigate('/login')
        }
        window.localStorage.setItem('books', JSON.stringify(dataInp));
    }
    return (
        <>
            <div className='portal'>
                <div className='protal__container'>
                    <h1>Registration</h1>
                    <div className='portal__form'>
                        <input type="text" placeholder='Enter Your First Name' name='firstName' value={RegistrationInput.firstName} onChange={postUserData} ref={firstName} />
                        <input type="text" placeholder='Enter Your Last Name' name='lastName' value={RegistrationInput.lastName} onChange={postUserData} />
                        <input type="number" placeholder='Company Allotted Id' name='allottedId' value={RegistrationInput.allottedId} onChange={postUserData} ref={allottedId} />
                        <input type="email" placeholder='Enter Your email' name='email' value={RegistrationInput.email} onChange={postUserData} ref={email} />
                        <input type="password" placeholder='Enter Your Password' name='password' value={RegistrationInput.password} onChange={postUserData} ref={password} />
                        <input type="date" placeholder='Select Your Date' name='data' value={RegistrationInput.data} onChange={postUserData} ref={data} />
                        <p>Already Have An Account <Link to='/login'> Login</Link></p>
                        <p className='message'>{message}</p>
                        <button onClick={sudmitData}>
                            {modal && modal ? <BasicModal/> : <h1>false condition</h1>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portal