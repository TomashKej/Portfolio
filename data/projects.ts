export interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    images: string[];
}

export const projects: Project[] = [
    {
        title: "BizCon Warehouse Management System",
        description:
            "Desktop application with layered architecture, authentication, employee and inventory management built in C# WPF using MVVM and Entity Framework.",
        tech: ["C#", "WPF", "MVVM", "Entity Framework", "SQL Server"],
        github: "https://github.com/TomashKej/BizCon_WPF",
        images: [
            "/projectsResources/BizCon/BizConLogin.png",
            "/projectsResources/BizCon/BizConBusinessView.png",
            "/projectsResources/BizCon/BizConPasswordRecovery.png",
            "/projectsResources/BizCon/BizConMainPage.png",
            "/projectsResources/BizCon/BizConSampleCode.png",
            "/projectsResources/BizCon/BizConSampleTable.png"
        ]
    },

    {
        title: "ZarMag - Employee Portal",
        description:
            "Employee portal web application with user authentication, employee/client and orders management, and some other features built in PHP with a SQL database.",
        tech: ["PHP", "HTML", "CSS", "SQL Server", "JavaScript"],
        github: "https://github.com/TomashKej/ZarMagEmployeePortal",
        images: [
            "/projectsResources/ZarMag/ZarMagLogin.png",
            "/projectsResources/ZarMag/ZarMagProfile.png",
            "/projectsResources/ZarMag/ZarMagAdminPanel.png",
            "/projectsResources/ZarMag/ZarMagLoading.png",
            "/projectsResources/ZarMag/ZarMagAddOrder.png",
            "/projectsResources/ZarMag/ZarMagTable.png"
        ]
    },

    {
        title: "Virtual University",
        description:
            `A real-time virtual university platform built on a client-server architecture supporting user authentication, token-based access control, and multi-user interactions.
            The system includes REST API integration and secure session management. Project covered by a non- disclosure agreement.`,
        tech: ["C#", ".NET", "REST API", "Client-Server Architecture", "Authentication", "Swagger", "Agile"],
        github: "",
        images: [
            "/projectsResources/VirtualUniversity/VuPlaceholder.jpg"
        ]
    },

    {
        title: "PrestivaCars – Dealership Management System",
        description:
            "A modern ASP.NET Core MVC application for managing a car dealership, built with a public-facing website, a separate intranet panel, and a dedicated data layer using Entity Framework Core.",
        tech: ["C#", "ASP.NET Core MVC", "Razor Views", "Entity Framework Core", "Code First"],
        github: "https://github.com/TomashKej/PrestivaCars-ASP.NET-Core-MVC",
        images: [
            "/projectsResources/PrestivaCarsMVC/VehiclePage.png",
            "/projectsResources/PrestivaCarsMVC/AddVehiclePage.png",
            "/projectsResources/PrestivaCarsMVC/VehicleDetailsPage.png"
        ]
    },

    {
        title: "PrestivaCars – Mobile Business Application",
        description:
            "A mobile business application built with React Native and TypeScript, designed as a full-stack project with a .NET Web API backend, CQRS architecture, and planned MediatR and Docker integration.",
        tech: ["React Native", "TypeScript", "React Navigation", ".NET Web API", "CQRS", "MediatR", "Docker"],
        github: "https://github.com/TomashKej/PrestivaCars",
        images: [
            "/projectsResources/PrestivaCarsMobile/LandingPage.png",
            "/projectsResources/PrestivaCarsMobile/MainPage.png",
        ]
    },

    {
        title: "Work Manager App Interface",
        description:
            "A web interface for managing tasks and workflows, built with React and React-Bootstrap. Focused on responsive design, interactive UI components, and reusable React hooks, demonstrating clean component architecture, state management, and polished visual design.",
        tech: ["React", "TypeScript", "HTML", "CSS", "React-Bootstrap"],
        github: "https://github.com/TomashKej/WorkManagerAPP",
        images: [
            "/projectsResources/WmInterface/WmMainPage.png",
            "/projectsResources/WmInterface/WmMenuPhone.png",
            "/projectsResources/WmInterface/WmBusinessView2.png",
            "/projectsResources/WmInterface/WmValidation.png",
            "/projectsResources/WmInterface/WmOperationOnData.png",
            "/projectsResources/WmInterface/WmBusinessView.png"
        ]
    },

    {
        title: "2D RPG game in Java",
        description:
            "Simple 2D RPG game with client-server architecture, implemented in Java using Swing for the user interface. The game features character movement, combat mechanics, and basic loot system.",
        tech: ["Java", "client-server", "Swing", "algorithms"],
        github: "https://github.com/TomashKej/Java_RPG_Game",
        images: [
            "/projectsResources/2dRpgGame/RPGMenuScreenshot.png",
            "/projectsResources/2dRpgGame/RPGMapScreenshot.png",
            "/projectsResources/2dRpgGame/RPGLootScreenshot.png",
            "/projectsResources/2dRpgGame/RPGMapEnemyGenerator.png",
            "/projectsResources/2dRpgGame/RPGFigthScreenshot.png",
            "/projectsResources/2dRpgGame/RPGSampleCode.png"
        ]
    },

    {
        title: "Projectile Motion Simulation",
        description:
            `A browser-based physics simulation demonstrating projectile motion. Users can adjust launch parameters and visualise the resulting trajectory in real time. 
            The project was implemented as part of a physics course to reinforce understanding of motion kinematics and basic simulation techniques.`,
        tech: ["HTML", "JavaScript", "CSS"],
        github: "https://github.com/TomashKej/Projectile-motion-simulation",
        images: [
            "/projectsResources/ProjectileMotionSimulation/SimulationTab.png",
            "/projectsResources/ProjectileMotionSimulation/TheoryAndFormulasTab.png"
        ]

    },

    {
        title: "Cisco Projects",
        description:
            `Hands-on network setup using Cisco Packet Tracer , demonstrating static and dynamic IP addressing, VLAN configuration, router and switch setup, inter-VLAN routing, and basic PC networking. 
            The project includes creating a functional LAN with multiple subnets, DHCP configuration, and connectivity verification between hosts, switches, and routers.`,
        tech: ["Cisco Packet Tracer", "Router Configuration", "Switch VLANs", "Static & Dynamic IP", "DHCP", "Networking Fundamentals"],
        github: "",
        images: [
            "/projectsResources/Cisco/CiscoExample1.png",
            "/projectsResources/Cisco/CiscoExample2.png",
            "/projectsResources/Cisco/CiscoExample3.png",
        ]
    },

    {
        title: "More Projects Coming Soon",
        description:
            "This section is under development. New projects, demos, and experiments will be added here soon. Stay tuned for updates as the portfolio grows.",
        tech: ["Web Development", "React", "C#", "PHP", "Networking", "More to Come"],
        github: "",
        images: [
            "/projectsResources/placeholder/underconstruction.jpg"
        ]
    }


];
