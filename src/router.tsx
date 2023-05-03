import { createBrowserRouter, Navigate } from 'react-router-dom'
import { CartsPage } from 'pages/carts'
import { ProductsPage } from 'pages/products'
import { Routes } from 'constants/routes'

export const router = createBrowserRouter([
  {
    path: Routes.carts,
    element: <CartsPage />,
  },

  {
    path: `${Routes.products}/:cartId`,
    element: <ProductsPage />,
  },

  {
    path: '*',
    element: <Navigate to={Routes.carts} replace />,
  },
])
