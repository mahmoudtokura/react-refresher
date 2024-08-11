import WatchedItem from "./WatchedItem";

export default function WatchedList({ watched }) {
  return (
    <div className="box">
      <ul className="list">
        {watched.map((movie) => (
          <WatchedItem movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </div>
  );
}
