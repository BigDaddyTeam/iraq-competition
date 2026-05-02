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

  try {
    const geo = await fetch(`https://ipwho.is/${ip}`, {
      signal: AbortSignal.timeout(4000),
    });
    const data = await geo.json();

    if (data.success) {
      return res.status(200).json({
        ip:           data.ip,
        country_name: data.country,
        country_code: data.country_code,
        region:       data.region,
        city:         data.city,
        org:          data.connection?.isp || data.connection?.org || null,
        latitude:     data.latitude,
        longitude:    data.longitude,
        timezone:     data.timezone?.id || null,
      });
    }
  } catch {
    /* geo lookup failed — still return the raw IP */
  }

  return res.status(200).json({ ip });
}
