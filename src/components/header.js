import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
const Header = () => {
  const cartData = useSelector(state => state.reducer);
  // const [cartItem, setCartItem] = useState(0);

  const navigation = useNavigation();

  // useEffect(() => {
  //   setCartItem(cartData.length);
  // }, [cartData]);

  return (
    <View
      style={{
        backgroundColor: 'lightblue',
        height: '10%',
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'flex-end',
      }}>
      <Text
        style={{
          fontSize: 20,
          position: 'absolute',
          right: 40,
          top: 55,
          color: '#ff6f00',
          fontWeight: 'bold',
        }}>
        {cartData.length}
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CartData');
        }}>
        <Image
          source={require('../assets/images/cart.png')}
          style={{
            width: 50,
            height: 50,
            position: 'relative',
            resizeMode: 'contain',
            marginTop: 15,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
