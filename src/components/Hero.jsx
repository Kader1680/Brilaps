import { Container, Typography, Button } from "@mui/material";
 
export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "../assets/banner.png",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
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
