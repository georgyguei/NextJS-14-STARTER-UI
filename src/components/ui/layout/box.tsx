import type { UIComponent } from '@/components/ui/type';
import type React from 'react';
import { forwardRef } from 'react';

/**
 * Box is a layout component that can be used to wrap other components.
 *
 * It renders a 'div' tag by default.
 *
 * @example
 * <Box>I'm a box</Box>
 *
 * @param props - The props of the component.
 *
 * @returns The Box component.
 */
const Box: UIComponent<'div', object> = (props, ref) => {
  const { as: As = 'div', ...rest } = props;
  const Tag = As as React.ElementType;
  return <Tag {...rest} ref={ref} />;
};

Box.displayName = 'Box';

export default forwardRef(Box) as typeof Box;
