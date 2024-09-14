import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { forwardRef, memo } from 'react';

/**
 * Text is the used to render text and paragraphs within an interface.
 *
 * @example
 * <Text>
 *  ...
 * </Text>
 *
 * @param props - The props of the component.
 *
 * @returns The Text component.
 */
const Text = memo(
  forwardRef(((props, ref) => {
    const remainingProps: object = { ...props, ref };

    return <Box as="p" {...remainingProps} />;
  }) satisfies UIComponent<'p', object>)
) as UIComponent<'p', object>;

Text.displayName = 'Text';

export default Text;
