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
          {props.collaborators.map((collaborator) => (
            <Collaborator
              key={collaborator.name}
              backgroundColor={props.primaryColor}
              name={collaborator.name}
              job={collaborator.job}
              image={collaborator.image}
            />
          ))}
        </div>
      </section>
    )
  );
};
