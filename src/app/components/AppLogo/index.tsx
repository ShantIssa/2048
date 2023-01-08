import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from './AppLogo.useStyles';

const AppLogo = () => {
	const { styles } = useStyles();
	return (
		<View style={styles.logoWrapper}>
			<Text>2048</Text>
		</View>
	);
};

export default AppLogo;
