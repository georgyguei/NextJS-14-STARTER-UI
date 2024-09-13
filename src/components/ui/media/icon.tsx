import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import { BiHelpCircle } from 'react-icons/bi';

/**
 * Icon component is used to render an icon.
 *
 * @example
 * <Icon as={IconComponent} />
 * <Icon viewBox="0 0 24 24">
 *  ...
 * </Icon>
 * @param props - The props of the component
 * @returns The Icon component
 */
const Icon: UIComponent<'svg', object> = props => {
  const { as, className, children, ...rest } = props;

  const Component = as || (children ? 'svg' : BiHelpCircle);

  return (
    <Box
      as={Component}
      focusable={false}
      className={cn(
        'inline-block size-[1em] shrink-0 align-middle text-current leading-[1em]',
        className
      )}
      {...rest}
    >
      {Component === 'svg' ? children : null}
    </Box>
  );
};

Icon.displayName = 'Icon';

export default forwardRef(Icon) as typeof Icon;
