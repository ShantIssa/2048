import React from 'react';
import { Text, View } from 'react-native';

import { useStyles } from './Cell.useStyles';

const Cell = ({ number }: { number: number }) => {
	const { styles } = useStyles();
	// return <View style={`cell cell-${number}`}>{number > 0 ? number : ''}</View>;
	return (
		<View style={styles.cell}>
			<Text style={styles.text}>{number > 0 ? number : ''}</Text>
		</View>
	);
};

export default Cell;
