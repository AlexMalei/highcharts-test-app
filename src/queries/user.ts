import { useQuery } from '@tanstack/react-query'
import { fetchDummyUser } from 'api/user'
import { DUMMY_USERS_QUERY_KEY } from 'constants/queryKeys'

export const useDummyUserQuery = (userId: string) => {
  return useQuery({
    queryKey: [DUMMY_USERS_QUERY_KEY],
    queryFn: () => fetchDummyUser(userId),
    select: data => data?.data,
    enabled: !!userId,
  })
}
