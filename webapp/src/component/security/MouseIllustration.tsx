import { Box, styled, useTheme } from '@mui/material';

const StyledIllustration = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
            ? '/images/mouseYogaDark.svg'
            : '/images/mouseYogaLight.svg'
        }
      />
        <h2>Welcome To Jameel Translate</h2>
    </StyledIllustration>
  );
}
