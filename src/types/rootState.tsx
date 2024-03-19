import { Mark } from "./mark";
import { Score } from "./score";

export interface RootState {
    squares: Mark[];
    mark: Mark;
    score: Score; 
  }