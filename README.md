# 🎓 GCOEC Classroom Portal

**Government College of Engineering & Ceramics - Digital Classroom Platform**

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

### **For Admins/Teachers:**
- 👨‍🏫 Manage classes and students
- 📄 Upload notes and materials
- 📋 Create and manage assignments
- ✅ Grade student submissions
- 📈 Track student progress

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
├── index.html              # Landing page
├── student_login.html      # Student authentication
├── student_dashboard.html  # Student class overview
├── student_classroom.html  # Class notes & assignments
├── admin_login.html        # Admin authentication  
├── admin_classroom.html    # Class management
├── admin_assignments.html  # Assignment management
├── student_auth.js         # Student authentication logic
├── auth.js                 # Admin authentication logic
├── _redirects              # Cloudflare Pages routing
└── README.md               # This file
```

---

## 🚀 Deployment

### **Cloudflare Pages Setup:**
1. Connect GitHub repository
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

### **Admin Endpoints:**
- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/classes` - Get all classes
- `POST /api/admin/classes` - Create new class
- `POST /api/admin/classes/{id}/notes` - Upload notes
- `POST /api/admin/classes/{id}/assignments` - Create assignment

---

## 🎨 Design System

### **Colors:**
- **Primary:** Blue (#2563eb, #1d4ed8)
- **Secondary:** Purple (#7c3aed, #6d28d9)
- **Success:** Green (#059669)
- **Warning:** Orange (#ea580c)
- **Error:** Red (#dc2626)

### **Typography:**
- **Headings:** Poppins (600, 700, 800)
- **Body:** Inter (400, 500, 600, 700)

### **Components:**
- Modern card-based design
- Gradient headers
- Hover animations
- Mobile-first responsive
- Clean form inputs

---

## 🔐 Security Features

- JWT token authentication
- Secure session management
- Role-based access control
- File type validation
- CORS protection

---

## 📱 Mobile Support

- Fully responsive design
- Touch-friendly interface
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
- Test all authentication flows
- Verify file upload/download
- Check mobile responsiveness
- Validate form submissions

---

## 📊 Analytics & Monitoring

- Cloudflare Analytics (built-in)
- Error tracking via browser console
- Performance monitoring
- User engagement metrics

---

## 🔄 Updates & Maintenance

### **Deployment Process:**
1. Push changes to GitHub
2. Cloudflare Pages auto-deploys
3. Changes live in 1-2 minutes

### **Backend Updates:**
- Backend hosted separately on Render
- Independent deployment cycle
- API versioning for compatibility

---

## 📞 Support

**Technical Issues:**
- Check browser console for errors
- Verify internet connection
- Clear browser cache if needed

**Feature Requests:**
- Contact system administrator
- Submit via college IT department

---

## 📄 License

© 2026 Government College of Engineering & Ceramics. All rights reserved.

---

**Last Updated:** January 31, 2026
**Version:** 1.0.0