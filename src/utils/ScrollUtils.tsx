import { useEffect } from 'react';

export const useScrollToHashOnLoad = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Wait a bit for the page to fully load
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);
};

// Smooth scroll to anchor links
export const setupSmoothScrolling = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && document.querySelector(anchor.hash)) {
        e.preventDefault();
        
        const element = document.querySelector(anchor.hash);
        if (element) {
          window.scrollTo({
            top: (element as HTMLElement).offsetTop - 80, // Accounting for header
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
};