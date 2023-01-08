import useEmptyBoard from './useEmptyBoard';

export const useRotateLeft = (board: string | any[]) => {
	const rotateBoard = useEmptyBoard();

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			rotateBoard[i][j] = board[j][board[i].length - 1 - i];
		}
	}

	return rotateBoard;
};

export const useRotateRight = (board: string | any[]) => {
	const rotateBoard = useEmptyBoard();

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			rotateBoard[i][j] = board[board[i].length - 1 - j][i];
		}
	}

	return rotateBoard;
};
