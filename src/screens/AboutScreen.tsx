import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';

export default function AboutScreen() {
  const appVersion = '1.0.0';
  const buildNumber = '2026.04';

  const handlePressLink = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.title}>Sobre o App</Text>

      {/* Card de informações */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}> Controle Financeiro</Text>
        <Text style={styles.cardText}>
          Gerencie suas finanças de forma simples e segura. Acompanhe gastos,
          defina orçamentos e alcance seus objetivos financeiros.
        </Text>
        <View style={styles.versionRow}>
          <Text style={styles.versionLabel}>Versão:</Text>
          <Text style={styles.versionValue}>
            {appVersion} (build {buildNumber})
          </Text>
        </View>
      </View>

      {/* Botões de ação */}
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => handlePressLink('https://seusite.com/termos')}
      >
        <Text style={styles.buttonText}> Termos de Uso</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => handlePressLink('https://seusite.com/privacidade')}
      >
        <Text style={styles.buttonText}> Política de Privacidade</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => handlePressLink('https://seusite.com/faq')}
      >
        <Text style={styles.buttonText}> Ajuda / FAQ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() =>
          handlePressLink('https://play.google.com/store/apps/details?id=seuapp')
        }
      >
        <Text style={styles.buttonText}>⭐ Avalie na Loja</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <Text style={styles.footer}>{'\n'}
        Todos os direitos reservados.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',       
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#333',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: 20,
  },
  versionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
  },
  versionLabel: {
    fontSize: 13,
    color: '#888',
  },
  versionValue: {
    fontSize: 13,
    color: '#4A90E2',  
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#1E90FF',      
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
    marginBottom: 14,
    alignItems: 'center',
    shadowColor: '#1E90FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  footer: {
    marginTop: 30,
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
  },
});