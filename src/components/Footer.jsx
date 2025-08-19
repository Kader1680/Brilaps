import { Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Container className="text-center py-6">
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Abdel Web Solutions. All rights reserved.
      </Typography>
    </Container>
  );
}
