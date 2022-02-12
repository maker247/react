import React, {useEffect, useState} from "react";
import {Button, Typography, Grid, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';

export default function Form(props) {
    console.log(props)
    const initialFormState = { id: null, name: '', age: '', gender: 'female' };

    const [form, setForm] = useState(initialFormState)
    
    useEffect(() => {
        if(props.user !== undefined) {
            setForm({...props.user})
        }
    }, [props.user])

    console.log(form)
    
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if (!form.name || !form.age) return
        
        !(props.status) ? props.storeUser(form) : props.updateUser(form.id, form)

        setForm(initialFormState)
    }

    return (
        <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField sx={{mb:3}} onChange={handleOnChange} value={form.name} name="name" id="name" label="Name" variant="outlined" fullWidth />   
                    <TextField sx={{mb:3}} onChange={handleOnChange} value={form.age} name="age" id="age" label="Age" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="gender"
                            value={form.gender}
                            onChange={handleOnChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} >
                    <Button variant='contained' sx={{mb:3}} type="submit">Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}