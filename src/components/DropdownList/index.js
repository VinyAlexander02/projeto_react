import "./style.css";

export const DropdownList = (props) => {
  const allDigit = (event) => {
    props.allDigit(event.target.value);
  };

  return (
    <div className="dropdownlist">
      <label>{props.label}</label>
      <select value={props.value} onChange={allDigit}>
        <option value="">Selecione</option> {/* Opção inicial vazia */}
        {props.itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
