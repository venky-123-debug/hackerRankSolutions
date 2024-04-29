function filledOrders(order, k) {
  order.sort((a, b) => a - b);
  console.log({ order });
  let fulfilledOrdersCount = 0;
  for (let r of order) {
    if (r <= k) {
      k -= r;
      fulfilledOrdersCount++;
    } else {
      break;
    }
  }
  console.log({ fulfilledOrdersCount });
  return fulfilledOrdersCount;
}
