import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

type FormControlProps = {
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
    const { isInvalid, className, ...rest } = props;

    return (
      <Box
        className={cn('relative w-full', className)}
        role="group"
        data-invalid={isInvalid}
        {...rest}
      />
    );
  }) satisfies UIComponent<'div', FormControlProps>)
) as UIComponent<'div', FormControlProps>;

FormControl.displayName = 'FormControl';

export default FormControl;
