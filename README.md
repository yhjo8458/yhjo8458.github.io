# GitHub Pages Developer Portfolio

빌드 없이 GitHub Pages에 올릴 수 있는 정적 개발자 포트폴리오입니다. 개인 브랜딩용 원페이지 구성이고, 기본 언어는 한국어이며 영어 전환을 지원합니다.

## 수정 위치

- 텍스트, 프로젝트, 링크: `assets/js/data/portfolio-data.js`
- 레이아웃과 색상: `assets/css/styles.css`
- 화면 구조: `index.html`

`portfolio-data.js`의 `ko`, `en` 데이터는 같은 구조를 유지해야 합니다. 실제 이름, 이메일, GitHub URL, 프로젝트 정보를 교체하면 전체 화면에 반영됩니다.

## 로컬 확인

`index.html`을 브라우저로 직접 열어 확인할 수 있습니다.

PowerShell에서 간단한 로컬 서버로 확인하려면:

```powershell
python -m http.server 8080
```

그 다음 `http://localhost:8080`으로 접속합니다.

## GitHub Pages 배포

User Pages 기준 저장소 이름은 `username.github.io` 형식입니다.

```powershell
git init
git add .
git commit -m "Initial portfolio site"
gh repo create username.github.io --public --source=. --remote=origin --push
```

배포 후 사이트 주소는 `https://username.github.io/`입니다.

## 점검 항목

- 언어 토글 후 새로고침해도 선택 언어가 유지되는지 확인합니다.
- 360px, 768px, 1280px 이상 화면에서 텍스트가 넘치지 않는지 확인합니다.
- `mailto:`, GitHub, 외부 링크를 실제 값으로 교체한 뒤 동작을 확인합니다.
- 프로젝트나 링크를 비워도 브라우저 콘솔 오류 없이 화면이 유지되는지 확인합니다.
