(function () {
  "use strict";

  window.PortfolioData = {
    meta: {
      title: "YHJO | 개발자 포트폴리오",
      description: "업무 자동화, 정적 웹 서비스, 로컬 AI 도구를 만드는 개발자 포트폴리오입니다."
    },
    navigation: [
      { id: "about", label: "소개" },
      { id: "projects", label: "프로젝트" },
      { id: "process", label: "작업 방식" },
      { id: "tech", label: "기술" },
      { id: "contact", label: "연락" }
    ],
    profile: {
      name: "YHJO",
      role: "개발자",
      tagline: "반복 업무를 줄이고, 실제로 운영할 수 있는 자동화 도구와 웹 서비스를 만듭니다.",
      intro: "Python, GitHub Actions, Windows 데스크톱 자동화, 로컬 AI 도구를 중심으로 문제를 구조화하고 유지보수 가능한 결과물을 만드는 데 집중합니다.",
      availability: "업무 자동화와 웹 서비스 프로젝트를 정리하고 있습니다",
      location: "대한민국",
      ctas: [
        { label: "프로젝트 보기", href: "#projects", variant: "primary" },
        { label: "문의하기", href: "#contact", variant: "secondary" }
      ]
    },
    heroPanel: [
      { label: "관심 분야", value: "업무 자동화 / 정적 웹 서비스 / 로컬 AI 도구" },
      { label: "작업 방식", value: "계층 분리, 설정 중심 구조, 테스트 가능한 서비스 로직" },
      { label: "대표 경험", value: "GitHub Pages 배포, Windows GUI, STT 변환 자동화" }
    ],
    sections: {
      about: {
        eyebrow: "소개",
        title: "반복되는 업무를 구조화하고, 자동화 가능한 도구로 바꿉니다.",
        description: "실사용 흐름을 기준으로 UI, Controller, Service, Infrastructure를 분리하고, 설정과 데이터를 코드 밖에서 관리할 수 있는 구조를 선호합니다."
      },
      projects: {
        eyebrow: "대표 프로젝트",
        title: "직접 진행한 자동화와 웹 서비스 프로젝트입니다.",
        description: "금융 리포트 자동 생성, Windows 업무 문서 자동화, 로컬 음성 인식 도구처럼 실제 반복 업무를 줄이는 프로젝트를 중심으로 정리했습니다."
      },
      process: {
        eyebrow: "작업 방식",
        title: "요구사항부터 배포까지 흐름을 나누어 진행합니다.",
        description: "먼저 데이터 흐름과 예외 상황을 확인하고, 핵심 로직은 UI 없이도 테스트할 수 있도록 분리합니다."
      },
      tech: {
        eyebrow: "기술 스택",
        title: "자동화, 웹 배포, 데스크톱 도구를 연결합니다.",
        description: "Python 기반 업무 자동화와 GitHub Actions 배포, Windows 환경 배포, 로컬 AI 실행 흐름을 다룹니다."
      },
      contact: {
        eyebrow: "연락",
        title: "프로젝트나 협업 이야기를 나눌 수 있습니다.",
        description: "아래 이메일과 프로필 링크는 실제 연락처로 교체해서 사용할 수 있습니다."
      }
    },
    highlights: [
      {
        title: "업무 자동화",
        text: "반복되는 조회, 문서 작성, 파일 저장 흐름을 자동화해 수작업 시간을 줄이는 도구를 만듭니다."
      },
      {
        title: "운영 가능한 구조",
        text: "설정 파일, 저장소 계층, 서비스 로직, 배포 흐름을 분리해 나중에 수정하기 쉬운 형태로 설계합니다."
      },
      {
        title: "검증과 배포",
        text: "단위 테스트와 GitHub Actions를 활용해 변경사항을 확인하고 GitHub Pages나 실행 파일 형태로 배포합니다."
      }
    ],
    projects: [
      {
        name: "Daily Finance Briefing",
        problem: "국내외 지수, 환율, 원자재처럼 매일 확인해야 하는 금융 시장 정보를 수동으로 조회하면 시간이 들고 기준일과 리포트 형식이 일관되지 않을 수 있었습니다.",
        solution: "FinanceDataReader로 주요 시장 데이터를 수집하고, Python 서비스 계층에서 전일 기준 데이터를 가공한 뒤 Jinja2 템플릿으로 카드형 HTML 리포트를 생성했습니다. 종목 목록과 리포트 메타 정보는 YAML 설정으로 분리하고 GitHub Actions로 테스트, 스케줄 실행, GitHub Pages 배포까지 자동화했습니다.",
        result: "평일 오전 10시(KST) 기준으로 reports/YYYY-MM-DD.html, latest.html, index.html 리포트를 자동 생성하고 GitHub Pages에 배포하는 배치형 정적 웹 서비스 흐름을 구성했습니다. 일부 데이터 조회 실패 시에도 전체 리포트 생성을 유지하고 카드 단위 오류로 표시하도록 설계했습니다.",
        tech: ["Python", "FinanceDataReader", "Jinja2", "PyYAML", "GitHub Actions", "GitHub Pages"],
        link: "https://yhjo8458.github.io/daily_finance_briefing/"
      },
      {
        name: "업무 문서 자동화 데스크톱 프로그램",
        problem: "현업에서 점검 문서와 지원내역서를 반복적으로 작성해야 했고, 고객사 정보와 작업 이력이 파일이나 수작업 중심으로 흩어져 관리되어 문서 작성 시간과 누락 가능성이 컸습니다.",
        solution: "Python Tkinter 기반 GUI를 만들고 openpyxl로 엑셀 템플릿을 자동 가공해 점검 문서와 지원내역서를 생성하도록 구현했습니다. 고객사 정보와 작업 이력은 SQLAlchemy와 SQLite로 관리하고, Excel/PDF 산출, 설정 파일, 템플릿 경로를 분리했습니다.",
        result: "반복적인 엑셀 문서 작성 시간을 줄이고 고객사 정보 조회, 수정, 삭제, 문서 생성 이력, 작업 로그를 한 프로그램에서 관리할 수 있게 했습니다. UI, Controller, Service, Repository, Infrastructure 계층을 분리해 유지보수성과 테스트 가능성을 높였습니다.",
        tech: ["Python", "Tkinter", "openpyxl", "SQLAlchemy", "SQLite", "pywin32", "PyInstaller"],
        link: ""
      },
      {
        name: "Clova Note Vibe",
        problem: "음성 파일을 텍스트로 변환할 때 외부 API 전송 없이 로컬 PC에서 안전하게 처리하고, Windows GUI와 Web UI 양쪽에서 같은 STT 로직을 재사용할 수 있는 구조가 필요했습니다.",
        solution: "faster-whisper 기반 TranscriptionService를 UI와 독립적으로 구현하고, PySide6 GUI와 FastAPI Web UI가 같은 서비스 계층을 사용하도록 분리했습니다. FFmpeg 실행 가능 여부 확인, 변환 로그 저장, 중복 파일명 처리, 업로드 원본 보관 옵션을 Infrastructure 계층으로 나눴습니다.",
        result: "Windows exe GUI 앱과 로컬 Web UI 파일 업로드 방식을 모두 지원하고, Web API 기반 비동기 작업 처리와 진행률 polling/progress bar를 구현했습니다. PyInstaller 배포 시 faster-whisper VAD ONNX asset 누락 문제와 WinGet FFmpeg 탐지 문제를 해결했으며 pytest 기준 13개 테스트를 통과했습니다.",
        tech: ["Python 3.12", "FastAPI", "PySide6", "faster-whisper", "FFmpeg", "PyInstaller", "pytest"],
        link: ""
      }
    ],
    services: [
      {
        title: "업무 자동화 도구",
        text: "반복 입력, 문서 생성, 파일 저장, 로그 관리 흐름을 줄이는 도구를 설계하고 구현합니다."
      },
      {
        title: "정적 웹 서비스와 배포 자동화",
        text: "GitHub Actions와 GitHub Pages를 활용해 데이터 생성부터 정적 웹 배포까지 자동화합니다."
      },
      {
        title: "Windows 로컬 도구",
        text: "Tkinter, PySide6, PyInstaller를 활용해 실제 Windows 환경에서 실행 가능한 도구를 만듭니다."
      }
    ],
    process: [
      {
        title: "문제 정리",
        text: "반복되는 업무 흐름, 입력 데이터, 산출물, 실패 지점을 먼저 확인합니다."
      },
      {
        title: "구조 설계",
        text: "UI, Controller, Service, Repository, Infrastructure 역할을 나누고 변경 가능한 지점을 분리합니다."
      },
      {
        title: "작게 구현",
        text: "핵심 흐름부터 동작하게 만들고 실제 사용 기준으로 예외 처리와 설정을 보강합니다."
      },
      {
        title: "검증과 배포",
        text: "단위 테스트, 로컬 실행, GitHub Actions, PyInstaller 같은 배포 흐름까지 확인합니다."
      }
    ],
    techStack: [
      { category: "Automation", items: ["Python", "openpyxl", "SQLAlchemy", "SQLite", "PyYAML"] },
      { category: "Web / Deploy", items: ["HTML", "CSS", "Jinja2", "FastAPI", "GitHub Actions", "GitHub Pages"] },
      { category: "Desktop / Local AI", items: ["Tkinter", "PySide6", "faster-whisper", "FFmpeg", "PyInstaller"] },
      { category: "Quality", items: ["unittest", "pytest", "Logging", "Layered Architecture"] }
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
      projectProblem: "문제",
      projectSolution: "해결",
      projectResult: "결과",
      projectLink: "프로젝트 보기"
    },
    emptyMessages: {
      projects: "표시할 프로젝트가 없습니다. portfolio-data.js에서 projects를 추가하세요.",
      links: "표시할 링크가 없습니다."
    }
  };
})();
