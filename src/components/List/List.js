import { useList } from '../../context/ListContext';
import React, { useState } from 'react';

function List() {
  const { list, setList } = useList();
  const [iscompleted, setIscompleted] = useState([]);
  // console.log(list);

  return (
    <>
      <div>This is List Component</div>
      <br />

      {/* {JSON.stringify(list)} */}
      <br />
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            style={
              item.state === false
                ? { textDecoration: '' }
                : { textDecoration: 'line-through' }
            }
            onClick={() => {
              setList(
                list.map(el =>
                  el.id === item.id ? { ...el, state: !el.state } : el,
                ),
              );
            }}
          >
            {item.todo}
          </li>
        ))}
      </ul>

      <br />
      <br />
      <button
        onClick={() => {
          // console.log(list.filter((item)=>item.state===true?[...iscompleted,item]:null))
          // console.log(iscompleted);
          setIscompleted([...iscompleted,...list.filter((item)=>item.state===true)])
          setList(list.filter(item => item.state === false));
        }}
      >
        İşaretlileri yapıldı listesine ekle
      </button>
      <br />
      
      {/* {JSON.stringify(iscompleted)} */}
      <br/>
      
      <ul>
      {iscompleted.map((item,index)=><li key={index}>{item.todo}</li>)}
      </ul>
    </>
  );
}

export default List;
