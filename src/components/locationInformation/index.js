import React from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import BusinessIcon from '@mui/icons-material/Business';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LocationInformation = ({ dataUser }) => {
  const { location, twitter_username, blog, company } = dataUser;

  return (
    <Grid
      container
      direction={{ xs: 'column', sm: 'column', md: 'row' }}
      spacing={2}
      sx={{ marginTop: '15px' }}
    >
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          <Typography>{location || 'No indica'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          <Link
            href={`https://twitter.com/${twitter_username}`}
            target="_blank"
            rel="noreferrer"
            underline="hover"
          >
            {' '}
            <Typography>{`@${twitter_username}` || 'No indica'}</Typography>
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LinkedInIcon />
          <Link href={blog} target="_blank" rel="noreferrer" underline="hover">
            <Typography>{blog || 'No indica'}</Typography>
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          <Typography>{company || 'No indica'}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LocationInformation;
