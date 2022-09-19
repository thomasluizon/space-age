function age(planet, time) {
	const earthTime = 31557600

	const planets = {
		mercury: 0.2408467,
		venus: 0.61519726,
		mars: 1.8808158,
		jupiter: 11.862615,
		saturn: 29.447498,
		uranus: 84.016846,
		neptune: 164.79132,
	}

	const timeInSeconds = time / earthTime

	if (planets[planet]) {
		return Number((timeInSeconds / planets[planet]).toFixed(2))
	}

	return Number(timeInSeconds.toFixed(2))
}

const planetInput = document.querySelector('#planet')
const timeInput = document.querySelector('#time')
const form = document.querySelector('form')
const result = document.querySelector('#result')

form.addEventListener('submit', e => {
	e.preventDefault()
	result.textContent = age(planetInput.value, timeInput.value)
})
