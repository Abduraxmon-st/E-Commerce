import { createContext, useContext, useEffect, useState } from "react"
import GamepadRed from '../assets/img/GamepadRed.png'
import keyboard from '../assets/img/keyboard.png'
import monitor from '../assets/img/monitor.png'
import chair from '../assets/img/chair.png'
import pinkCoat from '../assets/img/pink-coat.png'
import guccibag from '../assets/img/gucci-bag.png'
import cooler from '../assets/img/cooler.png'
import bookshelf from '../assets/img/bookshelf.png'
import dog from '../assets/img/dog.png'
import camera from '../assets/img/camera.png'
import laptop from '../assets/img/laptop.png'
import cosmetic from '../assets/img/cosmetic.png'
import car from '../assets/img/car.png'
import boots from '../assets/img/boots.png'
import gamepad from '../assets/img/gamepad.png'
import jacket from '../assets/img/jacket.png'

const Context = createContext();

export const useMainContext = () => useContext(Context);

export const ContextProvider = ({ children }) => {

   const dataCategory = [
      {
         id: 1,
         svg:
            <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_14822_868)">
                  <path d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25.6667 7H31.1354" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28 44.0052V44.0305" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="15.1667" y1="39.8334" x2="40.8333" y2="39.8334" stroke="currentColor" strokeWidth={2} />
               </g>
               <defs>
                  <clipPath id="clip0_14822_868">
                     <rect width={56} height={56} fill="white" />
                  </clipPath>
               </defs>
            </svg>
         ,
         title: "Phones"
      },
      {
         id: 2,
         svg:
            <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_14822_613)">
                  <path d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.3333 46.6666H39.6667" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 37.3334V46.6667" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M35 37.3334V46.6667" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 32H48" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
               </g>
               <defs>
                  <clipPath id="clip0_14822_613">
                     <rect width={56} height={56} fill="white" />
                  </clipPath>
               </defs>
            </svg>

         ,
         title: "Computers"
      },
      {
         id: 3,
         svg:
            <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_14822_629)">
                  <path d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 42V49H35V42" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 14V7H35V14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <line x1={24} y1={23} x2={24} y2={34} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                  <line x1={28} y1={28} x2={28} y2={34} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                  <line x1={32} y1={26} x2={32} y2={34} stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
               </g>
               <defs>
                  <clipPath id="clip0_14822_629">
                     <rect width={56} height={56} fill="white" />
                  </clipPath>
               </defs>
            </svg>

         ,
         title: "SmartWatch"
      },
      {
         id: 4,
         svg:
            <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_14822_6)">
                  <path d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
               </g>
               <defs>
                  <clipPath id="clip0_14822_6">
                     <rect width={56} height={56} fill="white" />
                  </clipPath>
               </defs>
            </svg>

         ,
         title: "Camera"
      },
      {
         id: 5,
         svg:
            <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_14822_644)">
                  <path d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
               </g>
               <defs>
                  <clipPath id="clip0_14822_644">
                     <rect width={56} height={56} fill="white" />
                  </clipPath>
               </defs>
            </svg>,
         title: "HeadPhones"
      },
      {
         id: 6,
         svg:
            <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g clipPath="url(#clip0_14822_809)">
                  <path d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 28H23.3333M18.6667 23.3334V32.6667" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M35 25.6666V25.6908" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M42 30.3333V30.3574" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
               </g>
               <defs>
                  <clipPath id="clip0_14822_809">
                     <rect width={56} height={56} fill="white" />
                  </clipPath>
               </defs>
            </svg>,
         title: "Gaming"
      }
   ]
   const dataProduct = [
      {
         id: 1,
         badge: 40,
         img: GamepadRed,
         name: 'HAVIT HV-G92 Gamepad',
         description: 'Ergonomic gamepad with dual vibration, USB connection, perfect for PC and PS devices, durable and responsive.',
         currentPrice: 120,
         originalPrice: 160,
         quantity: 1,
         rating: 88,
         category: 'gaming'
      },
      {
         id: 2,
         badge: 35,
         img: keyboard,
         name: 'AK-900 Wired Keyboard',
         description: 'Full-sized keyboard with RGB lighting, mechanical keys, excellent for gaming and office work.',
         currentPrice: 960,
         originalPrice: 1160,
         quantity: 1,
         rating: 75,
         category: 'gaming'
      },
      {
         id: 3,
         badge: 30,
         img: monitor,
         name: 'IPS LCD Gaming Monitor',
         description: 'High-refresh IPS display, vibrant colors, minimal input lag, designed for immersive gaming experience.',
         currentPrice: 370,
         originalPrice: 400,
         quantity: 1,
         rating: 99,
         category: 'gaming'
      },
      {
         id: 4,
         badge: 25,
         img: chair,
         name: 'S-Series Comfort Chair',
         description: 'Ergonomic design with adjustable height and back support, ideal for long hours of gaming or work.',
         currentPrice: 375,
         originalPrice: 400,
         quantity: 1,
         rating: 99,
         category: 'furniture'
      },
      {
         id: 5,
         badge: 25,
         img: chair,
         name: 'S-Series Comfort Chair',
         description: 'Comfortable office or gaming chair with wheels, recline function, and padded armrests.',
         currentPrice: 375,
         originalPrice: 400,
         quantity: 1,
         rating: 99,
         category: 'furniture'
      },
      {
         id: 6,
         badge: 25,
         img: chair,
         name: 'S-Series Comfort Chair',
         description: 'Soft cushioned seat, ergonomic backrest, smooth-rolling casters, sturdy frame for all-day comfort.',
         currentPrice: 375,
         originalPrice: 400,
         quantity: 1,
         rating: 99,
         category: 'furniture'
      },
      {
         id: 7,
         badge: null,
         img: pinkCoat,
         name: 'The north coat',
         description: 'Warm and stylish winter coat, windproof, with a modern cut and high-quality materials.',
         currentPrice: 260,
         originalPrice: 360,
         quantity: 1,
         rating: 65,
         category: 'fashion'
      },
      {
         id: 8,
         badge: null,
         img: guccibag,
         name: 'Gucci duffle bag',
         description: 'Luxury leather bag with signature Gucci design, perfect for travel or everyday elegance.',
         currentPrice: 960,
         originalPrice: 1160,
         quantity: 1,
         rating: 65,
         category: 'fashion'
      },
      {
         id: 9,
         badge: null,
         img: cooler,
         name: 'RGB liquid CPU Cooler',
         description: 'Advanced liquid cooling system with RGB fans, efficient thermal control, and silent operation.',
         currentPrice: 160,
         originalPrice: 170,
         quantity: 1,
         rating: 65,
         category: 'computer-accessory'
      },
      {
         id: 10,
         badge: null,
         img: bookshelf,
         name: 'Small BookSelf',
         description: 'Compact wooden bookshelf ideal for small rooms or offices, modern design, easy assembly.',
         currentPrice: 360,
         originalPrice: 400,
         quantity: 1,
         rating: 65,
         category: 'furniture'
      },
      {
         id: 11,
         badge: null,
         img: dog,
         name: 'Breed Dry Dog Food',
         description: 'Healthy dry food for dogs, rich in nutrients and protein, supports digestion and energy.',
         currentPrice: 160,
         quantity: 1,
         rating: 35,
         category: 'pets'
      },
      {
         id: 12,
         badge: null,
         img: camera,
         name: 'CANON EOS DSLR Camera',
         description: 'Professional DSLR camera with sharp lens, HD recording, and fast autofocus capabilities.',
         currentPrice: 360,
         quantity: 1,
         rating: 95,
         category: 'electronics'
      },
      {
         id: 13,
         badge: null,
         img: laptop,
         name: 'ASUS FHD Gaming Laptop',
         description: 'High-performance laptop with FHD display, fast processor, ideal for gaming and multitasking.',
         currentPrice: 700,
         quantity: 1,
         rating: 325,
         category: 'gaming'
      },
      {
         id: 14,
         badge: null,
         img: cosmetic,
         name: 'Curology Product Set',
         description: 'Skincare set designed for all skin types, helps reduce acne, brighten and hydrate skin.',
         currentPrice: 500,
         quantity: 1,
         rating: 145,
         category: 'cosmetics'
      },
      {
         id: 15,
         badge: 'new',
         img: car,
         name: 'Kids Electric Car',
         description: 'Rechargeable electric car for kids, realistic design, music player, and safety features.',
         currentPrice: 960,
         quantity: 1,
         rating: 65,
         color: 'bg-[#FB1314]',
         category: 'toys'
      },
      {
         id: 16,
         badge: null,
         img: boots,
         name: 'Jr. Zoom Soccer Cleats',
         description: 'Lightweight cleats designed for traction, agility, and comfort on the soccer field.',
         currentPrice: 1160,
         quantity: 1,
         rating: 35,
         color: 'bg-[#EEFF61]',
         category: 'sports'
      },
      {
         id: 17,
         badge: 'new',
         img: gamepad,
         name: 'GP11 Shooter USB Gamepad',
         description: 'USB gamepad with textured grip, responsive buttons, ideal for shooters and arcade games.',
         currentPrice: 660,
         quantity: 1,
         rating: 55,
         color: 'bg-[#000000]',
         category: 'gaming'
      },
      {
         id: 18,
         badge: null,
         img: jacket,
         name: 'Quilted Satin Jacket',
         description: 'Stylish satin jacket with quilted interior, great for layering during colder months.',
         currentPrice: 400,
         quantity: 1,
         rating: 65,
         color: 'bg-[#184A48]',
         category: 'fashion'
      }
   ];


   const [cart, setCart] = useState(() => {
      // const saved = localStorage.getItem('cart')
      // return saved ? JSON.parse(saved) : [];
      try {
         const saved = localStorage.getItem('cart')
         return saved ? JSON.parse(saved) : []
      } catch (e) {
         console.log(e);
         return []
      }
   })

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
   }, [cart])

   const toCart = (item) => {
      const incart = localStorage.getItem('cart')
      const existing = JSON.parse(incart).find((el) => el.id === item.id)
      if (existing) {
         setCart(prev => prev.filter(el => el.id !== item.id))
      } else {
         setCart(prev => [...prev, item])
      }
   }

   const allToBag = (items) => {
      try {
         const saved = localStorage.getItem('cart')
         const existingCart = saved ? JSON.parse(saved) : []

         const newItems = items.filter(item =>
            !existingCart.some(cartItem => cartItem.id === item.id)
         )

         const updatedCart = [...existingCart, ...newItems]
         localStorage.setItem('cart', JSON.stringify(updatedCart))
         setCart(updatedCart)
      } catch (error) {
         console.log(error.message);
      }
   }

   const updateQuantity = (id, newQty) => {
      const updated = cart.map(item =>
         item.id === id ? { ...item, quantity: newQty } : item
      )
      setCart(updated)
      localStorage.setItem('cart', JSON.stringify(updated))
   }


   // WISHLIST
   const [wishList, setWishList] = useState(() => {
      try {
         const saved = localStorage.getItem('wishList')
         return saved ? JSON.parse(saved) : []
      } catch (error) {
         console.log(error.message);
         return []
      }
   })

   useEffect(() => {
      localStorage.setItem('wishList', JSON.stringify(wishList))
   }, [wishList])

   const addWishList = (item) => {
      const inwish = localStorage.getItem('wishList')
      const existing = JSON.parse(inwish).find((el) => el.id === item.id)
      if (existing) {
         setWishList(prev => prev.filter(el => el.id !== item.id))
      } else {
         setWishList(prev => [...prev, item])
      }
   }

   return (
      <Context.Provider value={{ dataCategory, dataProduct, cart, toCart, allToBag, updateQuantity, wishList, addWishList, }}>
         {children}
      </Context.Provider>
   )
}
