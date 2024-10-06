import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import { colors } from "../../configs/colors.config";
import {
  Grid,
  IconButton,
  Container,
  Typography,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import { WEB_MAX_WIDTH } from "../../constants/mediaQueryConstants";
import { logo } from "../../constants/images";
import { pages } from "../../constants/shared";
import { useState, useLayoutEffect } from "react";
import PrimaryButton from "../forms/buttons/PrimaryButton";

export default function Navbar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentPage, setcurrentPage] = useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePageSelected = (redirectTo) => {
    navigate(redirectTo);
  };

  useLayoutEffect(() => {
    const pathName = window.location.pathname;
    const filter = pages.findIndex((page) => page.link === pathName);
    setcurrentPage(filter);
  });

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
        }}
      >
        <Toolbar disableGutters sx={{ width: "100%" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: colors.black }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    handlePageSelected(page.link);
                  }}
                >
                  <Typography
                    fontFamily={"Manrope"}
                    fontSize={14}
                    fontWeight={500}
                    sx={{
                      color:
                        currentPage === index ? colors.first : colors.black,
                    }}
                    textAlign="center"
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem key={"register"}>
                <Typography
                  fontFamily={"Manrope"}
                  fontSize={14}
                  fontWeight={500}
                  color={colors.black}
                  onClick={() => navigate("/register")}
                  sx={{
                    color: colors.black,
                    display: "block",
                    cursor: "pointer",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  S’inscrire
                </Typography>
              </MenuItem>
              <MenuItem key={"login"}>
                <PrimaryButton
                  title={"Se connecter"}
                  width={150}
                  onClick={() => navigate("/login")}
                />
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: colors.black,
              display: { xs: "flex", md: "none" },
              textAlign: "left",
            }}
          >
            {pages[currentPage]?.label}
          </Typography>
          <Grid
            item
            sx={{
              paddingTop: 2,
              paddingBottom: 2,
              cursor: "pointer",
              color: colors.black,
            }}
          >
            <Typography
              component="div"
              sx={{ flexGrow: 1, textAlign: "start" }}
            >
              <img
                src={logo}
                alt="logo jobaas"
                style={{
                  marginTop: 4,
                  width: 80,
                  height: 24.789,
                  flexShrink: 0,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              />
            </Typography>
          </Grid>
          <Grid
            container
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              borderWidth: 2,
              alignItems: "center",
              minHeight: 150,
            }}
          >
            {pages.map((page, index) => (
              <Typography
                key={page.name}
                fontFamily={"Manrope"}
                fontSize={14}
                fontWeight={500}
                color={colors.black}
                onClick={() => {
                  handleCloseNavMenu();
                  handlePageSelected(page.link);
                }}
                sx={{
                  my: 2,
                  color: currentPage === index ? colors.first : colors.black,
                  display: "flex",
                  marginX: 2,
                  cursor: "pointer",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {page.label}
                {currentPage === index && (
                  <Brightness1Icon
                    sx={{ color: colors.first, width: 5, height: 5 }}
                  />
                )}
              </Typography>
            ))}
            <Typography
              fontFamily={"Manrope"}
              fontSize={14}
              fontWeight={500}
              color={colors.black}
              onClick={() => navigate("/register")}
              sx={{
                my: 2,
                color: colors.black,
                display: "block",
                marginX: 2,
                cursor: "pointer",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              S’inscrire
            </Typography>
            <PrimaryButton
              title={"Se connecter"}
              width={150}
              onClick={() => navigate("/login")}
            />
          </Grid>
        </Toolbar>
      </Container>
    </Grid>
  );
}
