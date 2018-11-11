/**
 * Map Function
 */
function drawMap(){
    var width = 300;
    var height = 300;
  
    var svg = d3.select("#main-map").append("svg")
    .attr("width", width)
    .attr("height", height);
    d3.json("data/nyc.json", function(error, nyb) {
      var projection = d3.geoMercator()
                        .center([-73.94, 40.70])
                        .scale(22100)
                        .translate([(width) / 2, (height)/2]);
      var path = d3.geoPath()
              .projection(projection);
      var g = svg.append("g");
  
        regions = g.append("g")
          .attr("id", "boroughs")
          .selectAll(".state")
          .data(nyb.features)
          .enter()
          .append('g')
          .append("path")
          .attr("class", function(d){ return d.properties.name; })
          .attr("d", path)
      });
}

/**
 * Main Viz
 * @param {Array} data 
 */

function drawMainViz(data){

    var colors = {statenisland:'#26ff55',brooklyn:'#23e6fc',manhattan:'#ff470f',queens:'#f482ff',bronx:'#0f6bff'}
    var colors_group = {
    toygroup:'#ffef4c',
    nonsportinggroup:'#0094ff',
    sportinggroup:'#41ff57',
    workinggroup:'#2af7ff',
    miscellaneous:'#af3fff',
    terriergroup:"#f83fff",
    houndgroup:"#ff3f72",
    fss:"#ff5b0a",
    herdinggroup:'#3dffa4'}
    var div = $('.viz-container');
    var w = div.width()+300;
    var h = div.height();
    var g_width = 200;
    var padding = {l:20,r:20,b:30,t:10};
    var shift_height = 0;
    var shift_count = 0;
    var circle_padding = 7;

    var zoom_settings = d3.zoom().scaleExtent([0.8, 8]).on("zoom", function () {
        svg.attr("transform", d3.event.transform)
    })
    /**
     * SVG Primer
     */
    var svg = d3.select('.viz-container').append('svg')
    .attr('width',w).attr('height',h)
    .append('g')
    .attr("transform","translate(70,0) scale(0.7)")
    .call(zoom_settings).append("g")
    
    /**
     * Nesting Data
     */
    var nested_data = d3.nest()
    .key(function(d) { return d.Borough; })
    .entries(data);
    for (var x=0; x < nested_data.length; x++){
        nested_data[x].values.sort(function(x, y){
            return d3.ascending(x.dog_group, y.dog_group);
         })
    }

    nested_data = nested_data.sort(function(x,y){
        return d3.ascending(x.key, y.key);
    }); 
    

    var boro_Enter = svg.selectAll('g')
    .data(nested_data)
    .enter() 

    /**
     * Add G element for Each Boro
     */
    var boro_G =  boro_Enter.append('g')
    .attr('transform',function(d,i){
        return `translate(${10},${i*152})`
    }).attr('id',function(d){
        if (d.key == 'staten island'){
            return 'statenisland';
        }
            return d.key;
    })

    /**
     * Adding Nodes to each G element
     */
    for (var x = 0; x < nested_data.length; x++){
            shift_count = 1
            shift_height = 0
            if (nested_data[x].key == 'staten island'){
                nested_data[x].key = 'statenisland';
            }
            var g_selection = d3.select('#'+nested_data[x].key)
            var nodes = g_selection.selectAll('g')
            .data(nested_data[x].values)
            .enter()
            .append('g').attr('transform',function(d,i){
                if (i != 0){
                    shift_count += 1;
                }
                if (shift_count == 22){
                    shift_count = 1;
                    shift_height +=7
                }
                return `translate(${shift_height},${shift_count*circle_padding+60})`
            }).append('circle').attr('r',3).attr('id',function(d){
                return (d.RowNumber);
            })
            .style('opacity',0.9).style('fill',function(d){
                var group = d.dog_group.replace(" ","");
                group = group.replace("-","");
                return colors_group[group];
            }).on('mouseover',function(d){
                d3.select(this).transition().attr('r',15);
                d3.select(this).attr('stroke','white');
            }).on('mouseout',function(d){
                d3.select(this).transition().attr('r',3);
                d3.select(this).attr('stroke','');
            }).on('click',showDetails);   
    } 
        //Turn Off Spinner 
        $('.overlay-spinner').css('display','none');
    /**
     * This function will be called from the map to show the round controller
     */
    function showDetails(data){
        console.log(data)
        $('.overlay').css('display','block');
        var margin = {t:20,b:20,r:20,l:20};
        var w = 500;
        var h = 300;
        var svg = d3.select("#details").append("svg");
        d3.json("http://dogsofny.tk/search?name=milo&birthyear=2013", function(error, data) {
            if (error) throw error;
            var filtered_data = d3.nest().key(function(d){
                return d.ZipCode;
            }).entries(data)
          });
    }
}
/**
 * Takes an object of options and highlights the SVG based on it
 * @param {Object} filterOptions 
 */
function filterData(filterOptions){
    resetFilter()
    var name = filterOptions.name;
    var breed = filterOptions.breed;
    d3.json(`http://dogsofny.tk/search?name=${name}&birthyear=${g_year}`, function(error, data) {
        var ids = [];
        if (data.length == 0){
            return;
        }
        data.forEach(element => {
            ids.push(element.RowNumber);
        });
        filtered_nodes = ids;
        $('circle').css('opacity',0.2);
        for (index in ids){
            d3.select(`[id="${ids[index]}"]`).style('opacity',1);
            d3.select(`[id="${ids[index]}"]`).transition().attr('r',9);
            d3.select(`[id="${ids[index]}"]`).attr('stroke','white');
        }
        
    });  
}