import useIsFull from './useIsFull';

const matrixLength = 4;

const getRandomPosition = () => {
	const rowPosition = Math.floor(Math.random() * matrixLength);
	const colPosition = Math.floor(Math.random() * matrixLength);
	return [rowPosition, colPosition];
};

const useGenerateValue = (board: string | any[]) => {
	if (useIsFull(board)) {
		return board;
	}
	let [row, col] = getRandomPosition();
	while (board[row][col] !== 0) {
		[row, col] = getRandomPosition();
	}
	board[row][col] = 2;
	return board;
};

export default useGenerateValue;
