//console.log(dati);

//dati.forEach((item, i) => {
  //let nomeEl = '<span>${item.name}</span>';
  //let iconEl = '<i class= "${item.family} ${item.prefix}${item.name}"></i>';
  //let element = '<div>${iconEl} ${nomeEl}</div>';
  //$('#icone').append(element);

//});

const colori = [
  'blue',
  'orange',
  'purple',
];

const datiColors = dati.map((item, i, array) => {
  if (item.type == "animal") {
    let obj = {
      ...item,
      color: colori[0]
    };
    return obj;
  } else if (item.type == "vegetable") {
      let obj = {
        ...item,
        color: colori[1]
      };
    return obj;
  } else {
    let obj = {
      ...item,
      color: colori[2]
    };
    return obj;
  }
});

datiColors.forEach((item, i) => {
  let nomeEl = `<span>${item.name}</span>`;
  let iconEl = `<i class= "${item.family} ${item.prefix}${item.name} color-${item.color}"></i>`;
  let element = `<div>${iconEl} ${nomeEl}</div>`;
  $('#icone').append(element);

});
