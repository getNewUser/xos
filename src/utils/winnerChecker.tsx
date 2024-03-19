import { Mark } from "../types/Mark";

export function winnerChecker(squares: Mark[]): boolean {
    const patterns = [checkFirstRow, checkSecondRow, checkThirdRow, checkFirstColumn, checkSecondColumn, checkThirdColumn, checkDiagonal];
    for(let pattern of patterns) {
        if(pattern(squares)) {
            return true;
        }
    }
    return false;
}

function checkFirstRow(squares: Mark[]): boolean {
    return squares[0] === squares[1] && squares[0] === squares[2] && squares[0] !== Mark.None;
}

function checkSecondRow(squares: Mark[]): boolean {
    return squares[3] === squares[4] && squares[3] === squares[5] && squares[3] !== Mark.None;
}

function checkThirdRow(squares: Mark[]): boolean {
    return squares[6] === squares[7] && squares[6] === squares[8] && squares[6] !== Mark.None;
}

function checkFirstColumn(squares: Mark[]): boolean {
    return squares[0] === squares[3] && squares[0] === squares[6] && squares[0] !== Mark.None;
}

function checkSecondColumn(squares: Mark[]): boolean {
    return squares[1] === squares[4] && squares[1] === squares[7] && squares[1] !== Mark.None;
}

function checkThirdColumn(squares: Mark[]): boolean {
    return squares[2] === squares[5] && squares[2] === squares[8] && squares[2] !== Mark.None;
}

function checkDiagonal(squares: Mark[]): boolean {
    return (squares[0] === squares[4] && squares[0] === squares[8] && squares[0] !== Mark.None) || (squares[2] === squares[4] && squares[2] === squares[6] && squares[2] !== Mark.None);
}