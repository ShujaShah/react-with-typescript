import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const addUser = () => {
    const newUser = { id: 0, name: "Shuja", username: "shujashah", email: "shuja.ashraf11@gmail.com" };
    const originalUsers = [...users];
    setUsers([newUser, ...users]);
    axios.post("https://jsonplaceholder.typicode.com/users", newUser)
    .then(res=>setUsers([res.data, ...users]))
    .catch((err)=>{
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <>
      {isloading && <div className="spinner-border"> </div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item d-flex justify-content-between" key={user.id}>
            {user.name}
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
