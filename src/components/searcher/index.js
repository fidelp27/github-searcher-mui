import React, { useState } from 'react';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = ({ setInputUser, error }) => {
  const [valueInput, setValueInput] = useState('');

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

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
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSubmit} disabled={!valueInput}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default Searcher;
