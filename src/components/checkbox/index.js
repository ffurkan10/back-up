import React, { useState } from "react";
import Style from "./style.module.scss";
import cn from "classnames";

export default function Checkbox({ children, value, onChange, disabled }) {
  const [internalValue, setInternalValue] = useState(value);

  const handlerOnChange = (event) => {
    const newValue = event.target.checked;
    setInternalValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={cn(Style.checkbox)}>
      <label className={Style.labelContainer}>
        <input
          type="checkbox"
          checked={internalValue}
          disabled={disabled}
          onChange={(event) => handlerOnChange(event)}
        />
        <div className={Style.spanText}>
          <span className={Style.text}>{children}</span>
        </div>
      </label>
    </div>
  );
}
