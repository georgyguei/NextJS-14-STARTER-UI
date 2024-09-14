import Box from '@/components/ui/layout/box';
import Container from '@/components/ui/layout/container';

export default function Home() {
  return (
    <Container className="p-5">
      <Box className="rounded-xl border border-gray-200 p-3 text-gray-700">
        Home page
      </Box>
    </Container>
  );
}
