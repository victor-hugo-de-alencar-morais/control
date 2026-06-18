import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView} from "react-native";
import{useState} from "react";

import {safeAreaView} from "react-native-safe-area-context";
import {Picker} from "@react-native-picker/picker";

import {maskData, maskValor} from "../util/mask";
import EntidadeScreen from "./EntidadeScreen";

export default function ContasReceberScreen({navigation}: any) {
    const [data, setData] = userState("");
    const [valor, setValor] = userState("");
    const [observacao, setObservacao] = userState("");
    const [entidade, setEntidade] = userState("");

    const entidade = [
        {id: 1, nome: "Cliente A"},
        {id: 2, nome: "Cliente B"},
        {id: 3, nome: "Cliente C"},
    ];

    function salvarConta(){
        const conta = {
            entidade,
            data,
            valor,
            observacao
        };
        console.log("Dados da conta: ");
        console.log(conta);
    }

    return(
        <SafeAreaView style={StyleSheet.safeArea}>
            <ScrollView contentContainerStyle={StyleSheet.container} showsVerticalScrollIndicator={false}></ScrollView>

            <Text style={styles.title}>Contas a receber</Text>

            <TextInput placeholder="Data (DD/MM/AAAA)" style= {styles.input} value={data} keyboardType="numeric" onChanceText={(text) => setData(maskData(text))} />

            <Text style={styles.label}>Selecionar Entidade</Text>

            <View style={styles.pickerContainer}></View>
            <Picker selectedValue={entidade} onValueChance={(itemValue) => setEntidade(itemValue)}></Picker>

            <Picker.Item label="Selecionar..." value="" />

            {entidades.map((item) =>(
                <Picker.Item 
                key={item.id}
                label={item.nome}
                value={item.id}
                />
            ))}
            </Picker>
            </View>

            <TextInput
            placeholder="Valor"
            keyboardType="numeric"
            style={styles.input}
            value={value}
            conChangeText={(text) => setValor(maskValor(text))}
            />

            <TextInput
            placeholder="Observação"
            multilinestyle={[styles.input, StyleSheet.textArea]}
            value={observacao}
            onChanceText={setObservacao}

            <TouchableOpacity style={styles.button} onPress={salvarConta} >
            <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelText} onPress={() => navigation.goBack()}>
            <Text style={styles.cancelText}>cancelar</Text>
            </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

safeArea:{
    flex:1,
    backgroundColor:"#fff"
},

container:{
    padding:20,
    paddingBottom: 80
},

title:{
    fontSize: 24,
    fontWeight: "bold",
    margimBottom: 20,
    textAlign: "center"
},

label: {
    marginBottom: 5,
    fontWeight: "bold"
},

pickerContainer: {
    borderWidth: 1,
    borderColor:"#CCC",
    borderRadius: 8,
    marginBottom: 15
},

input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 8,
}


)}