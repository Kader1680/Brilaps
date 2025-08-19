import { Container, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <div style={{ 
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)", 
      color: "white",
      padding: "80px 20px",
      textAlign: "center"
    }}>
      <Container>
        <Typography variant="h3" gutterBottom>
          Hi, I'm Jeolardo 👋
        </Typography>
        <Typography variant="h6" gutterBottom>
          Freelance Web Developer | Helping businesses grow online
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          href="#work"
          sx={{ marginTop: 3 }}
        >
          View My Work
        </Button>
      </Container>
    </div>
  );
}
