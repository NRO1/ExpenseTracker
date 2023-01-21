import { StyleSheet, Text, TextInput, View } from 'react-native';
import {Colors} from '../../colors/style';

function Input({ label, textInputConfig }) {

    let inputStyles = [styles.input];
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.multiline)
    };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput { ...textInputConfig} style={inputStyles}/>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        marginBottom: 4,
    },
    input :{
        backgroundColor: Colors.primary100,
        color: 'black',
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    multiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
})