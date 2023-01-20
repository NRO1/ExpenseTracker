import { StyleSheet, View } from 'react-native';
import Input from './Input';

function ExpenseForm() {
    function amtChangeHandler() {}


    return (
        <View>
            <Input label="Amount" textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: amtChangeHandler,

            }}/>
            <Input label="Date" textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: () => {}
            }}/>
            <Input label="Description" textInputConfig={{
                multiline: true,
                //autoCapitalize: 'none',
                //autoCorrect: false
            }}/>
        </View>
    )
}

export default ExpenseForm;

const styles = StyleSheet.create({})