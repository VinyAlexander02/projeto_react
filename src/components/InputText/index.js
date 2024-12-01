import "./style.css";

export const InputText = (props) => {
  const placeholderMod = `${props.placeholder}...`;

  const allDigit = (event) => {
    props.allDigit(event.target.value);
  };

  return (
    <div className="inputText">
      <label>{props.label}</label>
      <input
        required={props.required}
        type="text"
        placeholder={placeholderMod}
        onChange={allDigit}
        value={props.value}
      />
    </div>
  );
};
