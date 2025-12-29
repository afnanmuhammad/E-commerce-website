export const parsePrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
        const cleanString = price.replace(/[^0-9.]/g, '');
        const parsed = parseFloat(cleanString);
        return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
};

export const formatPrice = (price) => {
    return `Rs. ${parsePrice(price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};
