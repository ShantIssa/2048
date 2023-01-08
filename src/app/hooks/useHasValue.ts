const useHasValue = (board: string | any[], value: any) => {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === value) {
				return true;
			}
		}
	}
	return false;
};

export default useHasValue;
