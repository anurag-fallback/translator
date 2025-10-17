import {Box, Button, styled, Typography, useTheme} from '@mui/material';
import LoadingButton from "tg.component/common/form/LoadingButton";
import {T} from "@tolgee/react";

const StyledIllustration = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -23px;
  margin-bottom: 40px;
  text-align: center;
`;

const StyledMouse = styled('img')`
  user-select: none;
  pointer-events: none;
`;

export function MouseIllustration() {
  const theme = useTheme();
  return (
    <StyledIllustration >
      <StyledMouse
        src={
          theme.palette.mode === 'dark'
            ? '/images/language.gif'
            : '/images/language.gif'
        }
      />
        <h2>Welcome To Lokale</h2>
        <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={() => window.open('https://demo.lokale.fallback.in', '_blank')}
        >
            <T keyName="Explore Lokale" />
        </Button>
        <Typography
            mt={1}
            variant="body2"
            color="black"
        >
            <T keyName="demo_website_text" />
        </Typography>
    </StyledIllustration>
  );
}
