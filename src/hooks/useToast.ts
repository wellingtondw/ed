import { toast } from 'react-toastify';

type ToastProps = {
  message: string;
  type?: 'error' | 'success';
};

export function useToast({ message, type }: ToastProps) {
  switch (type) {
    case 'success':
      return toast.error(message);
    case 'error':
    default:
      return toast.error(message);
  }
}
