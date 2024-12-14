export const buildEndpointPopulate = (endpoint: string, populates: string[]) => {
  const params = new URLSearchParams();
  populates.forEach((populate, index) => {
    params.append(`populate[${index}]`, populate);
  });

  return `${endpoint}?${params.toString()}`;
};
