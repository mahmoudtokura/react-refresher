import Movies from "./Movies";
import Watched from "./Watched";

export default function Main({ movies }) {
  return (
    <main className="main">
      <Movies movies={movies} />
      <Watched />
    </main>
  );
}
