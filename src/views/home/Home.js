import React from "react";
import { Grid } from "@mui/material";
import { colors } from "../../configs/colors.config";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import HomeHeaderLayout from "../../layouts/home/HomeHeaderLayout";
import { useResponsiveQueries } from "../../utils/useResponsiveQueries";
import HomeContentLayout from "../../layouts/home/HomeContentLayout";
import { WEB_MAX_WIDTH } from "../../constants/mediaQueryConstants";
import HomeJoinUs from "../../layouts/home/HomeJoinUs";

export default function Home() {
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
      <Grid container item sx={{ justifyContent: "center" }}>
        <Grid
          container
          item
          spacing={3}
          sx={{ mt: 0, maxWidth: WEB_MAX_WIDTH }}
        >
          <Grid item xs={12} md={8}>
            <Grid
              sx={{
                m: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <HomeHeaderLayout />
            </Grid>
          </Grid>
          {!tabletMaxWidth && (
            <Grid
              item
              xs={12}
              className="header-image"
              md={4}
              sx={{ width: 200, height: 400 }}
            ></Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }}>
        <Grid item sx={{ m: 5, maxWidth: WEB_MAX_WIDTH }}>
          <HomeContentLayout />
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
