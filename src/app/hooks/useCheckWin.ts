import useHasValue from './useHasValue';

const useCheckWin = (board: string | any[]) => {
	return useHasValue(board, 2048);
};

export default useCheckWin;
