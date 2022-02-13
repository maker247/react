import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider} from '@mui/material';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const theme = createTheme();

export default function SignIn() {
    const [form, setForm] = useState({email: '', password: ''})
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
        event.preventDefault();
        localStorage.setItem('token', `${form.email}${form.password}`)
        navigate('/')
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
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                    </Grid>
                </Grid>
                </Box>
            </Box>
            </Container>
        </ThemeProvider>
    );
}

