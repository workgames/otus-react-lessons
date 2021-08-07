// eslint-disable-next-line @typescript-eslint/no-explicit-any
// type FIXME = Exclude<OrderState, 'producing' | 'buyingSupplies'>;

// type ArrayElement<ArrayType extends readonly unknown[]> =
//   ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const orderStates = ['initial', 'inWork', 'buyingSupplies', 'producing', 'fullfilled'] as const;

type OrderState = typeof orderStates[number];

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): OrderState[] =>
  orderStates.filter((state) => state !== 'buyingSupplies' && state !== 'producing');

// const d = getUserOrderStates(['initial', 'inWork', 'buyingSupplies', 'producing', 'fullfilled']);

type returnStatuses = Exclude<status, 1>;
type status = 1 | 2 | 3 | 4;

const getStatus = (statuses: status[]): returnStatuses[] => {
  return statuses.filter((item) => item !== 1) as returnStatuses[];
};

console.log(getStatus([1, 2, 3, 4]));
