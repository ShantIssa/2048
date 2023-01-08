import useHasValue from './useHasValue';

const useIsFull = (board: string | any[]) => {
	return !useHasValue(board, 0);
};
export default useIsFull;
