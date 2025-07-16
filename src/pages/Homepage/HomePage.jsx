import React, { useEffect, useState } from 'react'
import { ArrowRight } from '../../assets/icons/ArrowRight'
import { IphoneSlider } from './components/AutoSlider'
import { FlashSalesTimer } from './components/FlashSalesTimer'
import { ProductCard } from '../../components/Cards/ProductCard'
import { useMainContext } from '../../context/MainContext'
import { Categories } from './components/Categories'
import { BestSellingProducts } from './components/BestSellingProducts'
import { WidgetTimer } from './components/WidgetTimer'
import { ExploreProducts } from './components/ExploreProducts'
import { Arrival } from './components/Arrival'
import { Mainfooter } from './components/Mainfooter'

export const HomePage = () => {
  const { dataProduct } = useMainContext()

  return (
    <div className='container mx-auto '>
      <div className='flex justify-between'>
        <ul className='flex flex-col gap-4 w-[20%] pt-10 pr-4 border-r-1 border-[#B2B2B2]'>
          <li className='flex items-center justify-between cursor-pointer hover:underline'>Woman’s Fashion <ArrowRight /></li>
          <li className='flex items-center justify-between cursor-pointer hover:underline'>Men’s Fashion <ArrowRight /></li>
          <li className='cursor-pointer hover:underline'>Electronics</li>
          <li className='cursor-pointer hover:underline'>Home & Lifestyle</li>
          <li className='cursor-pointer hover:underline'>Medicine</li>
          <li className='cursor-pointer hover:underline'>Sports & Outdoor</li>
          <li className='cursor-pointer hover:underline'>Baby’s & Toys</li>
          <li className='cursor-pointer hover:underline'>Groceries & Pets</li>
          <li className='cursor-pointer hover:underline'>Health & Beauty</li>
        </ul>
        <IphoneSlider />
      </div>
      <FlashSalesTimer />
      <div>
        <div className='overflow-x-auto flex gap-7.5 mt-10'>
          {dataProduct.slice(0, 6).map((item) => (
            <ProductCard
              key={item.id}
              badge={item.badge}
              img={item.img}
              name={item.name}
              currentPrice={item.currentPrice}
              originalPrice={item.originalPrice}
              rating={item.rating}
              item={item}
            />
          ))}
        </div>
        <div className='flex justify-center mb-15'>
          <button className='mt-15 font-medium bg-[#DB4444] px-12 py-4 text-white rounded-sm cursor-pointer hover:opacity-90 '>View All Products</button>
        </div>
        <Categories />
        <BestSellingProducts />
        <WidgetTimer />
        <ExploreProducts />
        <Arrival />
        <Mainfooter />
      </div>
    </div>
  )
}
// Tojixojayev Abduraxmon U7