import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import {asCelsius} from '../helpers';

export default class extends Component {
  render() {
    const {temperatures, labels} = this.props;

    const options = {
      legend:{display:false},
      layout:{padding:30},
      tooltips:{enabled: false},
      maintainAspectRatio:false,
      scales: {
          yAxes: [{
          display: false,
          ticks: {
            max: Math.max(...temperatures) + 1,
            min: Math.min(...temperatures) - 3
          }
        }],
        xAxes: [{
          gridLines : {display:false},
          ticks: {
            fontFamily: "'Roboto', sans-serif",
            fontColor: '#555'
          }
        }]
      },
      animation : {
        onComplete: this.onAnimationComplete
      }
    };

    const data = {
      labels,
      datasets:[{
        strokeColor: "#63d4f4",
        data: temperatures,
        borderColor: "#63d4f4",
        borderWidth: 1,
        backgroundColor: "transparent",
        pointRadius: 3,
        pointHoverRadius: 3,
        pointBackgroundColor: '#fff',
        lineTension: 0
      }]
    };

    return (
      <div className="chart" >
        <Line ref='chart' data={data} options={options} />
      </div>
    )
  }

  onAnimationComplete(){
    const chartInstance = this.chart;
    const ctx = chartInstance.ctx;

    ctx.font = '14  px Roboto';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle='#555';

    this.data.datasets.forEach(function(dataset, i) {
      const meta = chartInstance.controller.getDatasetMeta(i);

      meta.data.forEach(function(point, index) {
        const data = dataset.data[index];
        ctx.fillText(asCelsius(data), point._model.x, point._model.y - 5);
      });
    });

  }
};