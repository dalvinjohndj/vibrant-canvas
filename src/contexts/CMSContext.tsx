import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CMSContent {
  [key: string]: any;
}

interface CMSContextType {
  content: CMSContent;
  updateContent: (key: string, value: any) => void;
  resetContent: () => void;
}

const defaultContent: CMSContent = {
  heroTitle: "Unlock Investment Opportunities in Real Estate, Mining & Hospitality",
  heroSubtitle: "Professional advisory services connecting investors with high-value assets across Southern Africa",
  aboutMission: "To provide exceptional advisory services that connect investors with high-value opportunities in Real Estate, Mining, and Hospitality sectors.",
  aboutVision: "To become the leading investment advisory firm in Southern Africa, recognized for our integrity, expertise, and commitment to client success.",
  contactEmail: "info@breakthroughprime.com",
  contactPhone: "+260 XXX XXX XXX",
  contactAddress: "Lusaka, Zambia",
};

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<CMSContent>(() => {
    const stored = localStorage.getItem('cms-content');
    return stored ? JSON.parse(stored) : defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('cms-content', JSON.stringify(content));
  }, [content]);

  const updateContent = (key: string, value: any) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('cms-content');
  };

  return (
    <CMSContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within CMSProvider');
  }
  return context;
};
