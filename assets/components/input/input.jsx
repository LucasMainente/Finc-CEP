import { StyleSheet, Text, TextInput, View } from "react-native";


const Input = () => {
    return (
        <>
            <View style={styles.campoInput}>
                <Text style={styles.label}>CEP</Text>
                <TextInput
                    type="text"
                    name="cep"
                    placeholder="00000-000"
                    pattern="[0-9]"
                    required
                    maxLength={9}
                ></TextInput>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    campoInput: {
        width: `50%`,
        padding: 5,

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#939393',
        color: '#939393',
        padding: 5,
        outline: 'none'
    }



})

export default Input;