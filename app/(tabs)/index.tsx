"use client";

import "@/global.css";

import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { styled } from "react-native-css";
import { SafeAreaView as RN_SafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RN_SafeAreaView);

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background gap-4">
      <Text className="text-xl font-bold text-primary">
        Welcome to Nativewind!
      </Text>
      <Link href="/(auth)/login" className="text-primary border-2 border-primary p-2 rounded-md">
        <Text className="text-lg text-primary font-bold">Login</Text>
      </Link>
    </SafeAreaView>
  );
};

export default HomeScreen;