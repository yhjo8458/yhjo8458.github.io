# GitHub Pages 학습 실습 기록 사이트

빌드 없이 GitHub Pages에 올릴 수 있는 정적 기록 웹사이트입니다. 홍보용 포트폴리오보다 개발 학습과 실습 과정에서 얻은 내용을 정리하는 데 초점을 둡니다.

## 수정 위치

- 학습 기록, 프로젝트 내용, 링크: `assets/js/data/portfolio-data.js`
- 레이아웃과 색상: `assets/css/styles.css`
- 기본 HTML 구조: `index.html`

각 학습 기록은 `학습 주제`, `구현 정리`, `기억할 점`, `기술 스택`, `실습 결과 링크` 중심으로 작성합니다.

## 로컬 확인

`index.html`을 브라우저로 직접 열어 확인할 수 있습니다.

PowerShell에서 간단한 로컬 서버로 확인하려면:

```powershell
python -m http.server 8080
```

그 다음 `http://localhost:8080`으로 접속합니다.

## GitHub Pages 배포

```powershell
git add .
git commit -m "Update learning log content"
git push
```

배포 후 사이트 주소는 `https://yhjo8458.github.io/`입니다.

## 점검 항목

- 360px, 768px, 1280px 이상 화면에서 텍스트가 넘치지 않는지 확인합니다.
- 학습 기록의 링크가 실제 결과물로 연결되는지 확인합니다.
- 새 학습 기록을 추가해도 브라우저 콘솔 오류 없이 화면이 유지되는지 확인합니다.
