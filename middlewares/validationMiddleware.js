const validationMiddleware = (req, res, next) => {
    // || !req.body.description || !req.body.price || !req.body.category || req.body.inStock
    if (!req.body.name) return res.status(400).json({ messaage: 'Product name must be provided'})
    if (!req.body.description) return res.status(400).json({ messaage: 'Product description must be provided'})
    if (!req.body.price) return res.status(400).json({ messaage: 'Product price must be provided'})
    if (typeof req.body.price !== 'number') return res.status(400).json({ message: 'Price must be a number'})
    if (req.body.price <= 0) return res.status(400).json({ message: "Price must be greater than 0" });
    if (!req.body.category) return res.status(400).json({ messaage: 'Product category must be provided'})
    if (!req.body.inStock) return res.status(400).json({ messaage: 'Product stock must be provided'})
    next()
}

module.exports = validationMiddleware