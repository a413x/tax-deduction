export const calculateOptions = (salary) => {
  let max = 260000
  const yearAmount = salary*12*0.13
  const years = Math.ceil(max/yearAmount)
  const options = []
  for(let i = 0; i < years; i++){
    let amount = 0
    if(yearAmount < max){
      amount = yearAmount
      max -= yearAmount
    }else{
      amount = max
    }
    options.push({id: i, amount: Math.round(amount*100)/100})
  }
  return options
}
