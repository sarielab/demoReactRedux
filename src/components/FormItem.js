import React from 'react'

const FormItem = (props) => {
  let input;
  if (props.type === 'select') {
    let options = props.options.map(opt => (
      <option value={opt.value}>
        {opt.label}
      </option>))

    input = (
      <select
        className="form-control"
        name={props.name}
        onChange={props.handleChange}
      >
        {options}
      </select>
    )
  } else {
    input = (<input
        className="form-control"
        onChange={props.handleChange}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
      />)
  }

  return(
    <div className="form-group">
      <label>{props.name}</label>
      { input }
    </div>
  );
};

export default FormItem