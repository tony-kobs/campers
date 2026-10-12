import StatusScreen from '@/components/StatusScreen/StatusScreen';

export default function NotFound() {
  return (
    <StatusScreen
      title="Page not found"
      text="This page doesn't exist, or the camper is no longer available."
      primary={{ label: 'Back to catalog', href: '/catalog' }}
      secondary={{ label: 'Home', href: '/' }}
    />
  );
}
