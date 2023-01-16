import axios from "axios";
import React, { useEffect } from "react";
import "./App.css";
import Menu from "./Components/Menu/Menu.component";

function App() {
  const [dishes, setDishes] = React.useState([]);
  async function getDishes() {
    setDishes((await axios.get("http://localhost:3000/dishes")).data);
  }
  useEffect(() => {
    getDishes();
  }, []);
  console.log("kusemek");
  return (
    <div className="App">
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
