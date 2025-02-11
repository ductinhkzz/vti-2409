import { CellContext } from '@tanstack/react-table';

import { IOrder } from '@/redux/order';

const ReceiverCell = ({ row: { original } }: CellContext<IOrder, unknown>) => {
  return (
    <>
      {original.address.firstName}&nbsp;
      {original.address.lastName}
    </>
  );
};

export { ReceiverCell };
