# 🍽️ 칼로리 계산기

AI 기반 음식 사진 칼로리 계산 웹앱입니다.

## 🚀 주요 기능

- 📷 사진 촬영/업로드를 통한 음식 인식
- 🤖 Gemini AI를 이용한 정확한 칼로리 계산
- 🧮 상세한 계산 과정 표시
- 🏃‍♂️ 칼로리 소모 운동량 제시
- 📱 모바일 반응형 디자인
- 📋 결과 복사 기능

## 🛠️ 설치 및 설정

### 1. 프로젝트 클론
```bash
git clone [repository-url]
cd calory-calculator
```

### 2. API 키 설정
1. `config.example.js` 파일을 `config.js`로 복사
2. `config.js` 파일에서 `YOUR_GEMINI_API_KEY_HERE`를 실제 Gemini API 키로 교체

```javascript
const CONFIG = {
    GEMINI_API_KEY: 'your-actual-api-key-here',
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'
};
```

### 3. 이미지 파일 준비
`images/` 폴더에 다음 파일들을 준비:
- `menu1.jpg` - 김치찌개 이미지
- `menu2.jpg` - 스파게티 이미지  
- `menu3.jpg` - 햄버거 이미지
- `menu4.jpg` - 샌드위치 이미지

### 4. 실행
웹 서버에서 `index.html` 파일을 실행하거나 로컬 서버를 사용:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server 필요)
npx http-server

# Live Server (VS Code Extension)
```

## 🔧 API 키 획득 방법

1. [Google AI Studio](https://aistudio.google.com/)에 접속
2. Google 계정으로 로그인
3. "Get API Key" 클릭
4. 새 프로젝트 생성 또는 기존 프로젝트 선택
5. API 키 복사하여 `config.js`에 붙여넣기

## 📁 프로젝트 구조

```
칼로리-계산기/
│
├── index.html          # 메인 웹앱 파일
├── config.js           # API 키 설정 (Git에서 제외)
├── config.example.js   # API 키 설정 예시
├── .gitignore          # Git 제외 파일 목록
├── README.md           # 프로젝트 설명
│
└── images/             # 샘플 이미지 폴더
    ├── menu1.jpg       # 김치찌개
    ├── menu2.jpg       # 스파게티
    ├── menu3.jpg       # 햄버거
    └── menu4.jpg       # 샌드위치
```

## 🎨 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **AI**: Google Gemini 1.5 Flash API
- **Font**: NanumSquareNeo (넥슨체)
- **Design**: 모바일 반응형, 그라디언트 UI

## 🔒 보안 주의사항

- ⚠️ **절대로 API 키를 Git에 커밋하지 마세요!**
- `config.js` 파일은 `.gitignore`에 포함되어 있습니다
- 프로덕션 환경에서는 환경변수나 서버사이드 프록시 사용을 권장합니다

## 📸 사용법

1. 📷 "사진 촬영" 또는 📁 "갤러리 선택" 버튼 클릭
2. 음식 사진 선택/촬영
3. AI가 자동으로 음식 인식 및 칼로리 계산
4. 📊 상세 계산 과정 및 🏃‍♂️ 운동량 확인
5. 📋 "결과 복사" 버튼으로 결과 공유

## 🤝 기여하기

1. Fork 프로젝트
2. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
3. 변경사항 커밋 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push (`git push origin feature/AmazingFeature`)
5. Pull Request 생성

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## ⚡ 빠른 시작

```bash
# 1. 레포지토리 클론
git clone [your-repo-url]

# 2. 디렉토리 이동  
cd calory-calculator

# 3. API 키 설정
cp config.example.js config.js
# config.js 파일에서 API 키 수정

# 4. 웹 서버 실행
python -m http.server 8000

# 5. 브라우저에서 localhost:8000 접속
```

---

🍽️ **맛있는 음식의 칼로리를 손쉽게 계산해보세요!** ✨

