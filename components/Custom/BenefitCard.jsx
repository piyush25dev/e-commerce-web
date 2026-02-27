'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function BenefitCard({ icon, title, description, delay = 0 }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false }}
      sx={{ textAlign: 'center' }}
    >
      <Box sx={{ mb: 2 }}>
        {icon}
      </Box>
      <Typography variant="h6" sx={{ mb: 1, color: '#ffffff' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
        {description}
      </Typography>
    </MotionBox>
  );
}