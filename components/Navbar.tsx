"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Box, Button } from "@mui/material";

export default function Navbar() {
  // you’ll replace this with your real cart count from context
  const cartCount = 0;

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component={Link} href="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          Megan’s Pottery
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button component={Link} href="/shop">Pottery</Button>
          <Button component={Link} href="/about">About Me</Button>
          <Button component={Link} href="/contact">Contact</Button>
        </Box>

        <IconButton component={Link} href="/cart" size="large" color="inherit" sx={{ ml: 2 }}>
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}