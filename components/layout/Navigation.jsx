'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge,
  useMediaQuery,
  useTheme,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import {
  Search as SearchIcon,
  ShoppingCart as CartIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

export default function Navigation({ cartCount = 0, onCartClick = () => {} }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { label: 'Collection', href: '/collection' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #2a2a2a',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Brand Logo */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  letterSpacing: '0.1em',
                  color: '#E8D5C4',
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.8,
                    transition: 'opacity 0.3s',
                  },
                }}
              >
                LUXORA
              </Typography>
            </Link>
          </MotionBox>

          {/* Desktop Menu */}
          {!isMobile && (
            <Stack direction="row" spacing={4}>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    sx={{
                      cursor: 'pointer',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      fontWeight: 400,
                      transition: 'color 0.3s',
                      '&:hover': { color: '#E8D5C4' },
                    }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              ))}
            </Stack>
          )}

          {/* Right Icons */}
          <Stack direction="row" spacing={2}>
            <IconButton sx={{ color: '#b0b0b0', '&:hover': { color: '#E8D5C4' } }}>
              <SearchIcon />
            </IconButton>
            <IconButton
              sx={{ color: '#b0b0b0', '&:hover': { color: '#E8D5C4' } }}
              onClick={onCartClick}
            >
              <Badge
                badgeContent={cartCount}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#E8D5C4',
                    color: '#0a0a0a',
                  },
                }}
              >
                <CartIcon />
              </Badge>
            </IconButton>
            {isMobile && (
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{ color: '#b0b0b0', '&:hover': { color: '#E8D5C4' } }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#1a1a1a',
            borderLeft: '1px solid #2a2a2a',
          },
        }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ mb: 2, color: '#E8D5C4' }}
          >
            <CloseIcon />
          </IconButton>
          <List>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ListItem
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    cursor: 'pointer',
                    color: '#ffffff',
                    '&:hover': { 
                      color: '#E8D5C4',
                      backgroundColor: 'rgba(232, 213, 196, 0.05)',
                    },
                  }}
                >
                  <ListItemText 
                    primary={item.label}
                    sx={{
                      '& .MuiTypography-root': {
                        color: 'inherit',
                      },
                    }}
                  />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}