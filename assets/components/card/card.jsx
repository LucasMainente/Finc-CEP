import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native";

export const Card = () => {
    return (
        <View style={styles.cardContainer} showsVerticalScrollIndicator={false}>
            <Text style={styles.tituloCard}>Dados do CEP</Text>


            <View style={styles.cardDados}>
                <Text style={styles.tituloValor}>CEP:</Text>
                <Text>Dado 1</Text>
            </View>
            <View style={styles.cardDados}>
                <Text style={styles.tituloValor}>Logradouro:</Text>
                <Text>Dado 2</Text>
            </View>
            <View>
                <Text style={styles.tituloValor}> UF:</Text>
                <Text> Dado 3</Text>
            </View>
            <View style={styles.cardDados}>
                <Text style={styles.tituloValor}>Estado:</Text>
                <Text>Dado 4</Text>
            </View>
            <View style={styles.cardDados}>
                <Text style={styles.tituloValor}>Região:</Text>
                <Text>Dado 5


                     
                </Text>

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
