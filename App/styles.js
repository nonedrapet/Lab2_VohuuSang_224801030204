import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#000',
  },
  appContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#282F3B',
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden', // Ngăn văn bản tràn ra ngoài
  },
  resultText: {
    color: 'white',
    fontSize: 40,
    textAlign: 'right', // Căn chỉnh văn bản sang bên phải
    flexWrap: 'wrap', // Bao gói văn bản nếu nó quá dài
  },
  buttonsContainer: {
    alignSelf: 'stretch', // Đảm bảo chiều rộng bằng với `resultContainer`
    marginTop: 15,
    flex: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Đảm bảo chia đều khoảng cách giữa các nút
    paddingHorizontal: 5, // Đệm ở hai bên để đảm bảo vừa đủ không gian cho 5 nút
    paddingVertical: 10,
  },
  button: {
    flexBasis: '19%', // Đảm bảo 5 nút trên mỗi hàng (tránh sử dụng 20% để tính đến padding)
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 65,
    backgroundColor: '#3A3F44',
    borderRadius: 10,
    marginVertical: 5,
  },
  equalsButton: {
    backgroundColor: '#F09A36',
  },
  buttonLight: {
    backgroundColor: '#3A3F44',
  },
  buttonDark: {
    backgroundColor: '#555',
  },
  buttonTextLight: {
    color: 'white',
    fontSize: 20,
  },
  buttonTextDark: {
    color: '#ddd',
    fontSize: 20,
  },
  toggleModeButton: {
    alignSelf: 'flex-start',
    padding: 10,
    marginTop: 10,
  },
});
