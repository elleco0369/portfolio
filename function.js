
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


 // save selected theme

const themeSaved = localStorage.getItem('siteTheme');

if (themeSaved === 'light') {
  slider.value = 100;
  document.body.classList.add('light-theme');
} else {
  slider.value = 0;
  document.body.classList.remove('light-theme');
}

updateThumb(slider.value);
updateTrackFill(slider.value);

function updateTheme(value) {
  if (value < 50) {
    document.body.classList.remove('light-theme');
    localStorage.setItem('siteTheme', 'dark');
  } else {
    document.body.classList.add('light-theme');
    localStorage.setItem('siteTheme', 'light');
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
      const lang = button.dataset.lang;
      switchLanguage(lang);
    });
  });


  // fix experience title and skills
  const translations = {
    en: {
      heroHeading: "Hi, I'm Bedirhan.",
      aboutMeTitle: "About Me",
      aboutMe: "Since I was around 14 year old I studied C#, Python, Java, JavaScript and similar languages and currently I am a 2nd year student at MEF University. In future I am planning to study more on cybersecurity field and get my master's license from Virginia Commonwealth University.",
      skillsHeading: "Skills",
      experienceTitle: "Experience",
      experienceText: "6 months of ECU Coding experience",
      projectHeading: "Projects",
      discord: "Discord bot written with JavaScript with simple commands for basic usage.",
      mod: "A modification written with JavaScript for the game called Minecraft.",
      customerChurn: "A Machine Learning project for calculating customer churn prediction written with Python.",
      spotify: "An app for downloading mp3 files from playlist link (Spotify + YouTube).",
      chattingApp: "A chatting application written with Go. (Soon)",
    },
    tr: {
      heroHeading: "Merhaba, ben Bedirhan.",
      aboutMeTitle: "Hakkımda",
      aboutMe: "Çocukluğumdan itibaren C#, Python, Java, JavaScript ve benzeri dillerde kendimi geliştirdim ve şu anda MEF Üniversitesinde 2. Sınıf öğrencisiyim. Gelecekte kendimi sibergüvenlik dalında daha fazla geliştirmek ve Virginia Commonwealth Üniversitesinden Master diploması almayı planlıyorum.",
      skillsHeading: "Yetenekler",
      experienceTitle: "Deneyim",
      experienceText: "6 ay ECU kodlama deneyimi",
      projectHeading: "Projeler",
      discord: "JavaScript ile yazılmış, basit komutlarla temel kullanım için tasarlanmış Discord botu.",
      mod: "Minecraft adlı oyun için JavaScript ile yazılmış bir modifikasyon.",
      customerChurn: "Python ile yazılmış, müşteri kaybı tahminini hesaplayan bir makine öğrenimi projesi.",
      spotify: "Spotify ve YouTube gibi oynatma listesi bağlantılarından MP3 dosyaları indirmek için bir uygulama.",
      chattingApp: "Go diliyle yazılmış bir sohbet uygulaması. (Yakında)",
    },
    jp: {
      heroHeading: "こんにちは、Bedirhanです。",
      aboutMeTitle: "私について",
      aboutMe: "幼い頃からC#、Python、Java、JavaScriptなどの言語を学び、現在はMEF大学の2年生です。将来はサイバーセキュリティ分野をさらに学び、バージニア・コモンウェルス大学で修士号を取得したいと考えています。",
      skillsHeading: "スキル",
      experienceTitle: "経験",
      experienceText: "ECUコーディング経験6ヶ月",
      projectHeading: "プロジェクト",
      discord: "基本的な使用方法のためのシンプルなコマンドを使用して JavaScript で記述された Discord ボット。",
      mod: "Minecraftというゲーム用にJavaScriptで書かれた改造",
      customerChurn: "Python で記述された、顧客離脱予測を計算する機械学習プロジェクト。",
      spotify: "プレイリスト リンク (Spotify + YouTube) から mp3 ファイルをダウンロードするアプリ。",
      chattingApp: "Go で書かれたチャット アプリケーション。(近日公開)",
    }
};

  function switchLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
  
    document.getElementById('hero-heading').textContent = t.heroHeading;
    document.getElementById('about-me-title').textContent = t.aboutMeTitle;
    document.getElementById('about-me-text').textContent = t.aboutMe;
    document.getElementById('skills-heading').textContent = t.skillsHeading;
    document.getElementById('experience-heading').textContent = t.experienceTitle;
    document.getElementById('experience-text').textContent = t.experienceText;
    document.getElementById('project-heading').textContent = t.projectHeading;
    document.getElementById('discord').textContent = t.discord;
    document.getElementById('mod').textContent = t.mod;
    document.getElementById('customer-churn').textContent = t.customerChurn;
    document.getElementById('spotify').textContent = t.spotify;
    document.getElementById('chatting-app').textContent = t.chattingApp;


    localStorage.setItem('siteLanguage', lang);
  }

  document.querySelectorAll('nav .right button').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
  
      // remove active class from all
      document.querySelectorAll('nav .right button')
        .forEach(b => b.classList.remove('active-lang'));
  
      // add to the clicked one
      button.classList.add('active-lang');
  
      switchLanguage(lang);
    });
  });

  // save selected language
  const saved = localStorage.getItem('siteLanguage');
  if (saved) {
    switchLanguage(saved);
}
