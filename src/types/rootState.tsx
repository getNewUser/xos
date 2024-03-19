import { Mark } from "../components/square";
import { Score } from "./score";

export interface RootState {
    squares: Mark[];
    mark: Mark;
    score: Score; 
  }