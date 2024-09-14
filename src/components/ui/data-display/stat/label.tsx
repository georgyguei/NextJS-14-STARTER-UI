import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * StatLabel component is used to display a statistic label.
 *
 * @param props - The props of the component.
 *
 * @returns The StatLabel component.
 */
const StatLabel = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as="dt"
        className={cn('font-medium text-sm', className)}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'dt', object>)
) as UIComponent<'dt', object>;

StatLabel.displayName = 'StatLabel';

export default StatLabel;
