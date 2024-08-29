const formatPrice = (amount: number): string => {
    return Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0 
    }).format(amount);
}

export default formatPrice;
