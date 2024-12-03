const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
// const reversedTeachers = teachers.reverse(); /*modifica anche la variabile di origine*/
const reversedTeachers = []
for (let i = teachers.length -1; i >= 0; i--) {
  reversedTeachers.push(teachers[i])
}
console.log(reversedTeachers)
console.log(teachers)


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
// const longNames = teachers.filter((word) => word.length >= 5); /*alternativa valida che sfrutta una funzione*/
const longNames = []
for (let i = 0; i < teachers.length; i++) {
  const teacherNameLength = teachers[i].length
  if(teacherNameLength >= 5) {
    longNames.push(teachers[i])
  }
}
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers
const edIndex = teachers.indexOf("Ed")
console.log(teachers.indexOf("Ed"))
teachers.splice(teachers.indexOf("Ed"),1)
console.log(teachers)