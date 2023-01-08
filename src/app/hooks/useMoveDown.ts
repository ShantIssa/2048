import useMoveLeft from './useMoveLeft';
import { useRotateLeft, useRotateRight } from './useRotateDirections';

const useMoveDown = (board: string | any[]) => {
	const rotateBoard = useRotateRight(board);
	const newBoard = useMoveLeft(rotateBoard);
	return useRotateLeft(newBoard);
};

export default useMoveDown;
