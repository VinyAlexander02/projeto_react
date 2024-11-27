import { Button } from "../Button";
import { DropdownList } from "../DropdownList";
import { InputText } from "../InputText";
import "./style.css";

export const Forms = () => {
  const teams = [
    "Programação",
    "Front-end",
    "Data Science",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const handSave = (event) => {
    event.preventDefault()
  }

  return (
    <section className="forms">
      <form onSubmit={handSave}>
        <h2> Preencha os dados para criar os dados do colaborador</h2>
        <InputText required={true} label="Nome" placeholder="Digite o seu nome"  />
        <InputText required={true} label="Cargo" placeholder="Digite o seu cargo" />
        <InputText required={true} label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropdownList label="Times" itens={teams} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
