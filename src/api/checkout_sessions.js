const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        payment_method_types: [
          'card',
          'boleto',
        ],
        line_items: [
          {
            // TODO: replace this with the `price` of the product you want to sell
            price: 'price_1IuLnYD5Rble3qNv9cgcVWJc',
            quantity: 1,
            adjustable_quantity: { enabled: true},
          },
        ],
        tax_id_collection:{enabled: true},
        allow_promotion_codes: true,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
        
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
