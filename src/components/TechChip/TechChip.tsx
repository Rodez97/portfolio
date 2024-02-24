import { ReactNode } from "react";

interface TechChipProps {
  icon: ReactNode;
  name: string;
}

function TechChip({ icon, name }: TechChipProps) {
  return (
    <div className="bg-cyan-600 w-fit flex gap-1 py-1 rounded-xl items-center px-3">
      {icon}
      <p>{name}</p>
    </div>
  );
}

export default TechChip;
