const formatNumber = (number) => {
    return new Intl.NumberFormat("da-DE", {
        style: "currency",
        currency: "EUR"
    }).format(number);
};

export default formatNumber;