


var dog_arr = ["afghan-hound.svg","airedale.svg","akitas.svg","american-staffordshire-terrier.svg","basset-houd.svg","beagle.svg","bedlington-terrier.svg","bernese-mountain.svg","bichon-frise.svg","bichon.svg","border-collie.svg","boxer.svg","bulldog.svg","bullmastiff.svg","bullterrier.svg","chihuahua.svg","chinese-crested.svg","chow-chow.svg","collie.svg","corgi.svg","dachshund.svg","dalmatian.svg","doberman.svg","english-cocker-spaniel.svg","english-mastiff.svg","french-bulldog.svg","german-sheperd.svg","greyhound.svg","husky.svg","jack-russell-terrier.svg","japanese-chin.svg","kurzhaar.svg","malamute.svg","mastiff.svg","miniature-schnauzer.svg","newfoundland.svg","pharaoh-hound.svg","pointer.svg","pomeranian.svg","poodle.svg","pug.svg","rottweiler.svg","saluki.svg","shar-pei.svg","sheltie.svg","shih-tzu.svg","springer-spaniel.svg","st-bernard.svg","tibetan-mastiff.svg","yorkshire-terrier.svg"];

/**
 * Overlay Controller
 */
function hideOverlay(){
    $('.overlay').css('display','none');

}
/**
 * Void
 * Reset Filter Options for All SVGs
 */
function resetFilter(){
    d3.selectAll('circle').style('opacity',0.9)
    for (index in filtered_nodes){
        d3.select(`[id="${filtered_nodes[index]}"]`).transition().attr('r',3);
        d3.select(`[id="${filtered_nodes[index]}"]`).attr('stroke','');
    }
}

/**
 * Void
 * Set Global Options Variable
 */
function setOptions(){
    var input = $('#textinput')[0].value;
    filterOptions.name = input;
    filterData(filterOptions);
}

/**
 * 
 * @param {Int} year 
 */
function setYear(year){
    d3.select('svg').remove();
    filterOptions.year;
    g_year = year;
    fetchYear(g_year);
}

/**
 * Set Filter on Pressing Enter
 */
var elem = document.getElementById("textinput");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
        setOptions();  
    }
}


/**
 * Console log Intro 
 */

console.log('Dogs Of New York');
console.log('Developers:\nBrian\nRagy\nRyan');