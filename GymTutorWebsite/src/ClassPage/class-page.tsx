import React, { useEffect, useState } from "react";
import { ClassGrid } from "./class-grid";
import { Class } from "./class-card";

async function getData(): Promise<Class[]> {
    const response = await fetch("http://localhost:3000/api/classes");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  }
export const ClassList = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  
  useEffect(() => {
    getData().then((data) => setClasses(data));
  }, [])

  if (!classes.length) return <div>No classes found.</div>;

  return <ClassGrid classes={classes} />;
};