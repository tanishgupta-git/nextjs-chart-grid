import type { NextPage } from 'next';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface event {
    date : string,
    value : string,
    id : string
}
interface props {
    events : event[]
}

const EventChart : NextPage<props>= ({events}) => {
    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Event Highchart'
        },
        series: [
          {
            data: [[1,3], [2,4], [3,3], [4,4], [3,5], [5,1]]
          }
        ]
      };     

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    )
}

export default EventChart;