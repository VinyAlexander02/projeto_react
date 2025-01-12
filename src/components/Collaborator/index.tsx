import "./style.css";

interface CollaboratorProps {
  name: string
  job: string
  image: string
  backgroundColor: string
}

export const Collaborator = ({name, job, image, backgroundColor}: CollaboratorProps) => {
  return (
    <div className="collaborator">
      <div className="header" style={{backgroundColor: backgroundColor}}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  );
};
