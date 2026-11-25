import { useState, useEffect } from 'react';

export function useUtmParams() {
  const [utms, setUtms] = useState({
    utm_source: 'directo',
    utm_medium: 'ninguno',
    utm_campaign: 'ninguno',
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source');
    const medium = params.get('utm_medium');
    const campaign = params.get('utm_campaign');

    if (source || medium || campaign) {
      const captured = {
        utm_source: source || 'directo',
        utm_medium: medium || 'ninguno',
        utm_campaign: campaign || 'ninguno',
      };
      sessionStorage.setItem('maxenergia_utms', JSON.stringify(captured));
      setUtms(captured);
    } else {
      const saved = sessionStorage.getItem('maxenergia_utms');
      if (saved) {
        setUtms(JSON.parse(saved));
      }
    }
  }, []);

  return utms;
}