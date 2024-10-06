import React from "react";
import { colors } from "../../configs/colors.config";
import { Grid, InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TextInput from "../../components/forms/TextInput";
import SecondaryButton from "../../components/forms/buttons/SecondaryButton";

export default function JobsHeaderLayout() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Grid sx={{ mb: 1 }}>
            <Typography
              fontFamily={"Manrope"}
              fontSize={24}
              fontWeight={900}
              color={colors.white}
            >
              Nos offres d’emplois pour vous
            </Typography>
          </Grid>
          <Grid sx={{ mb: 1, display: "flex", alignItems: "center" }}>
            <TextInput
              id={"standard-weight-helper-text-email-login"}
              placeholder="Mots clé, titre de l’emploi, ..."
              onChange={(e) => console.log(e.target.value)}
              name="search"
              type="text"
              color={colors.gray}
              borderRaduis={"var(--Radius-radius-m, 8px)"}
              bgColor={"transparent"}
              style={{
                borderRadius: "8px 0px 0px 8px",
                "& .MuiInputBase-input::placeholder": {
                  color: colors.gray,
                },
                "& .MuiOutlinedInput-root": {
                  // Styles lorsqu'il n'est pas en état de focus
                  "& fieldset": {
                    borderColor: colors.gray, // Couleur par défaut
                  },
                  // Styles lors du focus
                  "&:hover fieldset": {
                    borderColor: colors.gray, // Couleur au survol
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: colors.gray, // Couleur lors du focus
                  },
                },
                "& .MuiInputBase-input": {
                  color: colors.gray, // Changez ceci selon vos besoins
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ mr: 1, color: colors.gray }} />
                  </InputAdornment>
                ),
              }}
            />
            <SecondaryButton
              title={"Rechercher"}
              width={200}
              height={55}
              style={{ marginTop: 1 }}
              onClick={() => console.log("clicked")}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
