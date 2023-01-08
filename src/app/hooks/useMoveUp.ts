import useMoveLeft from './useMoveLeft';
import { useRotateLeft, useRotateRight } from './useRotateDirections';

const useMoveUp = (board: string | any[]) => {
	const rotateBoard = useRotateLeft(board);
	const newBoard = useMoveLeft(rotateBoard);
	return useRotateRight(newBoard);
};

export default useMoveUp;
