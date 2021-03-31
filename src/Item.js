import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faFolder,
  faFileArchive,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function App({ item, children, info, handleExpandSubList }) {
  console.log();
  return (
    <li>
      {children && info.expand === false ? (
        <FontAwesomeIcon
          onClick={() => {
            handleExpandSubList(item.id, !info.expand, info.checked);
          }}
          icon={faPlus}
        />
      ) : children && info.expand === true ? (
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
          handleExpandSubList(item.id, info.expand, e.target.checked);
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
