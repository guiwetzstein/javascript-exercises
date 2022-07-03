const countries = require('../databases/countries')
const CountriesController = require('../utils/ex2')

describe('tests countriesController', () => {
    const countriesController = new CountriesController(countries)

    test('tests countries count', () => {
        const count = countriesController.countCountries()

        expect(count).toBe(5)
    })

    test('tests countries most languages including Germany', () => {
        const res = countriesController.mostLangsIncludingLang()

        expect(res).toBe('BE')
    })

    test('tests countries most languages including language (extra)', () => {
        const res = countriesController.mostLangsIncludingLang('nl')

        expect(res).toBe('BE')
    })

    test('tests languages count', () => {
        const count = countriesController.countLanguages()

        expect(count).toBe(5)
    })

    test('tests countries most languages', () => {
        const res = countriesController.mostLangs()

        expect(res).toBe('BE')
    })

    test('tests language most common', () => {
        const res = countriesController.mostCommonLang()

        expect(res).toBe('nl, de')
    })
})