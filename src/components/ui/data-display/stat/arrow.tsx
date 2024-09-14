import Icon from '@/components/ui/media/icon';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef, memo } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';

/**
 * The variants of the StatArrow component.
 */
const statArrowVariants = cva('me-1 size-3.5', {
  variants: {
    type: {
      increase: 'text-green-400',
      decrease: 'text-red-400',
    },
  },
  defaultVariants: {
    type: 'increase',
  },
});

/**
 * The props of the StatArrow component.
 */
type StatArrowProps = VariantProps<typeof statArrowVariants>;

/**
 * StatArrow component is used to display a statistic arrow.
 *
 * @param props - The props of the component.
 *
 * @returns The StatArrow component.
 */
const StatArrow = memo(
  forwardRef(((props, ref) => {
    const { type, className, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    const Component = type === 'decrease' ? BiSolidDownArrow : BiSolidUpArrow;

    return (
      <>
        <span className="sr-only">
          {type === 'decrease' ? 'decreased by' : 'increased by'}
        </span>
        <Icon
          as={Component}
          aria-hidden
          className={cn(statArrowVariants({ type, className }))}
          {...remainingProps}
        />
      </>
    );
  }) satisfies UIComponent<'svg', StatArrowProps>)
) as UIComponent<'svg', StatArrowProps>;

StatArrow.displayName = 'StatArrow';

export default StatArrow;
