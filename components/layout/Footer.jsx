'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
} from '@mui/material';

const FOOTER_COLUMNS = [
  {
    id: 1,
    title: 'Shop',
    links: ['New Arrivals', 'Best Sellers', 'Sale'],
  },
  {
    id: 2,
    title: 'Support',
    links: ['Contact Us', 'Shipping Info', 'Returns'],
  },
  {
    id: 3,
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  },
];

const SOCIAL_LINKS = ['Instagram', 'Twitter', 'Facebook'];

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #2a2a2a', py: 6 }}>
      <Container maxWidth="lg">
        {/* Footer Links Grid */}
        <Grid container spacing={4} sx={{ mb: 4 }}>
          {FOOTER_COLUMNS.map((column) => (
            <Grid size={{xs: 12, sm: 6, md: 4}} key={column.id}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1.5, color: '#ffffff', fontWeight: 600 }}
              >
                {column.title}
              </Typography>
              {column.links.map((link) => (
                <Typography
                  key={link}
                  variant="body2"
                  sx={{
                    color: '#b0b0b0',
                    mb: 0.8,
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: '#E8D5C4' },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            borderTop: '1px solid #2a2a2a',
            pt: 4,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          {/* Copyright */}
          <Typography variant="body2" sx={{ color: '#666666' }}>
            © {new Date().getFullYear()} Luxora. All rights reserved.
          </Typography>

          {/* Social Links */}
          <Stack direction="row" spacing={2}>
            {SOCIAL_LINKS.map((social) => (
              <Typography
                key={social}
                variant="body2"
                sx={{
                  color: '#666666',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#E8D5C4' },
                }}
              >
                {social}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}