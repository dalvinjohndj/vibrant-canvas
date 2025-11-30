import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient, Entry } from 'contentful';

// Contentful Configuration
// Add your Contentful credentials here
const CONTENTFUL_CONFIG = {
  space: 'YOUR_SPACE_ID', // Replace with your Contentful Space ID
  accessToken: 'YOUR_ACCESS_TOKEN', // Replace with your Contentful Access Token
};

interface CMSContent {
  [key: string]: any;
}

interface CMSContextType {
  content: CMSContent;
  updateContent: (key: string, value: any) => void;
  resetContent: () => void;
  isLoading: boolean;
  error: string | null;
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

// Initialize Contentful client
const contentfulClient = createClient({
  space: CONTENTFUL_CONFIG.space,
  accessToken: CONTENTFUL_CONFIG.accessToken,
});

export const CMSProvider = ({ children }: { children: ReactNode }) => {
  const [content, setContent] = useState<CMSContent>(defaultContent);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch content from Contentful on mount
  useEffect(() => {
    const fetchContentfulData = async () => {
      // Only fetch if credentials are configured
      if (CONTENTFUL_CONFIG.space === 'YOUR_SPACE_ID' || !CONTENTFUL_CONFIG.space) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        // Fetch all entries from Contentful
        const response = await contentfulClient.getEntries({
          content_type: 'siteContent', // Update this to match your Contentful content type
        });

        if (response.items.length > 0) {
          const entry = response.items[0];
          const fields = entry.fields as any;
          
          // Map Contentful fields to your content structure
          const contentfulData: CMSContent = {
            heroTitle: fields.heroTitle || defaultContent.heroTitle,
            heroSubtitle: fields.heroSubtitle || defaultContent.heroSubtitle,
            aboutMission: fields.aboutMission || defaultContent.aboutMission,
            aboutVision: fields.aboutVision || defaultContent.aboutVision,
            contactEmail: fields.contactEmail || defaultContent.contactEmail,
            contactPhone: fields.contactPhone || defaultContent.contactPhone,
            contactAddress: fields.contactAddress || defaultContent.contactAddress,
          };
          
          setContent(contentfulData);
        }
      } catch (err) {
        console.error('Error fetching from Contentful:', err);
        setError('Failed to load content from Contentful. Using default content.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContentfulData();
  }, []);

  const updateContent = (key: string, value: any) => {
    setContent(prev => ({ ...prev, [key]: value }));
    // Note: Updates to Contentful should be done through the Contentful web app
    console.warn('Content updates should be made in Contentful CMS');
  };

  const resetContent = () => {
    setContent(defaultContent);
  };

  return (
    <CMSContext.Provider value={{ content, updateContent, resetContent, isLoading, error }}>
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
