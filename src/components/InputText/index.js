import './style.css'

export const InputText = (props) => {
  return (
    <div className='inputText'>
      <label>{props.label}</label>
      <input type='text' placeholder={props.placeholder}/>
    </div>
  );
};
