import React from "react";
import { Grid, Pagination } from "@mui/material";
import CardJob from "../../components/cards/CardJob";
import { jobs } from "../../constants/shared";

export default function JobsContentLayout() {
  return (
    <Grid container direction="column">
      <Grid
        container
        spacing={2}
        sx={{
          mt: 4,
          mb: 4,
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardJob {...job} />
          </Grid>
        ))}
      </Grid>
      <Grid sx={{ my: 2, display: "flex", justifyContent: "center" }}>
        <Pagination count={4} variant="outlined" />
      </Grid>
    </Grid>
  );
}
