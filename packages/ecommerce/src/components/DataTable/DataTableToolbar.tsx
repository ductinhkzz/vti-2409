import { Table } from '@tanstack/react-table';

import { DataTableViewOptions } from './DataTableViewOptions';
import { Input } from '../ui';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export const DataTableToolbar = <TData extends object>({ table }: DataTableToolbarProps<TData>) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Filter...'
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('title')?.setFilterValue(event.target.value)}
          className='h-8 w-[150px] lg:w-[250px]'
        />
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
};
