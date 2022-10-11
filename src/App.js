import './App.css';
import { Alert, Container } from '@mui/material';
import Searcher from './components/searcher';
import { useEffect, useState } from 'react';
import { getGitHubUser } from './services/users';
import UserCard from './container/card';

function App() {
  const [inputUser, setInputUser] = useState('fidelp27');
  const [error, setError] = useState(false);
  const [dataUser, setDataUser] = useState({});

  const gettingUser = async (user) => {
    try {
      const response = await getGitHubUser(user);
      if (response === 404) {
        setError(true);
        setTimeout(() => {
          setInputUser('fidelp27');
        }, 2000);
      } else {
        localStorage.setItem('user', JSON.stringify(response));
        setDataUser(response);
      }
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    gettingUser(inputUser);
    setError(false);
  }, [inputUser]);

  return (
    <div className="App">
      <Container
        fixed
        sx={{
          background: 'whitesmoke',
          maxWidth: '950px',
          width: '950px',
          height: '500px',
          borderRadius: '18px',
          diplay: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        {error && <Alert severity="error">Usuario no encontrado</Alert>}
        <Searcher
          inputUser={inputUser}
          setInputUser={setInputUser}
          error={error}
        />
        <UserCard dataUser={dataUser} />
      </Container>
    </div>
  );
}

export default App;
