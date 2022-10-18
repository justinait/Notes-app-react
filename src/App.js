import Board from './components/Board/Board';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountProvider from './context/CountContext';

function App() {
  return (
    <CountProvider>
      <Board />
    </CountProvider>
  );
}

export default App;
