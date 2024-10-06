import { Grid, InputAdornment, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../configs/colors.config";
import TextInput from "../../components/forms/TextInput";
import SearchIcon from "@mui/icons-material/Search";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SecondaryButton from "../../components/forms/buttons/SecondaryButton";
import PrimaryButton from "../../components/forms/buttons/PrimaryButton";

export default function HomeHeaderLayout() {
  const navigate = useNavigate();
  return (
    <Grid container >
      <Grid container sx={{ flexDirection: "column" }}>
        <Grid sx={{ mb: 1 }}>
          <Typography
            fontFamily={"Manrope"}
            fontSize={14}
            fontWeight={300}
            color={colors.textSecondary}
          >
            TROUVE LE JOB DE TES RÊVES{" "}
            <span style={{ fontWeight: 400 }}>JOBAAS</span>
          </Typography>
        </Grid>
        <Grid sx={{ mb: 1 }}>
          <Typography
            fontFamily={"Manrope"}
            fontSize={32}
            fontWeight={900}
            color={colors.black}
          >
            Des milliers d'
            <span style={{ color: colors.first }}>offres d'emploi</span> dans
            tous les secteurs, à portée de clic
          </Typography>
        </Grid>
        <Grid sx={{ mb: 1 }}>
          <Typography
            fontFamily={"Manrope"}
            fontSize={14}
            fontWeight={300}
            color={colors.black}
          >
            Bienvenue sur Jobaas, votre plateforme incontournable pour la
            recherche et la publication d'offres d'emploi. Que vous soyez à la
            recherche de nouvelles opportunités ou que vous souhaitiez recruter
            les meilleurs talents, Jobaas est là pour vous aider à atteindre vos
            objectifs.
          </Typography>
        </Grid>
        <Grid
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#F8F8F8",
            borderWidth: 1,
            borderRadius: 2,
            width: "94%",
          }}
        >
          <TextInput
            id={"standard-weight-helper-text-email-login"}
            placeholder="Mots clé, titre de l’emploi, ..."
            onChange={(e) => console.log(e.target.value)}
            name="email"
            type="email"
            color={colors.textSecondary}
            border={"1px solid var(--Color-Border-Border, #F8F8F8)"}
            borderRaduis={"var(--Radius-radius-m, 8px)"}
            bgColor={"var(--Colors-White-White, #F8F8F8)"}
            style={{
              borderRadius: "8px 0px 0px 8px",
              border: `0.5px solid #F8F8F8`,
              "& .MuiInputBase-input::placeholder": {
                color: colors.gray,
              },
              "& .MuiOutlinedInput-root": {
                // Styles lorsqu'il n'est pas en état de focus
                "& fieldset": {
                  borderColor: "#F8F8F8", // Couleur par défaut
                },
                // Styles lors du focus
                "&:hover fieldset": {
                  borderColor: "#F8F8F8", // Couleur au survol
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#F8F8F8", // Couleur lors du focus
                },
              },
              "& .MuiInputBase-input": {
                color: colors.gray, // Changez ceci selon vos besoins
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ mr: 1 }} />
                </InputAdornment>
              ),
            }}
          />
          <TextInput
            id={"standard-weight-helper-text-email-login"}
            placeholder="Localisation"
            onChange={(e) => console.log(e.target.value)}
            name="email"
            type="email"
            color={colors.textSecondary}
            border={"1px solid var(--Color-Border-Border, #F8F8F8)"}
            borderRaduis={"var(--Radius-radius-m, 8px)"}
            bgColor={"var(--Colors-White-White, #F8F8F8)"}
            style={{
              borderRadius: "8px 0px 0px 8px",
              border: `0.5px solid #F8F8F8`,
              "& .MuiInputBase-input::placeholder": {
                color: colors.gray,
              },
              "& .MuiOutlinedInput-root": {
                // Styles lorsqu'il n'est pas en état de focus
                "& fieldset": {
                  borderColor: "#F8F8F8", // Couleur par défaut
                },
                // Styles lors du focus
                "&:hover fieldset": {
                  borderColor: "#F8F8F8", // Couleur au survol
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#F8F8F8", // Couleur lors du focus
                },
              },
              "& .MuiInputBase-input": {
                color: colors.gray, // Changez ceci selon vos besoins
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PlaceOutlinedIcon sx={{ mr: 1 }} />
                </InputAdornment>
              ),
            }}
          />
          <SecondaryButton
            title={"Rechercher"}
            width={200}
            height={55}
            onClick={() => console.log("clicked")}
          />
        </Grid>
        <Grid sx={{ mb: 2 }}>
          <Typography
            fontFamily={"Manrope"}
            fontSize={24}
            fontWeight={600}
            color={colors.black}
          >
            ____ Vous recrutez ?
          </Typography>
        </Grid>
        <Grid sx={{ mb: 2 }}>
          <Typography
            fontFamily={"Manrope"}
            fontSize={14}
            fontWeight={300}
            color={colors.black}
          >
            Accédez à des milliers de talents qualifiés prêts à rejoindre votre
            équipe. Publiez votre offre d'emploi dès aujourd'hui et trouvez le
            candidat idéal pour votre entreprise.
          </Typography>
        </Grid>
        <PrimaryButton
          title={"Publier un offre"}
          width={150}
          onClick={() => navigate("/login")}
        />
      </Grid>
    </Grid>
  );
}
