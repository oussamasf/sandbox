import { useEffect, useState, useRef } from "react";
import useForm from "../hooks/useForm";
import { Button } from "@mui/material";
import Hello from "./Hello";
import "./App.css";

function App() {
  const inputRef = useRef("input");
  const [form, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [successButton, setSuccessButton] = useState(false);
  const [showHello, setShowHello] = useState(true);
  useEffect(() => {
    console.log("things");
  }, [form.name]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(successButton);
    setSuccessButton(!successButton);
  };
  return (
    <div className="App">
      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
      <form>
        <input
          ref={inputRef}
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
        {!successButton ? (
          <Button variant="outlined" onClick={handleSubmit}>
            submit
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleSubmit}>
            submited
          </Button>
        )}
        <Button
          variant="outlined"
          onClick={() => {
            console.log(inputRef.current.focus());
          }}
        >
          ref
        </Button>
      </form>
    </div>
  );
}

export default App;
