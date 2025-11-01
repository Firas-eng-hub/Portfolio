/**
 * Professional profile data for Mohamed Firas Berriri
 */

export const profile = {
  name: "Mohamed Firas Berriri",
  title: "Telecommunications Engineering Student",
  tagline: "DevOps | Cloud Infrastructure | Data Automation | Business Intelligence",
  location: "Msaken, Sousse, Tunisia",
  email: "mohamedfiras.berriri@etudiant-enit.utm.tn",
  phone: "+216 55 664 620",
  linkedin: "linkedin.com/in/mohamed-firas-berriri-287b06337",
  github: "github.com/Firas-eng-hub",
  
  bio: "1st Year Telecommunications Engineering Student at ENIT (École Nationale d'Ingénieurs de Tunis), passionate about building scalable cloud infrastructure, automating workflows, and leveraging data for business insights. Experienced in Kubernetes orchestration, Docker containerization, and workflow automation.",
  
  education: [
    {
      id: 1,
      institution: "ENIT - École Nationale d'Ingénieurs de Tunis",
      degree: "Cycle Ingénieur en Télécommunications",
      period: "2024 – Present",
      status: "current",
    },
    {
      id: 2,
      institution: "IPEIM",
      degree: "Mathématiques & Physique",
      period: "2022 – 2024",
      status: "completed",
    },
  ],
  
  experience: [
    {
      id: 1,
      title: "DevOps & Cloud Internship",
      company: "L2T",
      location: "Sousse, Tunisia",
      period: "June 2025 – July 2025",
      type: "internship",
      description: "Deployed and managed multi-node Kubernetes clusters for enterprise applications",
      highlights: [
        "Kubernetes cluster deployment using Kubespray, Docker, and Ansible",
        "Multi-node service orchestration with Kubernetes (pods, services, deployments)",
        "Cluster supervision and management using Lens",
        "CI/CD best practices exploration",
        "Docker containerization for enterprise applications",
      ],
      tags: ["Kubernetes", "Docker", "Kubespray", "Ansible", "Lens", "CI/CD"],
      category: "DevOps",
    },
    {
      id: 2,
      title: "n8n Workflow Automation",
      company: "Personal Project",
      location: "Remote",
      period: "August 2025",
      type: "project",
      description: "Built automated communication workflows using n8n for email and WhatsApp integration",
      highlights: [
        "Email and WhatsApp agent automation",
        "Webhook integration and API event triggers",
        "Automated message send/receive/filter scenarios",
        "Multi-channel communication orchestration",
      ],
      tags: ["n8n", "Automation", "Webhooks", "APIs", "WhatsApp", "Email"],
      category: "Automation",
    },
    {
      id: 3,
      title: "Arducam Embedded Image Processing",
      company: "Academic Project",
      location: "ENIT",
      period: "2025",
      type: "project",
      description: "Developed Arduino-based image capture and processing system with MATLAB analysis",
      highlights: [
        "Arduino-based image capture and processing system",
        "MATLAB data modeling and analysis",
        "Embedded systems integration",
        "Real-time image processing pipeline",
      ],
      tags: ["Arduino", "MATLAB", "Image Processing", "Embedded Systems"],
      category: "Engineering",
    },
  ],
  
  skills: {
    "DevOps & Cloud": [
      { name: "Docker", level: 85, icon: "container" },
      { name: "Kubernetes", level: 80, icon: "network" },
      { name: "Lens", level: 75, icon: "eye" },
      { name: "Kubespray", level: 75, icon: "server" },
      { name: "Ansible", level: 70, icon: "settings" },
      { name: "Linux", level: 85, icon: "terminal" },
      { name: "Git", level: 90, icon: "git-branch" },
    ],
    "CI/CD": [
      { name: "GitHub Actions", level: 60, icon: "workflow" },
      { name: "CI/CD Pipelines", level: 65, icon: "git-merge" },
    ],
    "Data & BI": [
      { name: "n8n", level: 80, icon: "workflow" },
      { name: "Apache Superset", level: 70, icon: "bar-chart" },
      { name: "PostgreSQL", level: 75, icon: "database" },
      { name: "SQL", level: 85, icon: "database" },
      { name: "Talend", level: 55, icon: "shuffle" },
    ],
    "Programming": [
      { name: "Python", level: 85, icon: "code" },
      { name: "C", level: 75, icon: "code" },
      { name: "C++", level: 75, icon: "code" },
      { name: "Java", level: 70, icon: "coffee" },
      { name: "SQL", level: 85, icon: "database" },
    ],
    "Tools": [
      { name: "MATLAB", level: 70, icon: "calculator" },
      { name: "Arduino", level: 75, icon: "cpu" },
      { name: "VS Code", level: 90, icon: "code" },
      { name: "Git", level: 90, icon: "git-branch" },
    ],
  },
  
  achievements: [
    {
      id: 1,
      title: "NVIDIA Deep Learning Institute",
      subtitle: "Efficient Large Language Model (LLM) Customization",
      type: "certification",
      date: "2024",
      icon: "award",
    },
    {
      id: 2,
      title: "IEEE ENIT Student Branch - Active Member",
      subtitle: "Organized TUNED Tech Event",
      type: "association",
      date: "2024 – Present",
      icon: "users",
    },
    {
      id: 3,
      title: "IEEE Computer Society ENIT SB - Treasurer",
      subtitle: "Organized IEEEXTREME, WieAct, IEEELUMEN",
      type: "leadership",
      date: "2024 – Present",
      icon: "trophy",
    },
    {
      id: 4,
      title: "Enactus ENIT - Active Member",
      subtitle: "Social entrepreneurship initiatives",
      type: "association",
      date: "2024 – Present",
      icon: "users",
    },
  ],
  
  languages: [
    { name: "French", level: "Native/Fluent", proficiency: 100 },
    { name: "Arabic", level: "Native", proficiency: 100 },
    { name: "English", level: "B2 Intermediate", proficiency: 75 },
    { name: "German", level: "A2", proficiency: 40 },
  ],
  
  interests: [
    "Cloud Computing & DevOps",
    "Data Automation",
    "Applied AI",
    "Gaming & E-sports",
    "Open Source Contribution",
  ],
};

export default profile;
