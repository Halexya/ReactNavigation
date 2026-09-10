import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { cssBase } from './css/cssbase';


export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={cssBase.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={cssBase.content} > {/* TOPO */}
                <View style={styles.top}>
                    <View>
                        <Text style={styles.logo}>F1 </Text>
                    </View>
                </View>
                <View style={cssBase.banner}>
                    <Image source={require('./assets/banner.jpg')} style={cssBase.bannerImage} />
                    <View style={cssBase.bannerOverlay} />
                    <View style={cssBase.bannerContent}>
                        <Text style={cssBase.textoPequeno}> THE WORLD OF </Text>
                        <Text style={cssBase.titulo1}> FORMULA 1 </Text>
                        <Text style={cssBase.texto}> Velocidade, estratégia e emoção. </Text>
                        <Pressable style={cssBase.buttonBanner}
                            onPress={() => navigation.navigate('Ayrton Senna')}>
                            <Text style={cssBase.buttonText}>EXPLORAR F1</Text>
                        </Pressable>
                    </View>
                </View>


                <View style={cssBase.alinha}>
                    <Text style={cssBase.titulo}>PRÓXIMA CORRIDA</Text>

                    <Text style={cssBase.linha} />
                </View>

                <View style={cssBase.card}>
                    <View>
                        <Text style={styles.pais}>🇮🇹  ITALIAN GRAND PRIX</Text>
                        <Text style={styles.round}>ROUND 16 </Text>
                    </View>

                    <Text style={cssBase.titulo2}>MONZA </Text>
                    <Text style={cssBase.textoSimples}> Autodromo Nazionale Monza </Text>

                    <View style={cssBase.divider} />

                    <View style={styles.cardInfo}>
                        <View>
                            <Text style={cssBase.textoSimples}>DATA</Text>
                            <Text style={styles.numeros}>13 SET 2026</Text>
                        </View>
                        <View>
                            <Text style={cssBase.textoSimples}>CIRCUITO</Text>
                            <Text style={styles.numeros}>5.793 KM</Text>
                        </View>
                        <View>
                            <Text style={cssBase.textoSimples}>VOLTA</Text>
                            <Text style={styles.numeros}>53 LAPS</Text>
                        </View>
                    </View>

                </View>


                <View style={cssBase.alinha}>
                    <Text style={cssBase.titulo}>
                        ÚLTIMAS NOTÍCIAS
                    </Text>

                    <Text style={cssBase.linha} />
                </View>


                <View style={cssBase.alinha}>
                    <NewsCard
                        image={require('./assets/pilotos.jpg')}
                        category="CORRIDAS"
                        title="A velocidade que define uma nova geração"
                        route="Ayrton Senna"
                        navigation={navigation}
                    />
                    <NewsCard
                        image={require('./assets/estrategia.jpg')}
                        category="RACING"
                        title="Corrida é melhor com torcida, pesquise seu favorito."
                        route="Pilotos"
                        navigation={navigation}
                    />
                </View>

                <View style={cssBase.alinha}>
                    <NewsCard
                        image={require('./assets/pilotosf1.jpg')}
                        category="PILOTOS"
                        title="Conheça os pilotos da Fórmula 1"
                        route="Pilotos"
                        navigation={navigation}
                    />
                    <NewsCard
                        image={require('./assets/equipes.jpg')}
                        category="EQUIPES"
                        title="Conheça as equipes da Fórmula 1"
                        route="Equipes"
                        navigation={navigation}
                    />
                </View>


            </ScrollView>
        </View>
    );
}


function NewsCard({ image, category, title, route, navigation }) {
    return (
        <Pressable style={styles.card}>

            <Image source={image} style={styles.cardImage} />

            <View style={cssBase.cardContent}>
                <Text style={styles.categoria}>{category}</Text>
                <Text style={cssBase.texto}> {title} </Text>

                <View style={{paddingTop: 8}}>
                    <Pressable style={cssBase.button} onPress={() => navigation.navigate(route)}>
                        <Text style={cssBase.buttonText}>MAIS</Text>
                    </Pressable>
                </View>

            </View>
        </Pressable>
    );
}


const styles = StyleSheet.create({

    top: {
        paddingHorizontal: 25,
        paddingTop: 25,
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        color: '#e10600',
        fontSize: 28,
        fontWeight: '900',
        letterSpacing: 2,
    },


    pais: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 15,
    },
    round: {
        color: '#888',
        fontSize: 11,
        fontWeight: '700',
        textAlign: 'right'
    },
    cardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    numeros: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '800',
        marginTop: 5,
    },


    card: {
        flex: 1,
        backgroundColor: '#151515',
        borderRadius: 12,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: 150,
    },
    categoria: {
        color: '#e10600',
        fontSize: 10,
        fontWeight: '900',
        letterSpacing: 1,
        margin: 5
    },
});