// Analytics utility for tracking user interactions with consent

interface ConsentSettings {
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface AnalyticsSession {
  sessionId: string;
  startTime: number;
  lastActivity: number;
  pageViews: number;
  userConsent: boolean;
}

class Analytics {
  private session: AnalyticsSession | null = null;
  private consent: ConsentSettings = {
    analytics: false,
    marketing: false,
    functional: true
  };
  private apiUrl = '/api';

  constructor() {
    this.initSession();
    this.setupPageTracking();
    this.setupInteractionTracking();
  }

  private initSession() {
    const sessionId = this.generateSessionId();
    this.session = {
      sessionId,
      startTime: Date.now(),
      lastActivity: Date.now(),
      pageViews: 0,
      userConsent: false
    };

    // Get location data (with consent)
    this.getLocationData().then(location => {
      this.trackSession(location);
    });
  }

  private generateSessionId(): string {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }

  private async getLocationData() {
    try {
      // Use a free IP geolocation service
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      return {
        country: data.country_name,
        city: data.city
      };
    } catch (error) {
      console.warn('Could not get location data:', error);
      return { country: null, city: null };
    }
  }

  private async trackSession(location: any) {
    if (!this.session) return;

    try {
      // In production, this would send to backend
      console.log('Session tracked:', {
        sessionId: this.session.sessionId,
        userConsent: this.consent.analytics,
        referrer: document.referrer,
        landingPage: window.location.pathname,
        country: location.country,
        city: location.city
      });
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  }

  public updateConsent(newConsent: ConsentSettings) {
    this.consent = newConsent;
    if (this.session) {
      this.session.userConsent = newConsent.analytics;
    }
  }

  public trackConsent(consentType: string, consentGiven: boolean) {
    if (!this.session) return;

    // In production, this would send to backend
    console.log('Consent tracked:', {
      sessionId: this.session.sessionId,
      consentType,
      consentGiven
    });
  }

  public trackPageView(pageUrl?: string, pageTitle?: string) {
    if (!this.consent.analytics || !this.session) return;

    const url = pageUrl || window.location.pathname;
    const title = pageTitle || document.title;
    const timeOnPage = Date.now() - this.session.lastActivity;

    this.session.pageViews++;
    this.session.lastActivity = Date.now();

    // In production, this would send to backend
    console.log('Page view tracked:', {
      sessionId: this.session.sessionId,
      pageUrl: url,
      pageTitle: title,
      timeOnPage: this.session.pageViews > 1 ? timeOnPage : 0
    });
  }

  public trackInteraction(
    interactionType: 'click' | 'form_submit' | 'download' | 'email_click' | 'phone_click',
    elementId?: string,
    elementText?: string
  ) {
    if (!this.consent.analytics || !this.session) return;

    // In production, this would send to backend
    console.log('Interaction tracked:', {
      sessionId: this.session.sessionId,
      interactionType,
      elementId,
      elementText,
      pageUrl: window.location.pathname
    });
  }

  public trackContact(contactData: any) {
    // In production, this would send to backend
    console.log('Contact tracked:', contactData);
  }

  public trackNewsletter(email: string) {
    // In production, this would send to backend
    console.log('Newsletter tracked:', { email });
  }

  private setupPageTracking() {
    // Track initial page view
    window.addEventListener('load', () => {
      setTimeout(() => this.trackPageView(), 1000);
    });

    // Track page changes in SPA
    let currentPath = window.location.pathname;
    const observer = new MutationObserver(() => {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        this.trackPageView();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.session!.lastActivity = Date.now();
      }
    });
  }

  private setupInteractionTracking() {
    // Track clicks on important elements
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      // Track button clicks
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.tagName === 'BUTTON' ? target : target.closest('button');
        this.trackInteraction('click', button?.id, button?.textContent?.trim());
      }
      
      // Track link clicks
      if (target.tagName === 'A' || target.closest('a')) {
        const link = target.tagName === 'A' ? target : target.closest('a');
        const href = (link as HTMLAnchorElement)?.href;
        
        if (href?.includes('mailto:')) {
          this.trackInteraction('email_click', link?.id, href);
        } else if (href?.includes('tel:')) {
          this.trackInteraction('phone_click', link?.id, href);
        } else {
          this.trackInteraction('click', link?.id, link?.textContent?.trim());
        }
      }
    });

    // Track form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      this.trackInteraction('form_submit', form.id, form.action || 'contact-form');
    });
  }

  public endSession() {
    if (!this.session) return;

    const sessionDuration = Date.now() - this.session.startTime;
    
    // In production, this would send to backend
    console.log('Session ended:', {
      sessionId: this.session.sessionId,
      sessionDuration: Math.floor(sessionDuration / 1000)
    });
  }
}

// Create global analytics instance
const analytics = new Analytics();

// End session on page unload
window.addEventListener('beforeunload', () => {
  analytics.endSession();
});

// Make analytics available globally
declare global {
  interface Window {
    analytics: Analytics;
  }
}

window.analytics = analytics;

export default analytics;