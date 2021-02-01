
google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);

function drawCharts() {
   //COMBO CHARTS
  
  var data = google.visualization.arrayToDataTable([
    ['Fecha', 'Presentes', 'Promedio'],
    
    ['14-Ene',     3,      3],
    ['21-Ene',     8,      5.5],
    ['28-Ene',     6,      5.6]
  ]);

  var options = {
    vAxis: {title: 'Cant. Presentes'},
    hAxis: {title: 'Fecha'},
    seriesType: 'bars',
    series: {1: {type: 'line'}},
    legend: { position: 'top'}
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
  
  //BARRAS HORIZONTALES
  var data = google.visualization.arrayToDataTable([
    ['Nombre',            'Presente', 'Ausente'],
    ['Abraham, Fernando',      0,       3      ],
    ['Bastan, Pepito' ,        0,       3      ],
    ['Bazan, Alejandro' ,      2,       1      ],
    ['Curti, Juan Pablo' ,     0,       3      ],
    ['Day, Federico' ,         1,       2      ],
    ['Duo, Guillermo' ,        0,       3      ],
    ['Lopez, Rodrigo' ,        2,       1      ],
    ['Navesi, José' ,          2,       1      ],
    ['Pina, Juanfra' ,         1,       2      ],
    ['Ortiz M, Tomas' ,        2,       1      ],
    ['Sanchez, Pablo' ,        2,       1      ],
    ['Sanchis, Juan M' ,       2,       2      ],
    ['Welti, Agustin' ,        3,       0      ],
    
  ]);

  var options = {
    chartArea: {width: '55%'},
    isStacked:true,
    hAxis: {
       minValue: 0
    },
    vAxis: {
      title: 'Nombre'
    },
    legend: { position: 'top'}
  };

  var chart = new google.visualization.BarChart(document.getElementById('barras_horizontales'));
  chart.draw(data, options);

  // BEGIN BAR CHART
  /*
  // create zero data so the bars will 'grow'
  var barZeroData = google.visualization.arrayToDataTable([
    ['Day', 'Page Views', 'Unique Views'],
    ['Sun',  0,      0],
    ['Mon',  0,      0],
    ['Tue',  0,      0],
    ['Wed',  0,      0],
    ['Thu',  0,      0],
    ['Fri',  0,      0],
    ['Sat',  0,      0]
  ]);
	
  // actual bar chart data
  var barData = google.visualization.arrayToDataTable([
    ['Day', 'Page Views', 'Unique Views'],
    ['Sun',  1050,      600],
    ['Mon',  1370,      910],
    ['Tue',  660,       400],
    ['Wed',  1030,      540],
    ['Thu',  1000,      480],
    ['Fri',  1170,      960],
    ['Sat',  660,       320]
  ]);
  // set bar chart options
  var barOptions = {
    focusTarget: 'category',
    backgroundColor: 'transparent',
    colors: ['cornflowerblue', 'tomato'],
    fontName: 'Open Sans',
    chartArea: {
      left: 50,
      top: 10,
      width: '100%',
      height: '70%'
    },
    bar: {
      groupWidth: '80%'
    },
    hAxis: {
      textStyle: {
        fontSize: 11
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 1500,
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 4
      },
      textStyle: {
        fontSize: 11
      }
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: 'out',
			startup: true
    }
  };
  // draw bar chart twice so it animates
  var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
  //barChart.draw(barZeroData, barOptions);
  barChart.draw(barData, barOptions);
  */
  // BEGIN LINE GRAPH
  
  /* function randomNumber(base, step) {
    return Math.floor((Math.random()*step)+base);
  }
  function createData(year, start1, start2, step, offset) {
    var ar = [];
    for (var i = 0; i < 12; i++) {
      ar.push([new Date(year, i), randomNumber(start1, step)+offset, randomNumber(start2, step)+offset]);
    }
    return ar;
  }
  var randomLineData = [
    ['Year', 'Page Views', 'Unique Views']
  ];
  for (var x = 0; x < 7; x++) {
    var newYear = createData(2007+x, 10000, 5000, 4000, 800*Math.pow(x,2));
    for (var n = 0; n < 12; n++) {
      randomLineData.push(newYear.shift());
    }
  }
  var lineData = google.visualization.arrayToDataTable(randomLineData);
  
	/*
  var animLineData = [
    ['Year', 'Page Views', 'Unique Views']
  ];
  for (var x = 0; x < 7; x++) {
    var zeroYear = createData(2007+x, 0, 0, 0, 0);
    for (var n = 0; n < 12; n++) {
      animLineData.push(zeroYear.shift());
    }
  }
  var zeroLineData = google.visualization.arrayToDataTable(animLineData);
	
  
  var lineOptions = {
    backgroundColor: 'transparent',
    colors: ['cornflowerblue', 'tomato'],
    fontName: 'Open Sans',
    focusTarget: 'category',
    chartArea: {
      left: 50,
      top: 10,
      width: '100%',
      height: '70%'
    },
    hAxis: {
      //showTextEvery: 12,
      textStyle: {
        fontSize: 11
      },
      baselineColor: 'transparent',
      gridlines: {
        color: 'transparent'
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 50000,
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 4
      },
      textStyle: {
        fontSize: 11
      }
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: 'out',
			startup: true
    }
  };

  var lineChart = new google.visualization.LineChart(document.getElementById('line-chart'));
  //lineChart.draw(zeroLineData, lineOptions);
  lineChart.draw(lineData, lineOptions); */
  
  // BEGIN PIE CHART
  // pie chart data
  var pieData = google.visualization.arrayToDataTable([
    ['Country', 'Page Hits'],
    ['Abraham, Fernando',      0],
    ['Bastan, Pepito' ,        0],
    ['Bazan, Alejandro' ,      1],
    ['Curti, Juan Pablo' ,     0],
    ['Day, Federico' ,         0],
    ['Duo, Guillermo' ,        0],
    ['Lopez, Rodrigo' ,        0],
    ['Navesi, José' ,          1],
    ['Pina, Juanfra' ,         0],
    ['Ortiz M, Tomas' ,        0],
    ['Sanchez, Pablo' ,        0],
    ['Sanchis, Juan M' ,       0],
    ['Welti, Agustin' ,        0],
    ['Neutral' ,               1],
  ]);
  // pie chart options
  var pieOptions = {
    backgroundColor: 'transparent',
    /*pieHole: 0.3,*/
    is3D:true,
    colors: [ "cornflowerblue", 
              "olivedrab", 
              "orange", 
              "tomato", 
              "crimson", 
              "purple", 
              "turquoise", 
              "forestgreen", 
              "navy", 
              "gray"],
    pieSliceText: 'perentage',
    tooltip: {
      text: 'value'
    },
    fontName: 'Open Sans',
    chartArea: {
      width: '100%',
      height: '94%'
    },
    legend: {
      textStyle: {
        fontSize: 13
      }
    }
  };
  // draw pie chart
  var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
  pieChart.draw(pieData, pieOptions);
}