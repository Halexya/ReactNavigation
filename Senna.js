import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { cssBase } from './css/cssbase';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Senna() {
  return (
    <View style={cssBase.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={cssBase.content}
      >

        <View style={{ paddingHorizontal: 25, paddingTop: 25, marginBottom: 10, }}>
          <Text style={cssBase.subtitulo}>FORMULA 1</Text>
          <Text style={cssBase.titulo1}>AYRTON{'\n'}SENNA</Text>
          <View style={cssBase.linha} />

          <Text style={cssBase.texto}>
            A história de um dos maiores pilotos da história da Fórmula 1.
          </Text>
        </View>

        <View style={cssBase.banner}>
          <Image source={require('./assets/senna.jpg')} style={cssBase.bannerImage} />
          <View style={cssBase.bannerOverlay} />
          <View style={cssBase.bannerContent}>
            <Text style={styles.heroNumber}>1</Text>
            <Text style={cssBase.subtitulo}>O ÍDOLO BRASILEIRO</Text>
            <Text style={cssBase.titulo1}>SENNA</Text>

          </View>
        </View>

        <View style={cssBase.alinha}>

          <Text style={cssBase.titulo}>
            SOBRE SENNA
          </Text>

          <View style={cssBase.linha} />

        </View>

        <View style={cssBase.card}>

          <Text style={cssBase.texto}>
            Ayrton Senna foi um piloto brasileiro de Fórmula 1,
            conhecido por sua velocidade, habilidade em pistas
            molhadas e dedicação às corridas.
          </Text>

          <Text style={cssBase.texto}>
            Durante sua carreira, conquistou três campeonatos
            mundiais e se tornou um dos maiores símbolos do
            automobilismo brasileiro.
          </Text>

        </View>

        <View style={cssBase.alinha}>
          <Text style={cssBase.titulo}>EQUIPES</Text>
          <View style={cssBase.linha} />

        </View>

        <View style={cssBase.card}>
          <Team name="Toleman" years="1984" />
          <Team name="Lotus" years="1985 – 1987" />
          <Team name="McLaren" years="1988 – 1993" />
          <Team name="Williams" years="1994" />

        </View>

        <View style={cssBase.alinha}>
          <Text style={cssBase.titulo}>LEGADO</Text>
          <View style={cssBase.linha} />
        </View>

        <View style={cssBase.card}>
          <Ionicons name="trophy-outline" size={35} color="#e10600" />
          <Text style={cssBase.titulo2}>UM LEGADO ETERNO</Text>

          <Text style={cssBase.texto}>Senna deixou uma marca profunda na Fórmula 1 e no
            esporte brasileiro. Sua determinação, talento e
            paixão pelas corridas fizeram dele uma referência
            para gerações de pilotos e fãs.
          </Text>

        </View>

      </ScrollView>
      <StatusBar style="light" />

    </View>
  );
}


function StatCard({ number, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label}</Text>

    </View>
  );
}


function Team({ name, years }) {
  return (
    <View style={styles.teamRow}>
      <View style={styles.teamIcon}>
        <Ionicons name="car-sport-outline" size={22} color="#e10600" style={{margin:6}}/>
      </View>

      <View>
        <Text style={styles.teamNome}> {name} </Text>
        <Text style={styles.teamAno}> {years} </Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({


  heroNumber: {
    position: 'absolute',
    left: 390,
    bottom: -10,
    color: 'rgba(255,255,255,0.18)',
    fontSize: 150,
    fontWeight: '900',
  },


  teamRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#292929',
  },

  teamNome: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },

  teamAno: {
    color: '#888',
    fontSize: 12,
    marginTop: 3,
  },


});