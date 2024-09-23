'use client';

import Box from '@/components/ui/layout/box';
import type { UIComponent } from '@/components/ui/type';
import { cn } from '@/lib/utils';
import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

export type EditableProps = {
  className?: string;
  children: React.ReactNode;
  defaultValue?: string;
};

const Editable = memo(
  forwardRef<HTMLInputElement, EditableProps>(((props, ref) => {
    const { className, children, defaultValue, ...rest } = props;
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    const remainingProps = useMemo(() => ({ ...rest, ref }), [rest, ref]);

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [value, setValue] = useState<string>(defaultValue || '');

    const handlePreviewClick = useRef(() => setIsEditing(true));
    const handleInputBlur = useCallback(() => {
      if (value !== '') {
        setIsEditing(false);
      }
    }, [value]);
    const handleInputChange = useRef(
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(event.target.value);
        if (event.target.value === '') {
          setIsEditing(true);
        }
      }
    );

    const content = useMemo(
      () =>
        Children.map(children, child => {
          if (isValidElement(child)) {
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            switch ((child as any).type.displayName) {
              case 'EditablePreview':
                return !isEditing
                  ? cloneElement(child as React.ReactElement, {
                      children: value,
                      onClick: handlePreviewClick.current,
                    })
                  : null;
              case 'EditableInput':
                return isEditing
                  ? cloneElement(child as React.ReactElement, {
                      value,
                      autoFocus: true,
                      ...remainingProps,
                      onBlur: handleInputBlur,
                      onChange: handleInputChange.current,
                    })
                  : null;
              case 'EditableTextarea':
                return isEditing
                  ? cloneElement(child as React.ReactElement, {
                      value,
                      ...remainingProps,
                      onBlur: handleInputBlur,
                      onChange: handleInputChange.current,
                    })
                  : null;
              default:
                return child;
            }
          }
          return child;
        }),
      [children, value, isEditing, remainingProps, handleInputBlur]
    );

    return <div className={cn('text-sm', className)}>{content}</div>;
  }) satisfies UIComponent<'input', EditableProps>)
) as UIComponent<'input', EditableProps>;

Editable.displayName = 'Editable';

export default Editable;
