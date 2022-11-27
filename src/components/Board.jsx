import Square from "./Square";

export default function Board({ onClick, squares }) {
    return (
        <div className="board">
            {squares.map((square, idx) => <Square key={idx} onClick={() => onClick(idx)} value={square} />)}
        </div>
    );
}
