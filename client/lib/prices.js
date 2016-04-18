import R from 'ramda';

function getBulkPricingComponentForItem(item) {
  const { bulkPricing, quantityInCart } = item;
  if (!bulkPricing) {
    return {
      quantity: 0,
      price: 0,
    };
  }

  const bulkAmount = Math.floor(quantityInCart / bulkPricing.amount);
  const equivalentIndividualAmount = bulkAmount * bulkPricing.amount;
  const priceForBulkItems = bulkAmount * bulkPricing.totalPrice;
  return {
    quantity: equivalentIndividualAmount,
    price: priceForBulkItems,
  };
}

export function getIndividualPricingComponenetForItem(item, bulkPricingComponent) {
  const quantity = item.quantityInCart - bulkPricingComponent.quantity;
  return item.price * quantity;
}

export function calculatePriceForItem(item) {
  const bulkPricingComponent = getBulkPricingComponentForItem(item);
  const individualPricingComponenet = getIndividualPricingComponenetForItem(item, bulkPricingComponent);
  return bulkPricingComponent.price + individualPricingComponenet;
}

export function calculateTotalPrice(itemsInCart) {
  return R.compose(
    R.sum,
    R.map(calculatePriceForItem)
  )(itemsInCart);
}

export function formatPrice(price) {
  return '$' + price.toFixed(2).toString();
}
