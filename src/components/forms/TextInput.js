import { Grid, TextField, Typography } from "@mui/material";
import { colors } from "../../configs/colors.config";

function TextInput({
  id,
  rows,
  type,
  name,
  value,
  label,
  error,
  width,
  style,
  labelStyle,
  inputStyle,
  variant,
  InputRef,
  multiline,
  color,
  bgColor,
  border,
  borderRaduis,
  className,
  disabled,
  onFocus,
  required,
  onKeyUp,
  onChange,
  defaultValue,
  placeholder,
  InputProps,
}) {
  return (
    <>
      {type === "number" ? (
        <Grid sx={style}>
          <Typography
            className={className}
            fontFamily={"Manrope"}
            fontSize={12}
            fontWeight={600}
            color={color || colors.white}
            lineHeight={"normal"}
            paddingBottom={1}
            sx={labelStyle}
          >
            {label}
          </Typography>
          <TextField
            id={id}
            disabled={disabled}
            required={required}
            ref={InputRef}
            placeholder={placeholder}
            fullWidth
            onFocus={onFocus}
            onKeyUp={onKeyUp}
            sx={inputStyle}
            value={value}
            style={{
              width: width,
              color: color || colors.white,
              background: bgColor || colors.white,
              borderRadius: borderRaduis || "var(--Radius-radius-m, 8px)",
              border: border || `0.5px solid ${colors.white}`,
            }}
            name={name}
            variant={variant}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]",
            }}
            error={error}
            type={"number"}
            multiline={multiline}
            rows={rows}
            onChange={onChange}
            InputProps={InputProps}
          />
        </Grid>
      ) : (
        <Grid sx={style}>
          <Typography
            className={className}
            fontFamily={"Manrope"}
            fontSize={12}
            fontWeight={600}
            color={color || colors.white}
            lineHeight={"normal"}
            paddingBottom={1}
            sx={labelStyle}
          >
            {label}
          </Typography>
          <TextField
            id={id}
            disabled={disabled}
            required={required}
            ref={InputRef}
            style={{
              width: width,
              color: color || colors.white,
              background: bgColor || colors.white,
              borderRadius: borderRaduis || "var(--Radius-radius-m, 4px)",
              // border: border || `0.5px solid ${colors.white}`
            }}
            sx={inputStyle}
            defaultValue={defaultValue}
            placeholder={placeholder}
            fullWidth
            onFocus={onFocus}
            onKeyUp={onKeyUp}
            value={value}
            name={name}
            InputProps={InputProps}
            variant={variant || "outlined"}
            type={type}
            onChange={onChange}
            rows={rows}
            multiline={multiline}
            error={error}
          />
        </Grid>
      )}
      {error ? (
        <Grid sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: "red",
              letterSpacing: 0.5,
              textTransform: "capitalize",
              fontSize: 12,
            }}
          >
            {error}
          </Typography>
        </Grid>
      ) : null}
    </>
  );
}
export default TextInput;
