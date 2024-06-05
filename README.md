# Electronic Workbook

### Project Description

개인적으로 사용하기 위한 연습용 전자 필기시험 프로젝트

목적 - 이동간 자격증 시험 시 필기 기출문제를 간편하게 핸드폰으로 연습하기 위해 만듬

---

### Tech Stack

- package
  - pnpm
    - 효율적인 디스크 사용을 위해 채택
- library
  - vite
    - 프로젝트 building용으로 사용 ESModule을 이용해 빠른 HMR을 지원하기 떄문에 채택
    - TDD로 진행하지 않기때문에 create-react-app의 필요성을 느끼지 못했으며, 기본 구조 자체가 lite해지는 장점을 봄
  - react
  - typescript
  - react-router-dom
  - react-toastify
  - styled-components
  - gh-pages
    - 쉬운 github page 배포를 위해 채택
  - eslint
  - prettier

---

### Folder Tree

```bash
- public
	- images
- src
	- assets
	- components
	- context
	- layout
	- lib
	- pages
```

---

### Command

```bash
> pnpm run dev // dev server open
> pnpm run build // project build
> pnpm run lint // eslint check
> pnpm run preview // vite preview
> pnpm run predeploy // gh-pages pre deploy
> pnpm run deploy // gh-pages deploy
```
