import React from 'react'
import { ProductCard } from '../../../components/Cards/ProductCard'
import { useMainContext } from '../../../context/MainContext'

export const BestSellingProducts = () => {
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
         <div className='flex justify-between mt-15'>
            {dataProduct.slice(6, 10).map((item) => (
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
      </div>
   )
}
