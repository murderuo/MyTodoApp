import React, { useState } from "react";
import { useList } from "../../context/ListContext";

function Input() {
  const [inputvalue, setInputvalue] = useState("");
  const { list, setList } = useList();
  // console.log(list);
  return (
    <>This is Input component
      <br />
      <br />
      Yapılacak işi giriniz.
      <br />
      <br />
      <div>
        <input
          value={inputvalue}
          onChange={(e) => setInputvalue(e.target.value)}
        ></input>

        <br></br>
        <br></br>
        <button
          onClick={() => {
            // console.log(list)
            setList([...list,{id:Math.floor(Math.random() * 100),todo:inputvalue,state:false}]);
            setInputvalue("");
          }}
        >
          Ekle
        </button>
        <br></br>
        {inputvalue}
      </div>
    </>
  );
}

export default Input;
