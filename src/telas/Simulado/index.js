import React,{useState} from 'react';

import { Text } from 'react-native';
import CabecalhoDaQuestao from '../Componentes/CabecalhoDaQuestao';
import Questao from './Componentes/Questao';
import BotoesPassadores from './Componentes/BotoesPassadores';
import TelaPadrao from '../../componentes/TelaPadrao';
import estilosGerais from '../../estilosGerais';

export default function Simulado(){ 
    let indexExibidaNaTela=0;
    let quantidadeDeQuestoesNoTeste = 3;
    const [numeroQuestao,setnumeroQuestao] = useState(indexExibidaNaTela);
    const [alternativasMarcadas,setAlternativaMarcada] = useState([]);

    const bancoDeQuestoes = require('../../dados/questoes.json');
    if (quantidadeDeQuestoesNoTeste > bancoDeQuestoes.length) quantidadeDeQuestoesNoTeste = bancoDeQuestoes.length;
    
    // const criaNovaOrdenacao = (tamanhoArray)=> {
    //     let indexAleatorio;
    //     let ordemAleatoriaDosIndex= [];
    //     const ordemProvisoria = [];
    //     for(let i=0;i<tamanhoArray;i++) ordemProvisoria [i] = i;
    //     for(let i=0;i<tamanhoArray;i++) {
    //         indexAleatorio = Math.floor(Math.random() * ordemProvisoria.length);
    //         ordemAleatoriaDosIndex[i] = ordemProvisoria[indexAleatorio];
    //         ordemProvisoria.splice(indexAleatorio,1);
    //     }
    //     return ordemAleatoriaDosIndex;
    // }
    // const novaOrdemDasQuestoes = criaNovaOrdenacao(quantidadeDeQuestoesNoTeste);
    const novaOrdemDasQuestoes = [3,5,2];
     
    const alteraQuestao = (valor,totalDeQuestoes) => {
        const proximaQuestao = numeroQuestao+valor;
        if(proximaQuestao<0||proximaQuestao==totalDeQuestoes)return;
        setnumeroQuestao(proximaQuestao)};
    

    let questaoExibidaNaTela = bancoDeQuestoes[novaOrdemDasQuestoes[numeroQuestao]];
    return (
        <TelaPadrao>
            <Text h1 style={estilosGerais.titulosTela}>Lista de Questões</Text>
            <CabecalhoDaQuestao 
                indiceQuestao={numeroQuestao} 
                acao={alteraQuestao}
                totalDeQuestoes={quantidadeDeQuestoesNoTeste} 
                {...questaoExibidaNaTela}   
            />
            <Questao 
                {...questaoExibidaNaTela}
                numeroQuestao = {numeroQuestao}
                alternativasMarcadas = {alternativasMarcadas}
                acaoDeMarcar = {setAlternativaMarcada}
            />
            <BotoesPassadores
                numeroQuestao= {numeroQuestao}
                alteraQuestao= {alteraQuestao}
                quantidadeDeQuestoesNoTeste = {quantidadeDeQuestoesNoTeste}
                alternativasMarcadas = {alternativasMarcadas}
                novaOrdemDasQuestoes = {novaOrdemDasQuestoes}
            />
        </TelaPadrao>
        );
}

