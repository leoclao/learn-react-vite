import { Button } from "@/components/Button";
import Grid from "@/components/Grid";
import styles from "@/styles/modules/board.module.scss";
import clsx from "clsx";
import React, { useState } from "react";

interface Props {
	cols: number;
	rows: number;
}

/**
 * Represents a Tic-Tac-Toe board component.
 * 
 * @param {Props} cols - The number of columns in the board.
 * @param {Props} rows - The number of rows in the board.
 * @returns {JSX.Element} A React component representing the Tic-Tac-Toe board.
 */
function Board({ cols, rows }: Props) {
	const [xIsNext, setXIsNext] = useState(true);
	const [squares, setSquares] = useState(Array(rows).fill(null));

	const items = Array.from({ length: cols * rows }, (v, i) => `Ô thứ ${i + 1}`);

	function handlePlayerClick(i) {
		setSquares(Array(rows).fill(null));
		const nextSquares = squares.slice();

		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
		checkBoard(items);
	}

	function checkSubArray(subArray) {
		let countX = 0;
		let countO = 0;

		for (let i = 0; i < subArray.length; i++) {
			if (subArray[i] === "X") {
				countX++;
				countO = 0;
			} else if (subArray[i] === "O") {
				countO++;
				countX = 0;
			} else {
				countX = 0;
				countO = 0;
			}

			if (countX === 5) {
				return X;
			}

			if (countO === 5) {
				return O;
			}
		}

		return null;
	}

	function checkBoard(board) {
		let result = null;

		for (let i = 0; i < rows; i++) {
			const row = board[i];
			console.log(`row ${row}`);
			result = checkSubArray(row);

			if (result) {
				return result;
			}
		}

		for (let j = 0; j < cols; j++) {
			const col = [];

			for (let i = 0; i < rows; i++) {
				col.push(board[i][j]);
			}

			result = checkSubArray(col);

			if (result) {
				return result;
			}
		}

		for (let k = 0; k <= rows + cols - 2; k++) {
			const diag = [];

			for (let i = 0; i < rows; i++) {
				for (let j = 0; j < cols; j++) {
					if (i + j === k) {
						diag.push(board[i][j]);
					}
				}
			}

			result = checkSubArray(diag);

			if (result) {
				return result;
			}
		}

		for (let k = 0; k <= rows + cols - 2; k++) {
			const diag = [];

			for (let i = 0; i < rows; i++) {
				for (let j = 0; j < cols; j++) {
					if (i - j === k - cols + 1) {
						diag.push(board[i][j]);
					}
				}
			}

			result = checkSubArray(diag);

			if (result) {
				return result;
			}
		}

		return null;
	}

	return (
		<div className={clsx(styles.base)}>
			<Grid cols={cols}>
				{items.map((item) => (
					<Button
						key={item}
						size="medium-square"
						hollow
						label={squares[index]}
						onClick={() => handlePlayerClick(index)}
						title={item}
					/>
				))}
			</Grid>
		</div>
	);
}

export default Board;
