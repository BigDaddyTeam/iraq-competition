export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    null;

  if (!ip) {
    return res.status(200).json({ ip: null });
  }

  // Try ipwho.is first
  try {
    const r = await fetch(`https://ipwho.is/${ip}`, {
      signal: AbortSignal.timeout(4000),
    });
    const d = await r.json();
    if (d.success) {
      return res.status(200).json({
        ip:           d.ip,
        country_name: d.country,
        country_code: d.country_code,
        region:       d.region,
        city:         d.city,
        org:          d.connection?.isp || d.connection?.org || null,
        latitude:     d.latitude,
        longitude:    d.longitude,
        timezone:     d.timezone?.id || null,
      });
    }
  } catch { /* fall through */ }

  // Fallback: ipapi.co
  try {
    const r = await fetch(`https://ipapi.co/${ip}/json/`, {
      signal: AbortSignal.timeout(4000),
    });
    const d = await r.json();
    if (d.ip && !d.error) {
      return res.status(200).json({
        ip:           d.ip,
        country_name: d.country_name,
        country_code: d.country_code,
        region:       d.region,
        city:         d.city,
        org:          d.org || null,
        latitude:     d.latitude,
        longitude:    d.longitude,
        timezone:     d.timezone,
      });
    }
  } catch { /* fall through */ }

  // Last resort: return bare IP only
  return res.status(200).json({ ip });
}
