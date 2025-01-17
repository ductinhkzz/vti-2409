import { ColumnMeta as TanstackColumnMeta, RowData } from '@tanstack/react-table';
import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  export interface ColumnMeta<TData extends RowData, TValue> extends TanstackColumnMeta<TData, TValue> {
    align?: 'center' | 'right' | 'left' | 'justify' | 'char';
    className?: string;
  }
}
