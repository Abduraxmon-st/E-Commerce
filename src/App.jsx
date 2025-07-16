import React, { useContext, useEffect } from "react"
import { HomePage } from "./pages/Homepage"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"
import { SignUp } from "./pages/auth/SignUp"
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { RootLayout } from "./layout/RootLayout"
import { AuthContext } from "./context/AuthContext"
import { AuthLayout } from "./layout/AuthLayout"
import { WishListPage } from "./pages/WishList/WishListPage"
import { CartPage } from "./pages/Cart/CartPage"
import { Checkout } from "./pages/CheckOut"
import { AccountPage } from "./pages/Account"
import { ProductDetails } from "./pages/Details/ProductDetails"

function App() {

  const PrivateRouter = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div>Loading...</div>;
    }
    return authenticated ? <>{children}</> : <Navigate to="/signup" replace />;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter><RootLayout /></PrivateRouter>}>
            <Route path="/wishlist" element={<WishListPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/details" element={<ProductDetails />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
