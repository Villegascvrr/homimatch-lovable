import { useState } from 'react';
import { addToWaitingList } from '@/lib/waiting-list';

export type WaitingListData = {
  firstName: string;
  lastName: string;
  email: string;
};

/**
 * Hook simple para manejar el registro en lista de espera
 * No usa autenticación real, solo captura datos
 */
export const useWaitingList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const registerToWaitingList = async (data: WaitingListData) => {
    setIsLoading(true);
    try {
      const result = await addToWaitingList({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
      });

      return result;
    } catch (error: any) {
      console.error('Error registering to waiting list:', error);
      return {
        success: false,
        error: { message: error.message || 'Error al registrarse' }
      };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    registerToWaitingList,
    isLoading,
  };
};
