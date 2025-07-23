// src/components/CartDrawer.tsx
"use client";

import {
  Drawer,
  IconButton,
  Box,
  Typography,
  Divider,
  Button,
  useMediaQuery,
  Theme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { useCartState } from "@/components/Cart/CartContext";

const DRAWER_WIDTH = 360;

export type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );
  const { items } = useCartState();

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      variant={isDesktop ? "persistent" : "temporary"}
      ModalProps={{ keepMounted: true }}
      sx={{
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
    >
      <Box p={2} display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">Your Cart</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box p={2} flexGrow={1} overflow="auto">
        {items.length === 0 ? (
          <Typography>Your cart is empty.</Typography>
        ) : (
          items.map((item) => (
            <Box key={item.id} mb={2}>
              <Typography>{item.name}</Typography>
              <Typography>
                {item.quantity} × ${(item.price / 100).toFixed(2)}
              </Typography>
            </Box>
          ))
        )}
      </Box>
      <Divider />
      <Box p={2}>
        <Typography variant="subtitle1">
          Subtotal: ${(subtotal / 100).toFixed(2)}
        </Typography>
        <Button fullWidth variant="contained" onClick={() => {/* your checkout logic */}}>
          Checkout
        </Button>
      </Box>
    </Drawer>
  );
}
