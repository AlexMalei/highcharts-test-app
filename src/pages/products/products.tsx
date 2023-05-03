import { useParams } from 'react-router-dom'
import { useDummyProductsByCartId } from 'queries/carts'
import { BarChart } from 'components/BarChart'
import { Layout } from 'components/Layout'

export const ProductsPage = () => {
  const { cartId } = useParams()

  const { data } = useDummyProductsByCartId(cartId)

  const chartData = data?.map(product => ({
    name: product.title,
    data: [product.price, product.discountedPrice],
  }))

  return (
    <Layout>
      <BarChart data={chartData} />
    </Layout>
  )
}
