import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "London", "Rome", "San Francisco", "Beijing"];
  const handleSelectItem = (item: string) => {console.log(item)};

  return <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />;
}

export default App;
