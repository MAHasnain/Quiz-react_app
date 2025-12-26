import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Link as MuiLink,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter, Facebook } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
    ],
  };

  const socialLinks = [
    { icon: <GitHub />, href: "https://github.com", label: "GitHub" },
    { icon: <LinkedIn />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Facebook />, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="xxl">
        {/* Main Footer Content */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
            gap: 4,
            mb: 4,
          }}
        >
          {/* Brand Section */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quizora
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Master your skills with our interactive quiz platform. Learn,
              practice, and excel!
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  color="inherit"
                  size="small"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>

          {/* Product Links */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Product
            </Typography>
            <Stack spacing={1}>
              {footerLinks.product.map((link) => (
                <MuiLink
                  key={link.label}
                  href={link.href}
                  color="inherit"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                    opacity: 0.9,
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Company Links */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Company
            </Typography>
            <Stack spacing={1}>
              {footerLinks.company.map((link) => (
                <MuiLink
                  key={link.label}
                  href={link.href}
                  color="inherit"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                    opacity: 0.9,
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Legal Links */}
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Legal
            </Typography>
            <Stack spacing={1}>
              {footerLinks.legal.map((link) => (
                <MuiLink
                  key={link.label}
                  href={link.href}
                  color="inherit"
                  underline="hover"
                  sx={{
                    cursor: "pointer",
                    opacity: 0.9,
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: "rgba(255, 255, 255, 0.2)", my: 3 }} />

        {/* Copyright Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            © {new Date().getFullYear()} Quizora. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            Made with ❤️ in Pakistan
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
