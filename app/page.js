'use client';

import React from 'react';
import {
  Box,
} from '@mui/material';
import HeroSection from '@/components/home/components/HeroSection';
import FeaturedProducts from '@/components/home/components/FeaturedProducts';
import BenefitsSection from '@/components/home/components/BenefitsSection';
import TestimonialsSection from '@/components/home/components/TestimonialsSection';
import NewsletterSection from '@/components/home/components/NewsletterSection';

export default function EcommerceLanding() {
   const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts onAddToCart={handleAddToCart} />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Newsletter Section */}
      <NewsletterSection />
    </Box>
  );
}