import React from "react";
import { Grid } from "@mui/material";
import { colors } from "../../configs/colors.config";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { WEB_MAX_WIDTH } from "../../constants/mediaQueryConstants";
import JobsHeaderLayout from "../../layouts/jobs/JobsHeaderLayout";
import JobsContentLayout from "../../layouts/jobs/JobsContentLayout";
import JobFilterLayout from "../../layouts/jobs/JobFilterLayout";
import HomeJoinUs from "../../layouts/home/HomeJoinUs";
import { useResponsiveQueries } from "../../utils/useResponsiveQueries";

export default function Jobs() {
  const { tabletMaxWidth } = useResponsiveQueries();
  return (
    <Grid
      sx={{
        overflowX: "hidden",
        background: colors.light,
      }}
    >
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ justifyContent: "center", display: "flex" }}
        className="job-header-image"
      >
        <Grid item sx={{ m: 5, maxWidth: WEB_MAX_WIDTH, width: "80%" }}>
          <JobsHeaderLayout />
        </Grid>
      </Grid>
      <Grid container item sx={{ justifyContent: "center" }}>
        <Grid
          container
          item
          spacing={1}
          sx={{ mt: 5, maxWidth: WEB_MAX_WIDTH }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: tabletMaxWidth ? "center" : "flex-start",
            }}
          >
            <JobFilterLayout />
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid
              sx={{
                px: 2,
                mb: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <JobsContentLayout />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ justifyContent: "center", display: "flex" }}
        className="background-image"
      >
        <Grid item sx={{ m: 5, maxWidth: WEB_MAX_WIDTH }}>
          <HomeJoinUs />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
