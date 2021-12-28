import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import estilos from './estilos';
import { useNavigation } from '@react-navigation/native';
import estilosGerais from '../../../../estilosGerais';

export default function BotoesPassadores ({numeroQuestao,alteraQuestao,quantidadeDeQuestoesNoTeste}) {
    const primeiraQuestao = numeroQuestao == 0? true:false;
    const navigation = useNavigation();

    return(
        <View style={{paddingBottom: 15}}>
            <View style={estilos(primeiraQuestao).containerPassadores}>       
            {!primeiraQuestao && 
                <TouchableOpacity 
                    onPress={()=>alteraQuestao(-1,quantidadeDeQuestoesNoTeste)} 
                >
                    <Text style={estilos(false).botoesPassadores}> Anterior </Text>
                </TouchableOpacity>
            }
            {numeroQuestao<(quantidadeDeQuestoesNoTeste-1) && 
                <TouchableOpacity 
                    onPress={()=>alteraQuestao(+1,quantidadeDeQuestoesNoTeste)}
                >
                <Text style={estilos(false).botoesPassadores}> Próxima </Text>
                </TouchableOpacity>
            }
            </View> 
            <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                >
                <Text style={estilosGerais.botoesNavegacao}> Voltar para Pontuação </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                >
                <Text style={estilosGerais.botoesNavegacao}> Voltar à Tela Inicial </Text>
            </TouchableOpacity>
        </View>
    )
}