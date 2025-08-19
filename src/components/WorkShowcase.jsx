import { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Pagination,
  Box,
} from "@mui/material";

const projects = [
  {
    title: "Buca Restaurant Online",
    image: "./buca.png",
    link: "https://buca.ca/",
    description:
      "Built an ecommerce platform that helped the owner generate $1022 in sales within the first month.",
  },
  {
    title: "Canada India Business",
    image: "./canada.png",
    link: "https://www.canada-indiabusiness.com/",
    description:
      "Built an ecommerce platform that helped the owner generate $1022 in sales within the first month.",
  },
  {
    title: "The Good Coffee Society",
    image: "./coffee.png",
    link: "https://thegoodcoffeesociety.com/",
    description: "Another example of a high-converting ecommerce store.",
  },
  {
    title: "Hawksmoor Air Street",
    image: "./food.png",
    link: "https://thehawksmoor.com/locations/airstreet/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
    description: "Helped increase visibility and client conversions online.",
  },
  {
    title: "Business France UK",
    image: "bf.png",
    link: "https://www.businessfrance.fr/en",
    description: "Delivered SEO optimized ecommerce website.",
  },
  {
    title: "Qatar Building Company",
    image: "./qatars.png",
    link: "https://qbc.qa/",
    description: "Designed modern UI for ecommerce business growth.",
  },
];

export default function WorkShowcase() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6; // 6 projects per page (2 rows of 3)
  const count = Math.ceil(projects.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedProjects = projects.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box id="work" sx={{ py: 10, bgcolor: "#101010", color: "white" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "#ec7578", fontWeight: "bold" }}
        >
          My Work
        </Typography>

        {/* Grid */}
        <Grid container spacing={4} justifyContent="center">
          {paginatedProjects.map((proj, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card
                sx={{
                  boxShadow: 4,
                  borderRadius: 3,
                  bgcolor: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "#ec7578",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={proj.image}
                  alt={proj.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: "#7794e5" }}>
                    {proj.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9e89c0", mb: 2 }}
                  >
                    {proj.description}
                  </Typography>
                  <Button
                    variant="contained"
                    href={proj.link}
                    target="_blank"
                    sx={{
                      mt: 1,
                      backgroundColor: "#ec7578",
                      "&:hover": {
                        backgroundColor: "#c57f9c",
                      },
                    }}
                  >
                    Visit Site
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={count}
            page={page}
            onChange={handleChange}
            color="primary"
            size="large"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#ec7578",
              },
              "& .Mui-selected": {
                backgroundColor: "#ec7578 !important",
                color: "white !important",
              },
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
