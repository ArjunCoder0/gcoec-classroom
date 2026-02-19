# 🎓 GCOEC Classroom Portal

**Government College of Engineering Chandrapur - Digital Learning Platform**

## 🌐 Live URL
**https://gcoec.pages.dev**

---

## 📚 Features

### **For Students:**
- 🔐 Secure login system
- 📖 Access digital notes and study materials
- 📝 Submit assignments online
- 📊 View grades and feedback
- 📱 Mobile-responsive design
- 🔗 Quick access to PYQ Portal

### **Platform Highlights:**
- 🏫 Government College of Engineering Chandrapur
- 📈 Live website statistics
- 💡 Modern, intuitive interface
- 🎯 Student-focused design
- 📞 Comprehensive help & support

---

## 🏗️ Architecture

### **Frontend (Cloudflare Pages):**
- **Domain:** `gcoec.pages.dev`
- **Technology:** HTML, CSS, JavaScript, Tailwind CSS
- **Icons:** Lucide Icons
- **Fonts:** Inter + Poppins

### **Backend (Render):**
- **API:** `https://pyq-automation-system.onrender.com`
- **Technology:** Python Flask
- **Database:** MongoDB Atlas
- **Storage:** Cloudinary CDN
- **Authentication:** JWT tokens

---

## 📁 File Structure

```
gcoec-classroom/
├── index.html              # Landing page with help & support
├── student_login.html      # Student authentication
├── student_dashboard.html  # Student class overview
├── student_classroom.html  # Class notes & assignments
├── student_auth.js         # Student authentication logic
├── _redirects              # Cloudflare Pages routing
└── README.md               # This file
```

---

## 🚀 Deployment

### **Cloudflare Pages Setup:**
1. Connect GitHub repository: `https://github.com/ArjunCoder0/gcoec-classroom`
2. **Build command:** (leave empty)
3. **Build output directory:** `/`
4. **Custom domain:** `gcoec.pages.dev`

### **Environment Variables:**
No frontend environment variables needed (API URL is hardcoded)

---

## 🔗 API Integration

**Backend API:** `https://pyq-automation-system.onrender.com`

### **Student Endpoints:**
- `POST /api/student/login` - Student authentication
- `GET /api/student/classes` - Get enrolled classes
- `GET /api/classes/{id}/notes` - Get class notes
- `GET /api/classes/{id}/assignments` - Get assignments
- `POST /api/assignments/{id}/submit` - Submit assignment

---

## 🎨 Design System

### **Colors:**
- **Primary:** Blue (#2563eb, #1d4ed8)
- **Secondary:** Green (#059669) for PYQ Portal links
- **Success:** Green (#059669)
- **Warning:** Orange (#ea580c)
- **Error:** Red (#dc2626)

### **Typography:**
- **Headings:** Poppins (600, 700, 800)
- **Body:** Inter (400, 500, 600, 700)

### **Components:**
- Modern card-based design
- Gradient headers and sidebar
- Hover animations
- Mobile-first responsive
- Clean form inputs
- Live statistics display

---

## 🔐 Security Features

- JWT token authentication
- Secure session management
- Student-only access (admin functionality removed)
- File type validation
- CORS protection

---

## 📱 Mobile Support

- Fully responsive design
- Touch-friendly interface
- Collapsible sidebar navigation
- Optimized for tablets and phones
- Progressive Web App ready

---

## 🛠️ Development

### **Local Development:**
```bash
# Serve files locally
python -m http.server 8000
# or
npx serve .
```

### **Testing:**
- Test student authentication flows
- Verify file upload/download
- Check mobile responsiveness
- Validate form submissions
- Test PYQ Portal integration

---

## 📊 Analytics & Monitoring

- Live website statistics in sidebar
- Cloudflare Analytics (built-in)
- Error tracking via browser console
- Performance monitoring
- User engagement metrics

---

## 🏫 College Information

**Government College of Engineering Chandrapur**
- **Location:** Chandrapur, Maharashtra, India
- **Website:** https://gcoec.ac.in
- **Email:** info@gcoec.ac.in
- **Support Hours:** 9:00 AM - 6:00 PM

---

## 🔄 Updates & Maintenance

### **Deployment Process:**
1. Push changes to GitHub: `https://github.com/ArjunCoder0/gcoec-classroom`
2. Cloudflare Pages auto-deploys
3. Changes live in 1-2 minutes

### **Backend Updates:**
- Backend hosted separately on Render
- Independent deployment cycle
- API versioning for compatibility

---

## 📞 Support

**Technical Issues:**
- Contact IT Department during support hours
- Check browser console for errors
- Verify internet connection
- Clear browser cache if needed

**Quick Links:**
- 📄 [PYQ Portal](https://pyq-portal.pages.dev)
- 🏫 [College Website](https://gcoec.ac.in)
- 🎓 [Student Login](student_login.html)

---

## 📄 License

© 2026 Government College of Engineering Chandrapur. All rights reserved.

---

**Last Updated:** January 31, 2026
**Version:** 2.0.0 - Student-Only Platform