import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Linking,
	Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import TransactionCard from "../components/TransactionCard";
import { PhoneIcon, PlusIcon } from "react-native-heroicons/solid";

const CUSTOMER = {
	id: "74dbf480-0da5-4856-99af-a5f6e7440af1",
	transactions: [
		{
			id: "a9b87bcf-6b39-4asfce0-a935-28d752380384",
			customer_name: "Kohinoor Footwear",
			amount: 2000,
			paid_on: "2023-05-27 19:00:00",
			type: "DEBIT",
			mode: "CASH",
		},
		{
			id: "a9b87bcf-6b39-4case0-a935-28d752380384",
			customer_name: "Kohinoor Footwear",
			amount: 2000,
			paid_on: "2023-05-27 19:00:00",
			type: "DEBIT",
			mode: "CASH",
		},
		{
			id: "a9b87bcf-6b39-4ce0-a935-28d752380384",
			customer_name: "Kohinoor Footwear",
			amount: 2000,
			paid_on: "2023-05-27 19:00:00",
			type: "DEBIT",
			mode: "CASH",
		},
	],
	transaction_count: 1,
	total_transaction_amount: 2000,
	total_transaction_debit_amount: 2000,
	total_transaction_credit_amount: 0,
	name: "Kohinoor Footwear",
	email: null,
	phone: "9823608927",
	address: "Indapur Road, Opp. New mandai. Baramati - 413102",
	payment_due: 5700,
	is_active: true,
};

const CallHeaderButton = ({ phoneNumber }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				try {
					Linking.openURL(`tel:${phoneNumber}`);
				} catch (err) {
					console.log("Error");
				}
			}}
		>
			<PhoneIcon size={21} color={"green"} />
		</TouchableOpacity>
	);
};

const DisplayFields = ({ label, value }) => (
	<View className="flex-row items-center justify-start space-x-2">
		<Text className="text-lg text-blue-900 capitalize">{label} -</Text>
		<Text className="text-lg font-semibold text-blue-700">{value}</Text>
	</View>
);

const CustomerScreen = () => {
	const navigation = useNavigation();
	const { params } = useRoute();
	const WIDTH = Dimensions.get("window").width;

	const handleRecordTransaction = () => {};

	useEffect(() => {
		navigation.setOptions({
			title: CUSTOMER.name,
			headerRight: () =>
				CUSTOMER.phone && (
					<CallHeaderButton phoneNumber={CUSTOMER.phone} />
				),
		});
	}, []);

	return (
		<SafeAreaView className="py-4">
			<StatusBar style="dark-content" />
			{/* Display all the info */}
			<View className="flex items-start justify-between px-4">
				<DisplayFields
					label={"payment due"}
					value={CUSTOMER.payment_due}
				/>
				<DisplayFields
					label={"total transaction amount"}
					value={CUSTOMER.total_transaction_amount}
				/>
				<DisplayFields
					label={"total debit amount"}
					value={CUSTOMER.total_transaction_debit_amount}
				/>
				<DisplayFields
					label={"total credit amount"}
					value={CUSTOMER.total_transaction_credit_amount}
				/>
			</View>
			{/* Display total number of transactions and add button */}
			<View className="flex-row items-center justify-between px-4 py-2">
				<Text className="bg-blue-950 text-blue-50 p-2 rounded-xl">
					{CUSTOMER.transaction_count}
				</Text>
				<TouchableOpacity
					onPress={() => handleRecordTransaction()}
					className="bg-blue-950 p-1 rounded-xl flex-row items-center justify-center space-x-1"
				>
					<PlusIcon color={"white"} size={18} />
					<Text className="text-blue-50">Transaction</Text>
				</TouchableOpacity>
			</View>
			<View className="flex items-center pb-2">
				{CUSTOMER.transactions.length > 0 ? (
					<ScrollView showsVerticalScrollIndicator={false}>
						{CUSTOMER.transactions.map((transaction) => (
							<TransactionCard
								key={transaction.id}
								transaction={transaction}
							/>
						))}
					</ScrollView>
				) : (
					<Text>No Transactions</Text>
				)}
			</View>
		</SafeAreaView>
	);
};

export default CustomerScreen;
