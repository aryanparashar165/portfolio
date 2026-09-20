# Setup Guide: Profile Picture & Certifications Page

## 🎯 Quick Setup Summary

You now have:
1. ✅ **Email button** in hero section
2. ✅ **Profile picture placeholder** (ready for your photo)
3. ✅ **Dedicated Certifications page** with all 10+ badges
4. ✅ **Credly widget** showing live badges
5. ✅ **Improved signal card** showing current role

---

## 📸 Adding Your Profile Picture

### **Step 1: Prepare Your Image**

1. **Get a professional headshot:**
   - Clean background (white or light gray)
   - Well-lit
   - Head and shoulders visible
   - Minimum 300x300 pixels
   - Square format recommended

2. **Optimize the image:**
   - Save as JPG or PNG
   - Compress to ~100KB (use TinyPNG or similar)
   - Name it something simple: `profile.jpg` or `headshot.png`

### **Step 2: Upload to Your Project**

1. Save your image in the `images/` folder
2. Name it `profile.jpg` (or your chosen name)

### **Step 3: Update HTML**

In `index.html`, find this line:

```html
<div class="profile-placeholder">
  <i class="bi bi-person-circle"></i>
</div>
```

Replace with:

```html
<div class="profile-placeholder">
  <img src="images/profile.jpg" alt="Aryan Parashar - Professional headshot">
</div>
```

**That's it!** Your photo will automatically resize and fit the circular frame.

---

## 🏆 About the Certifications Page

### **What's Included**

✅ **Live Credly Widget** - Shows actual badges from your Credly account  
✅ **10 Detailed Credential Cards** - Each badge with description and link  
✅ **Professional Layout** - Mobile-responsive design  
✅ **Statistics Section** - Shows certification count and achievements  
✅ **Direct Badge Links** - Click to view on Credly

### **How It Works**

The certifications page (`certifications.html`) displays:

1. **Credly Widget** (Top section)
   - Shows actual badge images
   - Updates automatically with your Credly profile
   - Clickable badges link to credential details

2. **Detailed List** (Lower section)
   - All 10 certifications in card format
   - Professional descriptions
   - Issue dates and status
   - Direct links to each badge

### **Updating Badges**

**When you earn a new badge:**

1. Get the **Credly badge ID** from the embed code
2. Add it to `certifications.html` in this section:

```html
<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="YOUR_NEW_ID_HERE" data-share-badge-host="https://www.credly.com"></div>
```

3. Add a new credential card below

---

## 📄 File Structure

After setup, your portfolio should look like:

```
project-root/
├── index.html                    (Main portfolio)
├── certifications.html           (NEW - All badges)
├── css/
│   └── portfolio.css            (Updated with new styles)
├── js/
│   └── portfolio.js
├── images/
│   ├── favicon.svg
│   └── profile.jpg              (NEW - Your photo)
└── README.md
```

---

## 🔗 Navigation Updates

The portfolio now has:

**Main Portfolio Links:**
- ✅ "View my work" → Projects section
- ✅ "LinkedIn" → Your LinkedIn profile
- ✅ **"Email" → Your email** (NEW!)

**Credentials Section:**
- ✅ "View all badges" → Certifications page (NEW!)
- ✅ "Credly profile" → Your Credly profile

**Certifications Page:**
- ✅ "← Back to portfolio" → Returns to main page
- ✅ Individual badge links → Credly verification
- ✅ "Get in touch" → Contact form on main page

---

## 🎨 Styling the Profile Picture

### **Default Style (Circular)**
The profile picture automatically displays as a circle. No extra CSS needed!

### **Customizing (Optional)**

If you want to change the appearance, edit `portfolio.css`:

```css
.profile-placeholder {
  width: 100%;
  max-width: 300px;          /* Change size */
  aspect-ratio: 1;
  margin: 0 auto;
  background: linear-gradient(...);  /* Change background */
  border: 2px dashed var(--border-color);
  border-radius: 1rem;       /* Change from 1rem to 50% for perfect circle */
}
```

---

## ✅ Testing Checklist

After setup, verify:

- [ ] Profile picture displays correctly
- [ ] Picture looks good on mobile
- [ ] Email button in hero section works
- [ ] "View all badges" link goes to certifications page
- [ ] Certifications page loads properly
- [ ] Credly badges display correctly
- [ ] All badge links work
- [ ] Mobile menu includes link to certifications
- [ ] Back button on certifications page works
- [ ] No broken images or 404 errors

---

## 🚀 Deploy Changes

1. **Update files:**
   ```
   - Replace index.html
   - Add certifications.html
   - Replace portfolio.css
   - Add your profile.jpg to images/
   ```

2. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add profile picture and full certifications page"
   git push origin main
   ```

3. **Test live site** - Visit your portfolio URL

---

## 📸 Profile Picture Best Practices

### **What Works Well:**
✅ Professional headshot  
✅ Clean, neutral background  
✅ Good lighting  
✅ Business casual clothing  
✅ Direct eye contact  
✅ Genuine smile  
✅ High quality (no pixelation)  

### **What to Avoid:**
❌ Casual/party photos  
❌ Very old photos  
❌ Heavily filtered images  
❌ Low resolution  
❌ Distracting backgrounds  
❌ Group photos (crop to just you)  

---

## 🎯 Pro Tips

1. **Image Optimization:**
   - Use a compression tool (TinyPNG, ImageOptim)
   - Smaller file = faster loading
   - Aim for ~100KB JPG

2. **Professional Look:**
   - Use consistent branding
   - Match your LinkedIn photo (helps with recognition)
   - Update yearly or when you change appearance

3. **Mobile Display:**
   - Test on your phone to see how it looks
   - Image adjusts automatically for all screen sizes

4. **Badge Management:**
   - Keep certifications page updated
   - Add new badges as you earn them
   - Remove expired certifications (if any)

---

## 🔄 Regular Maintenance

### **Weekly/Monthly:**
- Check all links still work
- Verify Credly badges display

### **Quarterly:**
- Update role/focus if it changes
- Add new certifications
- Update project list if needed

### **Yearly:**
- Update profile picture
- Review and refresh content
- Check for broken links

---

## 🆘 Troubleshooting

### **Profile Picture Not Showing**
1. Check file path is correct: `images/profile.jpg`
2. Verify image file exists in images folder
3. Try refreshing page (Ctrl+F5)
4. Check browser console for errors (F12)

### **Certifications Page Not Loading**
1. Make sure `certifications.html` is in root folder
2. Check file is named exactly: `certifications.html`
3. Verify portfolio.css is linked correctly
4. Check for 404 errors in console

### **Credly Badges Not Showing**
1. Check badge IDs are correct
2. Verify Credly embed script loaded
3. Check internet connection
4. Try clearing browser cache

### **Email Button Not Working**
1. Replace `aryanparashar561@gmail.com` with your actual email
2. Check mailto: link syntax is correct
3. Verify email client is set up on device

---

## 📞 Need Help?

Refer to these files:
- **IMPROVEMENTS.md** - Full portfolio improvements guide
- **QUICK_REFERENCE.md** - Bootstrap/CSS reference
- **This file** - Profile picture & certifications setup

---

## ✨ Summary

Your portfolio now has:
- ✅ Professional profile picture section
- ✅ Email contact button
- ✅ Dedicated certifications page
- ✅ Live Credly badge widget
- ✅ Mobile-responsive design
- ✅ Easy to update and maintain

**You're all set!** 🎉

Good luck showcasing your achievements! 🚀
