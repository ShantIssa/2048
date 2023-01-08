import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { useStyles } from './Cell.useStyles';

const Cell = ({ number }: { number: number }) => {
	// return <View style={`cell cell-${number}`}>{number > 0 ? number : ''}</View>;
	return (
		<View
			style={{
				borderWidth: 1,
				justifyContent: 'center',
				alignItems: 'center',
				width: 30,
				height: 30,
				borderRadius: 3,
			}}
		>
			<Text
				style={{
					color: 'black',

					fontSize: 15,
				}}
			>
				{number > 0 ? number : ''}
			</Text>
		</View>
	);
};

export default Cell;
