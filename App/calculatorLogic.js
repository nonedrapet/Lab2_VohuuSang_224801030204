// calculatorLogic.js
import { Alert } from 'react-native';

// Hàm tính toán căn bậc 2
export const calculateSquareRoot = (currentNumber, setLastNumber, setCurrentNumber) => {
  try {
    let number = parseFloat(currentNumber);

    if (isNaN(number)) {
      Alert.alert('Lỗi', 'Vui lòng nhập một số trước khi tính căn bậc 2');
      return;
    }

    if (number < 0) {
      Alert.alert('Lỗi', 'Không thể tính căn bậc 2 của số âm');
      return;
    }

    let result = Math.sqrt(number);
    setLastNumber(`√(${currentNumber}) =`);
    setCurrentNumber(result.toString());
  } catch (error) {
    Alert.alert('Lỗi', 'Phép tính không hợp lệ');
    setCurrentNumber('');
  }
};

// Hàm tính toán các phép toán khác
export const calculate = (currentNumber, setLastNumber, setCurrentNumber) => {
  try {
    if (currentNumber.includes('/0')) {
      Alert.alert('Lỗi', 'Không thể chia cho 0');
      setCurrentNumber('');
      return;
    }

    if (/[\+\-\*\/]{2,}/.test(currentNumber)) {
      Alert.alert('Lỗi', 'Cú pháp không hợp lệ');
      setCurrentNumber('');
      return;
    }

    const result = eval(currentNumber);
    setCurrentNumber(result.toString());
  } catch (error) {
    Alert.alert('Lỗi', 'Phép tính không hợp lệ');
    setCurrentNumber('');
  }
};

// Hàm tính toán lượng giác (sin, cos, tan)
export const calculateTrig = (operation, currentNumber, isRadian, setLastNumber, setCurrentNumber) => {
  try {
    let angle = parseFloat(currentNumber);

    if (isNaN(angle)) {
      Alert.alert('Lỗi', 'Vui lòng nhập một số trước khi dùng hàm lượng giác');
      return;
    }

    let result;

    if (!isRadian) {
      angle = angle * Math.PI / 180;
    }

    switch (operation) {
      case 'sin':
        result = Math.sin(angle);
        break;
      case 'cos':
        result = Math.cos(angle);
        break;
      case 'tan':
        result = Math.tan(angle);
        break;
    }

    setLastNumber(`${operation}(${currentNumber}${isRadian ? ' rad' : '°'}) =`);
    setCurrentNumber(result.toString());
  } catch (error) {
    Alert.alert('Lỗi', 'Phép tính không hợp lệ');
    setCurrentNumber('');
  }
};
