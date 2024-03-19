import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../types/rootState";
import styled from 'styled-components';

const ScoreBoardContainer = styled.div`
`;

const MatchesList = styled.ul`
    list-style: none;
`;

const MatchItem = styled.li`
    display: flex;
    justify-content: space-between;
    flex-direction: row;

`;

const MatchColumn = styled.div`
    border: 1px solid black;
    flex: 1;
    text-align: center;
`


export const ScoreBoard = memo(() => {
    const score = useSelector((state: RootState) => state.score);
    const matches = useSelector((state: RootState) => state.score.matches);
    return (
        <ScoreBoardContainer>
            <h1>Score</h1>
            <h3>X: {score.x}</h3>
            <h3>O: {score.o}</h3>
            <div>
                <h3>Matches</h3>
                <MatchesList>
                    <MatchItem>
                        <MatchColumn>X</MatchColumn>
                        <MatchColumn>O</MatchColumn>
                    </MatchItem>
                    {matches.map((match, index) => (
                        <MatchItem key={index}>
                            <MatchColumn>{match === 'X' && '✔'}</MatchColumn>
                            <MatchColumn>{match === 'O' && '✔'}</MatchColumn>
                        </MatchItem>                    ))}
                </MatchesList>
            </div>
        </ScoreBoardContainer>
    )
});
