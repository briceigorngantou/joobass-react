import { acceptedFiles } from "../../types/dropzone";
import { colors } from "../../configs/colors.config";
import { EditOutlined } from "@mui/icons-material";
import { Grid, Typography, FormControl, Box, SvgIcon } from "@mui/material";
import Dropzone from "react-dropzone";

export default function RenderDropzone({
  label,
  field,
  values,
  setFieldValue,
}) {
  return (
    <Grid sx={{ mb: 4, textAlign: "left" }}>
      <Typography
        color={colors.textSecondary}
        lineHeight={"normal"}
        fontFamily={"Manrope"}
        fontStyle={"normal"}
        fontSize={16}
        fontWeight={400}
      >
        {label}
      </Typography>
      <Grid sx={{ display: "flex", textAlign: "center", width: "100%" }}>
        <FormControl sx={{ mt: 2 }} fullWidth>
          <Dropzone
            accept={acceptedFiles}
            multiple={false}
            onDrop={(acceptedFile) => setFieldValue(field, acceptedFile[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <Box
                {...getRootProps()}
                border={"2px dashed"}
                p="1rem"
                sx={{
                  "&:hover": { cursor: "pointer" },
                  background: "var(--Colors-White-White, #FFF)",
                  border: "1px dashed var(--Color-Border-Border, #E6EDF5)",
                  borderRadius: "var(--Radius-radius-m, 8px)",
                }}
              >
                <input {...getInputProps()} />
                {!values[field] ? (
                  <Grid
                    sx={{
                      height: 80,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M21.5986 15.6416V19.6416C21.5986 20.172 21.3879 20.6807 21.0128 21.0558C20.6378 21.4309 20.1291 21.6416 19.5986 21.6416H5.59863C5.0682 21.6416 4.55949 21.4309 4.18442 21.0558C3.80935 20.6807 3.59863 20.172 3.59863 19.6416V15.6416"
                          stroke="#171E25"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.59863 10.6416L12.5986 15.6416L17.5986 10.6416"
                          stroke="#171E25"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.5986 15.6416V3.6416"
                          stroke="#171E25"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </SvgIcon>
                    <Typography
                      fontFamily={"Manrope"}
                      fontStyle={"normal"}
                      fontSize={14}
                      fontWeight={600}
                    >
                      Document
                    </Typography>
                    <Typography
                      fontFamily={"Manrope"}
                      fontStyle={"normal"}
                      fontSize={14}
                      fontWeight={400}
                    >
                      Importer un fichier .pdf
                    </Typography>
                  </Grid>
                ) : (
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      fontFamily={"Manrope"}
                      fontStyle={"normal"}
                      fontSize={14}
                      fontWeight={400}
                    >
                      {values[field]?.name}
                    </Typography>
                    <EditOutlined />
                  </Grid>
                )}
              </Box>
            )}
          </Dropzone>
        </FormControl>
      </Grid>
    </Grid>
  );
}
