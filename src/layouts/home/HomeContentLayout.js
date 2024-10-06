import { Grid, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../configs/colors.config";
import PrimaryButton from "../../components/forms/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useResponsiveQueries } from "../../utils/useResponsiveQueries";
import CardJob from "../../components/cards/CardJob";
import { jobs } from "../../constants/shared";

export default function HomeContentLayout() {
  const navigate = useNavigate();
  const { mobileMaxWidth } = useResponsiveQueries();
  return (
    <Grid container>
      <Grid container sx={{ flexDirection: "column" }}>
        <Grid sx={{ mb: 1 }}>
          <Typography
            fontFamily={"Manrope"}
            fontSize={24}
            fontWeight={600}
            color={colors.black}
          >
            Nos offres récemment publiées
          </Typography>
        </Grid>
        <Grid container spacing={1}>
          <Grid item md={6} sx={{ mb: 1, textAlign: "left" }}>
            <Typography
              fontFamily={"Manrope"}
              fontSize={14}
              fontWeight={300}
              color={colors.black}
            >
              Lorem ipsum dolor sit amet consectetur. Pellentesque eget volutpat
              dui viverra tempus eget consectetur. Auctor ac cras quis nam lorem
              malesuada. Est tempor risus.
            </Typography>
          </Grid>
          <Grid item md={6} sx={{ mb: 1, textAlign: "right" }}>
            <PrimaryButton
              title={"Consulter nos offres"}
              width={mobileMaxWidth ? "100%" : 300}
              onClick={() => navigate("/")}
            />
          </Grid>
        </Grid>
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
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CardJob {...job} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
