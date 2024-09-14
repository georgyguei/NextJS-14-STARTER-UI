import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef, memo } from 'react';

/**
 * The variants of the Divider component
 */
const dividerVariants = cva(
  'overflow-visible border-inherit border-t-0 border-r-0 border-solid opacity-60',
  {
    variants: {
      size: {
        xs: 'border-[1px]',
        sm: 'border-[2px]',
        md: 'border-[3px]',
        lg: 'border-[4px]',
      },
      orientation: {
        horizontal: 'w-full border-l-0',
        vertical: 'h-full border-b-0',
      },
    },
    defaultVariants: {
      size: 'xs',
      orientation: 'horizontal',
    },
  }
);

/**
 * The props of the Divider component
 */
type DividerProps = VariantProps<typeof dividerVariants> & {
  children?: never;
};

/**
 * Dividers are used to visually separate content in a list or group.
 *
 * @example
 * <Divider orientation="horizontal" />
 *
 * @param prop - The props of the Divider component
 *
 * @returns The Divider component
 */
const Divider: UIComponent<'hr', DividerProps> = memo(
  forwardRef(((props, ref): JSX.Element => {
    const { orientation, size, className, children, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as="hr"
        aria-orientation={orientation || 'horizontal'}
        className={cn(dividerVariants({ size, orientation, className }))}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'hr', DividerProps>)
) as UIComponent<'hr', DividerProps>;

Divider.displayName = 'Divider';

export default Divider;
