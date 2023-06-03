import { View, Text } from "react-native";
import React from "react";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	BanknotesIcon,
	GlobeAsiaAustraliaIcon,
	CreditCardIcon,
	CurrencyRupeeIcon,
} from "react-native-heroicons/solid";

const TRANSACTION = {
	id: "a9b87bcf-6b39-4ce0-a935-28d752380384",
	customer_name: "Kohinoor Footwear",
	amount: 2000,
	paid_on: "2023-05-27 19:00:00",
	type: "DEBIT",
	mode: "CASH",
};

const renderModeIcon = (mode) => {
	switch (mode) {
		case "CARD":
			return <CreditCardIcon size={24} color={"black"} />;
		case "CASH":
			return <BanknotesIcon size={24} color={"black"} />;
		case "UPI":
			return <CurrencyRupeeIcon size={24} color={"black"} />;
		case "NET":
			return <GlobeAsiaAustraliaIcon size={24} color={"black"} />;
		default:
			return <></>;
	}
};

const TransactionCard = (props) => {
	const { id, customer_name, amount, paid_on, type, mode } =
		props.transaction;

	const formatDateTime = (dateTime) => {
		const d = new Date(dateTime);
		return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
	};

	return (
		<View className="flex items-start pb-4 bg-slate-100">
			<View className="flex flex-row items-center justify-between">
				<View>
					{/* Amount with Icon */}
					<View className="flex-row items-center justify-start space-x-2">
						<Text
							className={`text-xl font-semibold ${
								type === "DEBIT"
									? "text-green-600"
									: "text-red-600"
							}`}
						>
							{amount}
						</Text>
						{type === "DEBIT" ? (
							<ArrowDownIcon size={21} color={"green"} />
						) : (
							<ArrowUpIcon size={21} color={"red"} />
						)}
					</View>
					{/* Date and Time */}
					<Text className="font-medium text-base">
						{formatDateTime(paid_on)}
					</Text>
				</View>
				{/* Mode of transaction */}
				<View className="flex-row items-center justify-center space-x-2">
					<Text className="font-semibold">{mode}</Text>
					{renderModeIcon(mode)}
				</View>
			</View>
		</View>
	);
};

export default TransactionCard;
