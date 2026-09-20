# Bootstrap 5 Quick Reference for Your Portfolio

## 🎯 Most Common Classes You'll Use

### **Spacing (Margin & Padding)**
```html
<!-- Margin: m-0, m-1, m-2, m-3, m-4, m-5 -->
<div class="m-3">Margin on all sides</div>
<div class="mt-2">Margin top only</div>
<div class="mb-4">Margin bottom</div>
<div class="ms-3">Margin start (left)</div>
<div class="me-2">Margin end (right)</div>

<!-- Padding: p-0, p-1, p-2, p-3, p-4, p-5 -->
<div class="p-3">Padding all sides</div>
<div class="px-4">Padding left & right</div>
<div class="py-2">Padding top & bottom</div>
```

### **Text Alignment & Colors**
```html
<!-- Text alignment -->
<p class="text-start">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-end">Right aligned</p>

<!-- Text colors -->
<p class="text-light">Light text</p>
<p class="text-muted">Muted text</p>
<p class="text-white">White text</p>
```

### **Display & Visibility**
```html
<!-- Display -->
<div class="d-none">Hidden</div>
<div class="d-block">Block element</div>
<div class="d-flex">Flex container</div>
<div class="d-grid">Grid container</div>

<!-- Responsive display -->
<div class="d-none d-lg-block">Hidden on mobile, shown on desktop</div>
<div class="d-lg-none">Shown on mobile, hidden on desktop</div>
```

### **Flexbox (for layouts)**
```html
<!-- Flex container -->
<div class="d-flex gap-3 align-items-center justify-content-between">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Common flex utils -->
gap-2, gap-3, gap-4         <!-- Space between items -->
align-items-center          <!-- Vertical alignment -->
align-items-start           <!-- Top alignment -->
align-items-end             <!-- Bottom alignment -->
justify-content-center      <!-- Horizontal center -->
justify-content-between     <!-- Space apart -->
justify-content-around      <!-- Space around -->
flex-wrap                   <!-- Allow wrapping -->
flex-column                 <!-- Stack vertically -->
```

### **Grid (for layouts)**
```html
<div class="row g-3">           <!-- g-3 = gap between columns -->
  <div class="col-md-6">50%</div>
  <div class="col-md-6">50%</div>
</div>

<!-- Responsive columns -->
<div class="row g-4">
  <div class="col-12 col-md-6 col-lg-4">Responsive sizing</div>
</div>

<!-- Column sizes -->
col-1, col-2, col-3, ... col-12  <!-- 12-column grid -->
col-sm-6                         <!-- 50% on small+ screens -->
col-md-4                         <!-- 33% on medium+ screens -->
col-lg-3                         <!-- 25% on large+ screens -->
```

### **Buttons**
```html
<!-- Primary button -->
<button class="btn btn-primary">Click me</button>

<!-- Outlined button -->
<button class="btn btn-outline-primary">Outlined</button>

<!-- Button sizes -->
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-lg btn-primary">Large</button>

<!-- Disabled state -->
<button class="btn btn-primary" disabled>Disabled</button>

<!-- Button states -->
btn-primary, btn-secondary, btn-success, btn-danger, btn-warning, btn-info, btn-light, btn-dark, btn-outline-primary (etc)
```

### **Forms & Inputs**
```html
<!-- Form group -->
<div class="mb-3">
  <label for="name" class="form-label">Name</label>
  <input id="name" class="form-control" type="text">
</div>

<!-- Form control states -->
<input class="form-control" type="text">                    <!-- Normal -->
<input class="form-control is-valid" type="text">          <!-- Valid -->
<input class="form-control is-invalid" type="text">        <!-- Invalid -->

<!-- Form control sizes -->
<input class="form-control form-control-sm" type="text">   <!-- Small -->
<input class="form-control form-control-lg" type="text">   <!-- Large -->
```

### **Cards & Containers**
```html
<!-- Card -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <p class="card-text">Content</p>
  </div>
</div>

<!-- Container -->
<div class="container">100% width on desktop, responsive</div>
<div class="container-fluid">Always full width</div>
```

### **Badges**
```html
<span class="badge bg-primary">New</span>
<span class="badge bg-secondary">Updated</span>
<span class="badge bg-success">Success</span>

<!-- Rounded badges -->
<span class="badge rounded-pill bg-primary">Rounded</span>
```

---

## 📱 Responsive Breakpoints

Bootstrap has 6 breakpoints:

```
xs (extra small):  < 576px    (phones)
sm (small):        ≥ 576px    (small tablets)
md (medium):       ≥ 768px    (tablets)
lg (large):        ≥ 992px    (small desktops)
xl (extra large):  ≥ 1200px   (desktops)
xxl:               ≥ 1400px   (large desktops)
```

**Usage:**
```html
<!-- Hide on mobile, show on md+ -->
<div class="d-none d-md-block">Desktop only</div>

<!-- Different column sizes -->
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
  Responsive column
</div>

<!-- Different padding -->
<div class="px-2 px-md-4 px-lg-5">
  Different padding per screen size
</div>
```

---

## 🎨 Colors in Your Portfolio

Your portfolio uses **CSS variables**. Here's the mapping:

