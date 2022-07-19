import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Register, Details } from '../screens';

const { Screen, Navigator } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />
			<Screen name="new" component={Register} />
			<Screen name="details" component={Details} />
		</Navigator>
	);
}
