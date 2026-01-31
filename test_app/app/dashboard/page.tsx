"use client";

import { Card } from "@/Components/Card";
import { useState } from "react";

const Devs = () => {
  const [developers, setDevelopers] = useState<object[]>([
    { name: "RAJA", skills: ["React", "TypeScript", "Node.js"], isHired: true },
  ]);
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {developers.map((dev, index) => (
        <Card
          key={index}
          name={(dev as { name: string }).name}
          skills={(dev as { skills: string[] }).skills}
          isHired={(dev as { isHired: boolean }).isHired}
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
