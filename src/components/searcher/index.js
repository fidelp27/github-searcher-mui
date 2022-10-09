import React from 'react';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = () => {
  return (
    <Stack
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="GitHub User"
        placeholder="fidelp27"
        sx={{ width: '80%', marginTop: '30px' }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default Searcher;
