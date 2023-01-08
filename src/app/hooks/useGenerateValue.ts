import useIsFull from './useIsFull';

export const matrixLength = 4;

const makeRandoms = () => {
	const randoms: number[] = [2, 4];

	function removeArrayItem(i: number) {
		const val = randoms.pop();
		if (i < randoms.length && val) {
			randoms[i] = val;
		}
	}

	function makeRandom() {
		const rand = randoms[Math.floor(Math.random() * randoms.length)];
		removeArrayItem(rand);
		return rand;
	}

	return makeRandom();
};

const getRandomPosition = () => {
	const rowPosition = Math.floor(Math.random() * matrixLength);
	const colPosition = Math.floor(Math.random() * matrixLength);
	return [rowPosition, colPosition];
};

const useGenerateValue = (board: number[][]) => {
	if (useIsFull(board)) {
		return board;
	}
	let [row, col] = getRandomPosition();
	while (board[row][col] !== 0) {
		[row, col] = getRandomPosition();
	}
	board[row][col] = makeRandoms();
	return board;
};

export default useGenerateValue;
