import './App.css';
import Card from './UI/Card';

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
