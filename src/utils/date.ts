export function convertDate(date: Date) {
    var format = new Date(date)
      .toISOString()
      .match(/^[0-9]{4}\-[0-9]{2}\-[0-9]{2}/)[0]
      .split('-')
      .reverse()
      .join('/');
    return format;
}

export function toDateHours(time : Date) { 
    let t = new Date(time)

    let hr = ("0" + t.getHours()).slice(-2);
    let min = ("0" + t.getMinutes()).slice(-2);
    let sec = ("0" + t.getSeconds()).slice(-2);

    if(t.getMonth() < 10) {
        console.log('É menor');
    }
    let mes =   t.getMonth() < 10 ? `0${t.getMonth()}`  : t.getMonth();
    let format = t.getDate()+"/"+ mes +"/"+ t.getFullYear()+" "+hr+":"+min;
     return format;
  }
  