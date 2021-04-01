import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faFolder,
  faFileArchive,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function App({
  item,
  children,
  info,
  handleExpandSubList,
  alldata,
  setexpandSubList,
  expandSubList,
}) {
  const handleChildsChecked = (checkstatus,childs) => {

    for (const child of childs) {
      if (alldata.some((a) => a.parentId === child.id)) {
        handleChildsChecked(
          checkstatus,
          alldata.filter((a) => a.parentId === child.id)
        );
      }

      setexpandSubList((prevstate) => {
        return {
          ...prevstate,
          [child.id]: {
            expand: expandSubList[child.id].expand,
            checked: checkstatus,
          },
        };
      });
    }

  };

  return (
    <li>
      {children && info.expand == false ? (
        <FontAwesomeIcon
          onClick={() => {
            handleExpandSubList(item.id, !info.expand, info.checked);
          }}
          icon={faPlus}
        />
      ) : children && info.expand == true ? (
        <FontAwesomeIcon
          onClick={() => {
            handleExpandSubList(item.id, !info.expand, info.checked);
          }}
          icon={faMinus}
        />
      ) : null}

      <input
        type="checkbox"
        checked={info.checked}
        onChange={(e) => {
          let checkstatus = e.target.checked;
          handleExpandSubList(item.id, info.expand, checkstatus);

          let parentId = item.id;
          let childs = alldata.filter((a) => a.parentId === parentId);
          handleChildsChecked(checkstatus,childs);
        }}
      />

      {item.type === "folder" ? (
        <FontAwesomeIcon icon={faFolder} />
      ) : item.type === "zip" ? (
        <FontAwesomeIcon icon={faFileArchive} />
      ) : item.type === "pdf" ? (
        <FontAwesomeIcon icon={faFilePdf} />
      ) : null}
      {item.label}
      {children}
    </li>
  );
}

export default App;
