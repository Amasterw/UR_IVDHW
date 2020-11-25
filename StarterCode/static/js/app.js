// create an event handler
d3.selectAll("#selDataset").on("change", plotCha);

function plotCha() {
  var valueDrop = d3.select("#selDataset").node().value;
  dFunt(valueDrop);
  dPa(valueDrop);
  bubChart(valueDrop);
}

function samData(samples){

  var metadataURL = `/metadata/${sample}`;

  d3.json(metadataURL).then(function(samples){

    var sData = d3.select('#sample-metadata');

    var id = sdata.id;
    var ethnicity = sdata.metadata.ethnicity;
    var gender = sdata.metadata.gender;
    var age = sdata.metadata.age;
    var location = sdata.metadata.location;
    var bbtype = sdata.metadata.bbtype;
    var wfreq = sdata.metadata.wfreq;
    console.log(sdata.metadata.column_names);
  });
};
