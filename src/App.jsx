import { useEffect } from "react";
import useForm from "../hooks/useForm";
import "./App.css";

function App() {
  const [form, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    console.log("things");
  }, [form.name]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="App">
      <form>
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={form.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}

export default App;
