import { stripe } from "@/lib/stripe";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  
  return (
    <div>Home</div>
  );
}
