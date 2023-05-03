export type ProductData = {
  discountPercentage: number
  discountedPrice: number
  id: number
  price: number
  quantity: number
  title: string
  total: number
}

export type CartData = Record<string, unknown> & {
  id: number
  discountedTotal: number
  total: number
  totalProducts: number
  totalQuantity: number
  userId: number
  products: Array<ProductData>
}

export type CartsResponse = {
  carts: Array<CartData>
  limit: number
  skip: number
  total: number
}
