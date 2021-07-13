export const formatNumber = (number) => {
  return parseFloat(number).toLocaleString('ru-RU')
}

const formatEndings = (number) => {
  if(number%100 > 10 && number%100 < 20) return '-ый'
  else{
    if([2, 6, 7, 8].includes(number%10)) return '-ой'
    else if(number%10 === 3) return '-ий'
    else return '-ый'
  }
}

export const formatOption = (option, year) => {
  const amount = formatNumber(option.amount) + ' рублей'
  const perYear = (year === 2 ? ' во ' : ' в ') + year +
                  formatEndings(year, ['-ый', '-ой', '-ий']) + ' год'
  return {amount, perYear}
}
