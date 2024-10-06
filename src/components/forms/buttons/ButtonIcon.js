import IconButton from "@mui/material/IconButton";
import { Grid, Typography } from "@mui/material";

export default function ButtonIcon({
  disabled,
  size,
  style,
  onClick,
  icon,
  label,
}) {
  return (
    <IconButton sx={style} size={size} disabled={disabled} onClick={onClick}>
      {label ? (
        <Grid>
          {icon}
          <Typography
            sx={style}
            lineHeight={"normal"}
            fontStyle={"normal"}
            fontSize={14}
            fontWeight={600}
          >
            {label}
          </Typography>
        </Grid>
      ) : (
        <>{icon}</>
      )}
    </IconButton>
  );
}
