import { useQuery } from '@tanstack/react-query'
import { fetchDummyCarts } from 'api/carts'
import { AxiosResponse } from 'axios'
import { DUMMY_CARTS_QUERY_KEY } from 'constants/queryKeys'
import { useCallback } from 'react'

import { CartData, CartsResponse } from 'types/carts'

export const useDummyCartsQuery = () => {
  return useQuery({
    queryKey: [DUMMY_CARTS_QUERY_KEY],
    queryFn: fetchDummyCarts,
    select: data => data?.data,
  })
}

export const useDummyProductsByCartId = (cartId: string | undefined) => {
  const productsSelectCallback = useCallback(
    (data: AxiosResponse<CartsResponse>) => {
      const cart = data?.data?.carts?.find((cart: CartData) => String(cart?.id) === cartId)

      return cart?.products
    },
    [cartId],
  )

  return useQuery({
    queryKey: [DUMMY_CARTS_QUERY_KEY],
    queryFn: fetchDummyCarts,
    select: productsSelectCallback,
    enabled: !!cartId,
  })
}
