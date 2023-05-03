import axios from 'axios'

import { USERS_DUMMY_DATA_ENDPOINT } from 'constants/api'
import { UserData } from 'types/user'

export const fetchDummyUser = (userId: string) =>
  axios.get<UserData>(`${USERS_DUMMY_DATA_ENDPOINT}/${userId}`)
