import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as DrawingLady } from '../../assets/drawing_lady.svg';

const PageRowStyle = styled.div`
  display: grid;
  margin: 80px 20%;
  grid-template-columns: 1fr 1fr;
  align-content: center;
`;

const PageRow = () => {
  return (
    <PageRowStyle>
      <Box>
        <Typography variant="h3">
          A task manager you can trust for life
        </Typography>
        <Typography mt={3}>
          In the 24 days that we’ve been building Todoist, we’ve never
          considered selling out or becoming acquired.
        </Typography>
        <Typography mt={3}>
          Our team is committed to staying independent and earning your trust
          for as long as you need our apps.
        </Typography>
      </Box>
      <Box>
        <DrawingLady height={300} width={500} />
      </Box>
    </PageRowStyle>
  );
};

export default PageRow;
