import { Typography, Button } from "@mui/material";
import { colors } from "../../../configs/colors.config";

export default function SecondaryButton({
  variant,
  title,
  size,
  onClick,
  fontSize,
  fontWeight,
  type,
  color,
  height,
  bgcolor,
  borderRadius,
  style,
  width,
  disabled,
  startIcon,
  endIcon,
}) {
  return (
    <Button
      fullWidth
      variant={variant}
      disabled={disabled}
      style={{
        color: color || colors.white,
        background: bgcolor || colors.first,
        width: width,
        height: height || 50,
        borderRadius: borderRadius || 8,
        padding: 8,
      }}
      sx={style}
      size={size}
      onClick={onClick}
      type={type}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      <Typography
        textTransform={"none"}
        fontFamily={"Manrope"}
        fontSize={fontSize || 14}
        fontWeight={fontWeight || 200}
        fontStyle={"normal"}
      >
        {title}
      </Typography>
    </Button>
  );
}
