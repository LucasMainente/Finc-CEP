import { StyleSheet, Text, TextInput, View } from "react-native"

export const Input = () => {
    return (
        <View style={styles.campoInput}>
            <Text style={styles.label}> CEP </Text>
            <TextInput
                placeholder="00000-000"
                style={styles.input}
                maxLength={8}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    campoInput: {
        width: '70%',
        alignItems: 'center',
    },
    label: {
        marginBottom: 5
    },
    input: {
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: '#999999',
        color: '#000000',
        padding: 5
    }
})
