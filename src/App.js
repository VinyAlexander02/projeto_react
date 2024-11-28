import { useState } from "react";
import { Banner } from "./components/Banner";
import { Forms } from "./components/Forms";
import { Team } from "./components/Team";

function App() {
  const teams = [
    {
      nome: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      nome: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      nome: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      nome: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      nome: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];
  const [colaboradores, setColaboradores] = useState([]);

  const addColaborator = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Forms teams={teams.map(team => team.nome)} postCollaborator={(colaborador) => addColaborator(colaborador)} />
      {teams.map((team) => (
        <Team
          key={team.nome}
          teamName={team.nome}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
        />
      ))}
    </div>
  );
}

export default App;
