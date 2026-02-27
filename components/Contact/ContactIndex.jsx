'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  Breadcrumbs,
  Link,
  Alert,
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
} from '@mui/icons-material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionCard = motion.create(Card);

const CONTACT_INFO = [
  {
    id: 1,
    icon: <EmailIcon sx={{ fontSize: '2rem', color: '#E8D5C4' }} />,
    title: 'Email',
    value: 'support@luxora.com',
    description: 'We respond within 24 hours',
  },
  {
    id: 2,
    icon: <PhoneIcon sx={{ fontSize: '2rem', color: '#E8D5C4' }} />,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    description: 'Available Mon-Fri, 9AM-6PM EST',
  },
  {
    id: 3,
    icon: <LocationIcon sx={{ fontSize: '2rem', color: '#E8D5C4' }} />,
    title: 'Address',
    value: '123 Luxury Lane, New York, NY 10001',
    description: 'Our showroom is open by appointment',
  },
  {
    id: 4,
    icon: <ScheduleIcon sx={{ fontSize: '2rem', color: '#E8D5C4' }} />,
    title: 'Hours',
    value: 'Mon-Sat: 10AM-8PM',
    description: 'Sunday: 12PM-6PM (EST)',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setLoading(false);

      // Reset alert after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

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
              <Typography sx={{ color: '#E8D5C4' }}>Contact</Typography>
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
            Get In Touch
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
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as
              soon as possible.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{xs: 12, md: 7}}>
            <MotionBox
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {submitted && (
                <Alert
                  severity="success"
                  sx={{
                    mb: 3,
                    backgroundColor: '#1a5c1a',
                    color: '#90EE90',
                    '& .MuiAlert-icon': {
                      color: '#90EE90',
                    },
                  }}
                >
                  Thank you for your message! We&apos;ll get back to you soon.
                </Alert>
              )}

              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2.5,
                }}
              >
                <Typography variant="h6" sx={{ color: '#ffffff', mb: 2 }}>
                  Send us a Message
                </Typography>

                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
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
                    '& .MuiInputBase-input::placeholder': {
                      color: '#666666',
                      opacity: 1,
                    },
                    '& .MuiInputLabel-root': {
                      color: '#b0b0b0',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
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
                    '& .MuiInputLabel-root': {
                      color: '#b0b0b0',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Phone (Optional)"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
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
                    '& .MuiInputLabel-root': {
                      color: '#b0b0b0',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  variant="outlined"
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
                    '& .MuiInputLabel-root': {
                      color: '#b0b0b0',
                    },
                  }}
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={5}
                  variant="outlined"
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
                    '& .MuiInputLabel-root': {
                      color: '#b0b0b0',
                    },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{ alignSelf: 'flex-start', px: 4 }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </MotionBox>
          </Grid>

          {/* Contact Information */}
          <Grid size={{xs: 12, md: 5}}>
            <MotionBox
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" sx={{ color: '#ffffff', mb: 4 }}>
                Contact Information
              </Typography>

              <Stack spacing={3}>
                {CONTACT_INFO.map((info, idx) => (
                  <MotionCard
                    key={info.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CardContent>
                      <Stack direction="row" spacing={2}>
                        <Box sx={{ pt: 0.5 }}>{info.icon}</Box>
                        <Box>
                          <Typography variant="subtitle2" sx={{ color: '#ffffff', mb: 0.5 }}>
                            {info.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#E8D5C4', fontWeight: 600 }}>
                            {info.value}
                          </Typography>
                          <Typography variant="caption" sx={{ color: '#b0b0b0', display: 'block', mt: 0.5 }}>
                            {info.description}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </MotionCard>
                ))}
              </Stack>

              {/* FAQ Section */}
              <Box sx={{ mt: 6 }}>
                <Typography variant="h6" sx={{ color: '#ffffff', mb: 2 }}>
                  Frequently Asked Questions
                </Typography>

                <Stack spacing={2}>
                  {[
                    {
                      q: 'How long does shipping take?',
                      a: 'Standard shipping takes 5-7 business days. Express shipping available.',
                    },
                    {
                      q: 'What is your return policy?',
                      a: 'We offer a 30-day return policy for all unused items.',
                    },
                    {
                      q: 'Do you offer international shipping?',
                      a: 'Yes, we ship to over 50 countries worldwide.',
                    },
                  ].map((faq, idx) => (
                    <Box key={idx}>
                      <Typography variant="subtitle2" sx={{ color: '#E8D5C4', mb: 0.5 }}>
                        {faq.q}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#b0b0b0' }}>
                        {faq.a}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}