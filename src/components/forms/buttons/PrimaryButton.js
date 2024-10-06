import { Typography, Button } from "@mui/material";
import { colors } from "../../../configs/colors.config";

export default function PrimaryButton({
  variant,
  title,
  size,
  onClick,
  fontSize,
  color,
  bgcolor,
  borderRadius,
  fontWeight,
  type,
  style,
  width,
  height,
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
        background: bgcolor || colors.background,
        width: width,
        height: height || 42,
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
        className="primary-button"
        textTransform={"none"}
        lineHeight={1.5}
        fontSize={fontSize || 14}
        fontFamily={"Manrope"}
        fontWeight={fontWeight || 200}
        fontStyle={"normal"}
      >
        {title}
      </Typography>
    </Button>
  );
}
