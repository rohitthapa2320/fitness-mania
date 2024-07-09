import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ExerciseInterface } from "../pages/Home";
import { exerciseOptions, fetchData } from "../lib/utils";
import ExerciseCard from "./ExerciseCard";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import PaginationComponent from "./PaginationComponent";

const Exercises = ({
  bodyPart,
  exercises,
  setExercises
}:{
  bodyPart: string;
  exercises: ExerciseInterface [];
  setExercises: Dispatch<SetStateAction<ExerciseInterface[]>>
}):JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);
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
  },[bodyPart]);

  const indexOfLastExercise = currentPage*exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise-exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  if(!currentExercises.length) return (
    <div>Loading...</div>
  )
  return(
    <div id="exercises" className="mt-50px p-5">
      <h4 className="font-bold text-[30px] mb-10">Exercises</h4>
      <div className="flex flex-wrap justify-center gap-[50px] lg:gap-[107px]">
        {
          currentExercises.map((exercise: ExerciseInterface, index: number) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))
        }
      </div>
      <div className="flex justify-center items-center mt-10 lg:mt-16">
        {
          exercises.length > 9 && (
            <PaginationComponent
              currentPage={currentPage}
              totalPages={Math.ceil(exercises.length/exercisesPerPage)}
              onPageChange={setCurrentPage}
            />
          )
        }
      </div>
    </div>
  )
}

export default Exercises;