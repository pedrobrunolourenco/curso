import { Component } from '@angular/core';
import {EChartsOption} from 'echarts';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: [
        'Jan/2024',
        'Fev/2024',
        'Mar/2024'
      ],
      axisLabel: {
        rotate: 45,
        interval: 0
      }
    },
    yAxis: {
      type: 'value',
    },
    series:[
      {
        name: "vendas (mil)",
        type: 'line',
        data: [
          {value: 30, itemStyle: {color: '#32a850'}},
          {value: 20, itemStyle: {color: '#328fa8'}},
          {value: 50, itemStyle: {color: '#6232a8'}},
        ],
        label: {
          show: true,
          position: 'top',
          formatter: '{c} mil'
        }
      },
      {
        name: "vendas (mil)",
        type: 'bar',
        data: [
          {value: 30, itemStyle: {color: '#32a850'}},
          {value: 20, itemStyle: {color: '#328fa8'}},
          {value: 50, itemStyle: {color: '#6232a8'}},
        ],
        label: {
          show: true,
          position: 'top',
          formatter: '{c} mil'
        }
      }


    ]


  }
}
