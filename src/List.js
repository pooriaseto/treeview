import React, { useState } from "react";
import Item from "./Item";

function List({
  alldata,
  data,
  expand,
  handleExpandSubList,
  expandSubList,
  setexpandSubList,
}) {
  if (expand) {
    return (
      <ul>
        {data.map((item, key) => {
          let info = expandSubList[item.id];
          let children = alldata.filter((a) => a.parentId === item.id);
          return (
            <Item
              key={key}
              item={item}
              info={info}
              alldata={alldata}
              expandSubList={expandSubList}
              handleExpandSubList={handleExpandSubList}
              setexpandSubList={setexpandSubList}
            >
              {children.length > 0 ? (
                <List
                  expand={info.expand}
                  handleExpandSubList={handleExpandSubList}
                  alldata={alldata}
                  data={children}
                  expandSubList={expandSubList}
                  setexpandSubList={setexpandSubList}
                />
              ) : null}
            </Item>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}

export default List;
