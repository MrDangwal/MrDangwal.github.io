import './globals.css';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import Ambience from '@/components/Ambience';

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata = {
  title: 'Abhishek Dangwal — Lead Data Scientist, AI/ML',
  description:
    'Portfolio of Abhishek Dangwal: agentic AI systems, RAG pipelines, LLM/VLM fine-tuning, and production MLOps for fintech and beyond.',
  openGraph: {
    title: 'Abhishek Dangwal — Lead Data Scientist, AI/ML',
    description:
      'Agentic AI systems, RAG pipelines, LLM/VLM fine-tuning, production MLOps.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Ambience />
        {children}
      </body>
    </html>
  );
}
