import { useState } from "react";
import calculateWinner from "../common/helpers";
import Board from "./Board";

export default function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [x_is_next, setXIsNext] = useState(true);

    const winner = calculateWinner(board);

    const handleClick = idx => {
        if (winner || board[idx]) return;
        setBoard(old => {
            const temp = [...old];
            temp[idx] = x_is_next ? 'X' : 'O';
            return temp;
        });
        setXIsNext(old => !old);
    };

    const renderMoves = () => (
        <button onClick={() => { setXIsNext(true); setBoard(Array(9).fill(null)) }}>
            {winner || board.every(square => square === null) ? 'Start' : 'Reset'} Game!
        </button>
    );

    return (
        <>
            <Board onClick={handleClick} squares={board} />
            <div className="display">
                <p>{winner ? `Winner: ${winner}` : `Next Player: ${x_is_next ? 'X' : 'O'}`}</p>
                {renderMoves()}
            </div>
        </>
    );
}
