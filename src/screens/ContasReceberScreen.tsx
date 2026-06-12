import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView} from "react-native";
import{useState} from "react";

import {safeAreaView} from "react-native-safe-area-context";
import {Picker} from "@react-native-picker/picker";

import {maskData, maskValor} from "../util/mask";

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
}