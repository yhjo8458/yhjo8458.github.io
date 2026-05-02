(function () {
  "use strict";

  window.PortfolioData = {
    ko: {
      meta: {
        title: "개발자 포트폴리오",
        description: "업무 자동화와 웹 개발을 다루는 개발자 포트폴리오입니다."
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
        tagline: "반복 업무를 줄이고, 안정적으로 운영되는 웹/자동화 도구, 수익화 프로그램을 만듭니다.",
        intro: "작게 시작해도 나중에 확장하기 쉬운 구조를 우선합니다. 요구사항을 정리하고, 데이터 흐름을 설계하며, 유지보수 가능한 결과물을 만드는 데 집중합니다.",
        availability: "Open to selected projects",
        location: "South Korea",
        ctas: [
          { label: "문의하기", href: "#contact", variant: "primary" },
          { label: "프로젝트 보기", href: "#projects", variant: "secondary" }
        ]
      },
      heroPanel: [
        { label: "Focus", value: "Automation / Web / Internal tools" },
        { label: "Approach", value: "Clean structure, clear data flow" },
        { label: "Status", value: "Portfolio content ready to customize" }
      ],
      sections: {
        about: {
          eyebrow: "About",
          title: "문제를 구조화하고, 오래 쓸 수 있는 도구로 바꿉니다.",
          description: "개인 브랜딩용 첫 버전입니다. 실제 경력, 프로젝트, 링크는 데이터 파일에서 교체하면 전체 화면에 반영됩니다."
        },
        projects: {
          eyebrow: "Featured Projects",
          title: "대표 프로젝트",
          description: "아래 항목은 placeholder입니다. 프로젝트명, 문제, 해결, 결과, 기술 스택, 링크를 교체해 사용하세요."
        },
        process: {
          eyebrow: "Work Style",
          title: "명확한 흐름으로 협업합니다.",
          description: "요구사항 정리부터 배포 가능한 결과물까지, 추적 가능한 단위로 나누어 진행합니다."
        },
        tech: {
          eyebrow: "Tech Stack",
          title: "필요한 문제에 맞춰 기술을 선택합니다.",
          description: "초기 버전에는 일반적인 웹/자동화 기술을 넣어두었습니다. 실제 역량에 맞게 수정하세요."
        },
        contact: {
          eyebrow: "Contact",
          title: "프로젝트나 협업 이야기를 나눌 수 있습니다.",
          description: "아래 링크는 placeholder입니다. 실제 이메일과 프로필 링크로 교체하세요."
        }
      },
      highlights: [
        { title: "업무 자동화", text: "반복되는 수작업을 데이터 흐름과 실행 단계로 나누어 안정적인 도구로 정리합니다." },
        { title: "유지보수 가능한 구조", text: "UI, 제어 흐름, 비즈니스 로직, 데이터 소스를 분리해 변경 비용을 낮춥니다." },
        { title: "명확한 커뮤니케이션", text: "요구사항, 제약, 예외 상황을 문서화하고 구현 범위를 투명하게 관리합니다." }
      ],
      projects: [
        {
          name: "업무 자동화 프로그램",
          problem: "반복 보고와 파일 정리가 수작업으로 관리되어 시간이 많이 들었습니다.",
          solution: "입력 데이터 검증, 처리 단계, 결과 확인 화면을 분리한 내부 도구를 설계했습니다.",
          result: "작업 흐름을 표준화하고 사람이 확인해야 하는 지점을 줄였습니다.",
          tech: ["HTML", "CSS", "JavaScript"],
          link: ""
        },
        {
          name: "포트폴리오 웹사이트",
          problem: "프로젝트와 작업 방식을 한 곳에서 보여줄 수 있는 개인 사이트가 필요했습니다.",
          solution: "정적 배포가 가능한 원페이지 구조와 언어 전환 가능한 데이터 렌더링을 구성했습니다.",
          result: "GitHub Pages에 바로 올릴 수 있고, 데이터 파일만 수정해 내용을 확장할 수 있습니다.",
          tech: ["GitHub Pages", "Vanilla JS", "Responsive UI"],
          link: ""
        },
        {
          name: "고객 워크플로우 도구",
          problem: "고객별 요청과 산출물 관리 방식이 달라 추적이 어려웠습니다.",
          solution: "작업 상태, 산출물 링크, 다음 액션을 한 화면에서 확인하는 구조를 제안했습니다.",
          result: "협업 흐름을 단순화하고 누락 가능성을 낮추는 기반을 만들었습니다.",
          tech: ["Planning", "Data Modeling", "UI Design"],
          link: ""
        }
      ],
      services: [
        { title: "웹 포트폴리오/랜딩", text: "GitHub Pages처럼 가볍게 배포 가능한 정적 사이트를 설계하고 구현합니다." },
        { title: "업무 자동화 도구", text: "반복 입력, 파일 정리, 보고 흐름을 줄이는 작은 내부 도구를 만듭니다." },
        { title: "기존 도구 개선", text: "흩어진 기능을 정리하고 예외 처리와 유지보수 구조를 보강합니다." }
      ],
      process: [
        { title: "문제 정리", text: "현재 업무 흐름, 입력 데이터, 산출물, 실패 지점을 먼저 확인합니다." },
        { title: "구조 설계", text: "화면, 로직, 데이터 흐름을 나누고 변경 가능한 지점을 분리합니다." },
        { title: "작게 구현", text: "핵심 흐름부터 동작하게 만들고 실제 사용 기준으로 개선합니다." },
        { title: "검증과 정리", text: "예외 상황, 반응형 화면, 배포 경로를 확인하고 수정 포인트를 문서화합니다." }
      ],
      techStack: [
        { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "Responsive UI"] },
        { category: "Automation", items: ["Python", "Excel workflow", "File processing"] },
        { category: "Tools", items: ["Git", "GitHub", "GitHub Pages", "VS Code"] }
      ],
      contact: {
        email: "your.email@example.com",
        links: [
          { label: "GitHub", href: "https://github.com/your-username" },
          { label: "Blog", href: "" },
          { label: "LinkedIn", href: "" }
        ]
      },
      emptyMessages: {
        projects: "표시할 프로젝트가 없습니다. portfolio-data.js에서 projects를 추가하세요.",
        links: "표시할 링크가 없습니다."
      }
    },
    en: {
      meta: {
        title: "Developer Portfolio",
        description: "A developer portfolio focused on automation and web development."
      },
      navigation: [
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "process", label: "Process" },
        { id: "tech", label: "Tech" },
        { id: "contact", label: "Contact" }
      ],
      profile: {
        name: "YHJO",
        role: "Developer",
        tagline: "I build practical web and automation tools that reduce repetitive work.",
        intro: "I prefer structures that can start small and grow without heavy rewrites. I focus on requirements, data flow, and maintainable delivery.",
        availability: "Open to selected projects",
        location: "South Korea",
        ctas: [
          { label: "Contact", href: "#contact", variant: "primary" },
          { label: "View Projects", href: "#projects", variant: "secondary" }
        ]
      },
      heroPanel: [
        { label: "Focus", value: "Automation / Web / Internal tools" },
        { label: "Approach", value: "Clean structure, clear data flow" },
        { label: "Status", value: "Portfolio content ready to customize" }
      ],
      sections: {
        about: {
          eyebrow: "About",
          title: "I turn messy workflows into tools that are easier to run and maintain.",
          description: "This is a first personal branding version. Replace the profile, project, and link data in one file and the whole page will update."
        },
        projects: {
          eyebrow: "Featured Projects",
          title: "Selected projects",
          description: "These are placeholders. Replace each project name, problem, solution, result, tech stack, and link with real content."
        },
        process: {
          eyebrow: "Work Style",
          title: "I work through clear, traceable steps.",
          description: "From requirements to a deployable result, the work is split into practical units that can be reviewed and improved."
        },
        tech: {
          eyebrow: "Tech Stack",
          title: "I choose tools based on the problem.",
          description: "The initial stack is generic web and automation content. Adjust it to match your real experience."
        },
        contact: {
          eyebrow: "Contact",
          title: "Available for project and collaboration conversations.",
          description: "The links below are placeholders. Replace them with your actual email and profiles."
        }
      },
      highlights: [
        { title: "Workflow automation", text: "I break repetitive manual work into data flows and execution steps that can run reliably." },
        { title: "Maintainable structure", text: "I separate UI, control flow, business logic, and data sources to reduce change cost." },
        { title: "Clear communication", text: "I document requirements, constraints, and failure cases so the scope stays visible." }
      ],
      projects: [
        {
          name: "Automation Dashboard",
          problem: "Repeated reporting and file organization took too much manual effort.",
          solution: "Designed an internal tool with separate data validation, processing steps, and result review.",
          result: "Standardized the workflow and reduced the points that required manual checking.",
          tech: ["HTML", "CSS", "JavaScript"],
          link: ""
        },
        {
          name: "Portfolio Website",
          problem: "A personal site was needed to show projects and working style in one place.",
          solution: "Built a static one-page structure with data-driven rendering and language switching.",
          result: "It can be deployed to GitHub Pages and expanded by editing one data file.",
          tech: ["GitHub Pages", "Vanilla JS", "Responsive UI"],
          link: ""
        },
        {
          name: "Client Workflow Tool",
          problem: "Different request and deliverable flows made client work hard to track.",
          solution: "Proposed a single view for status, deliverable links, and next actions.",
          result: "Created a foundation for simpler collaboration and fewer missed steps.",
          tech: ["Planning", "Data Modeling", "UI Design"],
          link: ""
        }
      ],
      services: [
        { title: "Portfolio and landing pages", text: "Static sites that can be deployed easily to GitHub Pages." },
        { title: "Workflow automation tools", text: "Small internal tools for repetitive input, file handling, and reporting tasks." },
        { title: "Existing tool improvement", text: "Cleaner structure, better exception handling, and maintainability for existing utilities." }
      ],
      process: [
        { title: "Clarify the problem", text: "Review the current workflow, input data, outputs, and failure points first." },
        { title: "Design the structure", text: "Separate the screen, logic, and data flow around the parts likely to change." },
        { title: "Build in small steps", text: "Implement the main path first, then improve based on real usage." },
        { title: "Verify and document", text: "Check failure cases, responsive screens, deployment paths, and update notes." }
      ],
      techStack: [
        { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "Responsive UI"] },
        { category: "Automation", items: ["Python", "Excel workflow", "File processing"] },
        { category: "Tools", items: ["Git", "GitHub", "GitHub Pages", "VS Code"] }
      ],
      contact: {
        email: "your.email@example.com",
        links: [
          { label: "GitHub", href: "https://github.com/your-username" },
          { label: "Blog", href: "" },
          { label: "LinkedIn", href: "" }
        ]
      },
      emptyMessages: {
        projects: "No projects to display. Add projects in portfolio-data.js.",
        links: "No links to display."
      }
    }
  };
})();
