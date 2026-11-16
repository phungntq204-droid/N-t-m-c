import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface ToastMessage {
  id: number;
  text: string;
  type: 'success' | 'error';
}

interface ToastProps {
  toast: ToastMessage | null;
  onDismiss: () => void;
}

export function Toast({ toast, onDismiss }: ToastProps) {
  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 max-w-sm bg-[#29251F] text-[#FFFCF6] border border-[#76644E] rounded-lg px-4 py-3 shadow-lg flex items-center gap-3 transition-all duration-200 ease-calligraphy"
    >
      {toast.type === 'success' ? (
        <CheckCircle2 className="w-4 h-4 text-[#E6B8A2] shrink-0" />
      ) : (
        <AlertCircle className="w-4 h-4 text-[#F3A69E] shrink-0" />
      )}
      <p className="text-sm leading-snug flex-1">{toast.text}</p>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Đóng thông báo"
        className="text-[#D9CBB7] hover:text-[#FFFCF6] p-1 rounded transition-colors shrink-0"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
