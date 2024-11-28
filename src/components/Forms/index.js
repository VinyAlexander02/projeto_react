import { useState } from "react";
import { Button } from "../Button";
import { DropdownList } from "../DropdownList";
import { InputText } from "../InputText";
import "./style.css";

export const Forms = (props) => {

  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const handSave = (event) => {
    event.preventDefault();
    props.postCollaborator({
      name,
      job,
      image,
      team
    })
  };

  return (
    <section className="forms">
      <form onSubmit={handSave}>
        <h2> Preencha os dados para criar os dados do colaborador</h2>
        <InputText
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={name}
          allDigit={(val) => setName(val)}
        />
        <InputText
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={job}
          allDigit={(val) => setJob(val)}
        />
        <InputText
          required={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          allDigit={(val) => setImage(val)}
        />
        <DropdownList
          label="Times"
          itens={props.teams}
          value={team}
          allDigit={(val) => setTeam(val)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
