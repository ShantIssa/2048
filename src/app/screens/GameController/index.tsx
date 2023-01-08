import { Alert, View } from 'react-native';
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

	return (
		<View style={styles.wrapper}>
			<GestureRecognizer
				config={config}
				onSwipeUp={onSwipeUp}
				onSwipeDown={onSwipeDown}
				onSwipeLeft={onSwipeLeft}
				onSwipeRight={onSwipeRight}
			>
				<View style={{ flex: 1 }}>
					{board.map((row, i) => {
						return (
							<View key={`row-${i}`} style={{ width: '100%', flexDirection: 'row' }}>
								{row.map((cell: number, j: number) => (
									<Cell key={`cell-${i}-${j}`} number={cell} />
								))}
							</View>
						);
					})}
				</View>
			</GestureRecognizer>
		</View>
	);
};

export default GameController;
