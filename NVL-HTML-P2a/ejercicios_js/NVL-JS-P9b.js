var dias = 'Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo'
var lugares = 'Madrid,Sevilla,Barcelona,Valencia,Zaragoza,Bilbao,Donosti'

var dias_array = (dias.split(','));
var lugares_array = (lugares.split(','));
var conciertos = [[dias_array[0].concat(' ' + lugares_array[0])], [dias_array[1].concat(' ' + lugares_array[1])],
     [dias_array[2].concat(' ' + lugares_array[2])], [dias_array[3].concat(' ' + lugares_array[3])], [dias_array[4].concat(' ' + lugares_array[4])],
     [dias_array[5].concat(' ' + lugares_array[5])], [dias_array[6].concat(' ' + lugares_array[6])]];

alert(conciertos);
console.log(conciertos);
console.log(dias);