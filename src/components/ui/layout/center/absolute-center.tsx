import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';
import { forwardRef } from 'react';

/**
 * Defines CSS class mappings for centering elements absolutely on different axes.
 * `horizontal` centers horizontally, `vertical` centers vertically, and `both` centers on both axes.
 */
const ABSOLUTE_CENTER_AXIS = {
  horizontal: '-translate-x-1/2 left-1/2',
  vertical: '-translate-y-1/2 top-1/2',
  both: '-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
};

/**
 * Configures variants for absolute centering using `cva`, setting 'absolute' as the base class.
 * Allows for specifying the axis of centering with default to 'both' for full centering.
 */
const absoluteCenterVariants = cva('absolute', {
  variants: {
    /**
     * The axis to center the child element on.
     */
    axis: ABSOLUTE_CENTER_AXIS,
  },
  defaultVariants: {
    axis: 'both',
  },
});

/**
 * Type definition for props of the AbsoluteCenter component, derived from the absolute center variants.
 * Ensures type safety and IntelliSense support for component props in TypeScript.
 */
type AbsoluteCenterProps = VariantProps<typeof absoluteCenterVariants>;

/**
 * AbsoluteCenter is a layout component that centers its child relative to its parent by given axis.
 *
 * @example
 * <AbsoluteCenter axis="both">
 *  <>Content</>
 * </AbsoluteCenter>
 *
 * @param props - The props of the component.
 *
 * @returns The AbsoluteCenter component.
 */
const AbsoluteCenter: UIComponent<'div', AbsoluteCenterProps> = props => {
  const { axis, className, ...rest } = props;
  return (
    <Box
      className={cn(absoluteCenterVariants({ axis, className }))}
      {...rest}
    />
  );
};

AbsoluteCenter.displayName = 'AbsoluteCenter';

export default forwardRef(AbsoluteCenter) as typeof AbsoluteCenter;
