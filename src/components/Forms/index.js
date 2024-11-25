import { InputText } from "../InputText";
import './style.css'

export const Forms = () => {
  return (
    <section className='forms'>
      <form>
        <h2> Preencha os dados para criar os dados do colaborador</h2>
        <InputText label="Nome" placeholder="Digite o seu nome" />
        <InputText label="Cargo" placeholder="Digite o seu cargo" />
        <InputText label="Imagem" placeholder="Digite o endereço da imagem" />
        
      </form>
    </section>
  );
};
