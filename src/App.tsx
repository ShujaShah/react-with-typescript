import './App.css';
import ListGroup from './components/ListGroup';
import { items } from './components/ListGroup';

function App() {
  
  return (
  <ListGroup items = {items} heading='Cities'/>
  )
}

export default App
