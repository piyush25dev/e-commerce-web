'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Grid,
  Typography,
  CircularProgress,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { TrendingUp as TrendingIcon } from '@mui/icons-material';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/utils/firebase';
import ProductCard from '../../Custom/ProductCard';

const MotionBox = motion.create(Box);

export default function FeaturedProducts({ onAddToCart = () => {} }) {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const snap = await getDocs(collection(db, 'products'));
        const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setProducts(docs);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const displayedProducts = products.slice(0, 4);

  return (
    <Box sx={{ py: 10, backgroundColor: '#0a0a0a' }} data-section="products">
      <Container maxWidth="lg">
        {/* Section Header */}
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                color: '#ffffff',
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              <TrendingIcon sx={{ fontSize: '2rem', color: '#E8D5C4' }} />
              Featured Selection
            </Typography>
            <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
              Hand-picked items from our latest collection
            </Typography>
          </Box>
        </MotionBox>

        {/* Loading */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
            <CircularProgress sx={{ color: '#E8D5C4' }} />
          </Box>
        )}

        {/* Error */}
        {!loading && error && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography sx={{ color: '#ef4444' }}>{error}</Typography>
          </Box>
        )}

        {/* Empty */}
        {!loading && !error && products.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography sx={{ color: '#b0b0b0' }}>No products available yet.</Typography>
          </Box>
        )}

        {/* Products Grid */}
        {!loading && !error && displayedProducts.length > 0 && (
          <>
            <Grid container spacing={3}>
              {displayedProducts.map((product) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
                  <ProductCard
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                </Grid>
              ))}
            </Grid>

            {/* View More Button */}
            {products.length > 4 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
                <Button
                  onClick={() => router.push('/collection')}
                  sx={{
                    px: 6,
                    py: 1.5,
                    backgroundColor: '#E8D5C4',
                    color: '#0a0a0a',
                    fontWeight: 600,
                    fontSize: '1rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#f5e6d3',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 16px rgba(232, 213, 196, 0.3)',
                    },
                  }}
                >
                  View More
                </Button>
              </Box>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}