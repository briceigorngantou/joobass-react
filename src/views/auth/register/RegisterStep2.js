import { colors } from "../../../configs/colors.config";
import { Grid } from "@mui/material";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import { useResponsiveQueries } from "../../../utils/useResponsiveQueries";
import { WEB_MAX_WIDTH } from "../../../constants/mediaQueryConstants";

export default function RegisterStep2() {
  const { tabletMaxWidth } = useResponsiveQueries();
  return (
    <Grid sx={{ overflowX: "hidden", background: colors.light }}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid container item sx={{ justifyContent: "center" }}>
        <Grid container item spacing={3} sx={{ mt: 0, width: WEB_MAX_WIDTH }}>
          RegisterStep2
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
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
