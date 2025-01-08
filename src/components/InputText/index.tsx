import "./style.css";

interface InputTextProps {
  allDigit: (value: string) => void;
  placeholder: string;
  label: string;
  value: string;
  required: boolean;
}

export const InputText = (props: InputTextProps) => {
  const placeholderMod = `${props.placeholder}...`;

  const allDigit = (event: React.ChangeEvent<HTMLInputElement>) => {
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

export default InputText;
