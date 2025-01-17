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
    'link',
    'items.image',
    'items.link',
    'images',
  ].map((item) => `${prefix}.${item}`);
};
