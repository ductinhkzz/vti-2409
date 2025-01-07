export const buildEndpointPopulate = (endpoint: string, populates: string[]) => {
  const params = new URLSearchParams();
  populates.forEach((populate, index) => {
    params.append(`populate[${index}]`, populate);
  });

  return `${endpoint}?${params.toString()}`;
};

export const getBlockPopulate = (prefix = 'blocks') => {
  return [
    'image',
    'image1',
    'image2',
    'video',
    'video1',
    'video2',
    'logo',
    'primaryCTA',
    'secondaryCTA',
    'items',
    'link',
    'items.image',
    'items.link',
  ].map((item) => `${prefix}.${item}`);
};
