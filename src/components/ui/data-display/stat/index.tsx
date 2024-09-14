import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

/**
 * Stat component is used to display a statistic.
 *
 * @example
 * <Stat>
 *  <StatLabel>Collected</StatLabel>
 *  <StatNumber>23k</StatNumber>
 *  <StatHelpText>post</StatHelpText>
 * </Stat>
 *
 * @param props - The props of the component.
 *
 * @returns The Stat component.
 */
const Stat = memo(
  forwardRef(((props, ref) => {
    const { className, children, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box className={cn('relative flex-1', className)} {...remainingProps}>
        <dl>{children}</dl>
      </Box>
    );
  }) satisfies UIComponent<'div', object>)
) as UIComponent<'div', object>;

Stat.displayName = 'Stat';

export default Stat;
