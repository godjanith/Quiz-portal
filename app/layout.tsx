import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SpeedSphere 3D | Time, Speed & Distance', description: 'A futuristic interactive quiz to master time, speed, and distance.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
