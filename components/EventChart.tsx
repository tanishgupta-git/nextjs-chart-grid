import type { NextPage } from 'next';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import eventI from '../types/event';

interface props {
    events : eventI[]
}

const EventChart : NextPage<props>= ({events}) => {
    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Event Highchart'
        },
        yAxis: [{
          title: {
              text: 'Value'
          }
          }],
        xAxis : [{
          title: {
            text: 'Time'
          },
          type: "category",
          labels: {
              format: "{value}"
          }
           
        }],
        series: [
          { 
           color: '#F58E6C',
           lineWidth: 2,
           id: 'Events',
            data: events.map( event => ([event.datetime,event.value]))
          }
        ]
      };     

    return (
            <HighchartsReact highcharts={Highcharts} options={options} />
    )
}

export default EventChart;