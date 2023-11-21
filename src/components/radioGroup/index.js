import React, { useState } from "react";
import { useEffect } from "react";
import Style from "./style.module.scss";
import cn from "classnames";

export default function RadioGroup({ selected, list, onChange }) {
  const [selectedOption, setSelectedOption] = useState(selected);
  const handleOptionChange = (event) => {
    const selectedValue = list[event.target.value];
    setSelectedOption(selectedValue);
    onChange(selectedValue);
  };
  useEffect(() => {
    setSelectedOption(selected);
  }, [selected]);

  return (
    <div className={Style.radioGroup}>
      <div className={Style.list}>
        {list?.map((item, index) => {
          return (
            <div
              key={item?.value}
              className={cn(
                selectedOption?.value === item?.value ? Style.selected : "",
                Style.radio
              )}
            >
              <label>
                <input
                  type="checkbox"
                  value={index}
                  checked={selectedOption?.value === item?.value}
                  onChange={handleOptionChange}
                />
                <span className="text">{item?.text}</span>
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
