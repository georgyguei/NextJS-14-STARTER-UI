import Flex from '@/components/ui/layout/flex';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

const StatGroup = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Flex
        role="group"
        className={cn('flex-wrap items-start justify-around', className)}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'div', object>)
) as UIComponent<'div', object>;

StatGroup.displayName = 'StatGroup';

export default StatGroup;
