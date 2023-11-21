import React, { useState } from "react";
import Style from "./style.module.scss";
import cn from "classnames";
import Button from "../button";
import { useEffect } from "react";

const Input = ({
  type = "text",
  value,
  placeholder,
  onChange,
  label,
  isform,
  handleSearch,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handlerOnChange = (e) => {
    onChange?.(e);
    handleSearch?.(e.target.value); // handleSearch prop'ını çağır
  };

  useEffect(() => {}, [error]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={cn(Style.input, isform && Style.isForm)}>
      {!!label && <label className={!!error && Style.hasError}>{label}</label>}
      <input
        type={type}
        className={cn(
          Style.input,
          !!error && Style.errorInput,
          isFocused && Style.focusedInput
        )}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={
          handleSearch ? handleSearch : (e) => handlerOnChange(e.target.value)
        }
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
