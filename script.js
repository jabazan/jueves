
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);

function drawCharts() {
  
  var data = google.visualization.arrayToDataTable([
    ['Fecha','Abraham, Fernando', 'Bastan, Pepito','Bazan, Alejandro','Curti, Juan Pablo','Day, Federico','Duo, Guillermo','Lopez, Rodrigo','Navesi, José' , 'Pina, Juanfra',
    'Ortiz M, Tomas' ,
    'Sanchez, Pablo', 
    'Sanchis, Juan M',
    'Welti, Agustin', { role: 'annotation' } ],
    ['06-Enero',0,1,1,0,1,1,1,1,1,1,1,1,1,''],
    ['13-Enero',0,0,1,0,1,0,1,1,1,1,1,1,1,''],
    ['20-Enero',0,0,1,1,0,0,1,0,1,1,1,1,1,'']
  ]);

  var options_stacked = {
    fontName: 'Open Sans',
    isStacked: true,
    chartArea: {width: '65%'},
    height: 500,
    legend: {position: 'rigth', maxLines: 13, fontSize:8},
    hAxis: {minValue: 0},
    title:'Nivel de presentismo',
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('stacked'));
  chart.draw(data, options_stacked);
    
  //BARRAS HORIZONTALES
  var data = google.visualization.arrayToDataTable([
    ['Nombre',            'Presente', 'Ausente'],
    ['Abraham, Fernando',      0,       4      ],
    ['Bastan, Pepito' ,        0,       4      ],
    ['Bazan, Alejandro' ,      3,       1      ],
    ['Curti, Juan Pablo' ,     0,       4      ],
    ['Day, Federico' ,         1,       3      ],
    ['Duo, Guillermo' ,        0,       4      ],
    ['Lopez, Rodrigo' ,        3,       1      ],
    ['Navesi, José' ,          3,       1      ],
    ['Pina, Juanfra' ,         2,       2      ],
    ['Ortiz M, Tomas' ,        3,       1      ],
    ['Sanchez, Pablo' ,        3,       1      ],
    ['Sanchis, Juan M' ,       3,       1      ],
    ['Welti, Agustin' ,        3,       1      ],
    
  ]);

  var options = {
    fontName: 'Open Sans',
    width: 1080,
    height: 500,
    bar: {groupWidth: "55%"},
    isStacked:true,
    hAxis: {minValue: 1, format: ''},
    vAxis: {title: 'Nombres'},
    legend: { position: 'top'}
  };

  var chart = new google.visualization.BarChart(document.getElementById('barras_horizontales'));
  chart.draw(data, options);
  
  // pie chart data
  var pieData = google.visualization.arrayToDataTable([
    ['Nombra', 'Veces'],
    ['Neutral' ,  0],
    ['Negro', 2],
    ['Guille ',1]
  ]);
  // pie chart options
  var pieOptions = {
    legend: 'none',
    pieSliceText: 'label',
    pieStartAngle:'0'  };
  // draw pie chart
  var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
  pieChart.draw(pieData, pieOptions);
}
