import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CustomerScreen from "./screens/CustomerScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerTitle: "ISH Customers",
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen name="Customer" component={CustomerScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
