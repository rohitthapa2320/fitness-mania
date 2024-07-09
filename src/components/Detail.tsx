import { ExerciseInterface } from "../pages/Home";
import Icon from "../assets/icons/gym.png";

interface DetailProps {
  exerciseDetails: ExerciseInterface;
}

const Detail:React.FC<DetailProps> = ({
  exerciseDetails
}) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetails;

  const extraDetail = [
    {
      icon: Icon,
      name: bodyPart
    },
    {
      icon: Icon,
      name: target
    },
    {
      icon: Icon,
      name: equipment
    }
  ];
  return(
    <div className="flex flex-col lg:flex-row p-5 items-center lg:justify-around">
      <img src={gifUrl} loading="lazy" className="detail-image" />
      <div className="flex flex-col gap-[20px]">
        <p className="text-[30px] font-bold capitalize" >{name}</p>
        <p className="text-[#4F4C4C] text-lg">
          Exercises keep you strong.{' '}
          <span className="capitalize">{name}</span> is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </p>
        {
          extraDetail.map((item) => (
            <div className="flex items-center gap-5"
            >
              <img src={item.icon} alt="gym" className="w-8 h-8" />
              <p className="text-lg font-bold text-[#3a1212] capitalize">{item.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Detail;