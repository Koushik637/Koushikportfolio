import React, { createContext, useContext, useState, useEffect } from 'react';

interface MangaSFXContextType {
  sfxEnabled: boolean;
  toggleSFX: () => void;
}

const MangaSFXContext = createContext<MangaSFXContextType>({
  sfxEnabled: true,
  toggleSFX: () => {},
});

export const MangaSFXProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sfxEnabled, setSfxEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('manga_sfx_enabled');
      if (saved !== null) {
        return saved === 'true';
      }
    }
    return true;
  });

  useEffect(() => {
    localStorage.setItem('manga_sfx_enabled', String(sfxEnabled));
    if (sfxEnabled) {
      document.documentElement.classList.remove('sfx-disabled');
    } else {
      document.documentElement.classList.add('sfx-disabled');
    }
  }, [sfxEnabled]);

  const toggleSFX = () => {
    setSfxEnabled(prev => !prev);
  };

  return (
    <MangaSFXContext.Provider value={{ sfxEnabled, toggleSFX }}>
      {children}
    </MangaSFXContext.Provider>
  );
};

export const useMangaSFX = () => useContext(MangaSFXContext);
