// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = Exclude<OrderState, 'producing' | 'buyingSupplies'>;

const orderStates = ['initial', 'inWork', 'buyingSupplies', 'producing', 'fullfilled'] as const;

type OrderState = typeof orderStates[number];

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): FIXME[] =>
  orderStates.filter((state) => state !== 'buyingSupplies' && state !== 'producing') as FIXME[];
