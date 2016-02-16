module.exports = {
calcTax: function (money) {

  if (money <= 10) return (money * 0.1);

  else if (money > 10 && money <= 20) return ((money -10) * 0.07) + 1 ;

  else if (money >20 && money <= 30) return ((money-20) * 0.05) + 1.7;

  else if (money > 30) return ((money-30) * 0.03) + 2.2;


}

}
