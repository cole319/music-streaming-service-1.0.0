import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button
      className="
        transition
        opacity-80
        rounded-full
        flex
        items-center
        bg-cyan-500
        p-4
        drop-shadow-md
        translate
        translate-y-1/4
        group-hover:opacity-100
        group-hover:translate-y-0
        hover:scale-110
      "
    >
      <FaPlay className="text-slate-950" />
    </button>
  );
};

export default PlayButton;
