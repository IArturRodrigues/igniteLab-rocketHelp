import { VStack } from 'native-base';
import { useRoute } from '@react-navigation/native';

import { Header } from '../components/Header';

interface RouteParams {
	orderId: string;
}

function Details() {
	const route = useRoute();
	const { orderId } = route.params as RouteParams;

	return (
		<VStack flex={1} bg="gray.700">
			<Header title="Solicitação" />
		</VStack>
	);
}

export { Details };
