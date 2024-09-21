import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';
import type { FormControlProps } from '.';

export type FormLabelProps = Pick<FormControlProps, 'isRequired'> & {
  requiredIndicator?: React.ReactElement;
};

/**
 * Form Label provides a label for a form section.
 *
 * @example
 * <FormLabel>
 *  ...
 * </FormLabel>
 *
 * @param props - The props of the FormLabel component.
 * @returns The FormLabel component.
 */
const FormLabel = memo(
  forwardRef(((props, ref) => {
    const { isRequired, requiredIndicator, className, children, ...rest } =
      props;
    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as="label"
        className={cn(
          isRequired ? 'flex justify-start gap-1' : 'block text-start',
          'font-medium text-md transition-common duration-normal',
          className
        )}
        {...remainingProps}
      >
        {children}
        {isRequired && requiredIndicator}
      </Box>
    );
  }) satisfies UIComponent<'label', FormLabelProps>)
) as UIComponent<'label', FormLabelProps>;

FormLabel.displayName = 'FormLabel';

export default FormLabel;
