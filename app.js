// create an event handler
d3.selectAll("#selDataset").on("change", plotCha);

function plotCha() {
  var valueDrop = d3.select("#selDataset").node().value;
  dFunt(valueDrop);
  dPa(valueDrop);
  bubChart(valueDrop);
}

function buildMetadata(sample){

  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;

    var sData = metadata.filter(
      (sData) => sData.id == sample
    );
    console.log(sData[0]);
    var res = sData[0];
    var Panel = d3.select("#sample-metadata");
    Panel.html("");
    
    Object.entries(res).forEach(([key, value]) => {
      Panel.append("h5")
      .text(`${key.toUpperCase()}:${value}`);
    });
  });

function dFunt(valueDrop){
  var filterB = data.samples.filter(value => value.id == valueDrop);
  var otid = filterB.map(v => v.out_ids);
  otid = idSelect(otid[0].slice(0,10));

  var otCt = filterB.map(v => v.sample_values);
  otCt = otCt[0].slice(0,10);
  
  var otLl = filterB.map(v => v.out_labels);
  var names = labelSelect(otLl[0]).slice(0,10);

  var trace1 ={
    x: otCt,
    y: otid,
    text: names,
    type: "bar",
    orientation: "h"
  };
  
   var layout ={
     yaxis: {
       autorange: "reversed"
     }
   };

   var tracedata =[trace1];

  Plotly.newplot("bar", tracedata, layout);
};

function dPa(valueDrop){
  var filterBu = data.samples.filter(value => value.id == valueDrop);
  var otid = filterBu.map(v => v.out_ids)
  otid = otid[0];
  var otCt = filterBu.map(v => v.sample_values);
  otCt = otCt[0]
  var otLl = filterBu.map(v => v.out_labels);
  otLl - labelSelect(otLl[0]);

  var trace2 = {
    x: otid,
    y: otCt,
    text: otLl,
    mode: "markers",
    marker: {
      color: otid,
      size: otCt,
      colorscale: "Hot"
    },
  };

  var layout ={
    xaxis: { title: "OTU"}
  };

  var traceData2 = [trace2];

  Plotly.newplot("bubble", traceData2, layout);
}
  //var trace2 = {
  //  type: "bubble"
  //}

  //var trace2 = {
  //  type
  //}
