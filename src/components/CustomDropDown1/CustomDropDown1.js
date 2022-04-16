import React from "react";

import Select from "react-select";
import "./customDropDown1.scss";
const CustomDropDown1 = ({
  data,
  type,
  name,
  label,
  defaultValue,
  value,
  onValueChange
}) => {
  let className;
  if (type === "single") {
    className = "basic-single city__select__input ";
  } else if (type === "multi") {
    className = "basic-multi-select city__select__input";
  } else {
    console.log("Invalid type");
  }

  const onChangeHandler = (e) => {
    onValueChange(e);
  };

  return (
    <div className="city__select">
      <label htmlFor="" className="city__select__label">
        {label}
      </label>
      <Select
        defaultValue={defaultValue}
        isMulti={type === "multi" && true}
        name={name}
        options={data}
        className={className}
        classNamePrefix="select"
        value={value ? value : defaultValue}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default CustomDropDown1;
