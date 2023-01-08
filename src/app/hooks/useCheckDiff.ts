const useCheckDiff = (board: string | any[], updatedBoard: any[][]) => {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] !== updatedBoard[i][j]) {
				return true;
			}
		}
	}
	return false;
};

export default useCheckDiff;
