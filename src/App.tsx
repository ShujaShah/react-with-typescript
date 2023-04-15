import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  // let items = ["New York", "London", "Rome", "San Francisco", "Beijing"];
  // const handleSelectItem = (item: string) => {console.log(item)};

  return (
    <>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />; */}
      <Alert>
        <span>Hello World!</span>
      </Alert>
      <Button  children="Shuja" onSubmit={() => console.log("here i am submitting")} />
    </>
  );
}

export default App;
