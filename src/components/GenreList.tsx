import useGenres from '../hooks/useGenres'

const GenreList = () => {
    const {genres} = useGenres();
  return (
    <ul>
        {genres.map((genre, index) => <li key={index}>{genre}</li>)}
        </ul>
  )
}

export default GenreList