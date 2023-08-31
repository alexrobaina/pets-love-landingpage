export const  isMobileDevice = (): boolean => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : window.navigator.userAgent;
    const mobileKeywords = ['mobile', 'android', 'ios', 'iphone', 'ipod', 'ipad', 'blackberry', 'windows phone'];
  
    for (const keyword of mobileKeywords) {
      if (userAgent.toLowerCase().includes(keyword)) {
        return true;
      }
    }
  
    return false;
  }