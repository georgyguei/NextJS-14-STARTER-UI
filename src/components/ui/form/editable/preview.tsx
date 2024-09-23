import type { UIComponent } from '@/components/ui/type';
import Text from '@/components/ui/typography/text';
import { cn } from '@/lib/utils';
import { forwardRef, memo } from 'react';

export type EditablePreviewProps = object;

const EditablePreview = memo(
  forwardRef(((props, ref) => {
    const { className, ...rest } = props;

    const remainingProps: object = { ...rest, ref };

    return (
      <Text
        as="span"
        className={cn(
          'inline-block cursor-text rounded-md py-1 text-[inherit] transition-common duration-normal',
          className
        )}
        tabIndex={0}
        {...remainingProps}
      />
    );
  }) satisfies UIComponent<'span', EditablePreviewProps>)
) as UIComponent<'span', EditablePreviewProps>;

EditablePreview.displayName = 'EditablePreview';

export default EditablePreview;
