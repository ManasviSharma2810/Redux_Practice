import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux'; // Redux hooks

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch(); // Dispatch to trigger actions
  const cartItems = useSelector(state => state.reducer);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.id));
  };
  const handleIncreaseQuantity = item => {
    dispatch(increaseQuantity(item));
  };
  const handleDecreaseQuantity = item => {
    dispatch(decreaseQuantity(item));
  };

  const cartItem = cartItems.find(cartItem => cartItem.id === item.id);
  const isAdded = !!cartItem;

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: item.image}} />

        {isAdded && (
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.buttonQty}
              onPress={() => handleDecreaseQuantity(item)}>
              <Text style={styles.buttonQtyText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{cartItem.quantity}</Text>

            <TouchableOpacity
              style={styles.buttonQty}
              onPress={() => handleIncreaseQuantity(item)}>
              <Text style={styles.buttonQtyText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.details}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productColor}>Color: {item.color}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        {isAdded ? (
          <TouchableOpacity
            style={[styles.button, styles.removeButton]}
            onPress={() => handleRemoveFromCart(item)}>
            <Text style={styles.buttonText}>Remove From Cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddToCart(item)}>
            <Text style={styles.buttonText}>Add To Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
    marginRight: 20,
  },
  details: {
    flex: 1,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  productColor: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#28a745',
  },
  button: {
    backgroundColor: '#ff6f00',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    marginTop: 10,
  },
  removeButton: {
    backgroundColor: '#d9534f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  buttonQty: {
    backgroundColor: '#ff6f00',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonQtyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#333',
  },
});

export default Product;
