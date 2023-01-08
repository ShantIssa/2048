import useEmptyBoard from './useEmptyBoard';

const useReverse = (board: string | any[]) => {
	const reverseBoard = useEmptyBoard();
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			reverseBoard[i][j] = board[i][board[i].length - 1 - j];
		}
	}
	return reverseBoard;
};

export default useReverse;
