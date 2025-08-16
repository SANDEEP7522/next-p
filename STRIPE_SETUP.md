# Stripe Payment Integration Setup

This guide will help you set up Stripe payments for your e-commerce application.

## Prerequisites

1. A Stripe account (sign up at [stripe.com](https://stripe.com))
2. Node.js and npm installed
3. Your e-commerce application running

## Step 1: Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com/)
2. Go to **Developers** → **API keys**
3. Copy your **Publishable key** and **Secret key**
4. Make sure you're using **Test keys** for development

## Step 2: Set Up Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Important:** Never commit your `.env.local` file to version control!

## Step 3: Install Dependencies

The required packages have already been installed:

```bash
npm install stripe @stripe/stripe-js
npm install --save-dev @types/stripe
```

## Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Add items to your cart
3. Click "Proceed to Checkout"
4. You'll be redirected to Stripe's checkout page
5. Use Stripe's test card numbers for testing:
   - **Success:** 4242 4242 4242 4242
   - **Decline:** 4000 0000 0000 0002
   - **Expiry:** Any future date
   - **CVC:** Any 3 digits

## Step 5: Production Deployment

When deploying to production:

1. Switch to **Live keys** in your Stripe dashboard
2. Update your environment variables with live keys
3. Update `NEXT_PUBLIC_APP_URL` to your production domain
4. Ensure your domain is verified in Stripe dashboard

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── checkout/
│   │       └── route.ts          # Stripe checkout API
│   ├── cart/
│   │   └── page.tsx              # Cart with checkout button
│   └── success/
│       └── page.tsx              # Success page after payment
├── components/
│   └── ...                       # Existing components
├── contexts/
│   └── CartContext.tsx           # Cart state management
├── lib/
│   ├── stripe.ts                 # Server-side Stripe config
│   └── stripe-client.ts          # Client-side Stripe config
└── data/
    └── products.ts               # Product data
```

## How It Works

1. **User adds items to cart** → Cart state is managed by CartContext
2. **User clicks checkout** → Cart page calls `/api/checkout` API
3. **API creates Stripe session** → Returns session ID
4. **User redirected to Stripe** → Completes payment on Stripe's secure page
5. **Success redirect** → User returns to `/success` page
6. **Order processing** → You can add webhook handling for order fulfillment

## Customization

### Modify Checkout Session

Edit `src/app/api/checkout/route.ts` to customize:
- Payment methods
- Shipping options
- Tax calculation
- Discount codes
- Customer metadata

### Styling

The checkout page uses Stripe's hosted checkout, which automatically matches your brand colors. You can customize this in your Stripe dashboard under **Branding**.

### Webhooks (Advanced)

For production, implement webhooks to handle:
- Payment success/failure
- Order fulfillment
- Refund processing
- Subscription management

## Troubleshooting

### Common Issues

1. **"STRIPE_SECRET_KEY is not set"**
   - Check your `.env.local` file
   - Restart your development server

2. **"Failed to create checkout session"**
   - Verify your Stripe keys are correct
   - Check the browser console for detailed errors

3. **Checkout button not working**
   - Ensure all dependencies are installed
   - Check that the API route is accessible

### Testing

- Use Stripe's test mode for development
- Test with various card scenarios
- Verify success and cancel URLs work correctly

## Security Notes

- Never expose your secret key on the client side
- Always use HTTPS in production
- Implement proper authentication for checkout
- Validate all input data
- Use Stripe's webhook verification

## Support

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com/)
- [Next.js Documentation](https://nextjs.org/docs)

## License

This integration is provided as-is. Please review Stripe's terms of service and ensure compliance with your local regulations.
