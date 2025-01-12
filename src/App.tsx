import { useState } from "react";
import { Banner } from "./components/Banner";
import { Forms } from "./components/Forms";
import { Team } from "./components/Team";
import { ICollaborador } from "./Shared/interfaces/ICollaborator";

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
  const [collaborators, setCollaborator] = useState<ICollaborador[]>([]);

  const addColaborator = (collaborator: ICollaborador) => {
    setCollaborator([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      <Banner img='/imagens/banner.png' alt="Texto alternativo"/>
      <Forms
        teams={teams.map((team) => team.nome)}
        postCollaborator={(collaborator) => addColaborator(collaborator)}
      />
      {teams.map((team) => (
        <Team
          key={team.nome}
          teamName={team.nome}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.nome
          )}
        />
      ))}
    </div>
  );
}

export default App;
