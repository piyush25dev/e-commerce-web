'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
} from '@mui/material';
import {
  LocalShipping as ShippingIcon,
  Security as SecurityIcon,
  Cached as ReturnIcon,
} from '@mui/icons-material';
import BenefitCard from '../../Custom/BenefitCard';

const BENEFITS = [
  {
    id: 1,
    icon: <ShippingIcon sx={{ fontSize: '2.5rem', color: '#E8D5C4' }} />,
    title: 'Free Shipping',
    description: 'On orders over $100 worldwide',
  },
  {
    id: 2,
    icon: <SecurityIcon sx={{ fontSize: '2.5rem', color: '#E8D5C4' }} />,
    title: 'Secure Payment',
    description: 'Protected with SSL encryption',
  },
  {
    id: 3,
    icon: <ReturnIcon sx={{ fontSize: '2.5rem', color: '#E8D5C4' }} />,
    title: '30-Day Returns',
    description: 'Hassle-free return policy',
  },
];

export default function BenefitsSection({ benefits = BENEFITS }) {
  return (
    <Box sx={{ py: 10, backgroundColor: '#1a1a1a' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {benefits.map((benefit, idx) => (
            <Grid size={{xs: 12, sm: 6, md: 4}} key={benefit.id}>
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                delay={idx * 0.1}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}