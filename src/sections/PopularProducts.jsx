import React from 'react'
import image2 from "../assets/images/image2new.png";
import image3 from "../assets/images/image3new.png";
import image7 from "../assets/images/image7new.png";
import image4 from "../assets/images/image4new.png";
import PopularProductCard from '../components/PopularProductCard';
const PopularProducts = () => {
  const products = [
    {
        imgURL: image2,
        name: "String of Pearls",
        price: "Rs.1000.00",
    },
    {
        imgURL: image3,
        name: "Boston Fern",
        price: "Rs.2100.00",
    },
    {
        imgURL: image4,
        name: "Spider Plant",
        price: "Rs.1500.00",
    },
    {
        imgURL: image7,
        name: "Golden Pothos",
        price: "Rs.2300.00",
    },
];
  return (
   <section id='products'className='max-container max-sm:mt-12'>
   <div className='flex flex-col justify-start gap-5'>
   <h2 className='text-4xl font-palanquin font-bold'>Our <span className='text-[#557A46]'>Popular</span> Products</h2>
   <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'> This unique succulent features small, spherical leaves that resemble a string of pearls. Perfect for adding a touch of elegance to any space, the String of Pearls thrives in bright, indirect light and requires minimal watering, making it an excellent choice for busy plant lovers.</p>
   </div>
   <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
    {products.map((product)=>(
      <PopularProductCard key=
      {product.name}{...product}/>
    ))}
   </div>
   </section>
  )
}

export default PopularProducts