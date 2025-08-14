
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Input } from '../assets/components/input/input';
import { Botao } from '../assets/components/botao/botao';
import { Card } from '../assets/components/card/card';
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <>
      {/* 1. Logo + Imagem de fundo */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/Group 6.png')}
          style={styles.logo}>
        </Image>
      </ImageBackground>

      {/* 2. Campo de consulta */}
      <ScrollView style={styles.containerScroll} >
        <View style={styles.container}>
        {/* 2.1. Título */}
        <Text style={styles.titulo}> Consulte seu CEP </Text>

        {/* 2.2. Input */}
        <Input />

        {/* 2.3. Botão */}
        <Botao tituloBotao='Consultar'/>

        {/* 2.4. Card de informações */}
        <Card />
        </View>
      </ScrollView>
    </>

  );
}

// Estilos dos meus componentes:
const styles = StyleSheet.create({
  imgFundo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  logo: {
    width: 100,
    height: 120
  },
  container: {
    flex: 1.5,
    alignItems: 'center',
    
    paddingBottom: 50,
    gap: 40
  },
  containerScroll: {
    flex: 1,
    height: '100%',
    paddingTop:50,
    paddingBottom:200
  },
  titulo: {
    fontSize: 25,
  }
})