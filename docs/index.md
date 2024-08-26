---
layout: home

hero:
  name: 스스로 누적복습
  text: "Ella's Notes"
  tagline: 구글 시트에 정리하고, 복습하고 또 복습하자.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on Google Play
      link: https://play.google.com/store/apps/details?id=com.shimnssso.headonenglish
  image:
    src: /ellas_notes_white_512.png
    alt: Test

features:
  - icon: 📚
    title: 퀴즈
    details: 문장 순서 맞추기
    link: feature/quiz
  - icon: 📞
    title: ChatGPT 연결
    details: 음성 대화를 위한 ChatGPT 연결
    link: feature/chatgpt
  - icon: 📅
    title: 학습이력
    details: 달력에 학습이력 표시
    link: feature/history
  - icon: 📽️
    title: 미디어 재생
    details: 유튜브나 온라인상의 미디어 url 연결
    link: media

---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>