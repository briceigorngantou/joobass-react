import React from "react";
import { colors } from "../../../configs/colors.config";
import { Grid } from "@mui/material";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import { useResponsiveQueries } from "../../../utils/useResponsiveQueries";
import { WEB_MAX_WIDTH } from "../../../constants/mediaQueryConstants";
import LoginForm from "../../../layouts/auth/login/LoginForm";

export default function Login() {
  const { tabletMaxWidth } = useResponsiveQueries();

  return (
    <Grid sx={{ overflowX: "hidden", background: colors.light }}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid container item sx={{ justifyContent: "center" }}>
        <Grid container item spacing={3} sx={{ mt: 0, width: WEB_MAX_WIDTH }}>
          <Grid item xs={12} md={6} sx={{ pr: tabletMaxWidth ? 0 : 3 }}>
            <Grid sx={{ m: 2 }}>{/* <CustomReturnHeaderMobileView /> */}</Grid>
            <Grid
              sx={{
                mt: 4,
                mb: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LoginForm />
            </Grid>
          </Grid>
          {!tabletMaxWidth && (
            <Grid
              item
              xs={12}
              md={6}
              height={920}
              className="login-image"
            ></Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
