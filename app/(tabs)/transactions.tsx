"use client"

import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TransactionsScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-background">
      <Text className="text-2xl font-bold text-primary">Transactions</Text>
    </SafeAreaView>
  );
}

export default TransactionsScreen;