import styled from 'styled-components';
import { Mark } from "../types/Mark";

const StyledButton = styled.button`
width: 100%;
height: 100%;
background-color: #444;
color: white;
font-size: 40px;
`;

type SquareProps = {
    onClick: (index: number) => void;
    index: number;
    square: Mark;
}

export const Square = ({onClick, index, square} : SquareProps) => {
    function handleClick() {
        if(square !== Mark.None) return;
        onClick(index);
    }

    return (
        <div>
            <StyledButton onClick={handleClick}>{square}</StyledButton>
        </div>
    )
}