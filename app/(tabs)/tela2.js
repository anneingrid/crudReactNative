import { ScrollView, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function Tela2() {

    return (
        <View>
            <Text>
                Tela 2
            </Text>
            <Link href='/[id]/'>
            <Text>
                Tela 3
            </Text>
            </Link>
            
        </View>
    )
}