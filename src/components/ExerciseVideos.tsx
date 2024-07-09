const ExerciseVideos = ({
  exerciseVideos,
  name
}:{
  exerciseVideos: any[];
  name: string;
}):JSX.Element => {
  if(!exerciseVideos.length) return(
    <div>Loading...</div>
  )
  return(
    <div className="p-5">
      <p className="text-lg font-bold mb-8">
        Watch <span className="text-[#9d4edd] capitalize">{name}</span> exercise videos
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {exerciseVideos.slice(0, 3)?.map((item:any, index:any) => (
          <a
            key={index}
            className="exercise-video border-2 border-[#9d4edd] p-5"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <p className="text-lg">
                {item.video.title}
              </p>
              <p className="text-sm">
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ExerciseVideos;