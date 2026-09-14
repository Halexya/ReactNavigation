import { StatusBar } from 'expo-status-bar';
import { cssBase } from './css/cssbase';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable, Modal, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const corridas = [

    {
        numero: '01',
        nome: 'GP DE MÔNACO',
        local: 'MONTE CARLO • MÔNACO',
        descricao:
            'Uma das provas mais tradicionais da Fórmula 1. O circuito de rua de Monte Carlo é conhecido por suas curvas estreitas e pela proximidade dos carros com os muros.',
        image: require('./assets/corridas/monaco.jpg'),
    },

    {
        numero: '02',
        nome: 'GP DO BRASIL',
        local: 'INTERLAGOS • SÃO PAULO',
        descricao:
            'O Grande Prêmio do Brasil é uma das corridas mais importantes para os fãs brasileiros e possui uma longa história dentro da Fórmula 1.',
        image: require('./assets/corridas/interlagos.jpg'),
    },

    {
        numero: '03',
        nome: 'GP DA BÉLGICA',
        local: 'SPA-FRANCORCHAMPS • BÉLGICA',
        descricao:
            'O circuito de Spa-Francorchamps é famoso por suas grandes mudanças de altitude, curvas rápidas e condições climáticas imprevisíveis.',
        image: require('./assets/corridas/spa.jpg'),
    },

    {
        numero: '04',
        nome: 'GP DA ITÁLIA',
        local: 'MONZA • ITÁLIA',
        descricao:
            'Monza é um dos circuitos mais tradicionais do automobilismo. Conhecido por suas longas retas e altas velocidades, é um dos grandes símbolos da Fórmula 1.',
        image: require('./assets/corridas/monza.jpg'),
    },

    {
        numero: '05',
        nome: 'GP DA ALEMANHA',
        local: 'HOCKENHEIM • ALEMANHA',
        descricao:
            'O circuito de Hockenheim recebeu momentos marcantes da Fórmula 1 e ficou conhecido por suas longas retas e disputas em alta velocidade.',
        image: require('./assets/corridas/hockenheim.jpg'),
    },

    {
        numero: '06',
        nome: 'GP DA HUNGRIA',
        local: 'HUNGARORING • HUNGRIA',
        descricao:
            'O Hungaroring é um circuito técnico, com muitas curvas e poucas oportunidades de ultrapassagem, tornando a estratégia especialmente importante.',
        image: require('./assets/corridas/hungaroring.jpg'),
    },

];


export default function Corridas() {

    const [modalVisible, setModalVisible] = useState(false);

    return (

        <View style={cssBase.container}>

            <ScrollView showsVerticalScrollIndicator={true} contentContainerStyle={cssBase.content}>

                <View style={{ paddingHorizontal: 25, paddingTop: 25, marginBottom: 10, }}>
                    <Text style={cssBase.subtitulo}>FORMULA 1</Text>
                    <Text style={cssBase.titulo1}>GRANDES{'\n'}CORRIDAS</Text>

                    <View style={cssBase.linha} />

                    <Text style={cssBase.texto}> Uma galeria com algumas das corridas mais marcantes da história da Fórmula 1.</Text>

                </View>

                <View style={cssBase.alinha}>
                    <Text style={cssBase.titulo}>GALERIA </Text>
                    <View style={cssBase.linha} />

                </View>


                <View style={cssBase.grid}>
                    {corridas.map((corrida) => (<CorridaCard key={corrida.numero} corrida={corrida} />))}
                </View>


                <View style={cssBase.card}>
                    <Text style={cssBase.titulo}>UM MOMENTO HISTÓRICO </Text>
                    <Text style={cssBase.texto}> Algumas corridas se tornam inesquecíveis
                        não apenas pelo resultado, mas pelos
                        pilotos que fizeram história nelas. </Text>

                    <Pressable style={styles.botao} onPress={() => setModalVisible(true)} >
                        <Ionicons name="flag-outline" size={20} color="#fff" />
                        <Text style={cssBase.buttonText}>CONHEÇA SENNA</Text>

                    </Pressable>
                </View>

            </ScrollView>


            <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <View style={cssBase.banner}>
                            <Image source={require('./assets/senna.jpg')} style={cssBase.bannerImage} />
                            <View style={cssBase.bannerOverlay} />
                            <View style={cssBase.bannerContent}>
                                <Text style={cssBase.titulo1}>AYRTON{'\n'}SENNA</Text>

                            </View>
                        </View>

                        <View style={cssBase.divider} />
                        <Text style={cssBase.texto}>
                            Ayrton Senna foi um dos maiores pilotos
                            da história da Fórmula 1. O brasileiro
                            conquistou três campeonatos mundiais
                            e ficou conhecido por seu talento,
                            determinação e desempenho nas pistas.
                        </Text>

                        <Text style={cssBase.texto}>
                            Suas corridas no Brasil, especialmente
                            em Interlagos, fazem parte da história
                            do automobilismo brasileiro.
                        </Text>

                        <Pressable style={styles.botao} onPress={() => setModalVisible(false)} >
                            <Text style={cssBase.buttonText}>FECHAR </Text>

                        </Pressable>

                    </View>

                </View>

            </Modal>

            <StatusBar style="light" />

        </View>
    );
}


function CorridaCard({ corrida }) {

    return (

        <View style={styles.card}>
            <View style={cssBase.imageContainer}>
                <Image source={corrida.image} style={cssBase.driverImage} />
                <View style={cssBase.imageOverlay} />
                <Text style={cssBase.driverNumber}>
                    {corrida.numero}
                </Text>
            </View>


            <View style={cssBase.cardContent}>
                <Text style={cssBase.titulo3}>{corrida.nome}</Text>
                <Text style={cssBase.subtitulo}>{corrida.local}</Text>
                <View style={cssBase.divider} />
                <Text style={cssBase.texto}>{corrida.descricao}</Text>

            </View>

        </View>

    );
}


const styles = StyleSheet.create({

    card: {
        backgroundColor: '#151515',
        borderRadius: 12,
        overflow: 'hidden',
        width: '31%',
        minWidth: 260,
        flexGrow: 1,
    },

    botao: {
        marginTop: 20,
        backgroundColor: '#e10600',
        borderRadius: 8,
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    modalBox: {
        backgroundColor: '#151515',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 30,
        paddingBottom: 40,
        borderTopWidth: 2,
        borderTopColor: '#e10600',
    },
    modalSubtitulo: {
        color: '#e10600',
        fontSize: 14,
        fontWeight: '800',
        marginTop: 4,
    },

});