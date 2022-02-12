import React, {useState, useRef} from 'react';
import {Typography, Container, Grid, Box, Button} from '@mui/material';
import BasicTable from './BasicTable';
import Form from './Form';

const initialData = [
        {id: 1, name: 'user1', age: 21, gender: 'male'},
        {id: 2, name: 'user2', age: 22, gender: 'female'},
        {id: 3, name: 'user3', age: 23, gender: 'male'}
];

export default function App() {
    const [users, setUsers] = useState(initialData);

    const [editStatus, setEditStatus] = useState(false)

    const [editForm, setEditForm] = useState({id: null, name: '', age: '', gender: 'female'})

    const changeEditStatus = (status, user) => {
        setEditStatus(status);
        if(user) {
            setEditForm({...editForm, ...user})
        }
    }

    const storeUser = (user) => {
        user.id = users.length + 1;
        setUsers([...users, user])
    }

    const updateUser = (id, updatedUser) => {
        setEditStatus(false)
      
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
    }

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }
    
    return (
        <Container maxWidth="lg">
            <Typography variant='h4' sx={{py:5, textAlign:'center'}}>User Info</Typography>
            {editStatus ?
                <>
                <Typography variant='h5' sx={{mb:2}}>Edit User</Typography>
                <Form updateUser={updateUser} user={editForm} status={editStatus}></Form>
                </>
                :
                <>
                <Typography variant='h5' sx={{mb:2}}>Create User</Typography>
                <Form storeUser={storeUser} status={editStatus}></Form>
                </>
            }   
            <Grid container spacing={2} sx={{marginTop: '1rem'}}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant='h5' sx={{mb:2}}>View User</Typography>
                    <Button variant='contained' sx={{mb:3}} onClick={() => changeEditStatus(false, null)} type="button">Create</Button>
                </Grid>
                <Grid item xs={12} sx={{mb:5}}>
                    <BasicTable onDelete={deleteUser} changeEditStatus={changeEditStatus} users = {users}></BasicTable>
                </Grid>
            </Grid>
        </Container>
    )
}

