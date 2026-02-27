'use client';

import React, { useState } from 'react';
import {
  Box,
  Grid,
  Button,
  Stack,
  TextField,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Chip,
  Typography,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const MotionBox = motion.create(Box);

export default function CollectionGrid({ products = [], onFilterChange = () => {} }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', ''));
    const priceB = parseFloat(b.price.replace('$', ''));

    switch (sortBy) {
      case 'price-asc':
        return priceA - priceB;
      case 'price-desc':
        return priceB - priceA;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const displayedProducts = sortedProducts.filter((product) => {
    const price = parseFloat(product.price.replace('$', ''));
    if (priceRange === '0-100') return price <= 100;
    if (priceRange === '100-300') return price > 100 && price <= 300;
    if (priceRange === '300+') return price > 300;
    return true;
  });

  return (
    <Box sx={{ py: 6 }}>
      {/* Search Bar */}
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{ mb: 4 }}
      >
        <TextField
          fullWidth
          placeholder="Search products..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#E8D5C4' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              color: '#ffffff',
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
      </MotionBox>

      {/* Filter & Sort Controls */}
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        sx={{ mb: 4 }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button
            variant={showFilters ? 'contained' : 'outlined'}
            startIcon={<FilterIcon />}
            onClick={() => setShowFilters(!showFilters)}
            sx={{ minWidth: 150 }}
          >
            Filters
          </Button>

          <FormControl sx={{ minWidth: 200 }}>
            <FormLabel sx={{ color: '#ffffff', mb: 1 }}>Sort By</FormLabel>
            <RadioGroup
              row
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              sx={{
                '& .MuiFormControlLabel-label': {
                  color: '#b0b0b0',
                  fontSize: '0.9rem',
                },
              }}
            >
              <FormControlLabel value="newest" control={<Radio />} label="Newest" />
              <FormControlLabel value="price-asc" control={<Radio />} label="Price: Low" />
              <FormControlLabel value="price-desc" control={<Radio />} label="Price: High" />
              <FormControlLabel value="rating" control={<Radio />} label="Rating" />
            </RadioGroup>
          </FormControl>
        </Stack>
      </MotionBox>

      {/* Filters Panel */}
      {showFilters && (
        <MotionBox
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          sx={{
            mb: 4,
            p: 3,
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '4px',
          }}
        >
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel sx={{ color: '#ffffff', mb: 2 }}>Price Range</FormLabel>
            <RadioGroup
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="All Prices"
                sx={{ '& .MuiFormControlLabel-label': { color: '#b0b0b0' } }}
              />
              <FormControlLabel
                value="0-100"
                control={<Radio />}
                label="Under $100"
                sx={{ '& .MuiFormControlLabel-label': { color: '#b0b0b0' } }}
              />
              <FormControlLabel
                value="100-300"
                control={<Radio />}
                label="$100 - $300"
                sx={{ '& .MuiFormControlLabel-label': { color: '#b0b0b0' } }}
              />
              <FormControlLabel
                value="300+"
                control={<Radio />}
                label="Over $300"
                sx={{ '& .MuiFormControlLabel-label': { color: '#b0b0b0' } }}
              />
            </RadioGroup>
          </FormControl>
        </MotionBox>
      )}

      {/* Active Filters Display */}
      {(searchTerm || sortBy !== 'newest' || priceRange !== 'all') && (
        <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: 'wrap' }}>
          {searchTerm && (
            <Chip
              label={`Search: ${searchTerm}`}
              onDelete={() => setSearchTerm('')}
              sx={{
                backgroundColor: '#E8D5C4',
                color: '#0a0a0a',
              }}
            />
          )}
          {sortBy !== 'newest' && (
            <Chip
              label={`Sort: ${sortBy}`}
              onDelete={() => setSortBy('newest')}
              sx={{
                backgroundColor: '#E8D5C4',
                color: '#0a0a0a',
              }}
            />
          )}
          {priceRange !== 'all' && (
            <Chip
              label={`Price: ${priceRange}`}
              onDelete={() => setPriceRange('all')}
              sx={{
                backgroundColor: '#E8D5C4',
                color: '#0a0a0a',
              }}
            />
          )}
        </Stack>
      )}

      {displayedProducts.length > 0 ? (
        <Grid container spacing={3}>
          {displayedProducts.map((product, idx) => (
            <Grid size={{xs: 12, sm: 6, md: 3}} key={product.id}>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ProductCard product={product} />
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      ) : (
        /* No products state */
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Box sx={{ fontSize: '3rem', mb: 2 }}>🔍</Box>
          <Typography variant="h6" sx={{ color: '#ffffff' }}>
            No products found
          </Typography>
          <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
            Try adjusting your filters or search term
          </Typography>
        </Box>
      )}

      {/* Results Count */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        sx={{ mt: 6, textAlign: 'center' }}
      >
        <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
          Showing {displayedProducts.length} of {products.length} products
        </Typography>
      </MotionBox>
    </Box>
  );
}