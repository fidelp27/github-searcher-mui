import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import LocationInformation from '../../components/locationInformation';
import PaperInformation from '../../components/paperInformation';

const Description = ({ dataUser }) => {
  const { bio } = dataUser;
  return (
    <>
      <Stack sx={{ textAlign: 'left' }}>
        {bio !== null ? (
          <Typography variant="body1">{bio}</Typography>
        ) : (
          <Typography variant="body1">Este usuario aún no tiene bio</Typography>
        )}
      </Stack>
      <PaperInformation xs={12} dataUser={dataUser} />
      <LocationInformation xs={12} dataUser={dataUser} />
    </>
  );
};

export default Description;
