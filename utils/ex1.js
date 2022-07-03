function builder(initialNumber, finalNumber) {
    return Array.from(
        { length: (finalNumber - initialNumber + 1) },
        (_, i) => divider(initialNumber + i)
    )
}

function divider(n) {
    return (n % 3 === 0 && n % 5 === 0) ? 'Visual Nuts' :
        (n % 5 === 0) ? 'Nuts' :
        (n % 3 === 0) ? 'Visual' :
        n
}

module.exports = { builder, divider }
