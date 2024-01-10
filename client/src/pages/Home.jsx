import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, Typography, Grid, Rating, Tooltip, Fab } from '@mui/material';
import { Stack } from '@mui/system';

import BlankCard from './blankcard';
import { featuredProducts, specialOffers, discounts } from './products.json';

const renderProductCard = (product) => (
  <Grid item sm={12} md={4} lg={3} key={product.id}>
    <BlankCard>
      <Typography component={Link} to="/">
        <img src={product.image} alt="img" width="100%" />
      </Typography>
      <Tooltip title="Add To Cart">
        <Fab size="small" color="primary" sx={{ bottom: '75px', right: '15px', position: 'absolute' }}>
          {/* <IconBasket size="16" /> */}
        </Fab>
      </Tooltip>
      <CardContent sx={{ p: 3, pt: 2 }}>
        <Typography variant="h6">{product.name}</Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
          <Stack direction="row" alignItems="center">
            <Typography variant="h6">${product.price}</Typography>
            <Typography color="textSecondary" ml={1} sx={{ textDecoration: 'line-through' }}>
              ${product.originalprice}
            </Typography>
            
          </Stack>
          <Rating name="read-only" size="small" value={product.rating} readOnly />
        </Stack>
      </CardContent>
    </BlankCard>
  </Grid>
);

export const Home = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={3}>
        {featuredProducts.map((product) => renderProductCard(product))}
      </Grid>

      <Typography variant="h4" gutterBottom mt={3}>
        Special Offers
      </Typography>
      <Grid container spacing={3}>
        {specialOffers.map((offer) => renderProductCard(offer))}
      </Grid>

      <Typography variant="h4" gutterBottom mt={3}>
        Discounts
      </Typography>
      <Grid container spacing={3}>
        {discounts.map((discount) => renderProductCard(discount))}
      </Grid>
    </div>
  );
};
