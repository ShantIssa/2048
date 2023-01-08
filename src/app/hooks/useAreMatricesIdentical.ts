import { matrixLength } from './useGenerateValue';

const useAreMatricesIdentical = (matrix1: number[][], matrix2: number[][]) => {
	let i, j;
	for (i = 0; i < matrixLength; i++) for (j = 0; j < matrixLength; j++) if (matrix1[i][j] != matrix2[i][j]) return 0;
	return 1;
};

export default useAreMatricesIdentical;
