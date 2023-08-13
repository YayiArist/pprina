module.exports = (price, discountPercent) => {
    const discountedPrice = price * (1 - discountPercent / 100);
    return discountedPrice;
  };