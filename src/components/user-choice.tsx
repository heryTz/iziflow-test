import { useState } from "react";
import { Select } from "./select";

const choices = [
  {
    id: 1,
    label: "TOYOTA",
    models: [
      { id: 1, label: "Avensis" },
      { id: 2, label: "Aygo" },
      { id: 3, label: "Prius" },
      { id: 4, label: "Yaris" },
    ],
  },
  {
    id: 2,
    label: "RENAULT",
    models: [
      { id: 1, label: "Clio" },
      { id: 2, label: "Espace" },
      { id: 3, label: "Mégane" },
      { id: 4, label: "Scenic" },
    ],
  },
];

export function UserChoice() {
  const [brand, setBrand] = useState<number>(choices[0].id);

  return (
    <div>
      <Select
        label="Marques"
        value={brand}
        onChange={setBrand}
        options={choices}
      />
      <Select
        label="Modèles"
        options={choices.find((el) => el.id === brand)!.models}
      />
    </div>
  );
}
