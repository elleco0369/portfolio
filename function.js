
const slider = document.getElementById('dark-light-slider');

function updateThumb(value) {
  let emojiSvg;

  if (value < 50) {
    emojiSvg = `data:image/svg+xml,` + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="10" fill="#8b8b8b"/>
        <circle cx="23" cy="20" r="8" fill="#3f3f3f"/>
      </svg>
    `);
  } else {
    emojiSvg = `data:image/svg+xml,` + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="10" fill="gold"/>
      </svg>
    `);
  }

  slider.style.setProperty('--thumb-image', `url('${emojiSvg}')`);
}

function updateTheme(value) {
  if (value < 50) {
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.add('light-theme');
  }
}

function updateTrackFill(value) {
  const percent = value;
  slider.style.background = `linear-gradient(to right, var(--surface-a4) ${percent}%, var(--surface-a2) ${percent}%)`;
}

function snapToNearest() {
  const value = parseInt(slider.value);
  if (value < 50) {
    slider.value = 0;
  } else {
    slider.value = 100;
  }
  updateThumb(slider.value);
  updateTheme(slider.value);
  updateTrackFill(slider.value);
}

updateThumb(slider.value);
updateTheme(slider.value);
updateTrackFill(slider.value);

slider.addEventListener('input', () => {
  updateThumb(slider.value);
  updateTheme(slider.value);
  updateTrackFill(slider.value);
});

slider.addEventListener('change', snapToNearest); 
slider.addEventListener('touchend', snapToNearest); 






// Translations

document.querySelectorAll('nav .right button').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.textContent.trim().toLowerCase();
      switchLanguage(lang);
    });
  });


  function switchLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
  
    document.getElementById('hero-heading').textContent = t.heroHeading;
    document.getElementById('about-me-title').textContent = t.aboutMeTitle;
    document.getElementById('aboutme').textContent = t.aboutMe;
    document.getElementById('hero-text').textContent = t.occupation;
    document.getElementById('skills-heading').textContent = t.skillsHeading;
    document.getElementById('contact-heading').textContent = t.contactHeading;
    document.getElementById('contact-text').textContent = t.contactText;
  
    localStorage.setItem('siteLanguage', lang);
  }

  const saved = localStorage.getItem('siteLanguage');
  if (saved) switchLanguage(saved);


  const translations = {
    en: {
      heroHeading: "Hi, I'm Bedirhan.",
      aboutMeTitle: "About Me",
      aboutMe: "Since I was around 14 year old I studied C#, Python, Java, JavaScript and similar languages and currently I am a 2nd year student at MEF University. In future I am planning to study more on cybersecurity field and get my master's license from Virginia Commonwealth University.",
      occupation: "Welcome to my portfolio site.",
      skillsHeading: "Skills",
      contactHeading: "Contact",
      contactText: "Feel free to get in touch!"
    },
    tr: {
      heroHeading: "Merhaba, ben Bedirhan.",
      aboutMeTitle: "Hakkımda",
      aboutMe: "Çocukluğumdan itibaren C#, Python, Java, JavaScript ve benzeri dillerde kendimi geliştirdim ve şu anda MEF Üniversitesinde 2. Sınıf öğrencisiyim. Gelecekte kendimi sibergüvenlik dalında daha fazla geliştirmek ve Virginia Commonwealth Üniversitesinden Master diploması almayı planlıyorum.",
      occupation: "Portföy siteme hoş geldiniz.",
      skillsHeading: "Yetenekler",
      contactHeading: "İletişim",
      contactText: "Benimle iletişime geçmekten çekinmeyin!"
    },
    jp: {
      heroHeading: "こんにちは、Bedirhanです。",
      aboutMeTitle: "私について",
      aboutMe: "幼い頃からC#、Python、Java、JavaScriptなどの言語を学び、現在はMEF大学の2年生です。将来はサイバーセキュリティ分野をさらに学び、バージニア・コモンウェルス大学で修士号を取得したいと考えています。",
      occupation: "私のポートフォリオサイトへようこそ。",
      skillsHeading: "スキル",
      contactHeading: "連絡先",
      contactText: "お気軽にご連絡ください！"
    }
};