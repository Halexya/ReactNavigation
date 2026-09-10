import { StyleSheet } from 'react-native';
export const cssBase = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b0b0b',
    },
    content: {
        paddingBottom: 100,
        maxWidth: 1200,
        width: '100%',
        alignSelf: 'center',
    },


    
    banner: {
        marginHorizontal: 20,
        height: 350,
        borderRadius: 15,
        overflow: 'hidden',
        position: 'relative',
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    bannerOverlay: {
        position: 'absolute',
        width: '100%', height: '100%',
        backgroundColor: 'rgba(0,0,0,0.58)',
    },
    bannerContent: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
    },
    textoPequeno: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 4,
    },


    titulo1: {
        color: '#ffffff',
        fontSize: 48, fontWeight: '900',
        marginTop: 5,
        letterSpacing: 2,
    },
    texto: {
        color: '#ddd',
        fontSize: 16,
        marginTop: 5,
    },

    titulo: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '900',
        letterSpacing: 1,
    },
    titulo2: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '900',
        lineHeight: 27,
        marginTop: 5,
        marginBottom: 5,
    },
    textoSimples: {
        color: '#777',
        fontSize: 12,
        fontWeight: '700',
    },
    subtitulo: {
        color: '#e10600',
        fontSize: 12,
        fontWeight: '900',
        letterSpacing: 3,
    },
    linha: {
        marginTop: 12,
        marginLeft: 20,
        height: 3,
        backgroundColor: '#e10600',
        width: 50,
        marginLeft: 12,
    },
    alinha: {
        flexDirection: 'row',
        gap: 15,
        marginHorizontal: 20,
        marginTop: 25,
    },
    divider: {
        height: 1,
        backgroundColor: '#333',
        marginVertical: 20,
    },


    card: {
        marginHorizontal: 20,
        marginTop: 15,
        padding: 25,
        backgroundColor: '#151515',
        borderRadius: 12,
    },


    cardContent: {
        padding: 15,
    },
    buttonBanner: {
        backgroundColor: '#e10600',
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#333',
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 12,

    },


});