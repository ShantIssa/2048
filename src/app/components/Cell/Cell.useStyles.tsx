import { StyleSheet } from 'react-native';

export function useStyles() {
	const styles = StyleSheet.create({
		cell: {
			justifyContent: 'center',
			alignItems: 'center',
			width: 70,
			height: 70,
		},
		text: {
			color: 'black',
			fontSize: 35,
		},
	});

	return { styles };
}
