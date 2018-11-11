// var attr = ["dog_group", "AnimalName", "BreedName", "AnimalBirthYear", "Borough"];

// var icons = {
// 	"BreedName": "icons/dog-face.svg",
// 	"AnimalName": "icons/dog-collar.svg",
// 	"dog_group": "icons/bone.svg",
// 	"AnimalBirthYear": "icons/calendar.svg",
// 	"Borough": "icons/new-york.svg"
// }
// var mapp = {
// 	"AnimalName": "name",
// 	"BreedName": "breed", 
// 	"dog_group": "group",
// 	"AnimalBirthYear": "birthyear",
// 	"Borough": "boro"
// }
// var added = []

// //Make main svg to append dog to (initialization)

// var padding_l = 20;
// var padding_t = 20;
// var hover_color = "#6699ff";
// var unhover_color = "#ccddff";
// var selected_color = "black"



			
// //add dog images to svg
// var json = [{"RowNumber":4,"AnimalName":"paige","AnimalGender":"f","AnimalBirthMonth":"07","BreedName":"pit bull","Borough":"manhattan","ZipCode":"10035","CommunityDistrict":"111.0","CensusTract2010":"206.0","NTA":"mn03","CityCouncilDistrict":"9","CongressionalDistrict":"13.0","StateSenatorialDistrict":"30.0","LicenseIssuedDate":"09/12/2014","LicenseExpiredDate":"09/12/2017","Unnamed":"","AnimalBirthYear":"2014","dog_group":"terrier group","DensityBorough":"72918.39684625494","PopBorough":"1664727","IncBorough":"75513","HousesBorough":"753385","SizeBorough":23},{"RowNumber":6,"AnimalName":"ali","AnimalGender":"m","AnimalBirthMonth":"01","BreedName":"basenji","Borough":"manhattan","ZipCode":"10013","CommunityDistrict":"","CensusTract2010":"","NTA":"","CityCouncilDistrict":"","CongressionalDistrict":"","StateSenatorialDistrict":"","LicenseIssuedDate":"09/12/2014","LicenseExpiredDate":"09/12/2019","Unnamed":"","AnimalBirthYear":"2014","dog_group":"hound group","DensityBorough":"72918.39684625494","PopBorough":"1664727","IncBorough":"75513","HousesBorough":"753385","SizeBorough":23},{"RowNumber":11,"AnimalName":"avery","AnimalGender":"f","AnimalBirthMonth":"06","BreedName":"pit bull","Borough":"manhattan","ZipCode":"10002","CommunityDistrict":"103.0","CensusTract2010":"201.0","NTA":"mn28","CityCouncilDistrict":"1","CongressionalDistrict":"7.0","StateSenatorialDistrict":"26.0","LicenseIssuedDate":"09/13/2014","LicenseExpiredDate":"09/13/2019","Unnamed":"","AnimalBirthYear":"2014","dog_group":"terrier group","DensityBorough":"72918.39684625494","PopBorough":"1664727","IncBorough":"75513","HousesBorough":"753385","SizeBorough":23},{"RowNumber":120,"AnimalName":"campbell","AnimalGender":"m","AnimalBirthMonth":"05","BreedName":"standard poodle","Borough":"manhattan","ZipCode":"10128","CommunityDistrict":"","CensusTract2010":"","NTA":"","CityCouncilDistrict":"","CongressionalDistrict":"","StateSenatorialDistrict":"","LicenseIssuedDate":"09/18/2014","LicenseExpiredDate":"09/18/2016","Unnamed":"","AnimalBirthYear":"2014","dog_group":"non-sporting group","DensityBorough":"72918.39684625494","PopBorough":"1664727","IncBorough":"75513","HousesBorough":"753385","SizeBorough":23},{"RowNumber":157,"AnimalName":"hannah","AnimalGender":"f","AnimalBirthMonth":"02","BreedName":"miniature schnauzer","Borough":"manhattan","ZipCode":"10019","CommunityDistrict":"104.0","CensusTract2010":"127.0","NTA":"mn15","CityCouncilDistrict":"3","CongressionalDistrict":"10.0","StateSenatorialDistrict":"27.0","LicenseIssuedDate":"09/21/2014","LicenseExpiredDate":"09/21/2019","Unnamed":"","AnimalBirthYear":"2014","dog_group":"terrier group","DensityBorough":"72918.39684625494","PopBorough":"1664727","IncBorough":"75513","HousesBorough":"753385","SizeBorough":23}]



// // set the dimensions and margins of the graph
// var margin = {top: 20, right: 20, bottom: 30, left: 40},
//     width = 400 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;


