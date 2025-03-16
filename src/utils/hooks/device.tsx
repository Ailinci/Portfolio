
import { useState, useEffect } from "react";

/**
 * @param breakpoint - Tamaño en píxeles que define el límite entre móvil y desktop (por defecto 768px)
 * @returns Estado booleano que indica si el dispositivo es móvil (true) o no (false)
 */
export function useIsMobile(breakpoint: number = 768): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    // Función para verificar el tamaño de la ventana
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    
    // Comprobar inmediatamente al montar el componente
    checkIfMobile();
    
    // Verificar al cambiar el tamaño de la ventana
    window.addEventListener('resize', checkIfMobile);
    
    // Limpiar el event listener al desmontar
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;