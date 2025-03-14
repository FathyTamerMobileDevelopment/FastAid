// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                nationalId: document.getElementById('nationalId').value,
                password: document.getElementById('password').value,
                illness: document.getElementById('illness').value
            };

            // Store in localStorage (in a real app, this would be sent to a server)
            localStorage.setItem('userInfo', JSON.stringify(formData));

            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }
});

// Add to main.js
function switchLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all text elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(preferredLanguage);
});

// Add this to your main.js or in a script tag
function switchLanguage(lang) {
    // Set language direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Debug log
    console.log('Language switched to:', lang);
    console.log('Elements updated:', elements.length);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(preferredLanguage);
});

// Make sure translations object is available
const translations = {
    en: {
        home: "Home",
        services: "Services",
        about: "About",
        login: "Login",
        signup: "Sign Up",
        heroTitle: "Your Personal First Aid Assistant",
        heroDesc: "Get instant access to personalized first aid information through our innovative QR code system.",
        getStarted: "Get Started",
        ourServices: "Our Services",
        personalQR: "Personal QR Code",
        personalQRDesc: "Access your medical information and first aid instructions instantly",
        emergencyInfo: "Emergency Information",
        emergencyInfoDesc: "Quick access to critical health information during emergencies",
        profileManagement: "Profile Management",
        profileManagementDesc: "Easy updates to your health information and conditions",

        // Why Choose Us Section
        whyChooseUs: "Why Choose FirstAid+",
        secure: "Secure & Private",
        secureDesc: "Your medical information is encrypted and secure",
        instantAccess: "Instant Access",
        instantAccessDesc: "Quick access to your medical information via QR code",
        easyUpdates: "Easy Updates",
        easyUpdatesDesc: "Update your medical information anytime, anywhere",
        alwaysAvailable: "Always Available",
        alwaysAvailableDesc: "24/7 access to your medical profile",

        // How It Works Section
        howItWorks: "How It Works",
        step1Title: "Sign Up",
        step1Desc: "Create your personal medical profile",
        step2Title: "Add Information",
        step2Desc: "Input your medical conditions and emergency contacts",
        step3Title: "Get Your QR Code",
        step3Desc: "Receive your unique QR code",
        step4Title: "Ready to Use",
        step4Desc: "Share your QR code for instant medical information access",

        // Statistics Section
        activeUsers: "Active Users",
        support: "Support",
        secure: "Secure",

        // About Section
        aboutUs: "About Us",
        aboutDesc1: "We're dedicated to making first aid information accessible and personalized. Our innovative QR code system ensures that critical medical information is always at your fingertips.",
        aboutDesc2: "With FirstAid+, you can manage your health information and access specific first aid instructions tailored to your conditions.",

        // Footer
        quickLinks: "Quick Links",
        contact: "Contact",
        emergency: "Emergency",
        emergencyHotline: "24/7 Emergency Hotline:",
        footerDesc: "Your go-to personal first aid assistant, providing instant access to tailored medical information and emergency resources. With our innovative QR code system, you can manage your health details and ensure vital information is always at your fingertips. Stay prepared and informed with FastAid."
     },
    ar: {
        home: "الرئيسية",
        services: "الخدمات",
        about: "من نحن",
        login: "تسجيل الدخول",
        signup: "إنشاء حساب",
        heroTitle: "مساعدك الشخصي للإسعافات الأولية",
        heroDesc: "احصل على وصول فوري لمعلومات الإسعافات الأولية من خلال نظام رمز QR المبتكر",
        getStarted: "ابدأ الآن",
        ourServices: "خدماتنا",
        personalQR: "رمز QR الشخصي",
        personalQRDesc: "الوصول الفوري إلى معلوماتك الطبية وتعليمات الإسعافات الأولية",
        emergencyInfo: "معلومات الطوارئ",
        emergencyInfoDesc: "وصول سريع إلى المعلومات الصحية الحرجة في حالات الطوارئ",
        profileManagement: "إدارة الملف الشخصي",
        profileManagementDesc: "تحديثات سهلة لمعلوماتك الصحية وحالاتك",

        // Why Choose Us Section
        whyChooseUs: "لماذا تختار FirstAid+",
        secure: "آمن وخاص",
        secureDesc: "معلوماتك الطبية مشفرة وآمنة",
        instantAccess: "وصول فوري",
        instantAccessDesc: "وصول سريع إلى معلوماتك الطبية عبر رمز QR",
        easyUpdates: "تحديثات سهلة",
        easyUpdatesDesc: "قم بتحديث معلوماتك الطبية في أي وقت وأي مكان",
        alwaysAvailable: "متاح دائماً",
        alwaysAvailableDesc: "الوصول إلى ملفك الطبي على مدار 24/7",

        // How It Works Section
        howItWorks: "كيف يعمل",
        step1Title: "التسجيل",
        step1Desc: "أنشئ ملفك الطبي الشخصي",
        step2Title: "أضف المعلومات",
        step2Desc: "أدخل حالاتك الطبية وجهات اتصال الطوارئ",
        step3Title: "احصل على رمز QR",
        step3Desc: "استلم رمز QR الخاص بك",
        step4Title: "جاهز للاستخدام",
        step4Desc: "شارك رمز QR للوصول الفوري إلى معلوماتك الطبية",

        // Statistics Section
        activeUsers: "مستخدم نشط",
        support: "دعم الفني",
        secure: "الأمـــان",

        // About Section
        aboutUs: "من نحن",
        aboutDesc1: "نحن مكرسون لجعل معلومات الإسعافات الأولية في متناول الجميع وشخصية. يضمن نظام رمز QR المبتكر لدينا أن تكون المعلومات الطبية الحرجة في متناول يدك دائماً.",
        aboutDesc2: "مع FirstAid+، يمكنك إدارة معلوماتك الصحية والوصول إلى تعليمات الإسعافات الأولية المخصصة لحالاتك.",

        // Footer
        quickLinks: "روابط سريعة",
        contact: "اتصل بنا",
        emergency: "طوارئ",
        emergencyHotline: "خط الطوارئ 24/7:",
        
    }
};