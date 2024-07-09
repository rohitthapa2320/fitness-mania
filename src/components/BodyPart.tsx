import Icon from "../assets/icons/gym.png";

const BodyPart = ({
  item,
  bodyPart,
  setBodyPart
}:{
  item: string;
  bodyPart?: string;
  setBodyPart?: (bodyPart: string) => void;
}):JSX.Element => {
  return(
    <div className={`flex flex-col justify-center items-center 
      bodyPart-card w-[150px] h-[150px] cursor-pointer rounded-bl-lg bg-gray-200 gap-10 ${
        bodyPart === item ? "border-t-2 border-t-[#9d4edd]":""
      }`}
      onClick={setBodyPart ? () => {
        setBodyPart(item);
        window.scrollTo({top: 1800, left:100, behavior: "smooth"});
      }: () => {}}
    >
      <img src={Icon} alt="gym" className="w-12 h-12" />
      <p className="text-lg font-bold text-[#3a1212] capitalize">{item}</p>
    </div>
  )
}

export default BodyPart;