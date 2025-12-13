# Domain Setup Guide for Converify Landing Page

## Current Setup
- **Vercel Project:** converify-landing
- **Current URL:** https://converify-landing-pry43m6rv-dor-avidans-projects.vercel.app
- **Target Domain:** www.converify.com

---

## Part 1: Add Domain in Vercel

### Step 1: Access Vercel Project Settings
1. Go to: https://vercel.com/dashboard
2. Click on **converify-landing** project
3. Go to **Settings** tab
4. Click **Domains** in the left sidebar

### Step 2: Add Custom Domain
1. In the "Domain" field, enter: `www.converify.com`
2. Click **Add**
3. Vercel will show you DNS configuration instructions

### Step 3: Note the DNS Records
Vercel will provide you with DNS records. It will look something like:

**Type:** CNAME
**Name:** www
**Value:** cname.vercel-dns.com

---

## Part 2: Configure DNS (at your domain provider)

### Option A: If you already own converify.com

**Where is converify.com registered?**
- GoDaddy?
- Namecheap?
- Cloudflare?
- Other?

**Steps (general for all providers):**

1. Log in to your domain registrar (where you bought converify.com)
2. Find DNS Management / DNS Settings / DNS Records
3. Add the CNAME record Vercel provided:
   - **Type:** CNAME
   - **Name/Host:** www
   - **Value/Points to:** cname.vercel-dns.com (or whatever Vercel shows)
   - **TTL:** Automatic or 3600

4. **Optional but recommended:** Set up root domain redirect
   - Add a redirect from `converify.com` → `www.converify.com`
   - OR add both domains in Vercel (see below)

### Option B: Add both www and root domain (Recommended)

In Vercel, add both:
1. `www.converify.com` (CNAME → cname.vercel-dns.com)
2. `converify.com` (A record → Vercel's IP addresses)

Vercel will show you the exact DNS records for both.

---

## Part 3: Verify & Wait

1. After adding DNS records, click **Refresh** in Vercel
2. DNS propagation can take **5 minutes to 48 hours** (usually ~10-30 minutes)
3. You can check status with: `dig www.converify.com` or https://dnschecker.org

---

## Part 4: SSL Certificate

Vercel automatically provisions SSL certificates via Let's Encrypt.
- This happens automatically after DNS is verified
- Usually takes 1-5 minutes
- Your site will be available at `https://www.converify.com`

---

## Testing

Once DNS is configured and propagated:

```bash
# Check if DNS is pointing to Vercel
dig www.converify.com

# Test the site
curl -I https://www.converify.com
```

Expected result: Should return 200 OK and show Vercel headers

---

## Troubleshooting

### DNS not propagating?
- Wait 10-30 minutes
- Clear your DNS cache: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
- Check at: https://dnschecker.org

### SSL certificate pending?
- Vercel needs verified DNS first
- Can take 5-10 minutes after DNS verification
- Check Vercel dashboard for status

### Still showing Vercel URL?
- Ensure CNAME record is correct
- Ensure no conflicting DNS records (delete old A/CNAME records for www)
- Check Vercel dashboard for any error messages

---

## Architecture Diagram

```
www.converify.com (marketing)
    ↓
    CNAME → Vercel
    ↓
    Converify Landing Page

app.converify.com (product)
    ↓
    Points to your Next.js app
    ↓
    Converify Dashboard
```

---

## Quick Reference

| Domain | Points To | Purpose |
|--------|-----------|---------|
| www.converify.com | Vercel (landing page) | Marketing/public site |
| app.converify.com | Your Next.js deployment | Dashboard/product |

---

## Next Steps After Domain is Live

1. ✅ Test all CTAs link to app.converify.com/auth/signup
2. ✅ Add Google Analytics (optional)
3. ✅ Set up sitemap for SEO
4. ✅ Configure www → non-www redirect (or vice versa)
