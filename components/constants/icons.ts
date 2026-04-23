import { HomeIcon, ListIcon, UserIcon } from "lucide-react-native";

export const icons = {
    home: HomeIcon,
    transactions: ListIcon,
    profile: UserIcon,
};

export default icons;
export type IconName = keyof typeof icons;