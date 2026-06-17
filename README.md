<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <meta name="description" content="aiseoa Blog — SEO tips, AI strategies, case studies and more."/>
  <title>Blog — aiseoa SEO Insights</title>
  <link rel="stylesheet" href="css/style.css"/>
  <style>
    .blog-hero { padding:5rem 2.5rem 2.5rem; max-width:960px; margin:0 auto; text-align:center; }
    .blog-hero h1 { font-size:clamp(2.2rem,5vw,3rem); font-weight:700; letter-spacing:-1.5px; margin-bottom:.8rem; }
    .blog-hero p { color:var(--muted); font-size:1rem; max-width:520px; margin:0 auto; }
    .categories { display:flex; gap:.6rem; justify-content:center; flex-wrap:wrap; margin:2rem 0; }
    .cat-btn { background:transparent; border:1px solid var(--border); color:var(--muted); padding:.4rem 1rem; border-radius:999px; font-size:.8rem; font-weight:600; cursor:pointer; transition:all .2s; }
    .cat-btn.active,.cat-btn:hover { background:rgba(37,99,235,.15); border-color:var(--accent); color:var(--white); }
    .blog-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:1.5rem; max-width:960px; margin:0 auto; padding:0 2.5rem 4rem; }
    .blog-card { background:var(--card); border:1px solid var(--border); border-radius:16px; overflow:hidden; transition:all .25s; }
    .blog-card:hover { border-color:rgba(56,189,248,.4); transform:translateY(-4px); }
    .blog-thumb { height:170px; display:flex; align-items:center; justify-content:center; font-size:3.5rem; }
    .blog-body { padding:1.3rem; }
    .blog-tag { font-size:.72rem; font-weight:700; color:var(--accent2); text-transform:uppercase; letter-spacing:1px; margin-bottom:.4rem; }
    .blog-title { font-family:'Space Grotesk',sans-serif; font-size:.95rem; font-weight:600; line-height:1.4; margin-bottom:.5rem; }
    .blog-excerpt { color:var(--muted); font-size:.82rem; line-height:1.6; margin-bottom:.8rem; }
    .blog-meta { display:flex; justify-content:space-between; align-items:center; }
    .blog-date { font-size:.73rem; color:var(--muted); }
    .blog-read { font-size:.73rem; color:var(--accent2); font-weight:600; }
    .coming-soon-banner { background:linear-gradient(135deg,rgba(37,99,235,.15),rgba(56,189,248,.08)); border:1px solid rgba(37,99,235,.3); border-radius:16px; padding:2.5rem; text-align:center; max-width:560px; margin:0 auto 3rem; }
    .coming-soon-banner h3 { font-size:1.3rem; font-weight:700; margin-bottom:.5rem; }
    .coming-soon-banner p { color:var(--muted); font-size:.88rem; margin-bottom:1.2rem; }
    .email-form { display:flex; gap:.6rem; max-width:360px; margin:0 auto; }
    .email-form input { flex:1; background:rgba(255,255,255,.06); border:1px solid var(--border); border-radius:8px; padding:.65rem 1rem; color:var(--white); font-size:.85rem; font-family:inherit; outline:none; }
    .email-form input:focus { border-color:var(--accent2); }
    .email-form input::placeholder { color:var(--muted); }
    .email-form button { background:var(--accent); color:#fff; border:none; padding:.65rem 1.2rem; border-radius:8px; font-weight:600; font-size:.85rem; cursor:pointer; white-space:nowrap; }
    .sub-success { color:#4ADE80; font-size:.82rem; margin-top:.6rem; display:none; }
    @media(max-width:600px){ .blog-grid{padding:0 1.2rem 3rem;} .email-form{flex-direction:column;} }
  </style>
</head>
<body>
<script src="js/components.js"></script>
<script>injectNav('blog');</script>

<div class="blog-hero fade-in">
  <div class="section-tag">Insights & Strategies</div>
  <h1>The aiseoa Blog</h1>
  <p>SEO tips, AI strategies, case studies and industry insights — straight from the trenches.</p>
</div>

<div class="coming-soon-banner fade-in">
  <div style="font-size:2rem;margin-bottom:.8rem">✍️</div>
  <h3>Blog Launching Soon</h3>
  <p>I'm currently writing in-depth SEO guides, AI content strategies, and real case studies. Subscribe to get notified when the first posts drop.</p>
  <div class="email-form">
    <input type="email" id="sub-email" placeholder="Your email address"/>
    <button onclick="subscribe()">Notify Me</button>
  </div>
  <div class="sub-success" id="sub-success">✅ You're on the list!</div>
</div>

<div class="categories fade-in">
  <button class="cat-btn active">All</button>
  <button class="cat-btn">Technical SEO</button>
  <button class="cat-btn">AI & SEO</button>
  <button class="cat-btn">Link Building</button>
  <button class="cat-btn">Local SEO</button>
  <button class="cat-btn">Case Studies</button>
</div>

<!-- UPCOMING POSTS PREVIEW -->
<div class="blog-grid fade-in">
  <div class="blog-card">
    <div class="blog-thumb" style="background:linear-gradient(135deg,rgba(37,99,235,.2),rgba(56,189,248,.12))">🤖</div>
    <div class="blog-body">
      <div class="blog-tag">AI & SEO</div>
      <div class="blog-title">How AI is Transforming SEO in 2025 — What Every Marketer Needs to Know</div>
      <div class="blog-excerpt">From AI-generated content to predictive keyword tools — the full breakdown of how AI is reshaping search.</div>
      <div class="blog-meta"><span class="blog-date">Coming Soon</span><span class="blog-read">10 min read</span></div>
    </div>
  </div>
  <div class="blog-card">
    <div class="blog-thumb" style="background:linear-gradient(135deg,rgba(20,184,166,.15),rgba(37,99,235,.12))">🔗</div>
    <div class="blog-body">
      <div class="blog-tag">Link Building</div>
      <div class="blog-title">10 White-Hat Link Building Strategies That Actually Work in 2025</div>
      <div class="blog-excerpt">No PBNs. No spam. Just proven outreach and content strategies that earn real authority backlinks.</div>
      <div class="blog-meta"><span class="blog-date">Coming Soon</span><span class="blog-read">8 min read</span></div>
    </div>
  </div>
  <div class="blog-card">
    <div class="blog-thumb" style="background:linear-gradient(135deg,rgba(168,85,247,.15),rgba(37,99,235,.12))">📊</div>
    <div class="blog-body">
      <div class="blog-tag">Technical SEO</div>
      <div class="blog-title">Core Web Vitals 2025: The Complete Guide to Passing Google's Test</div>
      <div class="blog-excerpt">LCP, CLS, INP — everything you need to know to ace Google's performance metrics and rank higher.</div>
      <div class="blog-meta"><span class="blog-date">Coming Soon</span><span class="blog-read">12 min read</span></div>
    </div>
  </div>
  <div class="blog-card">
    <div class="blog-thumb" style="background:linear-gradient(135deg,rgba(234,179,8,.12),rgba(37,99,235,.12))">📍</div>
    <div class="blog-body">
      <div class="blog-tag">Local SEO</div>
      <div class="blog-title">The Ultimate Local SEO Checklist for European Businesses in 2025</div>
      <div class="blog-excerpt">Step-by-step guide to dominating Google Maps and local search results — focused on the European market.</div>
      <div class="blog-meta"><span class="blog-date">Coming Soon</span><span class="blog-read">9 min read</span></div>
    </div>
  </div>
  <div class="blog-card">
    <div class="blog-thumb" style="background:linear-gradient(135deg,rgba(239,68,68,.12),rgba(37,99,235,.12))">🌍</div>
    <div class="blog-body">
      <div class="blog-tag">International SEO</div>
      <div class="blog-title">Hreflang Explained: The Definitive Guide to International SEO</div>
      <div class="blog-excerpt">How to correctly implement hreflang tags, avoid common mistakes, and expand your reach globally.</div>
      <div class="blog-meta"><span class="blog-date">Coming Soon</span><span class="blog-read">11 min read</span></div>
    </div>
  </div>
  <div class="blog-card">
    <div class="blog-thumb" style="background:linear-gradient(135deg,rgba(16,185,129,.12),rgba(37,99,235,.12))">💼</div>
    <div class="blog-body">
      <div class="blog-tag">Case Study</div>
      <div class="blog-title">Case Study: 0 to 18,000 Monthly Visitors in 8 Months — UK E-Commerce</div>
      <div class="blog-excerpt">Full breakdown of the strategy, tools, and tactics used to scale a UK fashion brand from scratch.</div>
      <div class="blog-meta"><span class="blog-date">Coming Soon</span><span class="blog-read">15 min read</span></div>
    </div>
  </div>
</div>

<script src="js/aiseoa.js"></script>
<script>
injectFooter();
function subscribe(){
  const email = document.getElementById('sub-email').value.trim();
  if(!email || !email.includes('@')){ alert('Please enter a valid email.'); return; }
  document.getElementById('sub-success').style.display = 'block';
  document.getElementById('sub-email').value = '';
}
</script>
</body>
</html>
