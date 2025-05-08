import dotenv from "dotenv"
dotenv.config()


export const getProducts = async () => {
  const res = await fetch(process.env.BASE_URL);
  return res.json();
};

export const submitProduct = async (product) => {
  const res = await fetch(process.env.BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) throw new Error("Failed to submit product");
  return res.json();
};
