export function formatMoney(amount, locale = 'en-NG', currency = 'NGN') {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    });

    return formatter.format(amount);
  }