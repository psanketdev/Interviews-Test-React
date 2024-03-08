import React from "react";

export default function InfosysCheckbox({
  title,
  value,
  isChecked,
  onCheckboxChange,
}) {
  const capitleWord = (val) => {
    let text = val.split(" ");
    let capital = text.map((item) => {
      if (item.length > 1) {
        return item[0] + item[1].toUpperCase() + item.slice(2);
      } else {
        item.toUpperCase();
      }
    });
    return capital.join(" ");
  };

  return (
    <li>
      <input
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={() => onCheckboxChange(value)}
      />
      <label htmlFor="">{capitleWord(title)}</label>
    </li>
  );
}
