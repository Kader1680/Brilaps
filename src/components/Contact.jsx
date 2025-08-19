import { Container, Typography, Grid, Button } from "@mui/material";
import { Email, WhatsApp, Twitter, Work } from "@mui/icons-material";

export default function Contact() {
  return (
    <Container
      id="contact"
      maxWidth="md"
      sx={{ py: 10, bgcolor: "#101010", color: "white", borderRadius: 3 }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "#ec7578", fontWeight: "bold", mb: 6 }}
      >
        Contact Me
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            startIcon={<Email />}
            href="mailto:ouldhenniabaghdad@gmail.com"
            sx={{
              bgcolor: "#ec7578",
              "&:hover": { bgcolor: "#c57f9c" },
              px: 3,
              py: 1.2,
              borderRadius: "12px",
            }}
          >
            Email
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            startIcon={<WhatsApp />}
               href="https://wa.me/+213549891600"
              target="_blank"
            sx={{
              bgcolor: "#7794e5",
              "&:hover": { bgcolor: "#9e89c0" },
              px: 3,
              py: 1.2,
              borderRadius: "12px",
            }}
          >
            WhatsApp
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            startIcon={<Work />}
            href="https://www.fiverr.com/ouldhenniaabdel?public_mode=true"
            target="_blank"
            sx={{
              bgcolor: "#c57f9c",
              "&:hover": { bgcolor: "#ec7578" },
              px: 3,
              py: 1.2,
              borderRadius: "12px",
            }}
          >
            Fiverr
          </Button>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            startIcon={<Twitter />}
            href="https://x.com/Kader_1680"
            target="_blank"
            sx={{
              bgcolor: "#9e89c0",
              "&:hover": { bgcolor: "#7794e5" },
              px: 3,
              py: 1.2,
              borderRadius: "12px",
            }}
          >
            Twitter
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
