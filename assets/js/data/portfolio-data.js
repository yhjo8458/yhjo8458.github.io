(function () {
  "use strict";

  window.PortfolioData = {
    meta: {
      title: "YHJO | 개발자 포트폴리오",
      description: "업무 자동화와 웹 개발을 중심으로 문제를 구조화하고 실사용 도구를 만드는 개발자 포트폴리오입니다."
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
      tagline: "반복 업무를 줄이고, 오래 운영할 수 있는 웹/자동화 도구를 만듭니다.",
      intro: "작게 시작해도 나중에 확장하기 쉬운 구조를 우선합니다. 요구사항을 정리하고, 데이터 흐름을 설계하며, 유지보수 가능한 결과물을 만드는 데 집중합니다.",
      availability: "포트폴리오를 정리하고 있습니다",
      location: "대한민국",
      ctas: [
        { label: "문의하기", href: "#contact", variant: "primary" },
        { label: "프로젝트 보기", href: "#projects", variant: "secondary" }
      ]
    },
    heroPanel: [
      { label: "관심 분야", value: "업무 자동화 / 웹 개발 / 내부 도구" },
      { label: "작업 방식", value: "명확한 구조, 분리된 책임, 추적 가능한 흐름" },
      { label: "현재 상태", value: "실제 프로젝트와 소개 문구를 채워가는 중" }
    ],
    sections: {
      about: {
        eyebrow: "소개",
        title: "문제를 구조화하고, 실제로 오래 쓸 수 있는 도구로 바꿉니다.",
        description: "이 페이지는 개인 브랜딩용 포트폴리오입니다. 실제 경력, 프로젝트, 링크는 이 데이터 파일에서 교체하면 전체 화면에 반영됩니다."
      },
      projects: {
        eyebrow: "대표 프로젝트",
        title: "작업한 내용을 프로젝트 단위로 정리합니다.",
        description: "아래 내용은 초기 placeholder입니다. 프로젝트명, 문제, 해결, 결과, 기술 스택, 링크를 실제 내용으로 교체해 사용하세요."
      },
      process: {
        eyebrow: "작업 방식",
        title: "요구사항부터 배포까지 흐름을 나누어 진행합니다.",
        description: "단순히 화면을 만드는 것보다, 나중에 수정하고 확장하기 쉬운 구조를 먼저 생각합니다."
      },
      tech: {
        eyebrow: "기술 스택",
        title: "문제에 맞는 기술을 선택하고 조합합니다.",
        description: "초기 버전에는 웹 개발과 업무 자동화에 필요한 기본 기술을 넣어두었습니다. 실제 역량에 맞게 수정하면 됩니다."
      },
      contact: {
        eyebrow: "연락",
        title: "프로젝트나 협업 이야기를 나눌 수 있습니다.",
        description: "아래 이메일과 프로필 링크는 placeholder입니다. 실제 연락처로 교체해서 사용하세요."
      }
    },
    highlights: [
      {
        title: "업무 자동화",
        text: "반복되는 수작업을 입력, 처리, 검증, 결과 확인 단계로 나누어 안정적인 도구로 정리합니다."
      },
      {
        title: "유지보수 가능한 구조",
        text: "화면, 제어 흐름, 비즈니스 로직, 데이터 소스를 분리해 변경 비용을 낮추는 방향으로 설계합니다."
      },
      {
        title: "명확한 커뮤니케이션",
        text: "요구사항, 제약, 예외 상황을 문서화하고 구현 범위를 투명하게 관리합니다."
      }
    ],
    projects: [
      {
        name: "업무 자동화 대시보드",
        problem: "반복 보고와 파일 정리가 수작업으로 관리되어 시간이 많이 들었습니다.",
        solution: "입력 데이터 검증, 처리 단계, 결과 확인 화면을 분리한 내부 도구 구조를 설계했습니다.",
        result: "작업 흐름을 표준화하고 사람이 확인해야 하는 지점을 줄이는 방향으로 개선했습니다.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: ""
      },
      {
        name: "개발자 포트폴리오 웹사이트",
        problem: "프로젝트와 작업 방식을 한 곳에서 보여줄 수 있는 개인 사이트가 필요했습니다.",
        solution: "GitHub Pages에 바로 배포 가능한 정적 원페이지 구조와 데이터 기반 렌더링을 구성했습니다.",
        result: "데이터 파일만 수정해 소개, 프로젝트, 연락처를 계속 확장할 수 있는 기반을 만들었습니다.",
        tech: ["GitHub Pages", "Vanilla JS", "Responsive UI"],
        link: "https://yhjo8458.github.io/"
      },
      {
        name: "고객 업무 흐름 관리 도구",
        problem: "고객별 요청과 산출물 관리 방식이 달라 작업 상태 추적이 어려웠습니다.",
        solution: "작업 상태, 산출물 링크, 다음 액션을 한 화면에서 확인하는 구조를 제안했습니다.",
        result: "협업 흐름을 단순화하고 누락 가능성을 낮추는 기반을 만들었습니다.",
        tech: ["업무 분석", "데이터 모델링", "UI 설계"],
        link: ""
      }
    ],
    services: [
      {
        title: "포트폴리오/소개 페이지",
        text: "GitHub Pages처럼 가볍게 배포 가능한 정적 사이트를 설계하고 구현합니다."
      },
      {
        title: "업무 자동화 도구",
        text: "반복 입력, 파일 정리, 보고 흐름을 줄이는 작은 내부 도구를 만듭니다."
      },
      {
        title: "기존 도구 개선",
        text: "흩어진 기능을 정리하고 예외 처리와 유지보수 구조를 보강합니다."
      }
    ],
    process: [
      {
        title: "문제 정리",
        text: "현재 업무 흐름, 입력 데이터, 산출물, 실패 지점을 먼저 확인합니다."
      },
      {
        title: "구조 설계",
        text: "화면, 로직, 데이터 흐름을 나누고 변경 가능한 지점을 분리합니다."
      },
      {
        title: "작게 구현",
        text: "핵심 흐름부터 동작하게 만들고 실제 사용 기준으로 개선합니다."
      },
      {
        title: "검증과 정리",
        text: "예외 상황, 반응형 화면, 배포 경로를 확인하고 수정 포인트를 문서화합니다."
      }
    ],
    techStack: [
      { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "반응형 UI"] },
      { category: "Automation", items: ["Python", "Excel 업무 흐름", "파일 처리"] },
      { category: "Tools", items: ["Git", "GitHub", "GitHub Pages", "VS Code"] }
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
