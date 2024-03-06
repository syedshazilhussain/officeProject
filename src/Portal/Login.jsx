import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid';
import BasicModal from './Modal'
// import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { signInWithEmailAndPassword } from "firebase/auth";
// import { firestore } from '../officeProjectConfig';
import { auth } from '../officeProjectConfig'

const getDataFromLS = () => {
    const data = window.localStorage.getItem('book');
    if(data) {
        return JSON.parse(data)
    }else {
        return []
    }
}

function Login() {
    const [RegistrationInput, setRegistrationInput] = useState(
        {
            firstName: "",
            allottedId: "",
            email: "",
            password: "",
        }
    )

    const [books, setBooks] = useState(getDataFromLS)
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
            navigate('/inbox')
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
        let book = {
            id: nanoid(),
            firstName: RegistrationInput.firstName,
            allottedId: RegistrationInput.allottedId,
            email: RegistrationInput.email,
            password: RegistrationInput.password,
        }
        // setBooks([...books, book])
        const newContact = [...books, book]
        setBooks(newContact)
        console.log(books)
        const { allottedId, email, password } = RegistrationInput;
        if (allottedId === '') {
            alert('Allotted Id Feild is Required')
        } else if (email === '') {
            alert('Email Feild is Required')
        } else if (!email.includes('@')) {
            alert('Plz Enter Valid Email Address')
        } else if (password === '') {
            alert('Password Field is Required')
        } else if (password.length < 5) {
            alert('Password Length Greater Five')
        } else {
            if (books && books.length) {
                // console.log(userData)
                // const userLogin = userData.filter((el, k) => {
                //     return el.allottedId === allottedId && el.email === email && el.password === password
                // });
                if (book.length === 0) {
                    alert('Invalid Details')
                } else {
                    console.log('use login succesfully')
                    // window.localStorage.setItem('user__login', JSON.stringify(userLogin))
                    setMessage(false)
                    if (email === "kazim222@gmail.com") {
                        navigate('/about')
                    }
                }
            }
        }
        window.localStorage.setItem('book', JSON.stringify(books));
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <h1>Login Form</h1>
                <div className='login__form'>
                    <input type="text" placeholder='Enter Your Name' name='firstName' value={RegistrationInput.firstName} onChange={postUserData} />
                    <input type="number" placeholder='Company Allotted Id' name='allottedId' value={RegistrationInput.allottedId} onChange={postUserData} />
                    <input type="email" placeholder='Enter Your Email' name='email' value={RegistrationInput.email} onChange={postUserData} />
                    <input type="password" placeholder='Enter Your Password' name='password' value={RegistrationInput.password} onChange={postUserData} />
                    <p>Already Have An Account <Link to='/portal'> Registration</Link></p>
                    <p className='message'>{message}</p>
                    <button onClick={sudmitData}><BasicModal /></button>
                </div>
            </div>
        </div>
    )
}

export default Login