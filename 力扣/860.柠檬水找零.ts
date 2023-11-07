function lemonadeChange(bills:number[]):boolean {
  let five = 0;
  let ten = 0;
  for(let i = 0; i < bills.length ; i++) {
    switch (bills[i]) {
      case 5:
        five++;
        break;
      case 10:
        if(five > 0) {
          five--;
          ten++;
        } else {
          return false;
        }
        break;
      case 20: 
        if(ten >0 && five > 0) {
          five--;
          ten--;
        } else if(five > 2) {
          five -= 3;
        } else {
          return false;
        }
        break;
    }
  }
  return true;
}