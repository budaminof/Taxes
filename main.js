module.exports = {
calcTax: function (money) {

  if (money <= 10) return pasreInt((money * 0.1).toFixed(2));

  else if (money > 10 && money <= 20) return pasreInt((((money -10) * 0.07) + 1).toFixed(2));

  else if (money >20 && money <= 30) return pasreInt((((money-20) * 0.05) + 1.7).toFixed(2));

  else if (money > 30) return pasreInt((((money-30) * 0.03) + 2.2).toFixed(2));


}

}
