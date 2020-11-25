// create an event handler
d3.selectAll("#selDataset").on("change", plotCha);

function plotCha() {
  var valueDrop = d3.select("#selDataset").node().value;
  dFunt(valueDrop);
  dPa(valueDrop);
  bubChart(valueDrop);
}

function samData(sample){

  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;

    var sData = metadata.filter(
      (sData) => sData.id == sample
    );
      console.log(sData);
    //var id = sdata.id;
    //var ethnicity = sdata.metadata.ethnicity;
    //var gender = sdata.metadata.gender;
    //var age = sdata.metadata.age;
    //var location = sdata.metadata.location;
    //var bbtype = sdata.metadata.bbtype;
    //var wfreq = sdata.metadata.wfreq;
    //console.log(sdata.metadata.column_names);
  });

  //var trace1 ={
    //type: "bar",

  //}

  //var trace2 = {
  //  type: "bubble"
  //}

  //var trace2 = {
  //  type
  //}
};
