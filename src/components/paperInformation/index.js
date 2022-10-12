import { Stack, Paper, Typography } from '@mui/material';
import React from 'react';

const PaperInformation = ({ dataUser }) => {
  const { public_repos, followers, following } = dataUser;
  return (
    <Paper elevation={3}>
      <Stack
        spacing={3}
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        textAlign="center"
        sx={{
          margin: '20px',
          textAlign: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Stack textAlign="center" maxWidth="220px">
          <Typography variant="h5">Repos</Typography>
          <Typography variant="h6">{public_repos}</Typography>
        </Stack>
        <Stack textAlign="center" maxWidth="220px">
          <Typography variant="h5">Followers</Typography>
          <Typography variant="h6">{followers}</Typography>
        </Stack>
        <Stack textAlign="center" maxWidth="220px">
          <Typography variant="h5">Following</Typography>
          <Typography variant="h6">{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default PaperInformation;
