function NumberOfDaysTillFriday(friday, today) {
    return today > friday ? 7 - (today - friday) : friday - today 
}
let daysOfWeekNames = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota']
let indexOfFriday = daysOfWeekNames.indexOf('piątek')
let indexOfToday = daysOfWeekNames.indexOf(daysOfWeekNames[new Date().getDay()])
indexOfFriday = 5
indexOfToday = 6
console.log(NumberOfDaysTillFriday(indexOfFriday, indexOfToday))