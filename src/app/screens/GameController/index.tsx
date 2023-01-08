import { Alert, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import GestureRecognizer from 'react-native-swipe-detect';

import { Cell } from '@components';
import {
	useMoveUp,
	useCheckWin,
	useMoveDown,
	useMoveLeft,
	useMoveRight,
	useEmptyBoard,
	useCheckIsOver,
	useGenerateValue,
	useAreMatricesIdentical,
} from '@hooks';

import { useStyles } from './GameController.useStyles';

const GameController = () => {
	const { styles } = useStyles();
	const [board, updateBoard] = useState<number[][]>(useGenerateValue(useEmptyBoard()) as number[][]);

	useEffect(() => {
		checkEndGame();
	});

	const checkEndGame = () => {
		if (useCheckWin(board)) {
			Alert.alert('You Won!', '', [
				{
					text: 'Start Again',
					onPress: () => updateBoard(useGenerateValue(useEmptyBoard())),
					style: 'destructive',
				},
				{
					text: 'Keep Going',
					onPress: () => null,
					style: 'cancel',
				},
			]);
		}
		if (useCheckIsOver(board)) {
			Alert.alert('Game Over', 'No where to move', [
				{
					text: 'Try Again',
					onPress: () => updateBoard(useGenerateValue(useEmptyBoard())),
					style: 'destructive',
				},
			]);
		}
	};

	const onSwipeLeft = () => {
		const newBoard = useMoveLeft(board);
		if (!useAreMatricesIdentical(newBoard, board as number[][])) {
			updateBoard(useGenerateValue(newBoard));
			checkEndGame();
		}
	};

	const onSwipeRight = () => {
		const newBoard = useMoveRight(board);
		if (!useAreMatricesIdentical(newBoard, board as number[][])) {
			updateBoard(useGenerateValue(newBoard));
			checkEndGame();
		}
	};

	const onSwipeUp = () => {
		const newBoard = useMoveUp(board);
		if (!useAreMatricesIdentical(newBoard, board as number[][])) {
			updateBoard(useGenerateValue(newBoard));
			checkEndGame();
		}
	};

	const onSwipeDown = () => {
		const newBoard = useMoveDown(board);
		if (!useAreMatricesIdentical(newBoard, board as number[][])) {
			updateBoard(useGenerateValue(newBoard));
			checkEndGame();
		}
	};
	const config = {
		velocityThreshold: 0.3,
		directionalOffsetThreshold: 80,
	};
	function sum_array(arr: number[][]) {
		// store our final answer
		let sum = 0;

		// loop through entire array
		for (let i = 0; i < arr.length; i++) {
			// loop through each inner array
			for (let j = 0; j < arr[i].length; j++) {
				// add this number to the current final sum
				sum += arr[i][j];
			}
		}

		return sum;
	}
	return (
		<>
			<Text style={{ alignSelf: 'center', fontSize: 33, fontWeight: '700' }}>Score: {sum_array(board)}</Text>
			<View style={styles.wrapper}>
				<GestureRecognizer
					config={config}
					onSwipeUp={onSwipeUp}
					onSwipeDown={onSwipeDown}
					onSwipeLeft={onSwipeLeft}
					onSwipeRight={onSwipeRight}
				>
					<View style={{ backgroundColor: '#f3f3f3', borderRadius: 5, padding: 10 }}>
						{board.map((row, i) => {
							return (
								<View
									key={`row-${i}`}
									style={{
										width: '100%',
										flexDirection: 'row',
									}}
								>
									{row.map((cell: number, j: number) => (
										<Cell key={`cell-${i}-${j}`} number={cell} />
									))}
								</View>
							);
						})}
					</View>
				</GestureRecognizer>
			</View>
		</>
	);
};

export default GameController;
