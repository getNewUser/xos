import { memo } from "react";
import { Square } from "./square"
import './gameboard.css';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/rootState";
import { squareMarked } from '../reducers/markingReducer';


const StyledGameBoard = styled.div`
display: grid;
grid-template-rows: 200px 200px 200px;
grid-template-columns: 200px 200px 200px;
`;

export const GameBoard = memo(() => {    
    const squares = useSelector((state: RootState) => state.squares);
    const dispatch = useDispatch();
    return (
    <>
    <StyledGameBoard>
        {squares.map((square, index) => (
            <Square 
            key={index} 
            onClick={() => dispatch(squareMarked(index))} 
            index={index} 
            square={square} 
        />
        ))}
    </StyledGameBoard>
    </>
    )
}
)