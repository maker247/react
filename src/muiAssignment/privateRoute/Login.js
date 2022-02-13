import React, {useEffect, useState} from 'react';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider} from '@mui/material';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import CryptoJS from 'crypto-js';
import { textAlign } from '@mui/system';

const theme = createTheme();

export default function SignIn() {
    const [form, setForm] = useState({email: '', password: ''})
    const [status, setStatus] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/');
        }
    }, [])

    const onHandleChange = (event, f) => {
        const {value} = event.target
        let _form = {...form}
        _form[f] = value
        setForm(_form)
    }

    const onLogin = (event) => {
        const data = new FormData(event.currentTarget);
        event.preventDefault();
        const secret = localStorage.getItem('secret');
        if(!secret) {
            navigate('/register')
        } else {
            const auth = `${data.get('email')}${data.get('password')}`;
        
            var bytes  = CryptoJS.AES.decrypt(secret, 'secret');
            var plaintext = bytes.toString(CryptoJS.enc.Utf8);

            if(auth === plaintext) {
                localStorage.clear();
                localStorage.setItem('token', secret)
                navigate('/')
            } else {
                setStatus(true)
                navigate('/login')
            }
        }
    
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
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
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <Box component="form" onSubmit={onLogin} noValidate sx={{ mt: 1 }}>
                {status ? 
                    <div style={{color:'red'}}>
                        <small>Wrong Credential!</small>
                    </div>:
                    null
                }
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
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    type="password"
                    value={form.password} 
                    onChange={(event) => onHandleChange(event, 'password')}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                    </Grid>
                    <Grid item>
                    <RouterLink to="/register">
                        <small>{"Don't have an account? Sign Up"}</small>
                    </RouterLink>
                    </Grid>
                </Grid>
                </Box>
            </Box>
            </Container>
        </ThemeProvider>
    );
}

