import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../avatar";

export function Contact(){
    return <TouchableOpacity>
        <Avatar name="Henrique"/>
        <Text style={styles.name}>Henrique</Text>
    </TouchableOpacity>
}

const variants = {
    size: {
        medium: {width: 54, height: 54,
        borderRadius: 18},
        large: {width: 100, height : 100,
        borderRadius: 32},
        },
    text: {
        medium: {fontSize: 24},
        large: {fontSize: 32},
    }
}