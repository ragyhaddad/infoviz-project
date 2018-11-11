

/**
 * Function Takes in Search Parameters and loads them to global data
 */
function fetchData(dog_name=" ",birth_year=" ",boro=" ",dog_group=" ",call_back=null){
    var dog_name = dog_name;
    var birth_year = birth_year;
    var boro = boro 
    $.get(`http://dogsofny.tk/search?name=${dog_name}&birthyear=${birth_year}&dog_group=${dog_group}&boro=${boro}`,function(data){
    
        drawMainViz(data);
    })
    
}

/**
 * Filter Data by Year and Draw 
 * @param {String} year 
 */
function fetchYear(year){
    $('.overlay-spinner').css('display','flex');
    $.get(`http://dogsofny.tk/search?birthyear=${year}`,function(data){
        drawMainViz(data);
    })
}