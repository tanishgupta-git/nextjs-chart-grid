import type { NextComponentType } from 'next';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DataChart : NextComponentType = () => {
    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'My chart'
        },
        series: [
          {
            data: [1, 2, 1, 4, 3, 6]
          }
        ]
      };     

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default DataChart;