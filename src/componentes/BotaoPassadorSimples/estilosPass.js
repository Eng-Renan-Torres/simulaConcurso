import { StyleSheet } from "react-native";
import { cores } from "../../estilosGerais";

export default StyleSheet.create({
    informacao: {
        padding: 25
      },
    qualQuestao:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: cores.quaseBranco,       
    },
    botoesPassadores: {
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#fff',
        backgroundColor: cores.azul,
        justifyContent: 'space-between',
        borderRadius: 5,
        width: 25,
        height: 18,
        textAlign: 'center',
        fontSize:12
    },
    textoPassadores:{
        justifyContent:'center',
        textAlign: 'center'
        
    }
});