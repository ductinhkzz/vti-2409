import { IProduct } from '@/redux/product';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Typography, Markdown } from '@/components';

type Props = Partial<Pick<IProduct, 'description' | 'features' | 'dimensions'>>;

const ProductInfo = ({ description, features, dimensions }: Props) => {
  return (
    <section className='flex justify-center px-4'>
      <div className='max-w-5xl w-full grid sm:grid-cols-2'>
        <div>
          <Typography type='body' text={description} useCurrentColor />
        </div>
        <div>
          <Accordion type='multiple' className='w-full'>
            <AccordionItem value='features'>
              <AccordionTrigger className='hover:no-underline uppercase'>Features</AccordionTrigger>
              <AccordionContent>
                <Markdown>{features}</Markdown>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='dimensions'>
              <AccordionTrigger className='hover:no-underline uppercase'>Dimensions</AccordionTrigger>
              <AccordionContent>
                <Markdown>{dimensions}</Markdown>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='shipping'>
              <AccordionTrigger className='hover:no-underline uppercase'>Shipping</AccordionTrigger>
              <AccordionContent>
                <Typography
                  text='A DUXIANA representative will contact you within one business day of placing your DUX 1001 order to
                  arrange delivery. In most cases, we will deliver your bed within 10-15 business days. Some areas may
                  have slightly longer delivery times'
                  useCurrentColor
                  type='body'
                />
                <Typography
                  text='If you have any questions regarding your delivery, please email customerservice@duxiana.com, or call
                  1-888-752-7204, Monday – Friday, 9am–5 pm CT.'
                  useCurrentColor
                  type='body'
                  className='my-2'
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { ProductInfo };
