import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar 
      position="static" 
      sx={{ backgroundColor: "#101010", color: "#ec7578" }}
    >
      <Toolbar className="flex justify-between">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Jeolardo Web Solutions
        </Typography>
        <div>
          <Button sx={{ color: "#ec7578" }} href="#work">Work</Button>
          <Button sx={{ color: "#ec7578" }} href="#contact">Contact</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
