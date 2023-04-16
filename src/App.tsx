import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";

function App() {
  // let items = ["New York", "London", "Rome", "San Francisco", "Beijing"];
  // const handleSelectItem = (item: string) => {console.log(item)};

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />; */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          <strong>Alert!</strong> Are you sure you want to submit?
        </Alert>
      )}
      <Button children="Submit " onSubmit={() => setAlertVisible(true)} />

      <Like onSubmit={() => console.log("Clicked")} />
    </>
  );
}

export default App;
