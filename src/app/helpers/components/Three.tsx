'use client';

import { r3f } from '@/app/helpers/global';
import { ReactNode } from 'react';

interface ThreeProps {
  children: ReactNode;
}

export const Three = ({ children }: ThreeProps) => {
  return <r3f.In>{children}</r3f.In>;
};
