(function() {
  'use strict';

  function drawChart() {
    var target = document.getElementById('target1');
    var data;
    var options = {
      title: 'My Chart',
      width: 500,
      height: 300,
      backgroundColor : "#f8f8f8",
      colors:["#aaa", "#bbb", "#ccc"],
      slices:[1, {offset:0.2}],
      //pieHole:0.4,
      is3D:true
    };
    var chart = new google.visualization.PieChart(target);
    //data = new google.visualization.DataTable();
    //data.addColumn('string', 'Language');
    //data.addColumn('number', 'Votes');
    //data.addRow(['PHP', 30]);
    //data.addRow(['Ruby', 20]);
    //data.addRow(['Python', 10]);

    data = new google.visualization.arrayToDataTable([
      ["Language", "Votes"],
      ["PHP", 100],
      ["Ruby", 20],
      ["Python", 10]
    ])
    chart.draw(data, options);
  }

  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);
})();