const express = require('express')
const router = express.Router()
const { NotFound, ValidationError } = require('../errors/customErrors')
const validationMiddleware = require('../middlewares/validationMiddleware')
const authMiddleware = require('../middlewares/authMidlleware')

// Sample in-memory products database
let products = [
  {
    id: '1',
    name: 'Laptop',
    description: 'High-performance laptop with 16GB RAM',
    price: 1200,
    category: 'electronics',
    inStock: true
  },
  {
    id: '2',
    name: 'Smartphone',
    description: 'Latest model with 128GB storage',
    price: 800,
    category: 'electronics',
    inStock: true
  },
  {
    id: '3',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with timer',
    price: 50,
    category: 'kitchen',
    inStock: false
  }
];

// TODO: Implement the following routes:
// POST /api/products - Create a new product
router.post('/', authMiddleware, validationMiddleware, (req, res) => {
  if (!req.body) throw new ValidationError('Please complete all fiels')

  const newProduct = {
      id: products.length + 1,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      inStock: req.body.inStock
  }
  products.push(newProduct)
  res.send(newProduct)
})

// GET /api/products - Get all products
router.get('/', (req, res) => {
    if (!products) throw new NotFound("Products not found");
    res.send(products)
})
// GET /api/products?category=electronics

router.get('/products',  async (req, res) => {
  const { category } = req.query

  const filter = {};
  if (category) filter.category = category

  const products = await Product.find(filter)
  res.json(products)
})

// GET /api/products?page=2&limit=10

router.get('/products', async (req, res) => {
  const { category, page = 1, limit = 10 } = req.query

  const filter = {}
  if (category) filter.category = category

  const skip = (page - 1) * limit

  const products = await Product.find(filter)
    .skip(skip)
    .limit(Number(limit))

  const total = await Product.countDocuments(filter)

  res.json({
    page: Number(page),
    limit: Number(limit),
    total,
    products,
  })
})



// GET /api/products/:id - Get a specific product
router.get('/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(p => p.id == id)
    if(!product) throw new NotFound(`Product with ID ${id} not found`)
    res.send(product)
})

// PUT /api/products/:id - Update a product
router.put('/:id', authMiddleware, validationMiddleware, (req, res) => {
    const { id } = req.params
    const product = products.find(p=> p.id == id)
    product.price = req.body.price
    res.send(product)
})

// DELETE /api/products/:id - Delete a product
router.delete('/:id', authMiddleware, (req, res) => {
    const { id } = req.params
    res.send(products.filter(p=> p.id != id))
})

module.exports = router