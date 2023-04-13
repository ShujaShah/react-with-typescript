import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["New York", "London", "Rome", "Dubai", "Canada"];
  //items = [];

  const [selectedIndex, setSelectedIndex] = useState(0); // selected index to zero means that we are selecting New York as default index 

  return (
    <>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1>List</h1>
          {items.length === 0 && <p>No Items Found</p>} {/** true And 1 = True | False And 1 = false */}
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                className={selectedIndex === index ? "active list-group-item" : "list-group-item"}
                key={item}
                onClick={() => setSelectedIndex(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
}

export default ListGroup;
