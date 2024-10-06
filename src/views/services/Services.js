import React from "react";
import { Grid } from "@mui/material";
import { colors } from "../../configs/colors.config";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ServiceLayout from "../../layouts/services/ServiceLayout";

export default function Services() {
  return (
    <Grid sx={{ overflowX: "hidden", background: colors.light }}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12} sx={{ mb: 2, minHeight: 300 }}>
        <ServiceLayout />
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
