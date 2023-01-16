import { Pressable, View, Text, StyleSheet, Button } from 'react-native';
import { Colors } from '../../colors/style';

function CustomButton({children, onPress, mode, style}) {
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({ pressed }) =>pressed && styles.pressed} >
                <View style={[ styles.button, mode === 'flat' && styles.flat]} >
                    <Text style={[ styles.buttonTetx, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: Colors.primary800
    },
    flat :{
        backgroundColor: 'transparent'
    },
    buttonTetx: {
        color: 'white',
        textAlign: 'center'
    },
    flatText: {
        color: Colors.error50,
        fontWeight: 'bold'
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: Colors.primary100,
        borderRadius: 4
    }
})