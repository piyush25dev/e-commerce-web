'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  Favorite as HeartIcon,
  Public as GlobalIcon,
  People as TeamIcon,
} from '@mui/icons-material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionCard = motion.create(Card);

const VALUES = [
  {
    id: 1,
    icon: <HeartIcon sx={{ fontSize: '3rem', color: '#E8D5C4' }} />,
    title: 'Quality First',
    description: 'We believe in craftsmanship and quality. Every product is carefully selected and tested.',
  },
  {
    id: 2,
    icon: <GlobalIcon sx={{ fontSize: '3rem', color: '#E8D5C4' }} />,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and sustainable sourcing of our materials.',
  },
  {
    id: 3,
    icon: <TeamIcon sx={{ fontSize: '3rem', color: '#E8D5C4' }} />,
    title: 'Community',
    description: 'Building a community of like-minded individuals who appreciate fine things.',
  },
  {
    id: 4,
    icon: <EmojiEventsIcon sx={{ fontSize: '3rem', color: '#E8D5C4' }} />,
    title: 'Excellence',
    description: 'Striving for excellence in everything we do, from products to customer service.',
  },
];

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Emma Thompson',
    role: 'Founder & CEO',
    avatar: '👩‍💼',
    bio: 'Visionary leader with 15+ years in luxury retail.',
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Product Director',
    avatar: '👨‍💼',
    bio: 'Expert curator with eye for timeless design.',
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    role: 'Brand Manager',
    avatar: '👩‍💼',
    bio: 'Passionate about building authentic brand stories.',
  },
  {
    id: 4,
    name: 'Michael Park',
    role: 'Operations Lead',
    avatar: '👨‍💼',
    bio: 'Ensuring excellence in every customer interaction.',
  },
];

export default function AboutPage() {
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
              <Typography sx={{ color: '#E8D5C4' }}>About</Typography>
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
              mb: 4,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            About Luxora
          </MotionTypography>

          {/* Mission Statement */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: '#b0b0b0',
                fontSize: '1.2rem',
                maxWidth: '700px',
                lineHeight: 1.8,
              }}
            >
              At Luxora, we believe that true luxury is found in simplicity and quality. Our mission
              is to curate a collection of timeless products that celebrate craftsmanship, design, and
              sustainability. We&apos;re more than a brand—we&apos;re a movement toward mindful consumption.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Story Section */}
        <Box sx={{ py: 10, borderBottom: '1px solid #2a2a2a' }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{xs: 12, md: 6}}>
              <MotionBox
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h2" sx={{ color: '#ffffff', mb: 3 }}>
                  Our Story
                </Typography>
                <Typography variant="body1" sx={{ color: '#b0b0b0', mb: 2, lineHeight: 1.8 }}>
                  Founded in 2020, Luxora began as a passion project by founder Emma Thompson, who
                  believed the world needed a more thoughtful approach to luxury retail. What started
                  as a small curated collection has grown into a trusted destination for those who
                  appreciate quality and design.
                </Typography>
                <Typography variant="body1" sx={{ color: '#b0b0b0', lineHeight: 1.8 }}>
                  Every product in our collection is carefully selected by our expert team. We work
                  directly with artisans and manufacturers who share our commitment to quality and
                  sustainability. Today, we serve thousands of customers worldwide who believe that
                  less is more, and that true luxury stands the test of time.
                </Typography>
              </MotionBox>
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
              <MotionBox
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                sx={{ textAlign: 'center', fontSize: '120px' }}
              >
                ✨
              </MotionBox>
            </Grid>
          </Grid>
        </Box>

        {/* Values Section */}
        <Box sx={{ py: 10, borderBottom: '1px solid #2a2a2a' }}>
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{ color: '#ffffff', mb: 6, textAlign: 'center' }}
          >
            Our Values
          </MotionTypography>

          <Grid container spacing={4}>
            {VALUES.map((value, idx) => (
              <Grid size={{xs: 12, sm: 6, md: 3}} key={value.id}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>{value.icon}</Box>
                    <Typography variant="h6" sx={{ color: '#ffffff', mb: 1 }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ py: 10, borderBottom: '1px solid #2a2a2a' }}>
          <MotionTypography
            variant="h2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{ color: '#ffffff', mb: 2, textAlign: 'center' }}
          >
            Meet Our Team
          </MotionTypography>

          <Typography
            variant="body2"
            sx={{ color: '#b0b0b0', textAlign: 'center', mb: 6 }}
          >
            Passionate individuals dedicated to curating the best
          </Typography>

          <Grid container spacing={4}>
            {TEAM_MEMBERS.map((member, idx) => (
              <Grid size={{xs: 12, sm: 6, md: 3}} key={member.id}>
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '4rem', mb: 2 }}>
                      {member.avatar}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#ffffff', mb: 0.5 }}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: '#E8D5C4', display: 'block', mb: 2 }}
                    >
                      {member.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                      {member.bio}
                    </Typography>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Stats Section */}
        <Box sx={{ py: 10, borderBottom: '1px solid #2a2a2a' }}>
          <Grid container spacing={4} sx={{ textAlign: 'center' }}>
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '500+', label: 'Products' },
              { number: '50+', label: 'Partners' },
              { number: '4.8★', label: 'Average Rating' },
            ].map((stat, idx) => (
              <Grid size={{xs: 12, sm: 6, md: 3}} key={idx}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: '#E8D5C4',
                      mb: 1,
                      fontWeight: 600,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                    {stat.label}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}