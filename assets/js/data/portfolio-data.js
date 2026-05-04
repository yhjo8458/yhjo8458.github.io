(function () {
  "use strict";

  window.PortfolioData = {
    meta: {
      title: "YHJO | 학습 실습 기록",
      description: "개발 학습과 실습에서 얻은 내용을 정리하고 재사용 가능한 지식으로 남기는 기록 웹사이트입니다."
    },
    navigation: [
      { id: "about", label: "소개" },
      { id: "projects", label: "학습 기록" },
      { id: "process", label: "정리 방식" },
      { id: "tech", label: "기술" },
      { id: "contact", label: "연락" }
    ],
    profile: {
      name: "YHJO",
      role: "개발 학습 기록",
      tagline: "프로젝트를 만들며 배운 내용을 정리하고, 다음 실습에서 다시 사용할 수 있는 지식으로 남깁니다.",
      intro: "이 사이트는 홍보용 포트폴리오보다 학습과 실습의 과정을 기록하는 공간입니다. 자동화, 정적 웹 배포, Windows 도구, 로컬 AI 실습에서 중요하게 기억할 내용을 프로젝트 단위로 정리합니다.",
      availability: "학습 내용과 실습 기록을 계속 업데이트합니다",
      location: "대한민국",
      ctas: [
        { label: "학습 기록 보기", href: "#projects", variant: "primary" },
        { label: "정리 방식 보기", href: "#process", variant: "secondary" }
      ]
    },
    heroPanel: [
      { label: "기록 목적", value: "실습 과정에서 배운 내용을 다시 사용할 수 있게 정리" },
      { label: "주요 주제", value: "Python 자동화 / GitHub Actions / Windows 배포 / 로컬 AI" },
      { label: "정리 기준", value: "문제, 구현 방식, 기억할 점, 다음에 재사용할 포인트" }
    ],
    sections: {
      about: {
        eyebrow: "소개",
        title: "완성 결과보다, 다시 써먹을 수 있는 학습 내용을 남깁니다.",
        description: "각 프로젝트는 기능 설명보다 실습 중 배운 설계 판단, 자동화 흐름, 오류 처리, 배포 경험을 중심으로 정리합니다."
      },
      projects: {
        eyebrow: "학습 및 실습 기록",
        title: "프로젝트를 통해 익힌 핵심 내용을 기록합니다.",
        description: "아래 기록은 추후 다른 프로젝트에서도 활용할 수 있도록 구현 포인트와 재사용 가능한 교훈을 중심으로 작성했습니다."
      },
      process: {
        eyebrow: "정리 방식",
        title: "실습 내용을 구조화해서 다음 작업의 기준으로 만듭니다.",
        description: "단순히 무엇을 만들었는지가 아니라 왜 그렇게 나눴는지, 어떤 문제가 있었는지, 다음에는 무엇을 재사용할지를 기록합니다."
      },
      tech: {
        eyebrow: "학습 기술",
        title: "반복 실습으로 익힌 기술을 주제별로 정리합니다.",
        description: "자동화, 웹 배포, 데스크톱 GUI, 로컬 AI, 테스트와 배포 흐름을 나누어 관리합니다."
      },
      contact: {
        eyebrow: "연락",
        title: "학습 기록과 프로젝트 내용을 계속 갱신합니다.",
        description: "아래 링크는 실제 연락처나 학습 채널로 교체해서 사용할 수 있습니다."
      }
    },
    highlights: [
      {
        title: "실습 중심 기록",
        text: "코드를 작성하며 직접 겪은 문제, 해결 과정, 배포 결과를 프로젝트 단위로 남깁니다."
      },
      {
        title: "재사용 가능한 지식",
        text: "다음 프로젝트에서 바로 참고할 수 있도록 설정, 계층 구조, 예외 처리, 배포 흐름을 정리합니다."
      },
      {
        title: "운영 경험 축적",
        text: "GitHub Actions, GitHub Pages, PyInstaller, 로컬 실행 환경처럼 실제 운영에 가까운 흐름을 반복 학습합니다."
      }
    ],
    projects: [
      {
        name: "Daily Finance Briefing",
        problem: "FinanceDataReader로 시장 데이터를 수집하고 GitHub Actions로 매일 리포트를 생성하며, 정적 사이트도 배치형 서비스처럼 운영할 수 있는지 실습했습니다.",
        solution: "Controller, Service, Domain, Infrastructure로 역할을 나누고 YAML 설정으로 종목과 리포트 메타 정보를 관리했습니다. Jinja2 템플릿으로 reports/YYYY-MM-DD.html, latest.html, index.html을 생성하고 GitHub Pages 배포까지 연결했습니다.",
        result: "정적 사이트도 데이터 수집, 가공, HTML 생성, artifact 보관, Pages 배포 흐름을 갖추면 운영형 자동화 서비스처럼 구성할 수 있다는 점을 학습했습니다. 일부 데이터 조회 실패 시 전체 생성을 중단하지 않고 카드 단위 오류로 처리하는 방식도 기억할 포인트입니다.",
        tech: ["Python", "FinanceDataReader", "Jinja2", "PyYAML", "GitHub Actions", "GitHub Pages"],
        link: "https://yhjo8458.github.io/daily_finance_briefing/"
      },
      {
        name: "실시간 암호화폐 선물 Funding Fee 대시보드",
        problem: "여러 암호화폐 선물 거래소의 USDT 무기한 선물 펀딩비를 한 화면에서 비교하며, 실시간 데이터 수집과 거래소별 API 차이를 다루는 풀스택 대시보드 구조를 실습했습니다.",
        solution: "Next.js, React, TypeScript, Tailwind CSS로 UI를 구성하고 FastAPI 백엔드에서 Binance, OKX, Bybit, Bitget, Gate public API 데이터를 수집하도록 분리했습니다. 거래소별 응답 형식은 adapter 구조로 정규화하고, 전체 티커 union 기준으로 미지원 종목은 unsupported 상태로 관리했습니다. WebSocket 우선 흐름에 REST fallback/cache를 두고 검색, 시가총액 정렬, localStorage 즐겨찾기, 펀딩비 괴리 Top 5를 구현했습니다.",
        result: "검증 시점 기준 5개 거래소, 약 617개 티커, 3,000개 이상의 거래소별 셀 데이터를 처리했습니다. 실시간 데이터에서는 live, stale, error, unsupported 같은 상태 관리가 중요하고, 거래소마다 심볼 표기, 펀딩 주기, API 응답 구조가 다르므로 정규화 계층이 필요하다는 점을 학습했습니다. 대량 티커 수집에는 캐시, 병렬 요청 제한, rate limit 대응, dev/build 실행 환경 분리가 중요하다는 점도 기억할 내용입니다.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "WebSocket", "httpx", "Vitest", "pytest"],
        link: ""
      },
      {
        name: "네이버 블로그 검색 결과 크롤링",
        problem: "네이버 블로그 검색 결과처럼 스크롤에 따라 추가 데이터가 로드되는 동적 페이지에서 특정 키워드의 글 목록을 끝까지 수집하고, 활용 가능한 CSV 데이터로 정리하는 흐름을 실습했습니다.",
        solution: "Playwright CLI로 실제 브라우저를 제어해 검색 결과 페이지에 접속하고, DOM 구조를 확인한 뒤 결과 컨테이너 기준으로 제목, 출처명, 출처 유형, 출처 주소, 블로그 ID, 발행일, URL을 추출했습니다. 페이지 높이와 결과 수가 더 이상 변하지 않을 때까지 반복 스크롤한 뒤 CSV로 저장하고, 수집 기준일인 2026.05.03 기준으로 상대 날짜를 YYYY.MM.DD 형식으로 변환했습니다.",
        result: "최종 108건을 수집했고 네이버 블로그 103건, 티스토리 5건이 포함되었습니다. 동적 페이지는 최초 HTML 요청만으로 충분하지 않으며 스크롤 로딩 종료 조건을 확인해야 한다는 점, 상대 날짜는 기준일을 정해 절대 날짜로 정규화해야 한다는 점, CSV는 행 수, URL 중복, 필수 컬럼 누락, 날짜 형식을 검증해야 신뢰할 수 있다는 점을 기억할 내용으로 정리했습니다.",
        tech: ["Playwright CLI", "Browser Automation", "DOM Parsing", "CSV", "Data Cleaning"],
        link: ""
      },
      {
        name: "네이버 키워드 분석 웹사이트",
        problem: "네이버 공식 API로 키워드 검색량, 콘텐츠 검색 결과 수, 검색 추이, 연관 키워드를 분석하면서 API가 반환하는 숫자의 의미와 한계를 구분하고, 사용자가 지표를 오해하지 않도록 표현을 설계하는 과정을 실습했습니다.",
        solution: "FastAPI, Jinja2, Chart.js, SQLite 기반 로컬 웹 도구로 구성하고 UI, Controller, Service, Repository, Domain, Infrastructure 계층을 분리했습니다. 네이버 검색광고 API, 검색 API, 데이터랩 API 호출은 Infrastructure로 분리하고 API 키는 .env에서 관리했습니다. Service 계층에서 최근 30일 PC/Mobile 검색량, 블로그/카페 검색 결과 수, 성인 키워드 여부, 데이터랩 월별 추이, 연관 키워드, 자체 등급을 계산했습니다.",
        result: "API 데이터는 값보다 의미 정의가 중요하다는 점을 학습했습니다. 검색광고 API 검색량은 최근 30일 검색량이고, 검색 API total은 콘텐츠 발행량이 아니라 검색 결과 총 개수이며, 데이터랩 ratio는 실제 검색량이 아니라 상대지수입니다. 따라서 콘텐츠 발행량보다 콘텐츠 검색 결과 수, 콘텐츠 포화 지수보다 검색결과 경쟁도처럼 지표명을 바꾸고 추정치와 원본값을 구분해야 한다는 점을 기억할 내용으로 정리했습니다.",
        tech: ["FastAPI", "Jinja2", "Chart.js", "SQLite", "httpx", "pytest", "Naver API"],
        link: ""
      },
      {
        name: "업무 문서 자동화 데스크톱 프로그램",
        problem: "Windows 환경에서 반복되는 엑셀 문서 작성과 고객사 정보 관리를 자동화하면서, GUI 프로그램도 유지보수 가능한 계층 구조로 만들 수 있는지 실습했습니다.",
        solution: "Tkinter UI에서 직접 엑셀이나 DB를 다루지 않고 Event Handler, Controller, Service, Repository, Infrastructure로 흐름을 분리했습니다. openpyxl, SQLAlchemy, SQLite, pywin32, settings.json, 템플릿 파일을 각각 책임에 맞게 나누었습니다.",
        result: "데스크톱 자동화 도구에서도 UI와 비즈니스 로직을 분리해야 테스트와 확장이 쉬워진다는 점을 확인했습니다. Excel/PDF 산출, 고객사 중복 검증, 작업 로그, PyInstaller 배포 고려는 이후 Windows 업무 도구에서 다시 사용할 수 있는 중요한 패턴입니다.",
        tech: ["Python", "Tkinter", "openpyxl", "SQLAlchemy", "SQLite", "pywin32", "PyInstaller"],
        link: ""
      },
      {
        name: "Clova Note Vibe",
        problem: "외부 API 없이 로컬 PC에서 음성 파일을 텍스트로 변환하고, 같은 STT 핵심 로직을 Windows GUI와 Web UI에서 재사용하는 구조를 실습했습니다.",
        solution: "faster-whisper 기반 TranscriptionService를 UI와 분리하고 PySide6 GUI와 FastAPI Web UI가 같은 Service를 사용하도록 설계했습니다. FFmpeg 확인, 파일 저장, 로그, Whisper 실행, 업로드 옵션은 Infrastructure 계층으로 분리했습니다.",
        result: "로컬 AI 도구는 모델 실행 자체보다 실행 환경 점검, FFmpeg 탐지, 진행률 표시, 중복 파일명 처리, PyInstaller asset 포함이 중요하다는 점을 배웠습니다. Web API 비동기 작업, polling, progress bar, pytest 기반 API 테스트는 이후 로컬 도구 웹화에 재사용할 수 있습니다.",
        tech: ["Python 3.12", "FastAPI", "PySide6", "faster-whisper", "FFmpeg", "PyInstaller", "pytest"],
        link: ""
      }
    ],
    services: [
      {
        title: "자동화 실습",
        text: "반복 업무를 데이터 흐름과 실행 단계로 나누고 자동화 가능한 단위로 바꾸는 과정을 기록합니다."
      },
      {
        title: "배포 실습",
        text: "GitHub Actions, artifact, GitHub Pages, 스케줄 실행처럼 배포와 운영 흐름을 직접 적용합니다."
      },
      {
        title: "로컬 도구 실습",
        text: "Windows GUI, PyInstaller, FFmpeg, 로컬 모델 실행처럼 PC 환경에서 발생하는 문제를 정리합니다."
      }
    ],
    process: [
      {
        title: "문제 정의",
        text: "실습에서 해결하려는 반복 작업, 입력 데이터, 출력 결과, 실패 지점을 먼저 정리합니다."
      },
      {
        title: "구조 분리",
        text: "UI, Controller, Service, Repository, Infrastructure 역할을 나누고 핵심 로직을 테스트 가능하게 만듭니다."
      },
      {
        title: "구현 기록",
        text: "구현 중 만난 오류, 설정 문제, 배포 문제, 우회 방법을 다음 실습에서 참고할 수 있게 남깁니다."
      },
      {
        title: "재사용 정리",
        text: "다음 프로젝트에서 다시 쓸 수 있는 패턴, 명령어, 설정, 테스트 관점을 별도로 기록합니다."
      }
    ],
    techStack: [
      { category: "Automation", items: ["Python", "openpyxl", "SQLAlchemy", "SQLite", "PyYAML"] },
      { category: "Crawling / Data", items: ["Playwright CLI", "Browser Automation", "DOM Parsing", "CSV Cleaning"] },
      { category: "External API / Analytics", items: ["Naver API", "DataLab", "Search Ads API", "Chart.js", "Metric Design"] },
      { category: "Web / Deploy", items: ["HTML", "CSS", "Jinja2", "FastAPI", "Next.js", "React", "GitHub Actions", "GitHub Pages"] },
      { category: "Realtime / API", items: ["WebSocket", "httpx", "Exchange API", "REST Fallback", "Caching"] },
      { category: "Desktop / Local AI", items: ["Tkinter", "PySide6", "faster-whisper", "FFmpeg", "PyInstaller"] },
      { category: "Testing / Quality", items: ["unittest", "pytest", "Vitest", "TypeScript Typecheck", "Logging", "Layered Architecture"] }
    ],
    contact: {
      email: "your.email@example.com",
      links: [
        { label: "GitHub", href: "https://github.com/yhjo8458" },
        { label: "블로그", href: "" },
        { label: "LinkedIn", href: "" }
      ]
    },
    labels: {
      projectProblem: "학습 주제",
      projectSolution: "구현 정리",
      projectResult: "기억할 점",
      projectLink: "실습 결과 보기"
    },
    emptyMessages: {
      projects: "표시할 학습 기록이 없습니다. portfolio-data.js에서 projects를 추가하세요.",
      links: "표시할 링크가 없습니다."
    }
  };
})();
