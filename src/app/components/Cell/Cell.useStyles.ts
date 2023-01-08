import { StyleSheet } from 'react-native';

export function useStyles() {
	const styles = StyleSheet.create({
		cell: {
			justifyContent: 'center',
			alignItems: 'center',
			width: 70,
			height: 70,
			borderWidth: 1,
		},
		text: {
			color: 'black',
			fontSize: 40,
		},
	});

	return { styles };
}
