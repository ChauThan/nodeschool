module.exports = (text, repeat = text.length) =>
    `${text}${'!'.repeat(repeat)}`;