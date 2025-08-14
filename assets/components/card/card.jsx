import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";

export const Card = ({cep,logradouro,bairro,estado}) => {
    return (
        <View style={styles.cardContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.tituloCard}>Dados do CEP</Text>


            <View style={styles.cardDados}>
                <Text style={styles.tituloValor}>Cep:</Text>
                <Text>{cep}</Text>
            </View>
            <View style={styles.cardDados}>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text>{logradouro}</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}>Bairro:</Text>
                <Text>{bairro}</Text>
            </View>
            <View style={styles.cardDados}>
                <Text style={styles.tituloValor}>Estado:</Text>
                <Text>{estado}</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        minHeight: '70%',
        width: '70%',
        backgroundColor: '#ffffffff',
        padding: 20,
        borderRadius: 10,



        shadowColor: 'rgba(14, 30, 37, 0.32)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.32,
        shadowRadius: 8,

        elevation: 6,
    },
    tituloCard: {
        fontSize: 20,
    },
    cardDados: {
        padding: 5
    },
    tituloValor: {
        fontWeight: 'bold',
        marginBottom: 5
    }
});
