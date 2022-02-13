import React, {useContext} from 'react';
import {Box, Typography, Container, Button, Card, CardActions, CardContent, CardMedia, Grid} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import context from './Services/context';

export default function Home() {
    const {cards} = useContext(context)
    
    return (
        <main>
        {/* Hero unit */}
        <Box
            sx={{
            bgcolor: 'background.paper',
            // pt: 8,
            // pb: 6,
            }}
        >
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl">
            {/* End hero unit */}
            <Grid container spacing={4}>
            {cards.slice(0, 6).map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardMedia
                        component="img"
                        sx={{
                            height: 200
                        }}
                        image={card.image}
                        alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.name}
                        </Typography>
                        <Typography>
                            {card.short_description}
                        </Typography>
                        </CardContent>
                        <CardActions>
                        <Link to={`albums/${card.id}`} style={{textDecoration: 'none'}}>
                            <Button
                                sx={{ display: 'block', textDecoration: 'none' }}
                            >
                                LEARN MORE
                            </Button>
                        </Link>                    
                        </CardActions>
                    </Card>
                </Grid>
            ))}
            </Grid>
            <Link to={'albums'} style={{textDecoration: 'none'}}>
                <Button
                    sx={{ display: 'block', textDecoration: 'none', my: 3, mx: 'auto' }}
                >
                    VIEW MORE
                </Button>
            </Link>
        </Container>
        </main>
    );
}