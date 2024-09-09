import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';  
import styles from './App/styles';  
import { calculate, calculateTrig, calculateSquareRoot } from './App/calculatorLogic';  
import Icon from 'react-native-vector-icons/FontAwesome';  // Import icon

export default function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [isRadian, setIsRadian] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const buttons = [
    'C', 'DEL', 'sin', 'cos', 'tan',
    '7', '8', '9', '√', '%',
    '4', '5', '6', '+', '-',
    '1', '2', '3', '*', '/',
    '0', '.', '='
  ];

  const handleInput = (buttonPressed) => {
    if (buttonPressed === 'C') {
      setCurrentNumber('');
      setLastNumber('');
      return;
    }
    if (buttonPressed === 'DEL') {
      setCurrentNumber(currentNumber.slice(0, -1));
      return;
    }
    if (buttonPressed === '=') {
      setLastNumber(currentNumber + ' = ');
      calculate(currentNumber, setLastNumber, setCurrentNumber);
      return;
    }
    if (buttonPressed === 'Rad' || buttonPressed === 'Deg') {
      setIsRadian(!isRadian);
      return;
    }
    if (buttonPressed === '√') {
      calculateSquareRoot(currentNumber, setLastNumber, setCurrentNumber);
      return;
    }
    if (buttonPressed === 'sin' || buttonPressed === 'cos' || buttonPressed === 'tan') {
      calculateTrig(buttonPressed, currentNumber, isRadian, setLastNumber, setCurrentNumber);
      return;
    }
    setCurrentNumber(currentNumber + buttonPressed);
  };

  const containerStyle = isDarkMode ? styles.containerDark : styles.containerLight;
  const buttonTextStyle = isDarkMode ? styles.buttonTextDark : styles.buttonTextLight;
  const buttonBackgroundStyle = isDarkMode ? styles.buttonDark : styles.buttonLight;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={containerStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <View style={styles.appContainer}>
          {/* Nút chuyển đổi giữa Dark Mode và Light Mode */}
          <TouchableOpacity onPress={toggleDarkMode} style={styles.toggleModeButton}>
            <Icon name={isDarkMode ? 'sun-o' : 'moon-o'} size={30} color="#F09A36" />
          </TouchableOpacity>

          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{lastNumber}</Text>
            <Text style={styles.resultText}>{currentNumber}</Text>
          </View>

          <View style={styles.buttonsContainer}>
            {buttons.map((button) => (
              <TouchableOpacity
                key={button}
                style={[styles.button, buttonBackgroundStyle, button === '=' ? styles.equalsButton : null]}
                onPress={() => handleInput(button)}
              >
                <Text style={buttonTextStyle}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
