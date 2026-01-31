"use client";

import { Card } from "@/Components/Card";
import { useState } from "react";
interface Developer {
  name: string;
  skills: string[];
  isHired: boolean;
}
const Devs = () => {
  const [developers, setDevelopers] = useState<Developer[]>([
    { name: "RAJA", skills: ["React", "TypeScript", "Node.js"], isHired: true },
    { name: "Devisri", skills: ["HTML", "CSS", "XML"], isHired: false },
  ]);
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {developers.map((dev, index) => (
        <Card
          key={index}
          name={dev.name}
          skills={dev.skills}
          isHired={dev.isHired}
          onFire={() => {
            const updatedDevs = developers.filter((_, i) => i !== index);
            setDevelopers(updatedDevs);
          }}
        />
      ))}
    </div>
  );
};

export default Devs;
