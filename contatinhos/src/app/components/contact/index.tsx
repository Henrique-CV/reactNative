import { ImageProps, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../avatar";

export type ContactProps = {
    name: string,
    image?: ImageProps
}

type Props = TouchableOpacityProps & {
    contact: ContactProps
}

export function Contact({ contact, ...rest } : Props)
{
    return <TouchableOpacity style={styles.container}>
        <Avatar name="Henrique" image={contact.image}/>
        <Text style={styles.name}>{contact.name}</Text>
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