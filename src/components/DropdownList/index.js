import "./style.css";

export const DropdownList = (props) => {

  const allDigit = (event) => {
    props.allDigit(event.target.value)
  }

  return (
    <div className="dropdownlist">
      <label>{props.label}</label>
      <select value={props.val} onChange={allDigit}>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
