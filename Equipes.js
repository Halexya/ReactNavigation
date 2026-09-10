import { StatusBar } from 'expo-status-bar';
import { cssBase } from './css/cssbase';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, TextInput, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const teams = [
  {
    name: 'Mercedes',
    country: '🇩🇪 Alemanha',
    drivers: 'Kimi Antonelli • George Russell',
    image: require('./assets/equipes/mercedesb.jpg')
  },
  {
    name: 'McLaren',
    country: '🇬🇧 Reino Unido',
    drivers: 'Lando Norris • Oscar Piastri',
    image: require('./assets/equipes/McLaren.jpg')
  },
  {
    name: 'Ferrari',
    country: '🇮🇹 Itália',
    drivers: 'Lewis Hamilton • Charles Leclerc',
    image: require('./assets/equipes/ferrrari.jpg')
  },
  {
    name: 'Red Bull Racing',
    country: '🇦🇹 Áustria',
    drivers: 'Max Verstappen • Liam Lawson',
    image: require('./assets/equipes/Red.jpg')
  },
  {
    name: 'Aston Martin',
    country: '🇬🇧 Reino Unido',
    drivers: 'Fernando Alonso • Lance Stroll',
    image: require('./assets/equipes/aston.jpg')
  },
  {
    name: 'Alpine',
    country: '🇫🇷 França',
    drivers: 'Pierre Gasly • Franco Colapinto',
    image: require('./assets/equipes/Alpine.jpg')
  },
  {
    name: 'Williams',
    country: '🇬🇧 Reino Unido',
    drivers: 'Carlos Sainz • Alex Albon',
    image: require('./assets/equipes/Williams.jpg')
  },
  {
    name: 'Haas',
    country: '🇺🇸 Estados Unidos',
    drivers: 'Esteban Ocon • Oliver Bearman',
    image: require('./assets/equipes/Haas.jpg')
  },
  {
    name: 'Racing Bulls',
    country: '🇮🇹 Itália',
    drivers: 'Yuki Tsunoda • Isack Hadjar',
    image: require('./assets/equipes/Racing.jpg')
  },
  {
    name: 'Sauber',
    country: '🇨🇭 Suíça',
    drivers: 'Nico Hülkenberg • Gabriel Bortoleto',
    image: require('./assets/equipes/Sauber.jpg')
  },
];


export default function Equipes() {

  const [busca, setBusca] = useState('');
  const teamsFiltradas = teams.filter((team) =>
    team.name.toLowerCase().includes(busca.toLowerCase())
  );


  return (

    <View style={cssBase.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={cssBase.content}>
        <View style={{ paddingHorizontal: 25, paddingTop: 25, }}>
          <Text style={cssBase.subtitulo}>FORMULA 1</Text>
          <Text style={cssBase.titulo1}>EQUIPES</Text>
          <View style={cssBase.linha} />
          <Text style={cssBase.texto}>Conheça as equipes que disputam a temporada de Fórmula 1.</Text>
        </View>

        <View style={styles.buscar}>

          <Ionicons name="search" size={20} color="#8A8A8A" />
          <TextInput placeholder="Buscar equipe..."
            placeholderTextColor="#8A8A8A"
            style={styles.input}
            onChangeText={setBusca}
            value={busca} />

        </View>


        <View style={cssBase.card}>

          <View style={{ zIndex: 2 }}>
            <Text style={cssBase.subtitulo}>THE PADDOCK</Text>
            <Text style={cssBase.titulo2}>AS MELHORES{'\n'}EQUIPES DO MUNDO</Text>
            <Text style={cssBase.textoSimples}>Tecnologia, velocidade e estratégia em cada corrida.</Text>
          </View>

          <Text style={cssBase.Number}>10</Text>
          <Text style={cssBase.escritaNumber}>EQUIPES</Text>

        </View>

        <View style={cssBase.alinha}>
          <Text style={cssBase.titulo}>EQUIPES 2026</Text>
          <View style={cssBase.linha} />
        </View>

        <View style={styles.grid}>{teamsFiltradas.map((team) => (<TeamCard
          key={team.name} team={team} />))}
        </View>

      </ScrollView>

    </View>
  );
}

function TeamCard({ team }) {

  return (
    <Pressable style={styles.cardEquipe}>
      <View style={styles.imageContainer}>
        <Image source={team.image} style={styles.teamImage} />

        <View style={styles.imageOverlay} />

      </View>

      <View style={styles.cardContent}>
        <Text style={styles.pais}>{team.country}</Text>
        <Text style={cssBase.titulo3}>{team.name}</Text>
        <View style={cssBase.divider} />

        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 10, }}>
          <Ionicons name="people-outline" size={17} color="#888" />
          <Text style={styles.pilotosText}> {team.drivers} </Text>
        </View>

      </View>

    </Pressable>

  );
}


const styles = StyleSheet.create({

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
    marginHorizontal: 20,
    marginTop: 15,
  },

  cardEquipe: {
    backgroundColor: '#151515',
    borderRadius: 12,
    overflow: 'hidden',
    width: 275,
  },

  imageContainer: {
    height: 210,
    position: 'relative',
    overflow: 'hidden',
  },
  teamImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.55)',
  },

  cardContent: {
    padding: 15,
  },
  pais: {
    color: '#e10600',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  equipeNome: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '900',
    marginTop: 5,
  },


  pilotosText: {
    color: '#999',
    fontSize: 12,
    marginLeft: 7,
    flex: 1,
    lineHeight: 18,
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
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
  },

});