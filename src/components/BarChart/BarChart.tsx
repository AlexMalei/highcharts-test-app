import Highcharts from 'highcharts'

import { useMemo } from 'react'
import HighchartsReact from 'highcharts-react-official'

export const BarChart = ({
  data,
}: {
  data:
    | {
        name: string
        data: number[]
      }[]
    | undefined
}) => {
  const chartOptions = useMemo(
    () => ({
      title: {
        text: 'Products price',
      },
      xAxis: {
        categories: ['Price', 'Discount price'],
      },
      yAxis: {
        title: {
          text: 'Total ($)',
        },
      },
      chart: {
        type: 'column',
      },
      series: data,
    }),
    [data],
  )

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  )
}
