import React, { useState } from "react";
import Item from "./Item";
import List from "./List";
function TreeView({ data }) {
  let newData = {};
  for (let i = 0; i < data.length; i++) {
    newData[data[i].id] = {
      expand: false,
      checked: false,
    };
  }

  const [expandSubList, setexpandSubList] = useState({ ...newData });

  const handleExpandSubList = (id, expandStatus, checkedStatus) => {
    setexpandSubList((prevstate) => {
      return {
        ...prevstate,
        [id]: {
          expand: expandStatus,
          checked: checkedStatus,
        },
      };
    });
  };

  let parentData = data.filter((a) => a.parentId === 0);
  return (
    <ul>
      {parentData.map((item, key) => {
        let info = expandSubList[item.id];
        let children = data.filter((a) => a.parentId === item.id);
        return (
          <Item
            key={key}
            item={item}
            info={info}
            handleExpandSubList={handleExpandSubList}
          >
            {children.length > 0 ? (
              <List
                expand={info.expand}
                alldata={data}
                data={children}
                expandSubList={expandSubList}
                setexpandSubList={setexpandSubList}
                handleExpandSubList={handleExpandSubList}
              />
            ) : null}
          </Item>
        );
      })}
    </ul>
  );
}

export default TreeView;
