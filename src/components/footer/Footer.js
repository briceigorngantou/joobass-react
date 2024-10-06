import { Grid, Container, Typography } from "@mui/material";
import { colors } from "../../configs/colors.config";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { WEB_MAX_WIDTH } from "../../constants/mediaQueryConstants";
import { footerLogo } from "../../constants/images";
import ButtonIcon from "../forms/buttons/ButtonIcon";

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        background: `var(--Color-Text-Text-Primary, ${colors.white})`,
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          maxWidth: WEB_MAX_WIDTH,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.white,
          mb: 2,
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
          container
          className="footer"
        >
          <Grid sx={{ m: 2 }}>
            <img
              src={footerLogo}
              alt="logo-jobaas"
              style={{
                width: 150,
                height: 70,
                flexShrink: 0,
              }}
            />
          </Grid>
          <Grid sx={{ m: 2 }}>
            <Grid sx={{ textAlign: "left" }}>
              <ButtonIcon
                onClick={() => {
                  console.log("Icon Button");
                }}
                size="large"
                icon={<LinkedInIcon />}
                style={{ mr: 1, color: colors.first }}
              />
              <ButtonIcon
                onClick={() => {
                  console.log("Icon Button");
                }}
                size="large"
                icon={<InstagramIcon />}
                style={{ mr: 1, color: colors.first }}
              />
              <ButtonIcon
                onClick={() => {
                  console.log("Icon Button");
                }}
                icon={<FacebookIcon />}
                style={{ mr: 1, color: colors.first }}
              />
            </Grid>
            <Typography
              fontFamily={"Manrope"}
              fontSize={14}
              fontWeight={400}
              color={colors.light}
            >
              Copyright © 2024 <strong>JOBAAS SARL</strong> Tous droits réserves
              - Termes et conditions générales - Protection des données - Guide
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
