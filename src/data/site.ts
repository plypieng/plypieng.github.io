export type LocalizedText = {
	en: string;
	ja?: string;
};

export type Project = {
	slug: string;
	name: string;
	summary: string;
	problem: string;
	solution: string;
	stack: string[];
	repoUrl: string;
	liveUrl?: string;
	image?: string;
	featured: boolean;
	category: string;
	status: string;
};

export type FocusArea = {
	title: string;
	description: string;
};

export type TimelineItem = {
	label: string;
	detail: string;
	dateRange?: string;
};

export type ContactLink = {
	label: string;
	href: string;
	note: string;
};

export const profile = {
	name: 'Nantaphon Chimpalee',
	title: 'Embedded Systems and Applied AI Engineer',
	location: 'Kisarazu, Chiba, Japan',
	bio: 'AIoT and embedded systems engineer with three years of industry experience in Japan, now completing a B.Eng. in Electrical, Electronics and Information Engineering at Nagaoka University of Technology.',
	company: 'Nagaoka University of Technology',
	email: 'plysd4@hotmail.com',
	github: 'https://github.com/plypieng',
	linkedin: 'https://www.linkedin.com/in/nantaphon-chimpalee-903726221/',
	headline:
		'I build across embedded hardware, industrial sensing, simulation, and applied AI/ML.',
	intro:
		'My background spans factory-floor AIoT, embedded sensing, full-stack product prototypes, and technical simulations. I focus on turning real-world constraints into useful software behavior.',
};

export const stats = [
	{
		label: 'Industry experience',
		value: '3 years',
	},
	{
		label: 'Current work',
		value: 'Embedded / AI',
	},
	{
		label: 'Current track',
		value: 'B.Eng. at NUT',
	},
];

export const projects: Project[] = [
	{
		slug: 'rouvis-web',
		name: 'Rouvis',
		summary:
			'AI planning workspace for new farmers in Japan, combining maps, scheduling, analytics, and conversational guidance.',
		problem:
			'New farmers need support across crop planning, local knowledge, and day-to-day operating decisions without juggling separate tools.',
		solution:
			'Built a desktop-first Next.js application that brings map-based planning, analytics, knowledge access, and AI chat into one workflow.',
		stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Google Maps'],
		repoUrl: 'https://github.com/plypieng/rouvis-web',
		liveUrl: 'https://rouvis-prototype.vercel.app',
		featured: true,
		category: 'Vertical AI product',
		status: 'Deployed prototype',
	},
	{
		slug: 'nut-denki',
		name: 'NUT-denki',
		summary:
			'Student directory and profile management app for an electrical and information engineering program.',
		problem:
			'Department profiles and student information were difficult to manage, search, and update in one secure place.',
		solution:
			'Built a full-stack university directory with Google auth, admin workflows, Prisma-backed data management, and responsive UI.',
		stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
		repoUrl: 'https://github.com/plypieng/NUT-denki',
		liveUrl: 'https://nut-denki.vercel.app',
		featured: true,
		category: 'Web application',
		status: 'Deployed',
	},
	{
		slug: 'ceramic-fracture-lab',
		name: 'Ceramic Fracture Lab',
		summary:
			'Interactive ceramic 3-point bending simulations for teaching, rapid prototyping, and early-stage fracture studies.',
		problem:
			'Brittle-fracture experiments and solver comparisons are usually split across scripts, validation tooling, and separate interactive demos.',
		solution:
			'Combined Python validation scripts, config-driven FEM workflows, and a Godot 4 demo with an optional native C++ backend.',
		stack: ['Python', 'Godot 4', 'C++', 'FEM', 'Simulation'],
		repoUrl: 'https://github.com/plypieng/ceramic-fracture-lab',
		featured: true,
		category: 'Simulation / research',
		status: 'Research prototype',
	},
	{
		slug: 'firebase-esp32-ctmonitor',
		name: 'Firebase ESP32 CT Monitor',
		summary:
			'ESP32-based current transformer monitoring pipeline with Firebase-backed remote data access.',
		problem:
			'Current sensing experiments needed a low-cost way to capture measurement data and inspect it remotely without a heavy infrastructure stack.',
		solution:
			'Implemented an ESP32 and Firebase workflow for CT-clamp measurements, using cloud storage and a simple web-facing monitoring path.',
		stack: ['ESP32', 'C++', 'Firebase', 'IoT', 'Sensor data'],
		repoUrl: 'https://github.com/plypieng/Firebase-esp32-CTmonitor',
		featured: true,
		category: 'Embedded / IoT',
		status: 'Embedded prototype',
	},
	{
		slug: 'interactive-torque-project',
		name: 'Interactive Torque Project',
		summary:
			'Torque measurement visualization and analysis tool for industrial inspection data and pass/fail evaluation.',
		problem:
			'In-house torque measurement data needed faster comparison, feature extraction, and evaluation without manually checking raw CSV files.',
		solution:
			'Built a Python application that visualizes normal, filtered, and FFT views, applies threshold-based checks, and generates downloadable analysis outputs.',
		stack: ['Python', 'Dash', 'Signal processing', 'CSV analysis', 'PDF reporting'],
		repoUrl: 'https://github.com/plypieng/InteractiveTorqueProject',
		featured: true,
		category: 'Industrial tooling',
		status: 'Analysis application',
	},
	{
		slug: 'built-a-boat-to-kill-mf',
		name: 'Built a Boat',
		summary:
			'Co-op ocean extraction game prototype with authoritative multiplayer systems and a shared builder loop.',
		problem:
			'Multiplayer extraction games often bolt progression and teamwork clarity on too late, which makes systems feel disconnected.',
		solution:
			'Built a Godot prototype with a shared hangar builder, replicated boat systems, runtime damage, and evolving reward loops.',
		stack: ['Godot 4', 'GDScript', 'Multiplayer', 'Game systems'],
		repoUrl: 'https://github.com/plypieng/built-a-boat-to-kill-mf',
		featured: true,
		category: 'Interactive prototype',
		status: 'Game prototype',
	},
];

