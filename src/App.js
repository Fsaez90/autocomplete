import Welcome from "./components/Welcome";
import Form from "./components/Form";
import React, { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    let name = localStorage.getItem("name");
    setUsername(name ? name : "null");
  }, []);

  if (username === "null") {
    return <Welcome />;
  } else {
    return <Form name={username} />;
  }
}

export default App;
