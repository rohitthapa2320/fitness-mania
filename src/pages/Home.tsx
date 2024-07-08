import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";

const Home = ():JSX.Element => {
  return(
    <div className="w-full">
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </div>
  )
}

export default Home;