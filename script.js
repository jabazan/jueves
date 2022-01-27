
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);

function drawCharts() {
  
  var data = google.visualization.arrayToDataTable([
    ['Fecha',
    'Abraham, Fernando',
    'Bastan, Pepito',
    'Bazan, Alejandro',
    'Curti, Juan Pablo',
    'Day, Federico',
    'Duo, Guillermo',
    'Lopez, Rodrigo',
    'Navesi, José' ,
    'Pina, Juanfra',
    'Ortiz M, Tomas' ,
    'Sanchez, Pablo', 
    'Sanchis, Juan M',
    'Welti, Agustin', { role: 'annotation' } ],
    ['06-Enero',  1,1,1,0,1,0,1,1,1,0,1,1,1,''],
    ['* 17-Enero',0,1,1,0,1,1,1,1,1,1,1,1,1,''],
    ['20-Enero',  0,0,1,0,1,0,1,1,1,1,1,1,1,''],
    ['27-Enero',  0,0,0,0,0,0,0,0,0,0,0,0,0,'']
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
    ['Abraham, Fernando',      1,       2     ],
    ['Bastan, Pepito' ,        2,       1      ],
    ['Bazan, Alejandro' ,      3,       0      ],
    ['Curti, Juan Pablo' ,     0,       3      ],
    ['Day, Federico' ,         3,       0      ],
    ['Duo, Guillermo' ,        1,       2      ],
    ['Lopez, Rodrigo' ,        3,       0      ],
    ['Navesi, José' ,          3,       0      ],
    ['Pina, Juanfra' ,         3,       0      ],
    ['Ortiz M, Tomas' ,        2,       1      ],
    ['Sanchez, Pablo' ,        3,       0      ],
    ['Sanchis, Juan M' ,       3,       0      ],
    ['Welti, Agustin' ,        3,       0      ],
    
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
    ['Pepi',1],
    ['Negro', 1],
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
