import React, { useEffect, useState } from 'react'
import '../AdminPanal/Inbox.css'
import Box from '@mui/material/Box';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PermanentDrawerLeft from './Drawers'
import { Table } from 'react-bootstrap';

function Inbox() {
    const [show, setShow] = useState(false);
    const [loginData, setLoginData] = useState([]);
    var todayDate = new Date().toISOString().slice(0, 10);
    const getUser = window.localStorage.getItem('book')
    const user = JSON.parse(getUser)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        if (getUser && getUser.length) {
            setLoginData(user)
            // console.log(user)

            const userBirth = loginData.map((el, k) => {
                return el.data === todayDate
            });

            // if (userBirth) {
            //     setTimeout(() => {
            //         console.log('ok')
            //         handleShow();
            //     }, 3000)
            // }
        }
    }
    useEffect(() => {
        // handleShow()
        Birthday()
    }, [])
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "444vw", height: "100vh", position: 'relative', marginLeft: 30 }}>
                <PermanentDrawerLeft />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'white', color: 'black', p: 3, height: '100vh', width: '100vw', position: 'relative' }}
                >

                    <div className='Inbox'>
                        <h1>Dashboard</h1>
                        <div className='inbox__container'>
                            <div className='inbox__inner'>
                                <div className='users__icon'>
                                    <i className="ri-user-3-line"></i>
                                </div>
                                <div className='users__content'>
                                    <h6>Users</h6>
                                    <h4>10</h4>
                                </div>
                            </div>
                            <div className='inbox__inner'>
                                <div className='inventory__icon'>
                                    <i className="ri-shopping-bag-line"></i>
                                </div>
                                <div className='users__content'>
                                    <h6>Inventory</h6>
                                    <h4>20</h4>
                                </div>
                            </div>
                            <div className='inbox__inner'>
                                <div className='order__icon'>
                                    <i className="ri-shopping-cart-2-line"></i>
                                </div>
                                <div className='users__content'>
                                    <h6>Order</h6>
                                    <h4>30</h4>
                                </div>
                            </div>
                            <div className='inbox__inner'>
                                <div className='revenue__icon'>
                                    <i className="ri-money-dollar-circle-line"></i>
                                </div>
                                <div className='users__content'>
                                    <h6>Revenue</h6>
                                    <h4>30</h4>
                                </div>
                            </div>
                        </div>
                        <div className='Users'>
                            <h3>Recent Users</h3>
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
                                        loginData.map((el, k) => {
                                            return (
                                                <tr key={k}>
                                                    <td>{el.firstName}</td>
                                                    <td>{el.allottedId}</td>
                                                    <td>{el.email}</td>
                                                    <td className='action'><button><i className="ri-pencil-line"></i></button><button><i className="ri-delete-bin-6-line"></i></button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Box>
            </Box >
            <Modal show={show} onHide={handleClose} >
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
        </>
    )
}

export default Inbox