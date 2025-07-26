import { ChevronLeft } from "lucide-react-native"
import { Text, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const DetailsBar = () => {

    const insets = useSafeAreaInsets()

    return (
        <View style={{paddingTop: insets.top }} className="w-full pl-[30px] justify-center h-[100px]">
            <ChevronLeft color={`#dc2558`} />
        </View> 
    )
}   

export default DetailsBar