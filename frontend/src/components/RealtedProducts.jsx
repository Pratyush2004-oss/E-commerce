import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import ProductItem from './ProductItem';
import Title from './Title';

const RealtedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category)
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory)
            setRelated(productsCopy.slice(0, 5));
        }

    }, [category, subCategory, products])
    return (
        <div className='mt-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                    {
                        related.map((item, idx) => (
                            <ProductItem key={idx} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RealtedProducts