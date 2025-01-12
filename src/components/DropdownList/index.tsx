import "./style.css";

interface DropdownListProps {
  allDigit: (value: string) => void
  label: string
  required: boolean
  value: string
  itens: string[] 
}

export const DropdownList = (props: DropdownListProps) => {
  const allDigit = (event: { target: { value: string; }; }) => {
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
