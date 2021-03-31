import React, { useState } from "react";
import "./index.css";
import {v4} from 'uuid'
import TreeView from "./TreeView";
const data = [
  {
    id: 1,
    label: "Mars",
    type: "folder",
    parentId: 0,
  },
  {
    id: 2,
    label: "Pooria",
    type: "zip",
    parentId: 0,
  },
  {
    id: 4,
    parentId: 1,
    label: "Phobos",
  },
  {
    id: 5,
    parentId: 1,
    label: "Deimos",
  },
  {
    id: 3,
    parentId: 2,
    label: "Phobos",
    type: "folder",
  },
  {
    id: 8,
    parentId: 2,
    label: "Deimos",
  },
  {
    id: 6,
    parentId: 3,
    label: "How to buy?",
    type: "pdf",
  },
  {
    id: 7,
    parentId: 3,
    label: "Deimos",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
  {
    id: Math.random(15, 10000000000) * 100,
    parentId: 0,
    label: "Test",
  },
];

function App() {
  return <TreeView data={data}/>;
}

export default App;