// var svg = d3.select('svg')
// var width = +svg.attr("width");
// var height = +svg.attr("height");
// var chart = svg.append('g')
// //placeholder nodes
// var mynode = chart.selectAll(".node").data(json).enter().append("g")
// .attr("transform", function(d,i){
// 	return "translate("+ (width - (i*150)) +","+(height - (i*150) + ")");	
// }).attr("id", function(d,i){
// 				return 'a'+i
	
// 			})

// //placeholder images for each node
// var myimage = mynode.append('image')
// 		    .attr('xlink:href', './icons/dog_icons/svg/doberman.svg').attr("width", 100).attr("height", 100)
// 		    .on("click", function(d, i){
// 		    	//Initialize the donut chart without showing it (yet)
// 		    	d3.select("#donut").remove()
// 		    	console.log(this.parentNode)
// 				initialize_donut(0, i,d)
// 		    	expand_donut(d, i)
// 		    })
// //Test function on starting page
// get_data([ "BreedName", "golden retriever" ])

// function initialize_donut(r, j,data){
// 	var padding  = 1
// 	added=[]
// 	var radius = 0
// 	var thickness = 0
// 	var arcing; 
// 	var pie;
// 	var segmentLayer;
// 	var text = "";
// 	var duration = 750;
// 	var g = d3.select("#a"+j).append('g').attr("id", "donut")

// 	var arc = d3.arc()
// 	.innerRadius(radius - thickness)
// 	.outerRadius(radius);
// 	var pie = d3.pie()
// 	.value(function(d) {  return 10; })
// 	.sort(null);

// 	var path = g.selectAll('g.slice')
// 	.data(pie(attr))
// 	.enter()
// 	.append("g").attr("class", "revealed_unhovered")
// 	.on("mouseover", function(d) {
// 		console.log(d.data)
// 	      let g = d3.select(this)
// 	        .style("cursor", "pointer")
// 	        .append("g")
// 	        .attr("class", "revealed_hovered")
	 
// 	      g.append("text")
// 	        .attr("class", "name-text")
// 	        .text(d.data)
// 	        .attr('text-anchor', 'middle')
// 	        .attr("transform", "translate(50,0)")
// 	    })
// 	  .on("mouseout", function(d) {
// 	      d3.select(this)
// 	        .style("cursor", "none")  
// 	        .attr("class", "revealed_unhovered")
// 	        .select('text').remove();

// 	    })
// 	  .append('path')
// 	  .attr("transform", "translate(50,40)")
// 	  .attr('d', arc) 
// 	  .on("mouseover", function(d) {
// 	      d3.select(this)     
// 	        .style("cursor", "pointer")
// 	        .attr("class", "revealed_hovered");
	    
// 	    })
// 	  .on("mouseout", function(d) {
// 	  	if (d3.select(this).classed("selected")){
// 		      console.log("yyy")
// 		  }
// 		  else{
// 		  	console.log("kkl")
// 		  	d3.select(this).attr("class", "revealed_unhovered")
// 		  }
// 	    })
// 	  .on("click", function(d){
// 	  	d3.selectAll('path').style("fill", unhover_color)
// 	  	added = []
// 	  	if (!(added.includes(d.data))){
// 	  		added.push(d.data)
// 	  		added.push(data[d.data])
	  		
// 	  		console.log(added)
// 	  	}
// 	  	if (!(d3.select(this).classed("selected"))){
// 	  		d3.select(this).classed("selected", true);
// 	  		d3.select(this).transition().duration(1).style("fill", selected_color)
// 	  	}
// 	  	else{ 
// 	  		d3.select(this).classed("selected", false); 
// 	  		for (var i=0; i< added.length; i++) {
// 			    if (added[i] === d.data) {
// 			        added.splice(i, 2);
// 			    }
// 			}
// 			console.log(added)
// 	  		d3.select(this).transition().duration(1).style("fill", unhover_color)
// 	  	}



// 	  })
// 	  .each(function(d, i) { this._current = i; });
// 	  console.log(path)
// }

// function expand_donut(data, j){
// 	console.log(data)
// 	var padding  = 1
// 	var arcing; 
// 	var pie;
// 	var segmentLayer;
// 	var text = "";
// 	var duration = 750;
// 	var radius = 110
// 	var thickness = 25
// 	var arc = d3.arc()
// 	.innerRadius(radius - thickness)
// 	.outerRadius(radius);

// 	var g = d3.select("#donut").selectAll("g").selectAll("path").transition().attr("d", arc)
// 	.duration(duration)
	
