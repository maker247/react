import React from 'react';
import {Typography, Container, Grid} from '@mui/material';
import BasicTable from './BasicTable';
import Form from './Form';

export default function App() {
    return (
        <Container maxWidth="lg">
            <Typography variant='h4' sx={{py:5, textAlign:'center'}}>User Info</Typography>
            <Form></Form>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{mb:5}}>
                    <Typography variant='h5' sx={{mb:2}}>View User</Typography>
                    <BasicTable></BasicTable>
                </Grid>
            </Grid>
        </Container>
    )
}

