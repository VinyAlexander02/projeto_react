import { ICollaborador } from "../../Shared/interfaces/ICollaborator";
import { Collaborator } from "../Collaborator";

import "./style.css";

interface TeamProps {
  primaryColor: string
  secondaryColor: string
  teamName: string
  collaborators: ICollaborador[]
} 

export const Team = (props: TeamProps) => {
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
