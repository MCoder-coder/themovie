export interface TrendingMovies extends Array<TrendingMovies> {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    popularity: number;
    media_type: string;
    original_name: string;
    origin_country: string[];
    first_air_date: string;
    name: string;
}