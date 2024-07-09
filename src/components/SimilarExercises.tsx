import ExerciseCard from "./ExerciseCard";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SimilarExercises = ({
  targetMuscleExercises,
  equipmentExercises
}:{
  targetMuscleExercises: any[],
  equipmentExercises: any[]
}):JSX.Element => {
  return(
    <div className="lg:mt-5 p-5">
    <p className="text-lg font-bold mb-8">
      Similar <span className="text-[#9d4edd] capitalize">Target Muscle</span> exercises
    </p>
    <div className="flex relative p-2">
      {targetMuscleExercises.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[100px] p-5">
        {targetMuscleExercises.slice(0, 5)?.map((item:any) => (
          <ExerciseCard exercise={item} />
        ))}
      </div>
      ) : <div>Laoding...</div>}
    </div>
    <p className="text-lg font-bold mt-[100px] mb-8">
      Similar <span className="text-[#9d4edd] capitalize">Equipment</span> exercises
    </p>
    <div className="flex relative p-2">
     {equipmentExercises.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-[100px] p-5">
        {equipmentExercises.slice(0, 5)?.map((item:any) => (
          <ExerciseCard exercise={item} />
        ))}
      </div>
      ) : <div>Laoding...</div>}
    </div>
  </div>
  )
}

export default SimilarExercises;