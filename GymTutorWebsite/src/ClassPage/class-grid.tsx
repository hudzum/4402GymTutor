import React from "react";
import { ClassCard, Class } from "./class-card";

type ClassGridProps = {
  classes: Class[];
};

export const ClassGrid = ({ classes }: ClassGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {classes.map((classItem) => (
        <ClassCard key={classItem.id} {...classItem} />
      ))}
    </div>
  );
};