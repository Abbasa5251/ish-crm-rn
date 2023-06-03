import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { CUSTOMERS } from "../constants/customers";
import CustomerCard from "../components/CustomerCard";

const HomeScreen = () => {
	return (
		<SafeAreaView className="">
			<StatusBar style="dark-content" />
			<View className="flex items-center space-x-2 pb-2">
				<ScrollView showsVerticalScrollIndicator={false}>
					{CUSTOMERS.map((customer) => (
						<CustomerCard key={customer.id} customer={customer} />
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
