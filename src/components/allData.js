import React from 'react';
import {View} from 'react-native';
import Header from './header';
import Product from './product';

const products = [
  {
    id: 1,
    name: 'Samsung',
    color: 'White ',
    price: 300000,
    image: 'https://cdn-icons-png.flaticon.com/128/17784/17784282.png',
    quantity: 0,
  },
  {
    id: 2,
    name: 'Iphone14',
    color: 'White ',
    price: 500000,
    image: 'https://cdn-icons-png.flaticon.com/128/17784/17784282.png',
    quantity: 0,
  },
  {
    id: 3,
    name: 'IPhone10',
    color: 'Black ',
    price: 30000,
    image: 'https://cdn-icons-png.flaticon.com/128/17784/17784282.png',
    quantity: 0,
  },
  {
    id: 4,
    name: 'Moto5G',
    color: 'Red',
    price: 60000,
    image: 'https://cdn-icons-png.flaticon.com/128/17784/17784282.png',
    quantity: 0,
  },
];

function AllData() {
  return (
    <View style={{flex: 1}}>
      <Header />

      {products.map((item, index) => {
        console.log(item);

        return <Product key={index} item={item} index = {index} />;
      })}
    </View>
  );
}

export default AllData;
