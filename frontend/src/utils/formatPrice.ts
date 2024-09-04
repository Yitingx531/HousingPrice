/**
 * Formats the price string to a proper unit format
 * @param price - The price to format (string)
 * @returns A formatted price string (e.g., "$ 10,000")
 */
const formatPrice = (amount: number): string => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0 
    }).format(amount);
}

export default formatPrice;
