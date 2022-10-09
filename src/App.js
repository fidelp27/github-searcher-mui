import './App.css';
import { Container } from '@mui/material';
import Searcher from './components/searcher';

function App() {
  return (
    <div className="App">
      <Container
        fixed
        sx={{
          background: 'whitesmoke',
          height: '500px',
          borderRadius: '18px',
          marginTop: '40px',
          diplay: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Searcher />
      </Container>
    </div>
  );
}

export default App;
