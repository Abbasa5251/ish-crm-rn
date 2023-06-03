import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { InformationCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const CustomerCard = (props) => {
	const WIDTH = Dimensions.get("window").width;
	const navigation = useNavigation();
	const {
		id,
		url,
		transaction_count,
		total_transaction_amount,
		name,
		phone,
		address,
		payment_due,
		is_active,
		created_at,
		modified_at,
	} = props.customer;

	const handlePress = (url) => {
		navigation.navigate("Customer", { url });
	};

	return (
		<View className="flex flex-col justify-between pb-4">
			<View className="flex-row justify-between space-x-2 pb-2">
				<View
					className="space-y-1"
					style={{
						width: WIDTH * 0.65,
					}}
				>
					<Text className="text-lg font-bold leading-snug sm:pr-8">
						{name}
					</Text>
					<Text className="text-sm font-medium">{phone}</Text>
					<Text className="text-sm">{address}</Text>
				</View>
				<View className="items-center justify-center">
					<Text className="text-xl font-semibold text-red-600">
						{payment_due}
					</Text>
				</View>
			</View>
			<TouchableOpacity
				className="flex-row justify-center items-center space-x-2 py-2 bg-blue-900 rounded-lg"
				onPress={() => handlePress(url)}
			>
				<Text className="text-blue-100 uppercase">Details</Text>
				<InformationCircleIcon size={24} color="white" />
			</TouchableOpacity>
		</View>
	);
};

export default CustomerCard;
