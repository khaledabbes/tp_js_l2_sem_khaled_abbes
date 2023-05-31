function each(tab, callback){
    for(let i = 0; i < tab.length; i++){
        callback(tab[i]);
    }
}

each([1,2,3,4], function (val) {
    console.log(val);
});



each([1,2,3,4], function (val) {
    console.log(val*2);
});
