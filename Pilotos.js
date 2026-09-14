import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { cssBase } from './css/cssbase';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const drivers = [

  {
    number: '4',
    name: 'Lando Norris',
    country: '🇬🇧 Reino Unido',
    team: 'McLaren',
    image: require('./assets/pilotos/Norris.jpg'),
  },
  {
    number: '16',
    name: 'Charles Leclerc',
    country: '🇲🇨 Mônaco',
    team: 'Ferrari',
    image: require('./assets/pilotos/charles.jpg'),
  },
  {
    number: '3',
    name: 'Max Verstappen',
    country: '🇳🇱 Países Baixos',
    team: 'Red Bull Racing',
    image: require('./assets/pilotos/max.jpg'),
  },
  {
    number: '81',
    name: 'Oscar Piastri',
    country: '🇦🇺 Austrália',
    team: 'McLaren',
    image: require('./assets/pilotos/Oscar.jpg'),
  },
  {
    number: '01',
    name: 'Kimi Antonelli',
    country: '🇮🇹 Itália',
    team: 'Mercedes',
    image: require('./assets/pilotos/Kimi.jpg'),
  },
  {
    number: '63',
    name: 'George Russell',
    country: '🇬🇧 Reino Unido',
    team: 'Mercedes',
    image: require('./assets/pilotos/george.jpg'),
  },
  {
    number: '44',
    name: 'Lewis Hamilton',
    country: '🇬🇧 Reino Unido',
    team: 'Ferrari',
    image: require('./assets/pilotos/Lewis.jpg'),

  },
  {
    number: '10',
    name: 'Pierre Gasly',
    country: '🇫🇷 França',
    team: 'Alpine',
    image: require('./assets/pilotos/pierre.jpg'),
  },
  {
    number: '14',
    name: 'Fernando Alonso',
    country: '🇪🇸 Espanha',
    team: 'Aston Martin',
    image: require('./assets/pilotos/fernando.jpg'),
  },
  {
    number: '18',
    name: 'Lance Stroll',
    country: '🇨🇦 Canadá',
    team: 'Aston Martin',
    image: require('./assets/pilotos/Lance.jpg'),
  },
  {
    number: '55',
    name: 'Carlos Sainz',
    country: '🇪🇸 Espanha',
    team: 'Williams',
    image: require('./assets/pilotos/carlos.jpg'),
  },
  {
    number: '23',
    name: 'Alex Albon',
    country: '🇹🇭 Tailândia',
    team: 'Williams',
    image: require('./assets/pilotos/alex.jpg'),
  },
];


export default function Pilotos() {

  const [busca, setBusca] = useState('');

  const driversFiltrados = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={cssBase.container}>

      <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={cssBase.content}>

        <View style={{paddingHorizontal: 25, paddingTop: 25,}}>
          <Text style={cssBase.subtitulo}>FORMULA 1</Text>
          <Text style={cssBase.titulo1}>PILOTOS</Text>
          <View style={cssBase.linha} />
          <Text style={cssBase.texto}>Conheça os pilotos que disputam a temporada de Fórmula 1.</Text>
        </View>

        <View style={styles.buscar}>
          <Ionicons name="search" size={20} color="#8A8A8A" />
          <TextInput
            placeholder="Buscar piloto..."
            placeholderTextColor="#8A8A8A"
            style={styles.input}
            onChangeText={setBusca}
            value={busca}
          />
        </View>

        <View style={cssBase.card}>

          <View style={{ zIndex: 2, }}>
            <Text style={cssBase.subtitulo}>THE GRID </Text>
            <Text style={cssBase.titulo2}>OS MELHORES{'\n'}DO MUNDO </Text>
            <Text style={cssBase.textoSimples}>Velocidade, talento e estratégia em cada
              volta.</Text>
          </View>

          <Text style={cssBase.Number}>20</Text>
          <Text style={cssBase.escritaNumber}>PILOTOS</Text>
        </View>

        <View style={cssBase.alinha}>
          <Text style={cssBase.titulo}>GRID 2026</Text>
          <View style={cssBase.linha} />
        </View>


        <View style={cssBase.grid}>
          {driversFiltrados.map((driver) => (<DriverCard key={driver.number} driver={driver} />))}
        </View>

      </ScrollView>

    </View>
  );
}



function DriverCard({ driver }) {
  const navigation = useNavigation();

  const abrirEquipe = () => {
    navigation.navigate('Equipes', {
      equipe: driver.team,
    });
  };
  return (
    <Pressable style={styles.card}>

      <View style={cssBase.imageContainer}>
        <Image source={driver.image} style={cssBase.driverImage} />

        <View style={cssBase.imageOverlay} />
        <Text style={cssBase.driverNumber}>{driver.number}</Text>
      </View>

      <View style={cssBase.cardContent}>
        <Text style={styles.pais}>{driver.country}</Text>
        <Text style={cssBase.titulo3}>{driver.name}</Text>
        <View style={cssBase.divider} />
        <Text style={cssBase.subtitulo} >{driver.team}</Text>



        <Pressable style={cssBase.button} onPress={abrirEquipe} >
          <Text style={cssBase.buttonText}>Veja a Equipe</Text>
        </Pressable>

      </View>

    </Pressable>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#151515',
    borderRadius: 12,
    overflow: 'hidden',
    width: '25%',
    minWidth: 260,
    flexGrow: 1,
  },

  buscar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderWidth: 2,
    borderColor: '#A7A7A7',
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 45,
    margin: 20,
    marginBottom: 20,
  },
  input: {
    marginLeft: 2,
    flex: 1,
    fontSize: 16,
  },


  pais: {
    color: '#e10600',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
  },
});


