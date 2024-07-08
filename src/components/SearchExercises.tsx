import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { exerciseOptions, fetchData } from "../lib/utils";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { ExerciseInterface } from "../pages/Home";

const SearchExercises = ({
  bodyPart,
  setBodyPart,
  setExercises
}:{
  bodyPart: string;
  setBodyPart: (bodyPart: string) => void
  setExercises: Dispatch<SetStateAction<ExerciseInterface[]>>
}):JSX.Element => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts]= useState<string[]>([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchBodyParts();
  },[]);
  const handleSearch = async() => {
    if(search){
      const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=0', exerciseOptions);

      const searchedExercises = exerciseData.filter(
        (item: ExerciseInterface) => 
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  }
  return(
    <div className="flex flex-col justify-center items-center my-5 lg:mt-[200px] p-5">
      <p className="font-bold text-[24px] lg:text-[44px] text-center mb-10">
        Awesome Exercises You <br/> 
        Should Know
      </p>
      <div className="flex w-3/4 lg:w-1/2 items-center space-x-2">
        <Input 
          type="text" 
          placeholder="Search Exercises..." 
          className="bg-gray-100 border-gray-100"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button 
          type="submit" 
          className="bg-[#9d4edd] hover:bg-[#9d4edd] p-[4px] lg:w-[140px]"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      <div className="relative w-full p-10 m-10">
        <HorizontalScrollBar 
          bodyParts={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  )
}

export default SearchExercises;