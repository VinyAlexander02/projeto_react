import { useState } from "react";
import { Banner } from "./components/Banner";
import { Forms } from "./components/Forms";

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const addColaborator = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Forms postCollaborator={colaborador => addColaborator(colaborador)} />
    </div>
  );
}

export default App;
