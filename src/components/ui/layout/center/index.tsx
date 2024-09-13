import Flex from '@/components/ui/layout/flex';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

/**
 * Center is a layout component that centers its child within itself given width and height.
 *
 * @example
 * <Center>
 *  <>Content</>
 * </Center>
 *
 * @param props - The props of the component.
 *
 * @returns The Center component.
 */
const Center: UIComponent<'div', object> = props => {
  const { className, ...rest } = props;

  return (
    <Flex className={cn('items-center justify-center', className)} {...rest} />
  );
};

Center.displayName = 'Center';

export default forwardRef(Center) as typeof Center;
