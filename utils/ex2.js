module.exports = class CountriesController {
    countries = []

    constructor(c) {
        this.countries = c
    }

    countCountries() {
        // Length of the array
        return this.countries.length
    }

    mostLangsIncludingLang(lang = 'de') {
        let c = 'not found'
        let langCount = 0
        // Using for to iterate just once
        for (const country of this.countries) {
            if (country.languages &&
                country.languages.length &&
                country.languages.includes(lang)) {
                if (country.languages.length > langCount) {
                    langCount = country.languages.length
                    c = country.country
                } else if (country.languages.length === langCount) {
                    c += ', ' + country.country
                }
            }
        }
        return c
    }

    countLanguages() {
        // Concat all languages
        const langs = this.countries.reduce((pv, cv, i) => pv.concat(cv.languages && cv.languages.length ? cv.languages : [] ), [])
        // Create a set for unique values
        return [...new Set(langs)].length
    }

    mostLangs() {
        let c = 'not found'
        let langCount = 0
        // Using for to iterate just once
        for (const country of this.countries) {
            if (country.languages &&
                country.languages.length) {
                if (country.languages.length > langCount) {
                    langCount = country.languages.length
                    c = country.country
                } else if (country.languages.length === langCount) {
                    c += ', ' + country.country
                }
            }
        }
        return c
    }

    mostCommonLang() {
        // Concat all languages
        const langs = this.countries.reduce((pv, cv, i) => pv.concat(cv.languages && cv.languages.length ? cv.languages : [] ), [])
        // Create a hash map for counting
        let hashMap = new Map()
        for (let i = 0; i < langs.length; i++) {
            if (hashMap.has(langs[i])) {
                hashMap.set(langs[i], hashMap.get(langs[i]) + 1)
            } else {
                hashMap.set(langs[i], 1)
            }
        }
        // Get max count from hash map
        let c = 'not found'
        let max = 0
        hashMap.forEach((value, key) => {
            if (max < value) {
                c = key
                max = value
            } else if (max === value) {
                c += ', ' + key
            }
        })
    
        return c
    }
}
