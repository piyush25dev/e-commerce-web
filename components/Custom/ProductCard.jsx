'use client';

import React, { useState } from 'react';
import {
  Card,
  Box,
  CardContent,
  Typography,
  Button,
  Chip,
  IconButton,
  Rating,
} from '@mui/material';
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function ProductCard({ product, onAddToCart = () => {} }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Product Image Container */}
      <Box sx={{ position: 'relative', overflow: 'hidden', aspectRatio: '1' }}>
        <Box
          sx={{
            fontSize: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2a2a2a',
            height: '100%',
            transition: 'transform 0.3s ease-out',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        >
          {product.image}
        </Box>

        {/* Badge */}
        {product.badge && (
          <Chip
            label={product.badge}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              backgroundColor: '#E8D5C4',
              color: '#0a0a0a',
              fontWeight: 600,
            }}
          />
        )}

        {/* Wishlist Button */}
        <IconButton
          size="small"
          onClick={handleFavoriteClick}
          sx={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            color: '#E8D5C4',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              transform: 'scale(1.1)',
            },
          }}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>

      {/* Card Content */}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Product Name */}
        <Typography variant="h6" sx={{ mb: 0.5, color: '#ffffff' }}>
          {product.name}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
          <Rating
            value={product.rating}
            readOnly
            size="small"
            sx={{ color: '#E8D5C4' }}
            precision={0.1}
          />
          <Typography variant="caption" sx={{ color: '#b0b0b0' }}>
            ({product.reviews})
          </Typography>
        </Box>

        {/* Price and Button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 'auto',
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: '#E8D5C4', fontWeight: 600 }}
          >
            {product.price}
          </Typography>
          <Button
            size="small"
            variant="outlined"
            sx={{
              fontSize: '0.75rem',
              py: 0.5,
              px: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(232, 213, 196, 0.1)',
              },
            }}
            onClick={() => onAddToCart(product)}
          >
            Add
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}