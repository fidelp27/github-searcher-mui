import { Avatar, Grid, Stack } from '@mui/material';
import React from 'react';
import PrincipalInformation from '../../components/principalInformation';
import Description from '../description';

const UserCard = ({ dataUser: { avatar_url, name }, dataUser }) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        paddingTop: '20px',
        justifyContent: 'center',
      }}
    >
      <Stack direction="row" sx={{ alignItems: 'center' }}>
        <Grid item xs={3}>
          <Avatar
            alt={name}
            src={avatar_url}
            sx={{ width: 200, height: 200, marginLeft: '10px', padding: '0' }}
          />
        </Grid>
        <Grid item xs={9}>
          <Stack
            direction="column"
            spacing={1}
            sx={{ margin: '25px', textAlign: 'left' }}
          >
            <PrincipalInformation dataUser={dataUser} />
            <Description dataUser={dataUser} />
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
};

export default UserCard;
