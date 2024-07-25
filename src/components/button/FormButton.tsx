'use client';

import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { useFormStatus } from 'react-dom';

type FormButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function FormButton(props: FormButtonProps) {
  const status = useFormStatus();

  return <button {...props} disabled={status.pending} />;
}
