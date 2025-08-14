import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { Input } from '../assets/components/input/input';
import { Botao } from '../assets/components/botao/botao';
import { Card } from "../assets/components/card/card";
import { useState } from "react";
import axios from 'axios';


export default function Index() {
  const [cep, setCep] = useState("");
  const [jsonCep, setJsonCep] = useState({});



  async function consultarCep() {
    try {
      const cepLimpo = cep.replace(/\D/g, ""); // remove caracteres não numéricos
      if (cepLimpo.length === 8) {
        const resposta = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        setJsonCep(resposta.data);
      } else {
        alert("O cep está incorreto. Digite com 8 números.");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* Logo e imagem de fundo. */}
      <ImageBackground source={require('../assets/images/ImgFundo.png')}
        style={styles.imgFundo}>
        <Image source={require('../assets/images/Group 6.png')} style={styles.logo}></Image>

      </ImageBackground>
      {/* Campo de consulta. */}
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          {/* Título. */}
          <Text style={styles.titulo}>Consulte seu CEP</Text>


          {/* Input. */}
          <Input
            valorCep={cep}
            onChangeValorCep={e => setCep(e)}></Input>

          {/* Botão. */}

          <Botao tituloBotao='Consultar' onPress={consultarCep} />

          {/* Card de Informações. */}
          {/* Card de Informações (só aparece se tiver CEP consultado) */}
          {jsonCep.cep && (
            <Card
              cep={jsonCep.cep}
              logradouro={jsonCep.logradouro}
              bairro={jsonCep.bairro}
              estado={jsonCep.uf} // Aqui troquei 'estado' por 'uf', pois a API retorna 'uf'
            />
          )}

        </View>
      </ScrollView>
    </>

  );
}


//Estilos dos meus componentes:
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
    gap: 40,
    width: "100%",
    minHeight: "100%",
    alignItems: 'center'
  },
  containerScroll: {
    flex: 1.5,
    paddingTop: 50,
    paddingBottom: 50,
    height: '100%',
    paddingBottom: 200

  },
  titulo: {
    fontSize: 25,


  }


})


