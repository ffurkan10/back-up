import React, { useEffect } from "react";
import Style from "./style.module.scss";

export default function FormErrorMessages({ error }) {
  useEffect(() => {}, [error]);
  return (
    <div className={Style.formError}>
      <ul>
        {error?.type === "required" && (
          <li>{error.message || "Bu alan zorunlu!"}</li>
        )}
        {error?.type === "minLength" && (
          <li>{error.message || "Geçerli bir değer girdiniz!"}</li>
        )}
        {error?.type === "pattern" && (
          <li>{error.message || "Geçerli bir değer girdiniz!"}</li>
        )}
        {error?.type === "validate" && (
          <li>{error.message || "Geçerli bir değer girdiniz!"}</li>
        )}
      </ul>
    </div>
  );
}
