import { Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  width: 28px;
`;

const Task = () => {
  return (
    <Box mt={2}>
      <CheckBox />
      <p>This is a task</p>
    </Box>
  );
};

export default Task;
