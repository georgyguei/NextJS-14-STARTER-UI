import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * StatNumber component is used to display a statistic number.
 *
 * @param props - The props of the component.
 *
 * @returns The StatNumber component.
 */
const StatNumber = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as="dd"
        className={cn(
          'align-baseline font-semibold text-2xl proportional-nums',
          className
        )}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'dd', object>)
) as UIComponent<'dd', object>;

export default StatNumber;