// 	var search = d3.select("#donut").append("circle").attr("r", 10).attr("x", "-1em").attr("y", "-1em")
// 	.attr("fill", "purple").on("click", function(d){
// 		console.log("query test")

// 		if (added.length > 0){
// 			console.log("query")
// 			get_data(added)
// 		}
// 	})

// 	// add the image
// 	d3.select("#donut").selectAll("g").append("image").attr("transform", function(d){
// 	    // Reposition so that the centre of the image (not the top left corner)
// 	    // is in the centre of the arc
// 	    var x = arc.centroid(d)[0];
// 	    var y = arc.centroid(d)[1];
// 	    return "translate(" + (x+40) + "," + (y+30)+ ")";
// 	}).attr("xlink:href",function(d) {  return icons[d.data];})
// 	.attr("width", 20)
// 	.attr("height", 20).attr("fill", "#111111")
      

// }

// function make_query(arr){
// 	var i;
// 	var query = "http://dogsofny.tk/search?"
// 	for (i = 0; i < arr.length; i+=2) { 
// 	    query = query + mapp[arr[i]]+"="+arr[i+1] + '&'
// 	}
// 	return(query)
// }

// function get_data (arr){
// 	var query = make_query(arr)
// 	console.log(query)
// 	d3.json(query, function(error, json) {
// 		console.log(json)
//     	data = json
//     	trellis(data, arr)

// 	});
// }
// var columns = ["AnimalName", "AnimalBirthYear",'BreedName', 'Borough', 'dog_group']
// var chartsvg = d3.select("#chart_area").append("g").attr("id", "charts");

// //test is breedname
// var xScale = d3.scaleLinear().domain([0,100]).range([0,1000])
// var yScale = d3.scaleLinear().domain([0,100]).range([200,0])
// // axes that are rendered already for you
// var xAxis, yAxis = "";
// var cells = []
// columns.forEach(function(d,i){
// 	console.log(i*200)
// 	var cell = chartsvg.append("g").attr("id", d).attr("transform", "translate("+[20, (i*200)+(i*10)]+")");
// 	cells.push(cell)
// })
// cells.forEach(function(d){
// 	d.append("g").attr("class", "yaxis").attr("transform", "translate(0,0)")
// 	d.append("g").attr("class", "xaxis").attr("transform", "translate(0,200)")
// })
// function trellis (data, arr){
// 	charts = []	
// 	indexX = 30
// 	indexY = 10
// 	var top = {}
// 	columns.forEach(function(attribute){
// 		var count = d3.nest()
// 			.key(function(d) { return d[attribute]; })
// 			.rollup(function(v) { return v.length  })
// 			.entries(data);
// 			console.log(attribute)	
// 			console.log(count)
// 			top[attribute] = d3.extent(count, function(d){
//                 return d.value;
//         	});
//         	console.log(top[attribute])
//         	xScale.domain(top[attribute])
// 		    yScale.domain(top[attribute]);

// 			if (attribute == "AnimalName"){
// 				var x = d3.scaleBand().rangeRound([0, 1000]).padding(0.1);
// 		    	x.domain(count.map(function(d) { return d.key.charAt(0)}));
// 		    	console.log(x)
// 				var nodes = chartsvg.select("#"+attribute).selectAll(".dot").data(count)
// 				nodesEnter = nodes.enter().append("g").attr("transform", function(d,i){
// 					var xi = (d.key.charAt(0))
// 					var yi = d.value
// 					return("translate(" + [x(xi)+16,yScale(yi)]+")") 
// 				})
// 				nodesEnter.append("circle").attr("r", 3).style("fill", "steelblue")
// 				.on("mouseover", function(d){
// 					d3.select(this).style("fill", "red")
// 					console.log(d)
// 				}).attr("class", "dot");
// 				nodes.merge(nodesEnter).transition().duration(750).attr("transform",function(d){
// 					var xi = (d.key.charAt(0))
// 					var yi = d.value
// 					return("translate(" + [x(xi)+16,yScale(yi)]+")") 	
// 				})
//      			d3.select("#"+attribute).select(".xaxis").transition().duration(750).call(d3.axisBottom(x));
//     			d3.select("#"+attribute).select(".yaxis").transition().duration(750).call(d3.axisLeft(yScale));
//      			nodes.exit().remove()
// 			}
// 			else if (attribute == "AnimalBirthYear"){
// 				xScale.domain([1998, 2016]);
// 				yScale.domain(top[attribute])
// 				count.sort(function(x, y){
//    					return d3.ascending(x.key, y.key);
// 				})


