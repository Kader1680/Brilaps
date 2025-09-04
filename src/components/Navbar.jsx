import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Who Am I", href: "#who" },
    { label: "Services", href: "#services" },
    { label: "Why", href: "#why" },
    { label: "Reviews", href: "#reviews" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          // backgroundColor: "#0d0d0d",
          color: "black",
          boxShadow: "0px 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        <Toolbar className="flex justify-between">
          
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: "1px",
              color: "#ec7578",
            }}
          >
            Jeolardo <span style={{ color: "#fff" }}>Web</span> Solutions
          </Typography>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-4">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: "#fff",
                  fontWeight: "500",
                  "&:hover": { color: "#ec7578", backgroundColor: "transparent" },
                }}
                href={item.href}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <IconButton edge="end" color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 220, backgroundColor: "#0d0d0d", height: "100%", color: "#fff" }}>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              component="a"
              href={item.href}
              onClick={() => setOpen(false)}
              sx={{
                "&:hover": { backgroundColor: "#1a1a1a", color: "#ec7578" },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
