import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BoardLady } from '../../assets/lady_board.svg';

const FooterContainer = styled.div`
  background: #eff1ff;
  height: 400px;
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const HorizontalLine = styled.hr`
  border-top: 1px solid #dbd6d2;
  width: 60%;
  z-index: 50;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Box display="flex">
        <Box>
          <BoardLady height={300} width={500} />
        </Box>
        <Box display="flex" flexDirection="column" mt={5}>
          <Typography variant="h3">
            Achieve peace of mind
            <br />
            with Task Manager
          </Typography>
          <Box mt={3}>
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
      <HorizontalLine />
      <Box mt={1}>
        <Typography>&copy; John Oshalusi 2022</Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
