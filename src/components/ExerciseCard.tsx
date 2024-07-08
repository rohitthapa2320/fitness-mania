import {FC} from 'react';
import { ExerciseInterface } from '../pages/Home';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface ExerciseCardProps {
  exercise: ExerciseInterface;
}

const ExerciseCard: FC<ExerciseCardProps> = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <div className='flex'>
        <Button className='ml-5 bg-[#ffa9a9] text-lg capitalize border-r-4'>
          {exercise.bodyPart}
        </Button>
        <Button className='ml-5 bg-[#fcc757] text-lg capitalize border-r-4'>
          {exercise.target}
        </Button>
      </div>
      <p className='font-bold ml-5 text-lg mt-3 pb-2 capitalize'>{exercise.name}</p>
    </Link>
  );
};

export default ExerciseCard;