import { useEffect, useState } from "react";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../lib/utils";
import { ExerciseInterface } from "./Home";

const ExerciseDetails = ():JSX.Element => {
  const [ exerciseDetails, setExerciseDetails ] = useState<ExerciseInterface>({
    bodyPart: "",
  equipment:"",
  gifUrl:"",
  id:"",
  name:"",
  target:"",
  secondaryMuscles: [],
  instructions: []
  });
  const [ exerciseVideos, setExerciseVideos ] = useState([]);
  const [ targetMuscleExercises, setTargetMuscleExercises ] = useState([]);
  const [ equipmentExercises, setEquipmentExercises ] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"});

    const fetchExerciseDetailsData = async() => {
      const exerciseDbUrl= "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl= "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailsData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetails(exerciseDetailsData);

      const exerciseVideosData= await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailsData.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExerciseDetailsData();
  },[id])

  if(!exerciseDetails) return(
    <div>No Data...</div>
  )
  return(
    <div>
      <Detail exerciseDetails={exerciseDetails} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}  />
    </div>
  )
}

export default ExerciseDetails;