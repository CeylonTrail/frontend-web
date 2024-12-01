/**
 * Capitalizes the first letter of each word and converts the rest to lowercase.
 * @param {string} text - The text to be formatted.
 * @returns {string} - Capitalized text.
 */
export const capitalizeWords = (text) => {
    if (!text) return '';
    return text
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};