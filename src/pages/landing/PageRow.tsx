import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DrawingLady } from '../../assets/drawing_lady.svg';
import { AppContainer } from '../../globalStyles';

const InfoSection = styled.section`
  padding: 100px 0;
`;

const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

const PageRow = () => {
  return (
    <InfoSection>
      <AppContainer>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <Typography variant="h3">
                A task manager you can trust for life
              </Typography>
              <Typography mt={3}>
                In the 24 days that we’ve been building Todoist, we’ve never
                considered selling out or becoming acquired.
              </Typography>
              <Typography mt={3}>
                Our team is committed to staying independent and earning your
                trust for as long as you need our apps.
              </Typography>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <DrawingLady height={300} width={500} />
          </InfoColumn>
        </InfoRow>
      </AppContainer>
    </InfoSection>
  );
};

export default PageRow;