// 				var line = d3.line()
// 				    .x(function(d) { return xScale(d.key); })
// 				    .y(function(d) { return yScale(d.value); });
// 				var ll = chartsvg.select("#"+attribute)
// 			    ll.append("path")
// 				    .datum(count) // 10. Binds data to the line 
// 				    .attr("class", "line") // Assign a class for styling 
// 				    .attr("d", line); // 11. Calls the line generator 
// 				var nodes = chartsvg.select("#"+attribute).selectAll(".dot").data(count)
// 				nodesEnter = nodes.enter().append("g").attr("transform", function(d,i){
// 					return "translate("+[xScale(d.key),yScale(d.value)] +")";
// 				})
// 				nodesEnter.append("circle").attr("r", 4).style("fill", "steelblue")
// 				.on("mouseover", function(d){
// 					d3.select(this).style("fill", "red")
// 					console.log(d)
// 				}).attr("class", "dot");
// 				nodes.merge(nodesEnter).transition().duration(750).attr("transform",function(d){
// 					return "translate("+[xScale(d.key),yScale(d.value)] +")";	
// 				})
// 				nodes.exit().remove()
// 				// Data line and dots group
//      			d3.select("#"+attribute).select(".xaxis").transition().duration(750).call(d3.axisBottom(xScale));
//     			d3.select("#"+attribute).select(".yaxis").transition().duration(750).call(d3.axisLeft(yScale));
// 			}
// 	})
// }



// // function make_chart (data, arr){
// // 	console.log(data)
// // 	d3.select("#charts").remove()
// // 	// json = jsonify(data,arr)
// // 	// console.log(json)
// // 	console.log(arr)
// // 	if (arr.length ==2 ){
// // 		var countBorough = d3.nest()
// // 		  .key(function(d) { return d.Borough; })
// // 		  .rollup(function(v) { return v.length  })
// // 		  .entries(data);
// // 		console.log(countBorough)
// // 	}
// // 	else if (arr.length >2 && arr.includes("BreedName")){
// // 		var nesting = ["BreedName", "Borough"];
// // 		var countBorough = d3.nest();
// // 		nesting.forEach(function(key) {
// // 		    data.key(function(d) {return d[key]; })});
// // 		console.log(countBorough)
// // 	}

// // 	var min = d3.min(countBorough, function(d){return d.value})
// // 	var max = d3.max(countBorough, function(d){return d.value})
// // 	console.log(min, max)
// // 	var xScale = d3.scaleLinear().domain([min, max]).range([40,300])
	
// // 	arr = []

// // 	var chartsvg = d3.select("#chart_area").append("g").attr("id", "charts")	;
// // 	var chartg = chartsvg.selectAll('g').data(countBorough).enter().append('g')
// // 	.attr("transform", function(d,i){
// // 		console.log("yes")
// // 		return "translate(" + (30) +"," + (i*30 + padding_t*3)+")";
// // 	})
// // 	var bars = chartg.append("rect").attr("height", 20).attr("width", function(d){
// // 		return (xScale(d.value))
// // 	}).style("fill", hover_color)
// // 	// Create groups for the x-axes
// // 	var xAxis = chartsvg.append('g').attr('transform', 'translate('+[0, padding_t]+')');
// // 	xAxis.transition().duration(750).call(d3.axisTop(xScale));
	
// // 	var text = chartg.append("text").text(function(d){
// // 		return d.key
// // 	})

// // }
// // cell.append("text").attr("transform", "translate(0,100)").text(attribute);
// // 			var nodes = cell.selectAll("g").data(count).enter().append("g").attr("transform", function(d,i){
// // 				return ("translate(" + [ (i)+4,0]+")");
// // 			})
// // 			nodes.append("rect").attr("height", function(d){
// // 				return xScale(d.value)
// // 			}).attr("width", 4).style("fill", "Blue");
// // 			nodes.append("text").attr("transform", "translate(0,0) rotate(90)").text(function(d){return d.key})
// // 			.attr("font-size", 2)
// // 			var ax = cell.append("g").attr("transform", "translate(0,0)").call(yAxis)

// // 			indexX = indexX+ 100
			
// // 			charts.push(count)
	  

// function jsonify(data, arr){
// 	var json = {}
// 	data.forEach(function(d){
// 		if(!(json[d["Borough"]])){
// 			json[d["Borough"]] = 0
// 		}
// 		json[d["Borough"]]++;
// 	})
// 	json.forEach(function(d,i){
// 		console.log(d,i)
// 	})
// 	return(json)
// }

			

			



			





// // 		}

// // });
	
	
