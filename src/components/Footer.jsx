import { Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Container className="text-white fs-2" sx={{ textAlign: "center", py: 3 }}>
      <Typography variant="body2" color="text">
        © {new Date().getFullYear()} Jeolardo Web Solutions. All rights reserved.
      </Typography>
    </Container>
  );
}
