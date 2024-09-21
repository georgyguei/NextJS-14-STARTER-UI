import type { ButtonProps } from '@/components/ui/form/button';
import Stack from '@/components/ui/layout/stack';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
} from 'react';

/**
 * The props of the ButtonGroup component.
 */
export type ButtonGroupProps = ButtonProps;

const ButtonGroup = memo(
  forwardRef(((props, ref) => {
    const { size, variant, className, children, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    const content = Children.map(children, (child, index) => {
      if (
        isValidElement(child) &&
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        (child.type as any).displayName === 'Button'
      ) {
        return cloneElement(child as React.ReactElement, {
          size: child.props.size || size,
          variant: child.props.variant || variant,
        });
      }
    });

    return (
      <Stack
        direction="row"
        role="group"
        data-orientation="horizontal"
        className={cn(
          'data-[attached]:data-[orientation="horizontal"]:: -me-px inline-flex gap-2',
          className
        )}
        {...remainingProps}
      >
        {content}
      </Stack>
    );
  }) satisfies UIComponent<'div', ButtonGroupProps>)
) as UIComponent<'div', ButtonGroupProps>;

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
