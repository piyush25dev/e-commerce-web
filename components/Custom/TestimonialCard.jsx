'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
} from '@mui/material';
import { Stars as StarIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function TestimonialCard({ testimonial, delay = 0 }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false }}
      style={{height: "100%"}}
    >
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Star Rating */}
          <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                sx={{ fontSize: '1.2rem', color: '#E8D5C4' }}
              />
            ))}
          </Box>

          {/* Testimonial Text */}
          <Typography
            variant="body1"
            sx={{
              mb: 2.5,
              color: '#ffffff',
              fontStyle: 'italic',
              lineHeight: 1.6,
              flexGrow: 1,
            }}
          >
            &quot;{testimonial.text}&quot;
          </Typography>

          {/* Author Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto' }}>
            <Typography sx={{ fontSize: '2rem' }}>
              {testimonial.avatar}
            </Typography>
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ color: '#ffffff', fontWeight: 600 }}
              >
                {testimonial.name}
              </Typography>
              <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
                {testimonial.role}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </MotionBox>
  );
}