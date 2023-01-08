const useMerge = (board: string | any[]) => {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] !== 0 && board[i][j] === board[i][j + 1]) {
				board[i][j] = board[i][j] * 2;
				board[i][j + 1] = 0;
			}
		}
	}
	return board;
};
export default useMerge;
