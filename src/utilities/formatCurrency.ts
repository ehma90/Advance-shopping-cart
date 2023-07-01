const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "NGN"
});

export function formatCurrency(number: number) {
    const formattedValue = CURRENCY_FORMATTER.format(number);
    return formattedValue.replace("NGN", "₦");
}