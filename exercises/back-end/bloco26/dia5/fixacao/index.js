const validatePrice = (req, res, next) => {
  const { price } = req.body;

  if (!price || typeof(price) !== 'number' || parseInt(price) < 0) return res.status(400).json({ message: "preco invalido" });

  next();
}