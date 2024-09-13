import Center from '@/components/ui/layout/center';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

/**
 * Circle is a layout component that centers its child within itself with round border-radius.
 *
 * @example
 * <Circle>
 *  <>Content</>
 * </Circle>
 *
 * @param props - The props of the component.
 *
 * @returns The Circle component.
 */
const Circle: UIComponent<'div', object> = props => {
  const { className, ...rest } = props;

  return <Center className={cn('rounded-full', className)} {...rest} />;
};

Circle.displayName = 'Circle';

export default forwardRef(Circle) as typeof Circle;
