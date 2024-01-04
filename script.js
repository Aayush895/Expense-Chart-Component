const days = document.querySelectorAll('.day')
const tooltips = document.querySelectorAll('.tooltip')

const expenseData = async function () {
  const data = await fetch('data.json')
  const obj = await data.json()
  const arr = Array.from(obj)

  let maxExpense = -1

  for (let i = 0; i <= Array.from(obj).length; i++) {
    if (arr[i]?.amount > maxExpense) {
      maxExpense = arr[i]?.amount
    }
  }

  days.forEach((day, index) => {
    const bar = day.querySelector('.bar')
    bar.style.height = `${Math.floor(obj[index]?.amount) + 60}px`
    if (maxExpense == obj[index]?.amount) {
      bar.style.backgroundColor = `rgb(118, 181, 188)`

      bar.addEventListener('mouseover', () => {
        bar.style.backgroundColor = 'hsl(186, 34%, 70%)'
      })

      bar.addEventListener('mouseout', () => {
        bar.style.backgroundColor = 'hsl(186, 34%, 60%)'
      })
    }
  })

  tooltips.forEach((tooltip, index) => {
    const text = tooltip.querySelector('.tooltip-text')
    text.innerText = `$ ${obj[index]?.amount}`
    tooltip.style.bottom = `${Math.floor(obj[index]?.amount) + 35}px`
  })
}

expenseData()
