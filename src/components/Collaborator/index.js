import "./style.css";

export const Collaborator = ({name, job, image}) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  );
};
