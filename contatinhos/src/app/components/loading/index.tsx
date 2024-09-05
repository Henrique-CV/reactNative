import { ActivityIndicator } from "react-native";
import { theme } from "@/themes";

import { styles } from "./styles";

export function Loading(){
    return(
        <ActivityIndicator style={styles.loading}
        color={theme.colors.blue}/>
    )
}