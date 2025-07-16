import React, { useContext, useState } from 'react'
import { useMainContext } from '../../context/MainContext'
import { WishlistCard } from '../../components/Cards/WishlistCard'
import { JustForYouCard } from '../../components/Cards/JustForYouCard'

export const WishListPage = () => {
   const { wishList, allToBag, dataProduct } = useMainContext()
   const [seeAll, setSeeAll] = useState(false)
   return (
      <div className='container mx-auto mt-20'>
         <div className='flex items-center justify-between'>
            <p className='text-xl leading-[26px]'>{`Wishlist ${wishList.length > 0 ? `(${wishList.length})` : '(0)'}`}</p>
            <button onClick={() => allToBag(wishList)} className='px-12 py-4 border-2 border-[#00000080] rounded-sm cursor-pointer'>Move All To Bag</button>
         </div>
         <div className={`${wishList.length > 0 ? 'overflow-x-auto' : ""} flex gap-7.5 mt-10`}>
            {wishList.length > 0 ? wishList.map((item) => (
               <WishlistCard
                  key={item.id}
                  badge={item.badge}
                  img={item.img}
                  name={item.name}
                  currentPrice={item.currentPrice}
                  originalPrice={item.originalPrice}
                  item={item} />
            )) :
               <p className='text-4xl font-medium text-center py-10 mx-auto'>No Products is Wished</p>}
         </div>
         <div className='mt-20'>
            <div className='flex items-center justify-between'>
               <div className='flex gap-4 items-center'>
                  <div className='bg-[#db4444] rounded-sm w-5 h-10'></div>
                  <p className='text-xl leading-[26px]'>Just For You</p>
               </div>
               <button onClick={() => setSeeAll(seeAll => !seeAll)} className='px-12 py-4 border-2 border-[#00000080] rounded-sm cursor-pointer'>See All</button>
            </div>
            <div className='flex justify-between gap-y-10 flex-wrap mt-15'>
               {dataProduct.slice(0, 4).map((item) => (
                  <JustForYouCard
                     key={item.id}
                     badge={item.badge}
                     img={item.img}
                     name={item.name}
                     currentPrice={item.currentPrice}
                     originalPrice={item.originalPrice}
                     rating={item.rating}
                     item={item} />
               ))}
               {seeAll && dataProduct.slice(5, 14).map((item) => (
                  <JustForYouCard
                     key={item.id}
                     badge={item.badge}
                     img={item.img}
                     name={item.name}
                     currentPrice={item.currentPrice}
                     originalPrice={item.originalPrice}
                     rating={item.rating}
                     item={item} />
               ))}
            </div>
         </div>
      </div>
   )
}
// Tojixojayev Abduraxmon U7