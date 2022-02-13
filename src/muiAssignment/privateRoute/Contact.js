import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider} from '@mui/material';
import ImportContactsOutlined from '@material-ui/icons/ImportContactsOutlined';

const theme = createTheme();

export default function Contact() {
    const [form, setForm] = useState({email: '', password: ''})
    
    const onHandleChange = (event, f) => {
        const {value} = event.target
        let _form = {...form}
        _form[f] = value
        setForm(_form)
    }

    const onLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('token', `${form.email}${form.password}`)
        
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xl">
                <CssBaseline />
                <Box
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <ImportContactsOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        CONTACT US
                    </Typography>
                    <Box component="form" onSubmit={onLogin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            type="text"
                            value={form.name} 
                            onChange={(event) => onHandleChange(event, 'name')}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            type="email"
                            value={form.email} 
                            onChange={(event) => onHandleChange(event, 'email')}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="message"
                            multiline
                            rows={4}
                            label="Message"
                            name="message"
                            autoComplete="message"
                            autoFocus
                            type="text"
                            value={form.message} 
                            onChange={(event) => onHandleChange(event, 'message')}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

