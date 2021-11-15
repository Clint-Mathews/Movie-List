export interface MovieDetails {
  name: string;
  img: string;
}
export interface MovieCardData {
  length: number,
  index: number,
  finalMovieElementRef: any,
  movieData: MovieDetails,
  url : string
}