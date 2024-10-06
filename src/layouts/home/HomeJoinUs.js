import { Grid, Typography } from "@mui/material";
import React from "react";
import { useResponsiveQueries } from "../../utils/useResponsiveQueries";
import { colors } from "../../configs/colors.config";
import SecondaryButton from "../../components/forms/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";

export default function HomeJoinUs() {
  const { tabletMaxWidth } = useResponsiveQueries();
  const navigate = useNavigate();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={6}>
        <Grid
          sx={{
            m: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent:'space-around'
          }}
        >
          <Grid sx={{ mb: 1 }}>
            <Typography
              fontFamily={"Manrope"}
              fontSize={14}
              fontWeight={300}
              color={colors.textSecondary}
            >
              Rejoignez nous
            </Typography>
          </Grid>
          <Grid sx={{ mb: 1 }}>
            <Typography
              fontFamily={"Manrope"}
              fontSize={24}
              fontWeight={900}
              color={colors.white}
            >
              Rejoignez la communauté{" "}
              <span style={{ color: colors.textSecondary }}>Jobaas</span> dès
              maintenant
            </Typography>
          </Grid>
          <Grid sx={{ mb: 2 }}>
            <Typography
              fontFamily={"Manrope"}
              fontSize={12}
              fontWeight={200}
              color={colors.white}
            >
              Lorem ipsum dolor sit amet consectetur. Consectetur vestibulum
              tristique nunc sed. Quis non urna lorem imperdiet urna sit
              molestie quis. Feugiat morbi sapien suspendisse viverra sapien non
              risus faucibus. Blandit nulla arcu porta pellentesque purus varius
              in at ultrices.
            </Typography>
          </Grid>
          <Grid>
            <SecondaryButton
              title={"S’inscrire dès maintenant"}
              width={220}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/register");
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      {!tabletMaxWidth && (
        <Grid
          item
          xs={12}
          className="join-image"
          md={6}
          sx={{ width: 200, height: 400 }}
        ></Grid>
      )}
    </Grid>
  );
}
