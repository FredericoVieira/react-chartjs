import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="chart-container">
          <h2>Bar Example (custom size)</h2>
          <Bar
            data={data}
            height={200}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                      }
                  }]
              }
            }}
          />
        </div>
      </div>
    )
  }
}