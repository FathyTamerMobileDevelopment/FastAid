// qr.js

document.addEventListener('DOMContentLoaded', function() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    
    if (userInfo) {
        // Create QR code data
        const qrData = {
            name: userInfo.name,
            illnesses: userInfo.illnesses || [], // Get illnesses array
            emergencyContact: userInfo.phone,
            id: userInfo.nationalId
        };
        
        // Create absolute URL with data
        const currentURL = window.location.href;
        const baseURL = currentURL.substring(0, currentURL.lastIndexOf('/') + 1);
        const profileUrl = baseURL + `profile-view.html?data=${encodeURIComponent(JSON.stringify(qrData))}`;
        
        // Generate QR Code
        const qrCodeDiv = document.getElementById('qrcode');
        if (qrCodeDiv) {
            new QRCode(qrCodeDiv, {
                text: profileUrl,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        }
    }
});