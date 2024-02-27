import React from 'react'
import '../AdminPanal/About.css'
import Box from '@mui/material/Box';
import Table from 'react-bootstrap/Table';
import Typography from '@mui/material/Typography';
import PermanentDrawerLeft from './Drawers'


function About() {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "444vw", height: "100vh", position: 'relative', marginLeft: 30 }}>
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
            </Box>
        </>
    )
}

export default About