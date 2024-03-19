import { createSlice } from "@reduxjs/toolkit";
import { Mark } from "../components/square";
import { Score } from "../types/score";
import { winnerChecker } from "../utils/winnerChecker";

const gameboardSlice = createSlice({
    name: 'gameboard',
    initialState: {
        squares: Array(9).fill(Mark.None),
        mark: Mark.X,
        score: {x : 0, o: 0, matches: []} as Score
    },
    reducers: {
        squareMarked: (state, action) => {
            state.squares[action.payload] = state.mark;
            checkWinning(state);
            
            state.mark = state.mark === Mark.X ? Mark.O : Mark.X;
        }
    }
    }
)

function checkWinning(state: { squares: Mark[]; mark: Mark; score: { matches: Mark[]; x: number; o: number; }; }) {
    if (winnerChecker(state.squares)) {
        state.squares = Array(9).fill(Mark.None);
        if (state.mark === Mark.X) {
            state.score.x++;
        }
        else {
            state.score.o++;
        }

        state.score.matches.push(state.mark);
        alert("Winner: " + state.mark);
        state.mark = Mark.X;
    }
}

export const {squareMarked} = gameboardSlice.actions;

export default gameboardSlice.reducer;
