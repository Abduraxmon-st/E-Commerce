import React from 'react'
import { ProductCard } from '../../../components/Cards/ProductCard'
import { useMainContext } from '../../../context/MainContext'

export const ExploreProducts = () => {
   const { dataProduct } = useMainContext()

   return (
      <div className='mt-[70px] pt-[70px] border-t border-t-[#0000004d]'>
         <div className='flex items-center gap-4'>
            <div className='w-5 h-10 bg-[#DB4444] rounded-sm'></div>
            <p className='text-[#DB4444] font-semibold text-base leading-5'>This Month</p>
         </div>
         <div className='flex justify-between items-center mt-5'>
            <p className='font-semibold text-4xl leading-[34px] tracking-[4%] font-[Inter]'>Best Selling Products</p>
            <button className='px-12 py-4 font-medium text-white bg-[#db4444] rounded-sm cursor-pointer hover:opacity-90'>View All</button>
         </div>
         <div className='flex justify-between gap-y-15 flex-wrap mt-15'>
            {dataProduct.slice(10, 18).map((item) => (
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
         <div className='flex items-center justify-center mt-15 '>
            <button className='px-12 py-3 font-medium bg-[#db4444] text-white rounded-sm cursor-pointer'>View All Products</button>
         </div>
      </div>
   )
}
