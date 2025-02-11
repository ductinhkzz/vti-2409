import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useGetProductQuery } from '@/redux/product';
import { Banner, Images, ProductInfo, SelectVariants } from './components';
import { LoadingWrapper } from '@/components';
import { useCart, useUser } from '@/hooks';
import { SelectVariantSchemaType } from './components/schema';
import { stringify } from '@/utils';

const Product = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useUser();
  const { handleCreateProductOrder } = useCart();

  const { data, isLoading, isFetching } = useGetProductQuery(
    {
      filters: {
        $or: [
          {
            documentId: {
              $eq: id,
            },
          },
          {
            slug: {
              $containsi: id,
            },
          },
        ],
      },
    },
    {
      skip: !id,
      refetchOnMountOrArgChange: true,
    },
  );

  const onSelect = ({ variants }: SelectVariantSchemaType) => {
    const q = stringify({ redirect: `${location.pathname}${location.search}` });
    if (!user) {
      navigate(`/login?${q}`);
    }

    if (!data) {
      return;
    }
    const selectedAttributeIds = variants.map((v) => v.selectAttributeId);
    const matchProductVariant = data.productVariants.find((pv) =>
      pv.attributes.every((attr) => selectedAttributeIds.includes(attr.documentId)),
    );
    if (!matchProductVariant) return;
    handleCreateProductOrder({
      product: data.documentId,
      productVariant: matchProductVariant.documentId,
    });
  };

  return (
    <LoadingWrapper loading={isLoading || isFetching}>
      <Banner data={data?.banner} />
      <Images images={data?.images} />
      <SelectVariants {...data} onClick={onSelect} />
      <ProductInfo {...data} />
    </LoadingWrapper>
  );
};

export default Product;
