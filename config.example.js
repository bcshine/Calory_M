// config.example.js
// 이 파일을 config.js로 복사하고 실제 API key를 입력하세요

const CONFIG = {
    GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE',
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'
};

// 브라우저 환경에서 사용
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Node.js 환경에서 사용 (필요시)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 