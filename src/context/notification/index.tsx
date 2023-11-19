import { FC, createContext } from 'react';
import { ToastItem, toast } from 'react-toastify';

export interface IToastPromiseMessages {
  pending: string;
  success: string;
  error: string;
}

const toastFunctions = {
  success: toast.success,
  error: toast.error,
  info: toast.info,
};

interface INotificationContext {
  showPromiseNotification: <T>(
    promise: Promise<T>,
    toastPromiseMessages: IToastPromiseMessages,
    toastOptions?: {
      onRemove?: () => void;
    }
  ) => void;
  showNotification: (
    message: string,
    type: keyof typeof toastFunctions
  ) => void;
}

interface INotificationProvider {
  children: React.ReactNode;
}

const showPromiseNotification = (
  promise: Promise<unknown>,
  toastPromiseMessages: IToastPromiseMessages,
  toastOptions?: {
    onRemove?: () => void;
  }
) => {
  toast.promise(
    promise,
    {
      pending: toastPromiseMessages.pending,
      success: toastPromiseMessages.success,
      error: toastPromiseMessages.error,
    },
    {
      position: toast.POSITION.BOTTOM_RIGHT,
      ...(toastOptions || {}),
    }
  );

  toast.onChange((toast: ToastItem) => {
    if (toast.type === 'success' || toast.type === 'error') {
      if (toastOptions?.onRemove) {
        toastOptions.onRemove();
      }
    }
  });
};

const showNotification = (
  message: string,
  type: keyof typeof toastFunctions
) => {
  toastFunctions[type](message, {
    position: toast.POSITION.BOTTOM_RIGHT,
  });
};

export const NotifcationContext = createContext<INotificationContext>({
  showPromiseNotification,
  showNotification,
});

export const NotificationProvider: FC<INotificationProvider> = ({
  children,
}) => {
  return (
    <NotifcationContext.Provider
      value={{ showPromiseNotification, showNotification }}
    >
      {children}
    </NotifcationContext.Provider>
  );
};
