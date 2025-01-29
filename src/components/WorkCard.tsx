import React from "react";

interface cardProps {
  title: string;
  imgSrc: string;
  description: string;
  date: string;
  tags: Array<string>;
  href: string;
  class_aux: string;
}

const WorkCard: React.FC<cardProps> = ({
  title,
  imgSrc,
  description,
  date,
  tags,
  href,
  class_aux,
}) => {
  return (
    <div className="flex flex-col gap-[5px] rounded-xl py-[20px] transition-transform duration-300 hover:scale-[1.02] lg:h-[500px] lg:w-[380px]">
      <div className="h-[250px] w-full items-center overflow-hidden rounded-xl">
        <img
          src={imgSrc}
          alt=""
          className={"h-full w-full object-cover " + class_aux}
        />
      </div>

      <h3 className="mt-[20px] text-[20px] font-bold text-white">{title}</h3>
      {/* Tags */}
      <div className="my-[10px] flex flex-row flex-wrap lg:gap-[10px]">
        {tags.map((tag, key) => (
          <div
            key={key}
            className="rounded-2xl bg-zinc-700/70 px-[12px] py-[5px] text-zinc-400"
          >
            {tag}
          </div>
        ))}
      </div>
      <p className="mt-[5px] text-[17px] text-zinc-400">{description}</p>
      <a
        href={href}
        className="mt-[10px] text-[15px] text-emerald-400 hover:underline"
      >
        Read More{" "}
        <span className="material-symbols-rounded text-[18px]">
          arrow_outward
        </span>

        <div className="">{date}</div>
      </a>
    </div>
  );
};

export default WorkCard;