```css
/* In your portfolio.css */
--primary-color: #b6ff4d;        /* Lime green */
--secondary-color: #a38bff;      /* Purple */
--bg-dark: #10121b;              /* Dark background */
--bg-light-dark: #191c28;        /* Slightly lighter -->
--text-light: #f7f7fb;           /* Light text -->
--text-muted: rgba(255,255,255,0.66);
--border-color: rgba(255,255,255,0.15);
```

**Bootstrap color names:**
```
bg-primary, bg-secondary, bg-success, bg-danger, bg-warning, 
bg-info, bg-light, bg-dark, bg-muted
```

---

## 🔥 Most Useful Combinations

### **Center everything**
```html
<div class="d-flex align-items-center justify-content-center" style="height: 100vh;">
  Centered content
</div>
```

### **Responsive row**
```html
<div class="row g-4">
  <div class="col-md-6 col-lg-4">Responsive column</div>
  <div class="col-md-6 col-lg-4">Responsive column</div>
  <div class="col-md-6 col-lg-4">Responsive column</div>
</div>
```

### **Card with padding**
```html
<div class="card p-4">
  <h5 class="mb-3">Title</h5>
  <p class="text-muted mb-0">Content</p>
</div>
```

### **Section spacing**
```html
<section class="py-5 py-lg-8">
  <div class="container">
    <h2 class="mb-5">Section title</h2>
    <!-- Content -->
  </div>
</section>
```

### **Mobile-friendly form**
```html
<form class="row g-3">
  <div class="col-md-6">
    <label for="name" class="form-label">Name</label>
    <input id="name" class="form-control" type="text">
  </div>
  <div class="col-md-6">
    <label for="email" class="form-label">Email</label>
    <input id="email" class="form-control" type="email">
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>
</form>
```

---

## 📝 Useful CSS in Your portfolio.css

### **Custom spacing classes**
```css
/* If you want to add custom sizes */
.py-8 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
```

### **Custom text styles**
```css
/* For special emphasis */
.text-gradient {
  background: linear-gradient(135deg, #a38bff, #b6ff4d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### **Custom hover effects**
```css
.card:hover {
  border-color: var(--primary-color);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}
```

---

## 🚀 Customization Examples

### **Change Primary Color**

Find in `portfolio.css`:
```css
:root {
  --primary-color: #b6ff4d;  /* Change this */
}
```

Change to:
```css
:root {
  --primary-color: #ff6b6b;  /* Red */
}
```

All buttons, links, and accents update automatically!

### **Change All Button Styles**

Find in `portfolio.css`:
```css
.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  color: var(--bg-dark);
  font-weight: 600;
  border-radius: 0.35rem;
  padding: 0.75rem 1.75rem;
}
```

Modify to your needs:
```css
.btn-primary {
  border-radius: 2rem;  /* Pill shape -->
  padding: 1rem 2rem;   /* Larger -->
  font-size: 1.1rem;    /* Bigger text -->
}
```

### **Change Section Spacing**

Find in `portfolio.css`:
```css
.section-box {
  padding: 3rem 0;  /* Change these values */
}
```

Or in HTML:
```html
<section class="py-5 py-lg-8">  <!-- py-5 on mobile, py-lg-8 on desktop -->
```

---

## 🎯 Class Naming Convention

Bootstrap uses a consistent naming pattern:

```
{property}-{direction}-{size}
{property}-{breakpoint}-{size}

Examples:
m-3         → margin all sides (size 3)
mt-2        → margin-top (size 2)
px-4        → padding left & right (size 4)
d-md-flex   → display flex on medium+ screens
col-lg-6    → 50% width on large+ screens
text-md-center  → center text on medium+ screens
```

---

## 💡 Pro Tips

1. **Always use responsive classes:**
   ```html
   <!-- Bad -->
   <div class="col-6">50% width</div>
   
   <!-- Good -->
   <div class="col-12 col-md-6">100% mobile, 50% desktop</div>
   ```

2. **Use gap instead of margins:**
   ```html
   <!-- Bad -->
   <div class="row">
     <div class="col-md-6 mb-3">...</div>
   </div>
   
   <!-- Good -->
   <div class="row g-3">
     <div class="col-md-6">...</div>
   </div>
   ```

3. **Keep CSS DRY (Don't Repeat Yourself):**
   ```css
   /* Bad - repeating code */
   .card { border: 1px solid gray; }
   .badge { border: 1px solid gray; }
   
   /* Good - use variables -->
   .card { border: 1px solid var(--border-color); }
   .badge { border: 1px solid var(--border-color); }
   ```

4. **Mobile-first approach:**
   ```html
   <!-- Set mobile first, then override for larger screens -->
   <div class="col-12 col-md-6 col-lg-4">
     Full width on mobile, half on tablet, third on desktop
   </div>
   ```

---

## 📚 Bootstrap Resources

- **Full Bootstrap Docs:** https://getbootstrap.com/docs/5.0/
- **Bootstrap Icons:** https://icons.getbootstrap.com/
- **Bootstrap Cheatsheet:** https://bootstrap-cheatsheet.themeselection.com/
- **Bootstrap Examples:** https://getbootstrap.com/docs/5.0/examples/

---

Happy customizing! 🎉
