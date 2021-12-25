import { StyleSheet } from 'react-native';
import { cores } from '../../../../estilosGerais';

export default (primeiraQuestao) => StyleSheet.create({
    containerPassadores: {
      flexDirection: 'row',
      justifyContent: primeiraQuestao? 'flex-end': 'space-between',
      paddingVertical: 9,
      paddingHorizontal: 20,

    },
    botoesPassadores: {
      fontWeight: 'bold',
      textAlign: 'left',
      color: '#fff',
      backgroundColor: cores.azul,
      justifyContent: 'space-between',
      padding: 5,
      borderRadius: 15,
    },
    incluirNovaTag: {
      backgroundColor: cores.azul,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      borderRadius:4,
      borderWidth: 6,
      margin: 2,
    },
    botoesNavegacao: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff',
      backgroundColor: cores.azul,
      justifyContent: 'space-between',
      borderRadius: 24,
      marginTop: 10,
      marginHorizontal: 84,
      paddingVertical: 8,
    },
});