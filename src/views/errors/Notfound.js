import { Grid } from "@mui/material";
import { colors } from "../../configs/colors.config";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

export default function Notfound() {
  return (
    <Grid sx={{ overflowX: "hidden", background: colors.light }}>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        Not found page
      </Grid>
      <Grid item xs={12} sx={{ mt: 4, mb: 0 }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
