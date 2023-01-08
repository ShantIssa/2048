import { StyleSheet } from 'react-native';
import { useMemo } from 'react';

export function useStyles(number: number) {
	const backgroundColor = useMemo(() => {
		if (number === 2) {
			return 'rgba(255,117,65,0.8)';
		}
		if (number === 4) {
			return '#e4514d';
		}
		if (number === 8) {
			return '#ff9f1c';
		}
		if (number === 16) {
			return '#ff6262';
		}
		if (number === 32) {
			return '#a24949';
		}
		if (number === 64) {
			return '#e60000';
		}
		if (number === 128) {
			return '#ffb600';
		}
		if (number === 256) {
			return 'rgb(213,132,17)';
		}
		if (number === 516) {
			return 'rgb(255,68,0)';
		}
		if (number === 1024) {
			return 'rgb(0,130,204)';
		}
		if (number === 2048) {
			return 'rgb(143,113,196)';
		}
	}, [number]);

	const styles = StyleSheet.create({
		cell: {
			justifyContent: 'center',
			alignItems: 'center',
			width: 70,
			height: 70,
			backgroundColor,
			margin: 2,
			borderRadius: 3,
		},
		text: {
			color: '#fff',
			fontSize: number > 1000 ? 24 : 33,
			fontWeight: 'bold',
		},
	});

	return { styles };
}
