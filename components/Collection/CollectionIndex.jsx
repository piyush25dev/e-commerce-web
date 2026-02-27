'use client';

import React, {useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  Breadcrumbs,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import CollectionGrid from '@/components/Custom/CollectionGrid';
import {getDocs, collection} from 'firebase/firestore'
import { db } from '@/utils/firebase'



const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export default function CollectionPage() {
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
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
          borderBottom: '1px solid #2a2a2a',
        }}
      >
        <Container maxWidth="lg">
          {/* Breadcrumb */}
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ mb: 3 }}
          >
            <Breadcrumbs sx={{ color: '#b0b0b0' }}>
              <Link href="/" sx={{ color: '#b0b0b0', '&:hover': { color: '#E8D5C4' } }}>
                Home
              </Link>
              <Typography sx={{ color: '#E8D5C4' }}>Collection</Typography>
            </Breadcrumbs>
          </MotionBox>

          {/* Page Title */}
          <MotionTypography
            variant="h1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              color: '#ffffff',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Our Collection
          </MotionTypography>

          {/* Page Description */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#b0b0b0',
                fontSize: '1.1rem',
                maxWidth: '600px',
              }}
            >
              Explore our curated selection of premium products. Each item is carefully chosen
              for quality, design, and timeless elegance. Find the perfect piece for your lifestyle.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Collection Grid Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CollectionGrid products={products} />
        </MotionBox>
      </Container>
    </Box>
  );
}