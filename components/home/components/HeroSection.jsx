'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
      }}
    >
      {/* Decorative Background Element */}
      <Box
        sx={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(232, 213, 196, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          top: '-200px',
          right: '-100px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid size={{xs: 12, md: 6}}>
            <MotionBox
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <MotionTypography
                variant="h1"
                variants={itemVariants}
                sx={{
                  color: '#ffffff',
                  mb: 2,
                  maxWidth: '500px',
                }}
              >
                Curated luxury for the discerning.
              </MotionTypography>

              <MotionBox variants={itemVariants} sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#b0b0b0',
                    maxWidth: '450px',
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  Discover our handpicked collection of premium products designed for those
                  who appreciate quality, simplicity, and timeless elegance.
                </Typography>
              </MotionBox>

              {/* CTA Buttons */}
              <MotionBox
                variants={itemVariants}
                sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                  }}
                  onClick={() => {
                    document.querySelector('[data-section="products"]')?.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }}
                >
                  Explore Collection
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                  }}
                >
                  Learn More
                </Button>
              </MotionBox>
            </MotionBox>
          </Grid>

          {/* Right Decoration */}
          <Grid size={{xs: 12, md: 6}}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Box
                sx={{
                  fontSize: '200px',
                  textAlign: 'center',
                  filter: 'drop-shadow(0 40px 80px rgba(232, 213, 196, 0.15))',
                }}
              >
                ✨
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}