export const focusAreas: FocusArea[] = [
	{
		title: 'Hardware-aware AI systems',
		description:
			'I work on AI features that respect latency, memory, sensing, and deployment constraints instead of assuming infinite compute.',
	},
	{
		title: 'Industrial sensing and AIoT',
		description:
			'I have built sensor-integrated tooling and analysis workflows for production environments where instrumentation and reliability matter.',
	},
	{
		title: 'Systems design across domains',
		description:
			'I move between hardware context, data pipelines, and user-facing software when the problem cannot be solved cleanly from one layer alone.',
	},
	{
		title: 'Interactive simulation and visualization',
		description:
			'I use simulations and real-time environments to make technical systems easier to test, explain, and iterate on.',
	},
];

export const timeline: TimelineItem[] = [
	{
		label: 'HW Architect Intern at Bosch Japan',
		detail:
			'Worked on automotive E/E architecture and ADAS hardware platform customer-interface work in a hybrid internship setting.',
		dateRange: 'Aug 2025 to Sep 2025',
	},
	{
		label: 'AI Engineer Intern at OPTiM',
		detail:
			'Implemented Fusion RAG system work for the agentic AI chat product OPTiM AIRES.',
		dateRange: 'Jul 2025 to Aug 2025',
	},
	{
		label: 'AIoT Engineer in Japanese manufacturing',
		detail:
			'Built sensor data pipelines, quality analytics, and machine-learning workflows for production environments.',
		dateRange: 'May 2023 to Apr 2025',
	},
	{
		label: 'Process Development Engineer at Kuroda Precision',
		detail:
			'Worked on electric-vehicle motor-core manufacturing process development before moving into industrial IoT engineering.',
		dateRange: 'Apr 2022 to Apr 2023',
	},
	{
		label: 'Freelance manufacturing AI developer',
		detail:
			'Delivered image-analysis and vibration-classification tools for manufacturing clients after leaving full-time industry work.',
		dateRange: '2025 to present',
	},
	{
		label: 'B.Eng. candidate at Nagaoka University of Technology',
		detail:
			'Currently studying electrical, electronics, and information engineering in a coding theory and data-sequence lab while extending research and independent product work.',
		dateRange: '2025 to 2027',
	},
];

export const contactLinks: ContactLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/plypieng',
		note: 'Public repositories and recent work',
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/nantaphon-chimpalee-903726221/',
		note: 'Professional profile and career history',
	},
	{
		label: 'Email',
		href: 'mailto:plysd4@hotmail.com',
		note: 'Best for collaboration and hiring inquiries',
	},
	{
		label: 'Company context',
		href: 'https://www.kuroda-precision.com',
		note: 'Manufacturing and hardware background',
	},
];

export const copy = {
	pageTitle: 'Plypieng Portfolio',
	pageDescription:
		'Portfolio homepage for Nantaphon Chimpalee, showcasing hardware-aware AI, embedded systems, industrial software, and interactive prototypes.',
	heroLabel: {
		en: 'Portfolio',
		ja: 'ポートフォリオ',
	},
	aboutLabel: {
		en: 'About',
		ja: '概要',
	},
	projectsLabel: {
		en: 'Selected Work',
		ja: '主なプロジェクト',
	},
	focusLabel: {
		en: 'Focus Areas',
		ja: '専門領域',
	},
	timelineLabel: {
		en: 'Trajectory',
		ja: 'これまでの流れ',
	},
	contactLabel: {
		en: 'Contact',
		ja: '連絡先',
	},
};
