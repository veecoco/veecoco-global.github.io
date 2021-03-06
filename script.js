/* DEFINE CURRENT VALUES */

const LESSON_NUMBER = '800'
const COURSE_NUMBER = '22'
const MEALS_DONATED = '6.991'
const MATERIALS_NUMBER = '48'

/* CHANGE LESSON NUMBER */

const lessonNumber = document.querySelectorAll('.lesson_number')
lessonNumber.forEach((lesson) => {
  lesson.textContent = LESSON_NUMBER
})

/* CHANGE COURSE NUMBER */

const courseNumber = document.querySelectorAll('.course_number')
courseNumber.forEach((course) => {
  course.textContent = COURSE_NUMBER
})

/* CHANGE MATERIALS NUMBER */

const materialsNumber = document.querySelectorAll('.materials_number')
materialsNumber.forEach((course) => {
  course.textContent = MATERIALS_NUMBER
})

/* CHANGE MEALS DONATED NUMBER */

const mealsDonated = document.querySelectorAll('.meals_donated')
mealsDonated.forEach((course) => {
  course.textContent = MEALS_DONATED
})
