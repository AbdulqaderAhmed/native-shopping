import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'
import ProductCard from './ProductCard'

export default function ProductList() {
    const [product, setProduct] = useState(null)

    const fetchProducts = async () => {
        const res = await axios('https://fakestoreapi.com/products/')
        setProduct(res.data) 
    }

    useEffect(() => {
        fetchProducts()
    }, [])

  return (
    <>
    {product ? (
      <FlatList 
      data ={product} 
      keyExtractor={(item) => item.id} 
      renderItem={({item}) => {
        return <ProductCard item={item} />
      }} 
      contentContainerStyle={{paddingHorizontal: 15}}
      />

    ) : (<Text className="flex justify-center items-center">Loading</Text>)}
    </>
  )
}
