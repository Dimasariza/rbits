import { Metadata } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'ITS Risk Guardian',
  description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, width: 'device-width' },
  openGraph: {
    type: 'website',
    title: 'ITS Risk Guardian',
    url: 'https://sakai.primereact.org/',
    description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
    images: ['https://www.primefaces.org/static/social/sakai-react.png'],
    ttl: 604800
  },
  icons: {
    icon: '/ITS Risk Guardian - dark.svg'
  }
};

export default function AppLayout({ children }: AppLayoutProps) {
  return <Layout>{children}</Layout>;
}
