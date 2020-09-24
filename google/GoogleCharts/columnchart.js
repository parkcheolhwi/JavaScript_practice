(function() {
  'use strict';

  function drawChart() {
    var target = document.getElementById('target2');
    var data;
    var options = {
      title: 'My Chart',
      width: 500,
      height: 300,
      animation: {
        startup: true,
        duration: 800,
        easing: 'inAndOut'
      },
      isStacked: 'percent'
    };

    var chart = new google.visualization.ColumnChart(target);
    data = new google.visualization.arrayToDataTable([
      ['Team', 'Item-1', 'Item-2'],
      ['Team A', 12, 38],
      ['Team B', 42, 18],
      ['Team C', 11, 58]
    ]);
    chart.draw(data, options);
  }

  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
})();