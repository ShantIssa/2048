import useCheckDiff from './useCheckDiff';
import useMoveLeft from './useMoveLeft';
import useMoveUp from './useMoveUp';
import useMoveRight from './useMoveRight';
import useMoveDown from './useMoveDown';

const useCheckIsOver = (board: string | any[]) => {
	if (useCheckDiff(board, useMoveLeft(board))) {
		return false;
	}
	if (useCheckDiff(board, useMoveRight(board))) {
		return false;
	}
	if (useCheckDiff(board, useMoveUp(board))) {
		return false;
	}
	if (useCheckDiff(board, useMoveDown(board))) {
		return false;
	}

	return true;
};

export default useCheckIsOver;
