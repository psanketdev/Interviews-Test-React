import React, { useEffect, useState } from "react";
import InfosysCheckbox from "./InfosysCheckbox";

export default function InfosysApi() {
  const [data, setData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const getApiData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let resData = await res.json();
    setData(resData);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const handleCheckboxChange = (val) => {
    if (checkedItems.includes(val)) {
      setCheckedItems(checkedItems.filter((item) => item !== val));
    } else {
      setCheckedItems([...checkedItems, val]);
    }
  };

  const isButtonEnabled = checkedItems.length >= 5;

  return (
    <>
      <ul>
        {data.slice(0, 10).map((item) => {
          const id = item.id;
          return (
            <InfosysCheckbox
              key={id}
              title={item.title}
              value={id}
              isChecked={checkedItems.includes(id)}
              onCheckboxChange={handleCheckboxChange}
            />
          );
        })}
      </ul>
      <button disabled={!isButtonEnabled}>Submit</button>
    </>
  );
}
