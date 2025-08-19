import { Container, Typography, Grid, Button } from "@mui/material";
import { Email, WhatsApp, Twitter, Work } from "@mui/icons-material";

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<Email />}
            href="mailto:your-email@gmail.com"
          >
            Email
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<WhatsApp />}
            href="https://wa.me/1234567890"
            target="_blank"
          >
            WhatsApp
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<Work />}
            href="https://www.fiverr.com/yourprofile"
            target="_blank"
          >
            Fiverr
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<Twitter />}
            href="https://twitter.com/yourprofile"
            target="_blank"
          >
            Twitter
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
