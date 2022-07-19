import { useState } from 'react';
import { HStack, IconButton, VStack, useTheme, Heading, Text, FlatList, Center } from 'native-base';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';

import { Filter } from '../components/Filter';
import { Button } from '../components/Button';
import { Order, IOrder } from '../components/Order';

import Logo from '../assets/logo_secondary.svg';
import { useNavigation } from '@react-navigation/native';

function Home() {
	const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
	const [orders, setOrders] = useState<IOrder[]>([]);

	const navigation = useNavigation();
	const { colors } = useTheme();

	function handleNewOrder() {
		navigation.navigate('new');
	}

	function handleOpenDetails(orderId: string) {
		navigation.navigate('details', { orderId });
	}

	return (
		<VStack flex={1} pb={6} bg="gray.700">
			<HStack
				w="full"
				justifyContent="space-between"
				alignItems="center"
				bg="gray.600"
				pt={12}
				pb={5}
				px={6}
			>
				<Logo />

				<IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
			</HStack>

			<VStack flex={1} px={6}>
				<HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
					<Heading color="gray.100">Solicitações</Heading>
					<Text color="gray.200">{orders.length}</Text>
				</HStack>

				<HStack space={3} mb={8}>
					<Filter
						type="open"
						title="em andamento"
						onPress={() => setStatusSelected('open')}
						isActive={statusSelected === 'open'}
					/>

					<Filter
						type="closed"
						title="finalizados"
						onPress={() => setStatusSelected('closed')}
						isActive={statusSelected === 'closed'}
					/>
				</HStack>

				<FlatList
					data={orders}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Order data={item} onPress={() => handleOpenDetails(item.id)} />
					)}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{ paddingBottom: 20 }}
					ListEmptyComponent={() => (
						<Center>
							<ChatTeardropText size={40} color={colors.gray[300]} />
							<Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
								Voce ainda não possui {'\n'}
								solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizados'}
							</Text>
						</Center>
					)}
				/>

				<Button title="Nova solicitação" onPress={handleNewOrder} />
			</VStack>
		</VStack>
	);
}

export { Home };
