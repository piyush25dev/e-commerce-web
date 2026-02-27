'use client';

import React, { useEffect, useState } from 'react';
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
  CircularProgress,
} from '@mui/material';
import {
  Favorite as HeartIcon,
  Public as GlobalIcon,
  People as TeamIcon,
} from '@mui/icons-material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { motion } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/utils/firebase';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);
const MotionCard = motion.create(Card);

// Icon map for values (fallback if icon field not in Firebase)
const ICON_MAP = {
  'Quality First': <HeartIcon sx={{ fontSize: '3rem', color: '#E8D5C4' }} />,
  'Sustainability': <GlobalIcon sx={{ fontSize: '3rem', color: '#E8D5C4' }} />,
  'Community': <TeamIcon sx={{ fontSize: '3rem', color: '#E8D5C4' }} />,
  'Excellence': <EmojiEventsIcon sx={{ fontSize: '3rem', color: '#E8D5C4' }} />,
};

export default function AboutPage() {
  const [aboutContent, setAboutContent] = useState(null);
  const [values, setValues] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log('Fetching about content from Firebase...');

        // Fetch about content (mission statement and story)
        const contentSnap = await getDocs(collection(db, 'aboutContent'));
        if (contentSnap.docs.length > 0) {
          const contentData = contentSnap.docs[0].data();
          console.log('About content fetched:', contentData);
          setAboutContent(contentData);
        } else {
          console.log('No about content found');
        }

        // Fetch values
        const valuesSnap = await getDocs(collection(db, 'aboutValues'));
        const valuesData = valuesSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Values fetched:', valuesData);
        setValues(valuesData);

        // Fetch team members
        const teamSnap = await getDocs(collection(db, 'aboutTeam'));
        const teamData = teamSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Team members fetched:', teamData);
        setTeamMembers(teamData);

        // Fetch stats
        const statsSnap = await getDocs(collection(db, 'aboutStats'));
        const statsData = statsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('Stats fetched:', statsData);
        setStats(statsData);
      } catch (error) {
        console.error('Error fetching about page data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress sx={{ color: '#E8D5C4' }} />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0a0a0a' }}>
      {/* Hero Section - About Luxora */}
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

          {/* Mission Statement - From Firebase aboutContent.mission */}
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
              {aboutContent?.mission || 'At Luxora, we believe that true luxury is found in simplicity and quality. Our mission is to curate a collection of timeless products that celebrate craftsmanship, design, and sustainability. We\'re more than a brand—we\'re a movement toward mindful consumption.'}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Story Section - Our Story from Firebase aboutContent */}
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
                  {aboutContent?.storyTitle || 'Our Story'}
                </Typography>
                <Typography variant="body1" sx={{ color: '#b0b0b0', mb: 2, lineHeight: 1.8 }}>
                  {aboutContent?.storyPart1 || 'Founded in 2020, Luxora began as a passion project by founder Emma Thompson, who believed the world needed a more thoughtful approach to luxury retail. What started as a small curated collection has grown into a trusted destination for those who appreciate quality and design.'}
                </Typography>
                <Typography variant="body1" sx={{ color: '#b0b0b0', lineHeight: 1.8 }}>
                  {aboutContent?.storyPart2 || 'Every product in our collection is carefully selected by our expert team. We work directly with artisans and manufacturers who share our commitment to quality and sustainability. Today, we serve thousands of customers worldwide who believe that less is more, and that true luxury stands the test of time.'}
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

          {values.length > 0 ? (
            <Grid container spacing={4}>
              {values.map((value, idx) => (
                <Grid size={{xs: 12, sm: 6, md: 3}} key={value.id}>
                  <MotionCard
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    sx={{ height: '100%' }}
                  >
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Box sx={{ mb: 2 }}>
                        {ICON_MAP[value.title] || <HeartIcon sx={{ fontSize: '3rem', color: '#E8D5C4' }} />}
                      </Box>
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
          ) : (
            <Typography sx={{ color: '#b0b0b0', textAlign: 'center' }}>
              No values configured yet.
            </Typography>
          )}
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

          {teamMembers.length > 0 ? (
            <Grid container spacing={4}>
              {teamMembers.map((member, idx) => (
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
          ) : (
            <Typography sx={{ color: '#b0b0b0', textAlign: 'center' }}>
              No team members configured yet.
            </Typography>
          )}
        </Box>

        {/* Stats Section */}
        <Box sx={{ py: 10, borderBottom: '1px solid #2a2a2a' }}>
          {stats.length > 0 ? (
            <Grid container spacing={4} sx={{ textAlign: 'center' }}>
              {stats.map((stat, idx) => (
                <Grid size={{xs: 12, sm: 6, md: 3}} key={stat.id}>
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
          ) : (
            <Typography sx={{ color: '#b0b0b0', textAlign: 'center' }}>
              No statistics configured yet.
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}