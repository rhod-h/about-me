import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Footer from './Footer';
import Title from './Title';
import DisplayCard from './DisplayCard';
import Github from './Resources/GithubLogo.png';
import Hat from './Resources/Hat.jpeg';

export default function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Header label="About Rhodri Hewitson" />
      <main>
        <Title title="About Rhodh" summary="Build things and lead inquisitive empowered teams" image={Hat} />
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item key="githubUser" xs={12} sm={6} md={4}>
              <DisplayCard
                heading="Github User"
                describe="See the Rhodh personal Github account"
                image={Github}
                url="https://github.com/rhodh/"
                linkLabel="See Github User"
              />
            </Grid>
            <Grid item key="githubOrg" xs={12} sm={6} md={4}>
              <DisplayCard
                heading="Github Organization"
                describe="See the rhod-h Organizational work"
                image={Github}
                url="https://github.com/rhod-h"
                linkLabel="See Github Organization"
              />
            </Grid>
          </Grid>
        </Container>
      </main>

      <Footer header="About Rhodh" />
    </ThemeProvider>
  );
}
