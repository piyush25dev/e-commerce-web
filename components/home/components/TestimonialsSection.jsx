'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { motion } from 'framer-motion';
import TestimonialCard from '../../Custom/TestimonialCard';

const MotionBox = motion.create(Box);

const SAMPLE_TESTIMONIALS = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Designer',
    text: 'The quality and attention to detail is unmatched. Every product feels like a masterpiece.',
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Creative Director',
    text: 'Finally found a brand that understands minimalism and elegance. Worth every penny.',
    avatar: '👩‍💼',
  },
  {
    id: 3,
    name: 'Marcus Williams',
    role: 'Entrepreneur',
    text: 'Exceptional customer service and product quality. This is the future of retail.',
    avatar: '👨‍💻',
  },
];

export default function TestimonialsSection({ testimonials = SAMPLE_TESTIMONIALS }) {
  return (
    <Box sx={{ py: 10, backgroundColor: '#0a0a0a' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          sx={{ textAlign: 'center', mb: 8 }}
        >
          <Typography variant="h2" sx={{ color: '#ffffff', mb: 2 }}>
            What Our Customers Say
          </Typography>
          <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
            Join thousands of satisfied customers worldwide
          </Typography>
        </MotionBox>

        {/* Testimonials Grid */}
        <Grid container spacing={3}>
          {testimonials.map((testimonial, idx) => (
            <Grid size={{xs: 12, md: 4}} key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} delay={idx * 0.1} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}