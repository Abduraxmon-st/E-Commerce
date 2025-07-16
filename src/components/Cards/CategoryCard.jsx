import React from 'react'

export const CategoryCard = ({ svg, title, selected, onClick }) => {
   return (
      <div onClick={onClick} className={`flex flex-col gap-4 items-center justify-center w-[170px] h-[145px] cursor-pointer border border-[#0000004D] rounded-sm ${selected && 'bg-[#DB4444] text-white border-[#db4444]'} hover:bg-[#DB4444] hover:text-white hover:border-[#db4444]`}>
         {svg}
         <p className=''>{title}</p>
      </div>
   )
}
