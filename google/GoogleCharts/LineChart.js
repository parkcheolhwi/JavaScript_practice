(function() {
  'use strict';

  function drawChart() {
    var target = document.getElementById('target3');
    var data;
    var options = {
      title: 'My Chart',
      width: 500,
      height: 300,
      hAxis: {title: 'Year'},
      vAxis: {title: 'Sales'},
      curveType: 'function',
      pointSize: 10,
      pointShape: 'square'
    };
    var chart = new google.visualization.LineChart(target);
    data = new google.visualization.arrayToDataTable([
      ['Year', '@taguchi', {role: 'annotation'}, {role: 'certainty'}, '@fkoji', {role: 'certainty'}],
      ['2014', 52, 'Campaign A', true, 89, true],
      ['2015', 38, null, true, 78, true],
      ['2016', 44, null, true, 88, true],
      ['2017', 62, null, false, 91, false]
    ]);
    chart.draw(data, options);
  }

  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
})();