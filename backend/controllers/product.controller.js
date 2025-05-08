import {db} from "../libs/db.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await db.product.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export const addProduct = async (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const product = await db.product.create({
      data: {
        name,
        price: parseFloat(price),
        description,
        imageUrl,
      },
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};


export const getProduct = async (req, res) => {
  const { search } = req.query;

  try {
    const products = await db.product.findMany({
      where: search
        ? {
            name: {
              contains: search,
              mode: 'insensitive', 
            },
          }
        : {},
      orderBy: {
        createdAt: 'desc',
      },
    });

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};