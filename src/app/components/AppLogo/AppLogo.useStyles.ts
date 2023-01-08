import { StyleSheet } from 'react-native';

export function useStyles() {
	const styles = StyleSheet.create({
		logoWrapper: {
			backgroundColor: 'yellow',
			width: 50,
			height: 50,
			alignItems: 'center',
			justifyContent: 'center',
		},
	});

	return { styles };
}
