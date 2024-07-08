import { Dispatch, SetStateAction, useEffect } from "react";
import { ExerciseInterface } from "../pages/Home";
import { exerciseOptions, fetchData } from "../lib/utils";
import ExerciseCard from "./ExerciseCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

const Exercises = ({
  bodyPart,
  exercises,
  setExercises
}:{
  bodyPart: string;
  exercises: ExerciseInterface [];
  setExercises: Dispatch<SetStateAction<ExerciseInterface[]>>
}):JSX.Element => {
  useEffect(() => {
    const fetchExercisesData = async() => {
      let exerciseData: ExerciseInterface[]= [];

      if(bodyPart === "all"){
        exerciseData= await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises?limit=0',
          exerciseOptions
        )
      }else{
        exerciseData= await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=0`,
          exerciseOptions
        )
      }
      setExercises(exerciseData);
    };
    fetchExercisesData();
  },[bodyPart])
  return(
    <div className="mt-50px lg:mt-[100px] p-5">
      <h4 className="font-bold text-[30px] lg:text-[44px] mb-10">Showing Results</h4>
      <div className="flex flex-wrap justify-center gap-[50px] lg:gap-[107px]">
        {
          exercises.map((exercise: ExerciseInterface, index: number) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        }
      </div>
    </div>
  )
}

export default Exercises;