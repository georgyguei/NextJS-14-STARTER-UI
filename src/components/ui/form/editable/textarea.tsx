import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

export type EditableTextareaProps = object;

const EditableTextarea = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;

    const remainingProps: object = { ...rest, ref };

    return (
      <Box className={cn('relative w-full', className)} {...remainingProps} />
    );
  }) satisfies UIComponent<'div', EditableTextareaProps>)
) as UIComponent<'div', EditableTextareaProps>;

EditableTextarea.displayName = 'EditableTextarea';

export default EditableTextarea;
