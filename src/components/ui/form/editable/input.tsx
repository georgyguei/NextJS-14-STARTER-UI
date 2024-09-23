import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';
import Input from '../input';

export type EditableInputProps = object;

const EditableInput = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;

    const remainingProps: object = { ...rest, ref };

    return (
      <Box
        as={Input}
        className={cn(
          'h-auto border-0 ps-0 pe-0 text-[length:inherit]',
          className
        )}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'input', EditableInputProps>)
) as UIComponent<'input', EditableInputProps>;

EditableInput.displayName = 'EditableInput';

export default EditableInput;
