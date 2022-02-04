import React from "react";
import {Button, Typography, Grid, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@mui/material';

export default function Form() {
    return (
        <form>
            <Typography variant='h5' sx={{mb:2}}>Add User</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField sx={{mb:3}} id="name" label="Name" variant="outlined" fullWidth />
                    <TextField sx={{mb:3}} id="age" label="Age" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} >
                    <Button variant='contained' sx={{mb:3}}>Press</Button>
                </Grid>
            </Grid>
        </form>
    )
}