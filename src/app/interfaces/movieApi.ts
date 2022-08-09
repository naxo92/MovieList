import { Movie } from "./movies";

export interface movieApi {
    Search: Movie[];
    totalResults: string;
    Response: string;    
}