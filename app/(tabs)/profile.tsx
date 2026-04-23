"use client"

import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-background">
      <Text className="text-2xl font-bold text-primary">Profile</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;