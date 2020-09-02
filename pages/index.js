import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import PrimaryButton from './components/utils/PrimaryButton';
import { ThemeProvider } from '@material-ui/core';
import {defaultTheme} from '../helper/Theme';
export default function Index() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Buttons example
          </Typography>
          <PrimaryButton color="primary">Primary Button</PrimaryButton>
          <PrimaryButton color="secondary">Secondary Button</PrimaryButton>

          <PrimaryButton color="primary" variant="outlined">Outlined Primary Button</PrimaryButton>
          <PrimaryButton color="secondary" variant="outlined">Outlined Secondary Button</PrimaryButton>

          <PrimaryButton color="primary" disabled>Disabled Primary Button</PrimaryButton>
          <PrimaryButton color="primary" variant="outlined" disabled>Outlined Primary Button</PrimaryButton>

          <PrimaryButton color="secondary" disabled>Disabled Secondary Button</PrimaryButton>
          <PrimaryButton color="secondary" variant="outlined" disabled>Disabled Outlined Secondary Button</PrimaryButton>

        </Box>
      </Container>
    </ThemeProvider>
  );
}