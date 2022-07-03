const countries = require('./databases/countries')
const CountriesController = require('./utils/ex2')

const countriesController = new CountriesController(countries)

console.log('Number of countries ~>', countriesController.countCountries())

console.log('Country(ies) with the most official languages, including German ~>', countriesController.mostLangsIncludingLang())

console.log('Number of languages ~>', countriesController.countLanguages())

console.log('Country(ies) with the most official languages ~>', countriesController.mostLangs())

console.log('Most common official language(s) ~>', countriesController.mostCommonLang())
