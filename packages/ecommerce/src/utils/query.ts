import qs from 'qs';

export const parseParams = <T = Record<string, any>>(searchParams: URLSearchParams) =>
  qs.parse(searchParams.toString()) as T;

export const stringify = (params: Record<string, any>) =>
  qs.stringify(params, { encodeValuesOnly: true, arrayFormat: 'indices' });
