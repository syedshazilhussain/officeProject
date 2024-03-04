import React, { useEffect, useState } from 'react'
import '../AdminPanal/About.css'
import Box from '@mui/material/Box';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PermanentDrawerLeft from './Drawers'
import { useNavigate } from 'react-router-dom';
import Error from './Error';


function About() {
    const [loginData, setLoginData] = useState([]);
    const [editValue, setEditValue] = useState(null);
    const [editBox, setEditBox] = useState(false);
    const [input, setInput] = useState('');
    const [show, setShow] = useState(false);
    var todayDate = new Date().toISOString().slice(0, 10);
    const getUser = window.localStorage.getItem('book')
    const user = JSON.parse(getUser)
    const navigate = useNavigate()
    console.log(user)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        if (getUser && getUser.length) {
            setLoginData(user)
            // loginData.push(user)
            console.log(user)
            console.log(loginData)

            const userBirth = loginData.map((el, k) => {
                return el.data === todayDate
            });

            if (userBirth) {
                setTimeout(() => {
                    console.log('ok')
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = () => {
        localStorage.removeItem("book")
        navigate("/login");
    }

    const edit = (val) => {
        console.log(val)
        setEditValue(val)
        // setEditBox(true)
        // navigate('/editpage')
        console.log(editValue)
    }

    const searchText = (event) => {
        setInput(event.target.value)
    }
    let datasearch = loginData.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(input.toString().toLowerCase())
        )
    });

    useEffect(() => {
        Birthday();
    }, [])
    return (
        <>
            {loginData.length === 0 ? <Error /> :
                <>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "444vw", height: "100vh", position: 'relative', marginLeft: 30 }}>
                        <PermanentDrawerLeft />
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, bgcolor: 'white', color: 'black', p: 3, height: '100vh', width: '100vw', position: 'relative' }}
                        >
                            <div className='about'>
                                <div className='emploment__inner'>
                                    <div className='emploment__content'>
                                        <h1>Employement</h1>
                                        <h1>10</h1>
                                    </div>
                                    <input type="number" placeholder='Enter Your Emploment' value={input} onChange={searchText.bind(this)} name="" id="" />
                                </div>
                                <Table striped bordered hover className='user__table'>
                                    <thead>
                                        <tr>
                                            <th>First Name</th>
                                            <th>Allotted Id</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            datasearch.map((el, k) => {
                                                // let { firstName } = el
                                                return (
                                                    <>
                                                        <tr key={k}>
                                                            <td>{el.firstName}</td>
                                                            <td>{el.allottedId}</td>
                                                            <td>{el.email}</td>
                                                            <td className='action'><button onClick={() => edit(k)}><i className="ri-pencil-line"></i></button><button onClick={userlogout}><i className="ri-delete-bin-6-line"></i></button></td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </Box>
                    </Box>
                    {
                        loginData.data === todayDate ?
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            : null
                    }
                </>
            }
            {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "444vw", height: "100vh", position: 'relative', marginLeft: 30 }}>
                <PermanentDrawerLeft />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'white', color: 'black', p: 3, height: '100vh', width: '100vw', position: 'relative' }}
                >
                    <div className='about'>
                        <h1>Employement</h1>
                        <h1>10</h1>
                        <Table striped bordered hover className='user__table'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Email</th>
                                    <th>Allotted Id</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>e d</td>

                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td >Larry</td>
                                    <td>@twitter</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Box>
            </Box> */}
        </>
    )
}

export default About