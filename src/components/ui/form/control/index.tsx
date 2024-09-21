import FormRequiredIndicator from '@/components/ui/form/control/indicator';
import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
} from 'react';

export type FormControlProps = {
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

/**
 * Form Control is a wrapper component that provides context and functionality to form elements.
 *
 * @example
 * <FormControl isInvalid={error}>
 *  ...
 * </FormControl>
 *
 * @param props - The props of the FormControl component.
 * @returns The FormControl component.
 */
const FormControl = memo(
  forwardRef(((props, ref) => {
    const { isInvalid, isRequired, className, children, ...rest } = props;
    const remainingProps: object = { ...rest, ref };

    const formRequiredIndicatorElement = isRequired
      ? Children.toArray(children).find(child => {
          if (isValidElement(child)) {
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            return (child as any).type.displayName === 'FormRequiredIndicator';
          }
        }) || <FormRequiredIndicator>*</FormRequiredIndicator>
      : undefined;

    const formElements = isRequired
      ? Children.map(children, child => {
          if (isValidElement(child)) {
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            switch ((child as any).type.displayName) {
              case 'FormLabel':
                return cloneElement(child as React.ReactElement, {
                  isRequired: isRequired,
                  requiredIndicator: formRequiredIndicatorElement,
                });
              case 'FormRequiredIndicator':
                return null;
            }
          }
          return child;
        })
      : children;

    return (
      <Box
        className={cn('relative w-full', className)}
        role="group"
        data-invalid={isInvalid}
        {...remainingProps}
      >
        {formElements}
      </Box>
    );
  }) satisfies UIComponent<'div', FormControlProps>)
) as UIComponent<'div', FormControlProps>;

FormControl.displayName = 'FormControl';

export default FormControl;
