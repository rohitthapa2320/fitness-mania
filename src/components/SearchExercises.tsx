import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchExercises = ():JSX.Element => {
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    console.log("search...", search);
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
    </div>
  )
}

export default SearchExercises;