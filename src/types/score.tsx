import { Mark } from "./Mark";

export class Score {
    public matches: Mark[] = [];
    
    constructor(public x: number = 0, public o: number = 0) {}
}