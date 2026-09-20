import { Box, Container, Typography, Grid, Paper } from "@mui/material";

export default function AboutPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 3 }}>
          About Me
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography color="text.secondary">
              I am a software engineer specializing in modern web development
              with React and the MERN stack. I enjoy building clean interfaces,
              reusable components, and scalable applications.
            </Typography>

            
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                p: 2.5,
                borderRadius: 3,
              }}
              elevation={0}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600 }}
              >
                Quick Info
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1 }}
              >
                Location: CALICUT, India
                <br />
                Experience: 2 years
                <br />
                Focus: React, MERN, Data Science
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}