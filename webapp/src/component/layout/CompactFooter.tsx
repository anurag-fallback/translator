import { Link, Box, styled } from '@mui/material';

import TwitterLogo from 'tg.svgs/social/twitter.svg?react';
import FacebookLogo from 'tg.svgs/social/facebook.svg?react';
import GitHubLogo from 'tg.svgs/social/github.svg?react';
import LinkedInLogo from 'tg.svgs/social/linkedin.svg?react';
import SlackLogo from 'tg.svgs/social/slack.svg?react';
import DiscussionsLogo from 'tg.svgs/social/discussions.svg?react';

const StyledContainer = styled('div')`
  display: grid;
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  padding: ${({ theme }) => theme.spacing(3, 4)};
  justify-items: center;
  position: relative;
  align-content: start;
`;

const StyledContent = styled('div')`
  display: grid;
  width: min(800px, 100%);
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
`;

const StyledSocial = styled(Box)`
  padding: ${({ theme }) => theme.spacing(0.5, 3)};
`;

const StyledLink = styled(Link)`
  display: grid;
  gap: 8px;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  transition: color 50ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
  grid-template-columns: 25px auto;
  justify-items: center;
`;

const StyledSocialText = styled('span')`
  justify-self: start;
`;

export const CompactFooter = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledSocial>
          <StyledLink
            href="https://twitter.com/ToyotaServiceSa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterLogo />
            <StyledSocialText>Twitter</StyledSocialText>
          </StyledLink>
        </StyledSocial>
        <StyledSocial>
          <StyledLink
            href="https://ar-ar.facebook.com/ToyotaServiceSA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookLogo />
            <StyledSocialText>Facebook</StyledSocialText>
          </StyledLink>
        </StyledSocial>
        <StyledSocial>
          <StyledLink
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogo />
            <StyledSocialText>GitHub</StyledSocialText>
          </StyledLink>
        </StyledSocial>
        <StyledSocial>
          <StyledLink
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInLogo />
            <StyledSocialText>LinkedIn</StyledSocialText>
          </StyledLink>
        </StyledSocial>
        <StyledSocial>
          <StyledLink
            href="Link_of_slack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlackLogo />
            <StyledSocialText>Slack</StyledSocialText>
          </StyledLink>
        </StyledSocial>
        <StyledSocial>
          <StyledLink
            href="Link of _github_discussion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscussionsLogo />
            <StyledSocialText>Discussions</StyledSocialText>
          </StyledLink>
        </StyledSocial>
      </StyledContent>
    </StyledContainer>
  );
};
