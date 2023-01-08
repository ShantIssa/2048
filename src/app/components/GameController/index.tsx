import { View } from 'react-native';
import React, { useState } from 'react';
import GestureRecognizer from 'react-native-swipe-detect';

import {
	useCheckIsOver,
	useCheckWin,
	useEmptyBoard,
	useGenerateValue,
	useMoveDown,
	useMoveLeft,
	useMoveRight,
	useMoveUp,
} from '@hooks';

import { useStyles } from './GameController.useStyles';
import Cell from '../Cell';

const GameController = () => {
	const { styles } = useStyles();
	const [board, updateBoard] = useState<string | any[]>(useGenerateValue(useEmptyBoard()));

	const checkEndGame = () => {
		if (useCheckWin(board)) {
			console.warn('You win!');
		} else if (useCheckIsOver(board)) {
			console.warn('Game over!');
		}
	};

	const onSwipeLeft = () => {
		const newBoard = useMoveLeft(board);
		updateBoard(useGenerateValue(newBoard));
		checkEndGame();
	};

	const onSwipeRight = () => {
		const newBoard = useMoveRight(board);
		updateBoard(useGenerateValue(newBoard));
		checkEndGame();
	};

	const onSwipeUp = () => {
		const newBoard = useMoveUp(board);
		updateBoard(useGenerateValue(newBoard));
		checkEndGame();
	};

	const onSwipeDown = () => {
		const newBoard = useMoveDown(board);
		updateBoard(useGenerateValue(newBoard));
		checkEndGame();
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
				{Array.isArray(board) &&
					board.map((row, i) => {
						return (
							<View key={`row-${i}`} style={{ width: '100%', flexDirection: 'row' }}>
								{row.map((cell: number, j: number) => (
									<Cell key={`cell-${i}-${j}`} number={cell} />
								))}
							</View>
						);
					})}
			</GestureRecognizer>
		</View>
	);
};

export default GameController;
