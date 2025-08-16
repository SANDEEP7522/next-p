import Stripe from 'stripe';

// Only create stripe instance if secret key is available
export const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2025-07-30.basil',
      typescript: true,
    })
  : null;

export const formatAmountForStripe = (amount: number, currency: string): number => {
  const numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalAmount = '';
  for (let part of parts) {
    if (part.type === 'integer') {
      zeroDecimalAmount += part.value;
    }
  }
  return parseInt(zeroDecimalAmount);
};

export const formatAmountFromStripe = (amount: number, currency: string): number => {
  const numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  });
  const parts = numberFormat.formatToParts(amount);
  let zeroDecimalAmount = '';
  for (let part of parts) {
    if (part.type === 'integer') {
      zeroDecimalAmount += part.value;
    }
  }
  return parseInt(zeroDecimalAmount);
};
