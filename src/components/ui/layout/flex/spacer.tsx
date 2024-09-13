import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

/**
 * The props of the Spacer component.
 */
type SpacerProps = {
  /**
   * Enforces that no children can be passed to the Spacer component.
   */
  children?: never;
};

/**
 * Spacer is a Box that creates an adjustable, empty space that can be used to tune the spacing between child elements within Flex.
 *
 * @example
 * <Flex>
 *  <Box>Item 1</Box>
 *  <Spacer />
 *  <Box>Item 2</Box>
 * </Flex>
 *
 * @param props - The props of the component
 *
 * @returns The Spacer component
 */
const Spacer: UIComponent<'div', SpacerProps> = (props): JSX.Element => {
  const { children, className, ...rest } = props;

  return <Box className={cn('flex-1 self-stretch', className)} {...rest} />;
};

Spacer.displayName = 'Spacer';

export default forwardRef(Spacer) as typeof Spacer;
