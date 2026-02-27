'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Stack,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: '#1a1a1a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background */}
      <Box
        sx={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(232, 213, 196, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          bottom: '-200px',
          left: '-100px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          sx={{ textAlign: 'center' }}
        >
          <Typography variant="h2" sx={{ mb: 2, color: '#ffffff' }}>
            Stay Updated
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, color: '#b0b0b0', fontSize: '1.1rem' }}
          >
            Subscribe to our newsletter for exclusive offers and new arrivals.
          </Typography>

          {/* Email Input and Button */}
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ mb: 2 }}>
            <TextField
              fullWidth
              placeholder="Enter your email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
              disabled={isSubscribed}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ color: '#b0b0b0' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#ffffff',
                  borderColor: '#2a2a2a',
                  '& fieldset': {
                    borderColor: '#2a2a2a',
                  },
                  '&:hover fieldset': {
                    borderColor: '#E8D5C4',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#E8D5C4',
                  },
                },
                '& .MuiOutlinedInput-input::placeholder': {
                  color: '#666666',
                  opacity: 1,
                },
              }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                whiteSpace: 'nowrap',
              }}
              onClick={handleSubscribe}
              disabled={isSubscribed}
            >
              {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
            </Button>
          </Stack>

          {/* Privacy Message */}
          <Typography variant="caption" sx={{ color: '#666666' }}>
            We respect your privacy. Unsubscribe at any time.
          </Typography>
        </MotionBox>
      </Container>
    </Box>
  );
}