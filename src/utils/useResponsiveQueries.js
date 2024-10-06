import { useMediaQuery } from "@mui/material";

import {
  MOBILE_MIN_WIDTH,
  MOBILE_MAX_WIDTH,
  WEB_MIN_WIDTH,
  CUSTOM_WIDTH,
  WEB_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  TABLE_MIN_WIDTH,
} from "../constants/mediaQueryConstants";

export function useResponsiveQueries() {
  const mobileMinWidth = useMediaQuery(`(max-width:${MOBILE_MIN_WIDTH}px)`);
  const mobileMaxWidth = useMediaQuery(`(max-width:${MOBILE_MAX_WIDTH}px)`);
  const tabletMaxWidth = useMediaQuery(`(max-width:${TABLET_MAX_WIDTH}px)`);
  const customMaxWidth = useMediaQuery(`(max-width:${CUSTOM_WIDTH}px)`);
  const tabletMinWidth = useMediaQuery(`(max-width:${TABLE_MIN_WIDTH}px)`);
  const webMinWidth = useMediaQuery(`(min-width:${WEB_MIN_WIDTH}px)`);
  const webMaxWidth = useMediaQuery(`(max-width:${WEB_MAX_WIDTH}px)`);

  return {
    mobileMinWidth,
    mobileMaxWidth,
    tabletMaxWidth,
    tabletMinWidth,
    customMaxWidth,
    webMinWidth,
    webMaxWidth,
  };
}
