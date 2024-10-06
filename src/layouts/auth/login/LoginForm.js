import { useState } from "react";
import {
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Formik } from "formik";
import TextInput from "../../../components/forms/TextInput";
import { useResponsiveQueries } from "../../../utils/useResponsiveQueries";
import { colors } from "../../../configs/colors.config";
import { loginSchemaValidation } from "../../../validations/authtentication";

export default function LoginForm() {
  const navigate = useNavigate();
  const { tabletMaxWidth } = useResponsiveQueries();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = async (values, actions) => {
    const { setSubmitting } = actions;
    setSubmitting(true);
    console.log(values);
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        padding: tabletMaxWidth
          ? "0px var(--Spacing-spacing-5xl, 20px)"
          : "0px var(--Spacing-spacing-5xl, 40px)",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          alignSelf: "stretch",
        }}
      >
        <Grid
          sx={{
            minHeight: 500,
            width: "100%",
            borderRadius: "var(--Radius-Radius-l, 16px)",
            border: "1px solid var(--Color-Border-Border, #E6EDF5)",
            background: "var(--Colors-White-White, #FFF)",
            padding: "var(--Spacing-spacing-xl, 40px)",
          }}
        >
          <Grid sx={{ mb: 4, textAlign: "left" }}>
            <Typography
              color={colors.black}
              fontFamily={"Manrope"}
              lineHeight={"normal"}
              fontStyle={"normal"}
              fontSize={tabletMaxWidth ? 20 : 24}
              fontWeight={600}
            >
              Se connecter
            </Typography>
          </Grid>
          <Grid sx={{ mb: 4, textAlign: "left" }}>
            <Typography
              color={colors.black}
              lineHeight={"normal"}
              fontFamily={"Manrope"}
              fontStyle={"normal"}
              fontSize={16}
              fontWeight={400}
            >
              Vous n’avez pas de compte ?{" "}
              <span
                style={{
                  color: "var(--Colors-Brand-Brand-1, #397DF9)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/register/stepped1");
                }}
              >
                S’inscrire
              </span>
            </Typography>
          </Grid>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchemaValidation}
            onSubmit={handleSubmit}
          >
            {({
              errors,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <>
                {errorMessage && (
                  <Grid item xs={12} sx={{ mb: 1, textAlign: "left" }}>
                    <FormHelperText sx={{ fontFamily: "Manrope" }} error>
                      {errorMessage}
                    </FormHelperText>
                  </Grid>
                )}
                <Grid sx={{ mb: 4, textAlign: "left" }}>
                  <TextInput
                    error={Boolean(touched.email && errors.email)}
                    id={"standard-weight-helper-text-email-login"}
                    label="Adresse mail"
                    placeholder="Entrer votre adresse mail"
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    type="email"
                    color={colors.textSecondary}
                    border={"1px solid var(--Color-Border-Border, #E6EDF5)"}
                    borderRaduis={"var(--Radius-radius-m, 8px)"}
                    bgColor={"var(--Colors-White-White, #FFF)"}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText
                      sx={{ fontFamily: "Manrope" }}
                      error
                      id="standard-weight-helper-text-email-login"
                    >
                      {errors.email}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid sx={{ mb: 4, textAlign: "left" }}>
                  <TextInput
                    id={"standard-weight-helper-text-password-login"}
                    label="Mot de passe"
                    error={Boolean(touched.password && errors.password)}
                    placeholder="Entrer votre mot de passe"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    color={colors.textSecondary}
                    border={"1px solid var(--Color-Border-Border, #E6EDF5)"}
                    bgColor={"var(--Colors-White-White, #FFF)"}
                    borderRaduis={"var(--Radius-radius-m, 8px)"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText
                      sx={{ fontFamily: "Manrope" }}
                      error
                      id="standard-weight-helper-text-password-login"
                    >
                      {errors.password}
                    </FormHelperText>
                  )}
                </Grid>
                <Grid sx={{ mb: 4, textAlign: "left", display: "flex" }}>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 1.1,
                      background: "var(--color-text-text-disable, #A2A2A2)",
                    }}
                  ></Grid>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      height: 1.1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      color={colors.textDisable}
                      lineHeight={"normal"}
                      fontFamily={"Manrope"}
                      fontStyle={"normal"}
                      fontSize={16}
                      fontWeight={400}
                    >
                      ou
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 1.1,
                      background: "var(--color-text-text-disable, #A2A2A2)",
                    }}
                  ></Grid>
                </Grid>
                <Grid sx={{ mb: 2, textAlign: "left" }}></Grid>
                <Grid sx={{ mb: 2, textAlign: "left" }}></Grid>
              </>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
}
