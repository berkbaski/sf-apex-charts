import Page1Design from 'generated/pages/page1';
import { OrientationType } from 'sf-core/device/screen';

export default class Page1 extends Page1Design {
    router: any;
    constructor() {
        super();
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    }
    initWebView() {
        this.webView1.loadHTML(`
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="chart"></div>
    <div id="chart2"></div>

    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script> var options = {
          series: [{
          name: 'Income',
          type: 'column',
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
          name: 'Cashflow',
          type: 'column',
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
          name: 'Revenue',
          type: 'line',
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
          chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: 'XYZ - Stock Analysis (2009 - 2016)',
          align: 'left',
          offsetX: 110
        },
        xaxis: {
          categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#008FFB',
              }
            },
            title: {
              text: "Income (thousand crores)",
              style: {
                color: '#008FFB',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
            title: {
              text: "Operating Cashflow (thousand crores)",
              style: {
                color: '#00E396',
              }
            },
          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
            title: {
              text: "Revenue (thousand crores)",
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          },
        },
        legend: {
          horizontalAlign: 'left',
          offsetX: 40
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
      </script>
</body>

</html>
        `);
    }
}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 */
function onShow(superOnShow: () => void) {
    superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad(superOnLoad: () => void) {
    superOnLoad();
    this.initWebView();
}
