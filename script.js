/* DEFINE CURRENT VALUES */

const LESSON_NUMBER = '800'
const COURSE_NUMBER = '22'
const MEALS_DONATED = '6.991'
const MATERIALS_NUMBER = '48'

/* DEFINE FEATURES LIST */

const FEATURE_HTML = `
<ul>
  <li class="li1" style="text-align: left;">800+ Lessons</li>
  <li class="li1" style="text-align: left;">22 Courses</li>
  <li class="li1" style="text-align: left;">New Courses Released Regularly</li>
  <li class="li1" style="text-align: left;">Access to Private Student Community</li>
  <li class="li1" style="text-align: left;"><strong>Coursebooks</strong></li>
  <li class="li1" style="text-align: left;"><strong>Shopping Lists</strong></li>
  <li class="li1" style="text-align: left;"><strong>Personalized Feedback</strong></li>
  <li class="li1" style="text-align: left;"><strong>Guided Success Path</strong></li>
  <li class="li1" style="text-align: left;"><strong>Q&A with Expert Chefs</strong></li>
  <li class="li1" style="text-align: left;"><strong>Mobile App</strong></li>
  <li class="li1" style="text-align: left;"><strong>Bonus 1: The 77 Healthiest Vegan Foods - Vegan Nutrient Guide/strong></li>
  <li class="li1" style="text-align: left;"><strong>Bonus 2: The Ultimate Kitchen Equipment Guide</strong></li>
</ul>
`

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

/* CHANGE FEATURES TEXT */

const featuresText = document.querySelectorAll('.features_text')
featuresText.forEach(feature => {
  feature.innerHTML = FEATURE_HTML
})



