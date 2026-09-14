import { StatusBar } from 'expo-status-bar'; 
import { useNavigation } from '@react-navigation/native'; 
import { cssBase } from './css/cssbase'; 
import React, { useState } from 'react'; 
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons'; 
 
export default function Senna() { 
  return ( 
    <View style={cssBase.container}> 
 
      <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={cssBase.content} > 
 
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
          <Text style={cssBase.titulo}>LEGADO</Text> 
          <View style={cssBase.linha} /> 
        </View> 
 
        <View style={cssBase.card}> 
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
 
 
 
const styles = StyleSheet.create({ 
 
 
  heroNumber: { 
    position: 'absolute', 
    left: 390, 
    bottom: -10, 
    color: 'rgba(255,255,255,0.18)', 
    fontSize: 150, 
    fontWeight: '900', 
  }, 
 
 
});