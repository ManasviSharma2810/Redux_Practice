import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from './redux/actions';

const CartItem = () => {
  const cartItems = useSelector(state => state.reducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncreaseQuantity = item => {
    dispatch(increaseQuantity(item));
  };

  const handleDecreaseQuantity = item => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity(item));
    } else {
      dispatch(removeFromCart(item.id));
    }
  };

  const renderCartItem = ({item}) => {
    return (
      <View style={styles.cartItemContainer}>
        <View>
          <Image style={styles.cartItemImage} source={{uri: item.image}} />
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.buttonDecrease}
              onPress={() => handleDecreaseQuantity(item)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{item.quantity}</Text>

            <TouchableOpacity
              style={styles.buttonIncrease}
              onPress={() => handleIncreaseQuantity(item)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerStyle}>
          <View>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>${item.price}</Text>
          </View>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleRemoveFromCart(item)}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
          <Image
            source={require('../assets/images/back.png')}
            style={styles.goBackIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cart Items</Text>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
          <Image
            source={require('../assets/images/cart2.png')}
            style={styles.cartStyle}></Image>
        </View>
      ) : (
        <FlatList
          data={[...cartItems]?.reverse()}
          renderItem={renderCartItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartStyle: {
    height: '40%',
    width: '40%',
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 25,
    backgroundColor: 'lightblue',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  goBackButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  goBackIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerText: {
    paddingVertical: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyCartText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  cartItemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  cartItemImage: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
    marginRight: 20,
  },
  cartItemName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 18,
    color: '#28a745',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIncrease: {
    backgroundColor: '#ff6f00',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonDecrease: {
    backgroundColor: '#ff6f00',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  deleteButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    left: '70%',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerStyle: {
    flexDirection: 'row',
  },
});

export default CartItem;
