import React from "react";

interface hobbyProps {
  title: string;
  icon: string;
  description: string;
}

const HobbyCard: React.FC<hobbyProps> = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col gap-[20px] rounded-xl bg-zinc-800/80 py-[40px] ring-1 ring-inset ring-zinc-600 transition-transform duration-300 hover:scale-[1.02] lg:w-[380px] ">
      <h3 className="text-center text-zinc-300 lg:text-[25px]">{title}</h3>

      <div className="material-symbols-rounded flex w-full items-center justify-center">
        <h3 className="rounded-xl bg-emerald-950 text-emerald-400 
        ring-1 ring-inset ring-emerald-400 lg:px-[15px] lg:py-[15px] lg:text-[40px]">
          {icon}
        </h3>
      </div>

      <p className="text-zinc-400 lg:text-[17px] text-center lg:px-[40px] leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default HobbyCard;
