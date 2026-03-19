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
	title: 'Embedded Systems and Vertical AI Engineer',
	location: 'Japan',
	bio: 'Thai engineer based in Japan, working across automotive hardware architecture, manufacturing AI systems, and product prototypes that need to hold up under real constraints.',
	company: 'Bosch Japan / Nagaoka University of Technology',
	email: 'plysd4@hotmail.com',
	github: 'https://github.com/plypieng',
	headline:
		'I build systems where sensors, software, and applied AI have to survive contact with the real world.',
	intro:
		'My background spans factory-floor AIoT, embedded sensing, full-stack product prototypes, and technical simulations. I focus on joining low-level constraints to useful software behavior.',
};

export const stats = [
	{
		label: 'Manufacturing AIoT',
		value: '3 years',
	},
	{
		label: 'Languages',
		value: 'JP / EN / TH',
	},
	{
		label: 'External funding',
		value: 'JPY 2M+',
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
		title: 'Manufacturing and industrial software',
		description:
			'I have built tooling for process data collection, quality analysis, and operator-facing workflows in production-style environments.',
	},
	{
		title: 'Full-stack technical products',
		description:
			'I prototype user-facing systems end-to-end when a domain problem needs product thinking as much as model quality.',
	},
	{
		title: 'Interactive simulation and visualization',
		description:
			'I use simulations and real-time environments to make technical systems easier to test, explain, and iterate on.',
	},
];

export const timeline: TimelineItem[] = [
	{
		label: 'AIoT Engineer in Japanese manufacturing',
		detail:
			'Built sensor data pipelines, quality analytics, and machine-learning workflows for production environments.',
		dateRange: '2022 to 2025',
	},
	{
		label: 'Freelance manufacturing AI developer',
		detail:
			'Delivered image-analysis and vibration-classification tools for manufacturing clients after leaving full-time industry work.',
		dateRange: '2025 to present',
	},
	{
		label: 'AI Engineer intern and HW architecture intern',
		detail:
			'Worked on Fusion RAG implementation and later supported automotive hardware platform planning in a global engineering setting.',
		dateRange: '2025',
	},
	{
		label: 'B.Eng. candidate at Nagaoka University of Technology',
		detail:
			'Currently studying electrical, electronics, and information engineering while extending research and independent product work.',
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
