import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  FormControl,
  Select,
  FormControlLabel,
  MenuItem,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { colors } from "../../configs/colors.config";
import Checkbox from "@mui/material/Checkbox";
import TextInput from "../forms/TextInput";
import PrimaryButton from "../forms/buttons/PrimaryButton";

const CardFilter = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 320 }}>
      <Card
        variant="outlined"
        sx={{
          m: 1,
          boxShadow: `5px 5px 5px 0px rgba(15, 133, 168, 0.08)`,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Grid sx={{ flexDirection: "column" }}>
            <Grid sx={{ mt: 1, mb: 1 }}>
              <Typography
                fontFamily={"Manrope"}
                fontSize={16}
                fontWeight={700}
                color={colors.black}
              >
                Catégorie de l’offre
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                mt: 1,
                mb: 1,
              }}
            >
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="CDI" />
                <FormControlLabel
                  required
                  control={<Checkbox defaultChecked />}
                  label="CDD"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Mission ponctuelle"
                />
              </FormGroup>
            </Grid>
            <Grid sx={{ mb: 3, display: "flex", alignItems: "center" }}>
              <TextInput
                label={"Ville"}
                id={"standard-weight-helper-text-email-login"}
                placeholder="Entrez votre ville de recherche"
                onChange={(e) => console.log(e.target.value)}
                name="search"
                type="text"
                color={colors.black}
                borderRaduis={"var(--Radius-radius-m, 8px)"}
                bgColor={"transparent"}
                style={{
                  width: "100%",
                  borderRadius: "8px 0px 0px 8px",
                  "& .MuiInputBase-input::placeholder": {
                    color: colors.black,
                  },
                  "& .MuiOutlinedInput-root": {
                    // Styles lorsqu'il n'est pas en état de focus
                    "& fieldset": {
                      borderColor: colors.black, // Couleur par défaut
                    },
                    // Styles lors du focus
                    "&:hover fieldset": {
                      borderColor: colors.black, // Couleur au survol
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: colors.black, // Couleur lors du focus
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: colors.black, // Changez ceci selon vos besoins
                  },
                }}
              />
            </Grid>
            <Grid
              sx={{
                mb: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                fontFamily={"Manrope"}
                fontSize={12}
                fontWeight={700}
                color={colors.black}
              >
                Séniorité du poste
              </Typography>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Toutes</MenuItem>
                  <MenuItem value={20}>Toutes</MenuItem>
                  <MenuItem value={30}>Toutes</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <PrimaryButton
                title={"Rechercher"}
                // width={150}
                onClick={() => console.log("filter values")}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardFilter;
