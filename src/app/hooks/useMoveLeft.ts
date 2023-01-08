import useCompress from './useCompress';
import useMerge from './useMerge';

const useMoveLeft = (board: string | any[]) => {
	const newBoard1 = useCompress(board);
	const newBoard2 = useMerge(newBoard1);
	return useCompress(newBoard2);
};

export default useMoveLeft;
