type Props = {
    text: string;
    onClick: () => void;
    bg?: string;
    color?: string;
    width?:string
  };
  
  export default function SecondaryButton({ text, bg = "bg-transparent", color = "text-white", onClick ,width="w-full"}: Props) {
    return (
      <button onClick={onClick} className={`${bg} ${color} ${width} py-3 px-6 border border-neytral-300 rounded-md `}>
        {text}
      </button>
    );
  }
  