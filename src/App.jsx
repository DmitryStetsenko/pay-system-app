import { Home, Cards, Contragents } from './pages';
import Card from './UI/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card />
      <Card size="small" type="light" bgcolor="silver"/>
      <Card type="light" bgcolor="white" narrow={ true }/>
    </div>
  );
}

export default App;
