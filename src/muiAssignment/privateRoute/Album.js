import React, {useContext} from 'react';
import {Box, Typography, Container, Button, Card, CardActions, CardContent, CardMedia, Grid} from '@mui/material';
import { useParams } from "react-router-dom";
import context from "./Services/context";

export default function Album() {
  const {cards} = useContext(context)
  const params = useParams();
  const [card] = cards.filter((card) => (card.id === parseInt(params.id)));
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
            <Grid
                item
                xs={12}
                sm={4}
                md={6}
                sx={{
                    backgroundImage: `url(${card.image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: 450,
                }}
            />
            <Grid item xs={12} sm={6} md={6} sx={{display: 'flex', alignItems: 'center'}}>
                <div>
                    <Typography gutterBottom variant="h1">
                        {card.name}
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        {card.short_description}
                    </Typography>
                </div>
            </Grid>
          </Grid>
        </Container>
      </main>
  );
}