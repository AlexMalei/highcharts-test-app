import axios from 'axios'

import { CARTS_DUMMY_DATA_ENDPOINT } from 'constants/api'
import { CartsResponse } from 'types/carts'

export const fetchDummyCarts = () => axios.get<CartsResponse>(CARTS_DUMMY_DATA_ENDPOINT)
