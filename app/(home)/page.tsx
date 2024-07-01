import Link from "next/link";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    const response = await fetch(API_URL);
    return response.json();
}

export default async function HomePage() {
    const movies = await getMovies()
    return <div>{movies.map(movie => <li key={movie.id}>
        <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
    </li>)}</div>
}
