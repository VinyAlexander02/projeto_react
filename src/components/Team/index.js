import { Collaborator } from "../Collaborator";
import "./style.css";

export const Team = (props) => {
  return (
    props.collaborators.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: props.secondaryColor }}
      >
        <h3 style={{ borderColor: props.primaryColor }}>{props.teamName}</h3>
        <div className="collaborators">
          {props.collaborators.map((colaborador) => (
            <Collaborator 
              key={colaborador.name}
              backgroundColor={props.primaryColor}
              name={colaborador.name}
              job={colaborador.job}
              image={colaborador.image}
            />
          ))}
        </div>
      </section>
    )
  );
};
