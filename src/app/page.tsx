'use client';
import Editable from '@/components/ui/form/editable';
import EditableInput from '@/components/ui/form/editable/input';
import EditablePreview from '@/components/ui/form/editable/preview';
import Box from '@/components/ui/layout/box';
import Container from '@/components/ui/layout/container';

export default function Home() {
  return (
    <Container className="p-5">
      <Box className="rounded-xl border p-3">
        <Editable defaultValue="Take some chakra">
          <EditablePreview />
          <EditableInput />
        </Editable>
      </Box>
    </Container>
  );
}
