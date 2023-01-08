import useReverse from './useReverse';
import useMoveLeft from './useMoveLeft';

const useMoveRight = (board: string | any[]) => {
	const reversedBoard = useReverse(board);
	const newBoard = useMoveLeft(reversedBoard);
	return useReverse(newBoard);
};

export default useMoveRight;
