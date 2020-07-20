findBestBeer(1000)
function findBestBeer(amountOfBeers){
  let bestBeers = []
  for (let number = 1; number < amountOfBeers; number++) {
      if (checkNumberGreater(number)) {
        bestBeers.push(number);
      }
  }
  console.log(bestBeers)
}

function checkNumberGreater(number){
  let mapNumber ={}
  mapNumber[number] = [1]
  let max = number/2
  let total = 1;
  for (let i=2; i<= max; i++){
    if (number%i==0) {
      mapNumber[number].push(i)
      total += i
    }
  }
  if (total > number) {
    mapNumber[number].sort(function(a, b) {return b - a});
    if (!checkSubset(mapNumber[number], mapNumber[number].length, number)) return true;
    else return false;
  }
  else return false;
}

function checkSubset(divisors, totalDivisorsLength, number)  {
  
  if (number == 0) {
    return true;
  }
	if (totalDivisorsLength == 0) {
    return false;
  }
	if (divisors[totalDivisorsLength - 1] > number) {
    return checkSubset(divisors, totalDivisorsLength - 1, number);
  }

	return checkSubset(divisors, totalDivisorsLength - 1, number) ||
    checkSubset(divisors, totalDivisorsLength - 1, number - divisors[totalDivisorsLength - 1]); 
}
