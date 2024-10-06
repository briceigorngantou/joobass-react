import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import { Grid, Typography } from "@mui/material";
import badgImage from "../../assets/badgeIcon.png";
import { colors } from "../../configs/colors.config";

const CardJob = ({ sponsored, profile, city, contratType, pay }) => (
  <Box sx={{ minWidth: 280 }}>
    <Card
      variant="outlined"
      sx={{
        m: 1,
        boxShadow: `5px 5px 5px 0px rgba(15, 133, 168, 0.08)`,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src={badgImage} alt="badgeIcon" width={30} />
          {sponsored && (
            <Typography
              fontFamily={"Manrope"}
              fontSize={12}
              fontWeight={300}
              color={colors.label}
            >
              Sponsorisé
            </Typography>
          )}
        </Grid>
        <Grid sx={{ flexDirection: "column" }}>
          <Grid sx={{ mt: 1, mb: 1 }}>
            <Typography
              fontFamily={"Manrope"}
              fontSize={16}
              fontWeight={700}
              color={colors.black}
            >
              {profile}
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              mt: 1,
              mb: 1,
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center", mr: 2 }}>
              <PlaceOutlinedIcon
                sx={{ width: 15, height: 15, mr: 0.5, color: colors.label }}
              />
              <Typography
                fontFamily={"Manrope"}
                fontSize={12}
                fontWeight={200}
                color={colors.black}
              >
                {city}
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <BusinessCenterOutlinedIcon
                sx={{ width: 15, height: 15, mr: 0.5, color: colors.label }}
              />
              <Typography
                fontFamily={"Manrope"}
                fontSize={12}
                fontWeight={200}
                color={colors.black}
              >
                {contratType}
              </Typography>
            </Grid>
          </Grid>
          <Grid sx={{ display: "flex", alignItems: "center", mt: 1, mb: 1 }}>
            <AttachMoneyOutlinedIcon
              sx={{ width: 15, height: 15, mr: 0.5, color: colors.label }}
            />
            <Typography
              fontFamily={"Manrope"}
              fontSize={12}
              fontWeight={200}
              color={colors.black}
            >
              {pay}
            </Typography>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography
              fontFamily={"Manrope"}
              fontSize={12}
              fontWeight={200}
              color={"#685BC5"}
              sx={{ bgcolor: "#f5f4fc", p: 0.4, px: 1, mr: 1, borderRadius: 1 }}
            >
              Audit
            </Typography>
            <Typography
              fontFamily={"Manrope"}
              fontSize={12}
              fontWeight={200}
              color={"#685BC5"}
              sx={{ bgcolor: "#f5f4fc", p: 0.4, px: 1, mr: 1, borderRadius: 1 }}
            >
              Informatique
            </Typography>
            <Typography
              fontFamily={"Manrope"}
              fontSize={12}
              fontWeight={200}
              color={"#685BC5"}
              sx={{ bgcolor: "#f5f4fc", p: 0.4, px: 1, mr: 1, borderRadius: 1 }}
            >
              Débutant
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </Box>
);

export default CardJob;
