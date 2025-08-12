import Input from '../assets/components/input/input.jsx';
import { Image, ImageBackground, StyleSheet, View, Text, } from "react-native";


export default function Index() {
  return (
    <>
      {/* 1. Logo + Imagem de fundo */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')}
        style={styles.imgFundo}>
      </ImageBackground>
          
        

        <View style={styles.container}>
          <Image source={require('../assets/images/Group 6.png')}
          style={styles.logo}>
        </Image>
          <Text style={styles.titulo}>Consulte seu CEP</Text>
          
          <Input/>
          
        </View>

      
      {/* 2. Campo de consulta */}
      {/* 2.1. Título */}
      {/* 2.2. Input */}
      {/* 2.3. Botão */}
      {/* 2.4. Card de informações */}
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
    height: 120,
  },
  container: {
    flex: 1.5,
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    gap: 40
  },
  titulo:{
    fontSize: 25,
    marginBottom: 10,
  }
}) 