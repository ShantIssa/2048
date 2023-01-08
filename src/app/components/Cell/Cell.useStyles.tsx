import { StyleSheet } from 'react-native';

export function useStyles() {
	const styles = StyleSheet.create({
		wrapper: {
			alignItems: 'center',
			justifyContent: 'center',
			top: '50%',
		},
	});

	return { styles };
}
