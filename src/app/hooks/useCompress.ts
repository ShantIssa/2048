import useEmptyBoard from './useEmptyBoard';

const useCompress = (board: string | any[]) => {
	const newBoard = useEmptyBoard();
	for (let i = 0; i < board.length; i++) {
		let columnIndex = 0;
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] !== 0) {
				newBoard[i][columnIndex] = board[i][j];
				columnIndex++;
			}
		}
	}
	return newBoard;
};

export default useCompress;
