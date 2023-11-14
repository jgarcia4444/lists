import logo from './logo.svg';
import './App.css';

import ListCreationHeader from './components/ListCreationHeader';

function App() {
  return (
    <div className="App px-2 py-4">
      <h1 className="text-6xl font-sans">Lists</h1>
      <ListCreationHeader />
    </div>
  );
}

export default App;
