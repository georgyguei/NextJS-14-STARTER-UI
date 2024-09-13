import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

/**
 * The props for the Container component.
 */
type ContainerProps = {
  /**
   * If true, container will center its children regardless of their width.
   */
  centerContent?: boolean;
};

/**
 * Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid.
 *
 * @example
 * <Container>
 *  <>Content</>
 * </Container>
 */
const Container: UIComponent<'div', ContainerProps> = props => {
  const { centerContent, className, ...rest } = props;

  return (
    <Box
      className={cn(
        'container ps-4 pe-4 [margin-inline:auto]',
        centerContent && 'flex flex-col items-center',
        className
      )}
      {...rest}
    />
  );
};

Container.displayName = 'Container';

export default forwardRef(Container) as typeof Container;
