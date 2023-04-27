import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((res) => setUsers(res.data));
  }, []);
  return (
    <>
      {users.map((user) => (
        <li key={user.id}>{user.username}</li>
      ))}
    </>
  );
}

export default App;
