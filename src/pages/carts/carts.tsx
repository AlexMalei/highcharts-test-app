import { CircularProgress } from '@mui/material'
import { useDummyCartsQuery } from 'queries/carts'

import { Layout } from 'components/Layout'
import { Table } from 'components/Table'
import { Routes } from 'constants/routes'
import { MRT_ColumnDef, MRT_Row } from 'material-react-table'
import { useDummyUserQuery } from 'queries/user'
import { useNavigate } from 'react-router-dom'
import { CartData } from 'types/carts'

export const columns: MRT_ColumnDef<CartData>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    header: 'Total',
    accessorKey: 'total',
  },
  {
    header: 'Discounted total',
    accessorKey: 'discountedTotal',
  },
  {
    header: 'Total products',
    accessorKey: 'totalProducts',
  },
  {
    header: 'Total quantity',
    accessorKey: 'totalQuantity',
  },
  {
    header: 'User name',
    // accessorKey: 'userName',
    Cell: ({ row }: { row: MRT_Row<CartData> }) => {
      const { data } = useDummyUserQuery(String(row?.original?.userId))

      return <div>{`${data?.firstName} ${data?.lastName}`}</div>
    },

    enableColumnFilter: false,
  },

  {
    header: 'User email',
    // accessorKey: 'userEmail',
    Cell: ({ row }: { row: MRT_Row<CartData> }) => {
      const { data } = useDummyUserQuery(String(row?.original?.userId))

      return <div>{data?.email}</div>
    },
    enableColumnFilter: false,
  },

  {
    header: 'Details',

    // accessorKey: 'details',
    Cell: ({ row }: { row: MRT_Row<CartData> }) => {
      const navigate = useNavigate()

      return (
        <button
          onClick={() => {
            navigate(`${Routes.products}/${row?.original?.id}`)
          }}
        >
          Go to details
        </button>
      )
    },
    enableColumnFilter: false,
  },
]

export const CartsPage = () => {
  const { data, isLoading } = useDummyCartsQuery()

  return (
    <Layout>
      {isLoading ? <CircularProgress /> : <Table columns={columns} rows={data?.carts} />}
    </Layout>
  )
}
