import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

/**
 * Flex is Box with display set to flex.
 *
 * @example
 * <Flex>
 *  <>Item 1</>
 *  <>Item 2</>
 *  <>Item 3</>
 * </Flex>
 *
 * @param props - The props of the component
 * @returns The Flex component
 */
const Flex: UIComponent<'div', object> = props => {
  const { className, ...rest } = props;

  return <Box className={cn('flex', className)} {...rest} />;
};

Flex.displayName = 'Flex';

export default forwardRef(Flex) as typeof Flex;
