# 🚀 GCOEC Classroom - Deployment Guide

## Step-by-Step Deployment to `gcoec.pages.dev`

---

## 📋 Prerequisites

1. **GitHub Account** (to host repository)
2. **Cloudflare Account** (for Pages deployment)
3. **Domain Access** (to configure `gcoec.pages.dev`)

---

## 🗂️ Step 1: Create New Repository

### **Option A: New Repository**
```bash
# Create new repository on GitHub
# Repository name: gcoec-classroom
# Description: GCOEC Digital Classroom Platform
# Public/Private: Your choice
```

### **Option B: Copy Files**
```bash
# Copy all files from gcoec-classroom/ folder to new repo
git init
git add .
git commit -m "Initial commit: GCOEC Classroom platform"
git remote add origin https://github.com/YOUR_USERNAME/gcoec-classroom.git
git push -u origin main
```

---

## 🌐 Step 2: Cloudflare Pages Setup

### **2.1 Connect Repository**
1. Go to **Cloudflare Dashboard** → **Pages**
2. Click **"Create a project"**
3. Select **"Connect to Git"**
4. Choose your `gcoec-classroom` repository
5. Click **"Begin setup"**

### **2.2 Build Configuration**
```
Project name: gcoec-classroom
Production branch: main
Build command: (leave empty)
Build output directory: /
Root directory: (leave empty)
```

### **2.3 Deploy**
- Click **"Save and Deploy"**
- Wait for deployment (1-2 minutes)
- You'll get a URL like: `gcoec-classroom.pages.dev`

---

## 🔗 Step 3: Custom Domain Setup

### **3.1 Add Custom Domain**
1. In Cloudflare Pages → Your project
2. Go to **"Custom domains"** tab
3. Click **"Set up a custom domain"**
4. Enter: `gcoec.pages.dev`
5. Follow DNS configuration steps

### **3.2 DNS Configuration**
Add CNAME record:
```
Type: CNAME
Name: gcoec
Value: gcoec-classroom.pages.dev
```

---

## ⚙️ Step 4: Backend Configuration

### **4.1 Update CORS Settings**
In your backend `app.py`, add the new domain:

```python
# Add to CORS origins
CORS(app, origins=[
    "https://pyq-portal.pages.dev",
    "https://gcoec.pages.dev",  # Add this line
    "http://localhost:3000",
    "http://127.0.0.1:3000"
])
```

### **4.2 Deploy Backend**
```bash
# Commit and push backend changes
git add backend/app.py
git commit -m "Add CORS support for gcoec.pages.dev"
git push origin main
```

Wait for Render to redeploy (2-3 minutes)

---

## 🧪 Step 5: Testing

### **5.1 Test URLs**
- **Home:** `https://gcoec.pages.dev`
- **Student Login:** `https://gcoec.pages.dev/login`
- **Admin Login:** `https://gcoec.pages.dev/admin`

### **5.2 Test Functionality**
1. ✅ Student login/registration
2. ✅ Student dashboard
3. ✅ Class access and notes
4. ✅ Assignment submission
5. ✅ Admin login
6. ✅ Class management
7. ✅ Assignment creation

---

## 🔄 Step 6: Redirects (Optional)

### **6.1 Redirect from Main Portal**
If you want to redirect classroom links from the main portal:

In main repository `_redirects`:
```
# Redirect classroom routes to new domain
/student_login.html     https://gcoec.pages.dev/login 301
/student_dashboard.html https://gcoec.pages.dev/dashboard 301
/student_classroom.html https://gcoec.pages.dev/classroom 301
/admin_classroom.html   https://gcoec.pages.dev/admin/classroom 301
```

---

## 📊 Step 7: Monitoring & Analytics

### **7.1 Cloudflare Analytics**
- Automatic traffic analytics
- Performance metrics
- Error tracking

### **7.2 Custom Analytics (Optional)**
Add Google Analytics or other tracking:
```html
<!-- Add to all HTML files before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🛡️ Step 8: Security & Performance

### **8.1 Security Headers**
Cloudflare Pages automatically adds:
- HTTPS enforcement
- Security headers
- DDoS protection

### **8.2 Performance Optimization**
- Automatic CDN distribution
- Image optimization
- Minification
- Caching

---

## 🚨 Troubleshooting

### **Common Issues:**

**1. 404 Errors**
- Check `_redirects` file syntax
- Verify file names match exactly

**2. API Connection Issues**
- Verify CORS settings in backend
- Check API URL in JavaScript files
- Ensure backend is deployed and running

**3. Authentication Problems**
- Clear browser cache and cookies
- Check localStorage/sessionStorage
- Verify JWT token handling

**4. File Upload Issues**
- Check Cloudinary configuration
- Verify file size limits
- Test with different file types

---

## 📞 Support Checklist

Before deployment, ensure:
- [ ] All files copied correctly
- [ ] Repository created and pushed
- [ ] Cloudflare Pages configured
- [ ] Custom domain set up
- [ ] Backend CORS updated
- [ ] All features tested
- [ ] Documentation updated

---

## 🎯 Post-Deployment

### **Immediate Tasks:**
1. Test all functionality
2. Create admin accounts
3. Set up initial classes
4. Train users on new URL

### **Ongoing Maintenance:**
1. Monitor analytics
2. Update content regularly
3. Backup database
4. Security updates

---

**Deployment Time:** ~30 minutes
**Go-Live:** `https://gcoec.pages.dev` 🚀