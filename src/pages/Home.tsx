import { useState } from "react";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

export interface ExerciseInterface{
  bodyPart: string;
  equipment:string;
  gifUrl:string;
  id:string;
  name:string;
  target:string;
  secondaryMuscles: string[];
  instructions: string[];
}

const Home = ():JSX.Element => {
  const [bodyPart, setBodyPart]= useState<string>("all");
  const [exercises, setExercises] = useState<ExerciseInterface[]>([]);
  return(
    <div className="w-full">
      <HeroBanner />
      <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
      <Exercises bodyPart={bodyPart} exercises={exercises} setExercises={setExercises} />
    </div>
  )
}

export default Home;