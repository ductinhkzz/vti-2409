import { Button, Form, FormField, FormItem, SelectBox, Typography } from '@/components';
import { IProduct } from '@/redux/product';
import { formattedNumber } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { selectVariantSchema, SelectVariantSchemaType } from './schema';

type Props = Partial<Pick<IProduct, 'variants' | 'price' | 'name' | 'productVariants'>>;

const SelectVariants = ({ variants = [], name, price, productVariants = [] }: Props) => {
  const form = useForm<SelectVariantSchemaType>({
    resolver: zodResolver(selectVariantSchema),
    values: {
      variants: variants.map((v) => ({ ...v, selectAttributeId: '' })),
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = form;

  const { fields } = useFieldArray({ control, name: 'variants' });

  const watchVariants = watch('variants');
  const selectedAttributeIds = watchVariants.map((v) => v.selectAttributeId);

  const matchProductVariant = productVariants.find((pv) =>
    pv.attributes.every((attr) => selectedAttributeIds.includes(attr.documentId)),
  );

  const currentPrice = matchProductVariant?.price ?? price;

  const onSubmit = handleSubmit((data) => {
    console.log('============================');
    console.log(data);
    console.log('============================');
  });

  return (
    <section className='flex justify-center my-8 px-4'>
      <div className='max-w-5xl w-full flex flex-col sm:flex-row gap-4'>
        <div className='basis-2/5 lg:basis-1/6'>
          <Typography text={name} useCurrentColor fixedSize='text-lg' />
          {currentPrice && (
            <Typography
              text={formattedNumber(currentPrice)}
              type='body'
              useCurrentColor
              className='text-sm md:text-base'
            />
          )}
        </div>
        <Form {...form}>
          <form onSubmit={onSubmit} className='flex flex-auto gap-4 flex-wrap lg:flex-nowrap'>
            {fields.map((field, index) => (
              <FormField
                key={field.id}
                control={control}
                name={`variants.${index}.selectAttributeId`}
                render={({ field: props }) => (
                  <FormItem className='w-full'>
                    <SelectBox
                      options={field.attributes.map((attr) => ({ label: attr.name, value: attr.documentId }))}
                      onChange={props.onChange}
                      value={props.value}
                      placeholder={field.name}
                      className='w-full'
                    />
                  </FormItem>
                )}
              />
            ))}
            <Button type='submit' disabled={!isValid || !matchProductVariant?.price}>
              Add to cart
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export { SelectVariants };
