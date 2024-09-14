import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * StatHelpText component is used to display a statistic help text.
 *
 * @param props - The props of the component.
 *
 * @returns The StatHelpText component.
 */
const StatHelpText = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as="dd"
        className={cn('text-sm opacity-80', className)}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'dd', object>)
) as UIComponent<'dd', object>;

StatHelpText.displayName = 'StatHelpText';

export default StatHelpText;
