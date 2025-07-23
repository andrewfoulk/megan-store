// src/components/Navbar.tsx
"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import Box from "@mui/material/Box";

export default function Navbar() {
  const cartCount = 0; // wire this up to your cart context

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ position: "relative" }}>
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          Megan’s Pottery
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            gap: 2,
          }}
        >
          <Link href="/shop">
            <Typography component="a">Pottery</Typography>
          </Link>
          <Link href="/about">
            <Typography component="a">About Me</Typography>
          </Link>
          <Link href="/contact">
            <Typography component="a">Contact</Typography>
          </Link>
        </Box>

        <IconButton
          component={Link}
          href="/cart"
          size="large"
          edge="end"
          color="inherit"
          sx={{ marginLeft: "auto" }}
        >
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
