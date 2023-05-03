import MaterialReactTable from 'material-react-table'

export const Table = ({ columns, rows }: Record<string, any>) => {
  return (
    <MaterialReactTable
      selectAllMode='page'
      columns={columns}
      data={rows}
      enableRowSelection={false}
      initialState={{ density: 'compact' }}
    />
  )
}
