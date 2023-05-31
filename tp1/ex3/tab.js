function map(tab, callback){
    const result = [];
    for(let i = 0; i < tab.length; i++){
        result.push(callback(tab[i])); 
    }
    return result;
}


map([1,2,3,4], function (val) {
    console.log(val*2);
});

