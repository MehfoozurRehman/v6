"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ContactRound,
  FileText,
  FolderKanban,
  GitBranch,
  Grid2X2,
  Mail,
  MessageCircle,
  Minimize2,
  Monitor,
  Terminal,
  UserRound,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  education,
  experience,
  profile,
  profileHighlights,
  projects,
  stack,
} from "../data";

type AppId = "about" | "work" | "experience" | "contact" | "resume";
type OpenWindow = { id: Exclude<AppId, "resume">; x: number; y: number; z: number; width: number; height: number; minimized?: boolean; maximized?: boolean; restore?: { x: number; y: number; width: number; height: number } };

const apps: { id: AppId; label: string; icon: typeof UserRound }[] = [
  { id: "about", label: "About me", icon: UserRound },
  { id: "work", label: "Selected work", icon: FolderKanban },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "contact", label: "Contact", icon: Terminal },
  { id: "resume", label: "Resume.pdf", icon: FileText },
];

function WindowFrame({
  title,
  children,
  onClose,
  windowState,
  onFocus,
  onMove,
  onResize,
  onMinimize,
  onMaximize,
}: {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  windowState: OpenWindow;
  onFocus: () => void;
  onMove: (x: number, y: number) => void;
  onResize: (width: number, height: number) => void;
  onMinimize: () => void;
  onMaximize: (workspaceBounds: DOMRect) => void;
}) {
  const drag = useRef<{ startX: number; startY: number; x: number; y: number; frame: HTMLElement } | null>(null);
  const resize = useRef<{ startX: number; startY: number; width: number; height: number; frame: HTMLElement } | null>(null);

  useEffect(() => {
    const moveDrag = (event: MouseEvent) => {
      const resizeState = resize.current;
      if (resizeState) {
        const workspace = resizeState.frame.parentElement;
        if (!workspace) return;
        const workspaceBounds = workspace.getBoundingClientRect();
        const maxWidth = Math.max(340, window.innerWidth - workspaceBounds.left - windowState.x + 18);
        const maxHeight = Math.max(250, window.innerHeight - workspaceBounds.top - windowState.y - 18);
        onResize(
          Math.min(maxWidth, Math.max(340, resizeState.width + event.clientX - resizeState.startX)),
          Math.min(maxHeight, Math.max(250, resizeState.height + event.clientY - resizeState.startY)),
        );
        return;
      }
      const state = drag.current;
      if (!state) return;
      const workspace = state.frame.parentElement;
      if (!workspace) return;
      const workspaceBounds = workspace.getBoundingClientRect();
      const visibleHandle = 88;
      const nextX = state.x + event.clientX - state.startX;
      const nextY = state.y + event.clientY - state.startY;
      const minX = -workspaceBounds.left - state.frame.offsetWidth + visibleHandle;
      const maxX = window.innerWidth - workspaceBounds.left - visibleHandle;
      const minY = -workspaceBounds.top - 18;
      const maxY = window.innerHeight - workspaceBounds.top - visibleHandle;
      onMove(Math.min(maxX, Math.max(minX, nextX)), Math.min(maxY, Math.max(minY, nextY)));
    };
    const endDrag = () => { drag.current = null; resize.current = null; };
    window.addEventListener("mousemove", moveDrag);
    window.addEventListener("mouseup", endDrag);
    return () => { window.removeEventListener("mousemove", moveDrag); window.removeEventListener("mouseup", endDrag); };
  }, [onMove, onResize, windowState.x, windowState.y]);

  const startDrag = (event: React.MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    const frame = event.currentTarget.parentElement;
    if (!frame) return;
    drag.current = { startX: event.clientX, startY: event.clientY, x: windowState.x, y: windowState.y, frame };
    onFocus();
  };
  const startResize = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const frame = event.currentTarget.parentElement;
    if (!frame) return;
    resize.current = { startX: event.clientX, startY: event.clientY, width: windowState.width, height: windowState.height, frame };
    onFocus();
  };
  const maximize = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    const workspace = event.currentTarget.closest(".os-window")?.parentElement;
    if (workspace) onMaximize(workspace.getBoundingClientRect());
  };

  return (
    <section className="os-window" aria-label={title} style={{ transform: `translate(${windowState.x}px, ${windowState.y}px)`, zIndex: windowState.z, width: windowState.width, height: windowState.height }} onPointerDown={onFocus}>
      <header className="window-bar" onMouseDown={startDrag}>
        <div className="window-dots">
          <button className="dot close" onClick={onClose} onMouseDown={(event) => event.stopPropagation()} aria-label="Close window"><X size={11} /></button>
          <button className="dot minimize" onClick={onMinimize} onMouseDown={(event) => event.stopPropagation()} aria-label={`Minimize ${title}`}><Minimize2 size={9} /></button>
          <button className="dot expand" onClick={maximize} onMouseDown={(event) => event.stopPropagation()} aria-label={`${windowState.maximized ? "Restore" : "Maximize"} ${title}`} />
        </div>
        <p>{title}</p>
        <span className="window-status">⌘ portfolio</span>
      </header>
      <div className="window-content">{children}</div>
      <button className="window-resize" onMouseDown={startResize} aria-label={`Resize ${title}`} />
    </section>
  );
}

function AboutApp() {
  return (
    <div className="about-app">
      <div className="identity-card">
        <div className="avatar-wrap"><Image src="/pic.webp" alt="Mehfooz-ur-Rehman" width={150} height={150} priority /></div>
        <div>
          <p className="app-kicker">SYSTEM PROFILE / 01</p>
          <h1>Mehfooz-ur-<br />Rehman</h1>
          <p className="identity-role">{profile.role}</p>
        </div>
        <span className="availability"><i /> Available for new builds</span>
      </div>
      <p className="about-copy">{profile.about}</p>
      <div className="capability-grid">
        {profileHighlights.map((item) => (
          <article key={item.title}>
            <item.icon size={20} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <div className="stack-strip"><span>ACTIVE TOOLKIT</span>{stack.slice(0, 10).map((item) => <b key={item}>{item}</b>)}</div>
    </div>
  );
}

function WorkApp() {
  return (
    <div className="work-app">
      <div className="app-intro"><p className="app-kicker">PROJECT EXPLORER / {String(projects.length).padStart(2, "0")}</p><h1>Shipped, not shelved.</h1></div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-file" key={project.slug}>
            <div className={`project-art art-${index % 4}`}><span>{String(index + 1).padStart(2, "0")}</span><Code2 size={27} /></div>
            <div className="project-meta"><p>{project.category}</p><h2>{project.title}</h2><span>{project.summary}</span></div>
            <div className="project-actions"><Link href={`/case-studies/${project.slug}`}>Open case study <ArrowUpRight size={15} /></Link>{project.url && <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}><ArrowUpRight size={16} /></a>}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ExperienceApp() {
  return (
    <div className="experience-app">
      <div className="app-intro"><p className="app-kicker">TIMELINE / CAREER LOG</p><h1>Systems, products, outcomes.</h1></div>
      <div className="timeline">
        {experience.map((item) => <article key={`${item.company}-${item.period}`}><div className="timeline-date">{item.period}</div><div className="timeline-dot" /><div><h2>{item.role}</h2><p className="company-line">{item.company} <span>·</span> {item.location}</p><p>{item.summary}</p><div className="skills">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div></article>)}
      </div>
      <div className="education-row">{education.map((item) => <div key={item.school}><p className="app-kicker">EDUCATION</p><h2>{item.school}</h2><p>{item.degree} · {item.period}</p></div>)}</div>
    </div>
  );
}

function ContactApp() {
  const lines = useMemo(() => [
    "mehf@portfolio:~$ init collaboration",
    "> connection ready",
    "> product thinking: online",
    "> full-stack execution: online",
  ], []);
  return <div className="contact-app"><div className="terminal-output">{lines.map((line) => <p key={line}>{line}</p>)}<p className="cursor-line">mehf@portfolio:~$ <i /></p></div><div className="contact-grid"><a href={`mailto:${profile.email}`}><Mail size={20} /><span>Email</span><strong>{profile.email}</strong></a><a href={profile.whatsapp}><MessageCircle size={20} /><span>WhatsApp</span><strong>{profile.phone}</strong></a><a href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={20} /><span>GitHub</span><strong>See the source</strong></a></div><p className="contact-note">Send the workflow, product idea, or stuck project. I’ll help turn it into something people can use.</p></div>;
}

export function PortfolioOS() {
  const [windows, setWindows] = useState<OpenWindow[]>([
    { id: "about", x: 0, y: 0, z: 2, width: 760, height: 570 },
    { id: "work", x: 120, y: 92, z: 1, width: 760, height: 570 },
  ]);
  const [booted, setBooted] = useState(false);

  useEffect(() => { const timer = window.setTimeout(() => setBooted(true), 450); return () => window.clearTimeout(timer); }, []);
  const openApp = (id: AppId) => {
    if (id === "resume") { window.open("/cv.pdf", "_blank"); return; }
    setWindows((current) => {
      const topZ = Math.max(0, ...current.map((item) => item.z)) + 1;
      const existing = current.find((item) => item.id === id);
      if (existing) return current.map((item) => item.id === id ? { ...item, minimized: false, z: topZ } : item);
      const offset = current.length * 34;
      return [...current, { id, x: 50 + (offset % 160), y: 34 + (offset % 120), z: topZ, width: 760, height: 570 }];
    });
  };
  const closeApp = (id: OpenWindow["id"]) => setWindows((current) => current.filter((item) => item.id !== id));
  const focusApp = (id: OpenWindow["id"]) => setWindows((current) => {
    const topZ = Math.max(0, ...current.map((item) => item.z)) + 1;
    return current.map((item) => item.id === id ? { ...item, z: topZ } : item);
  });
  const moveApp = (id: OpenWindow["id"], x: number, y: number) => setWindows((current) => current.map((item) => item.id === id ? { ...item, x, y } : item));
  const resizeApp = (id: OpenWindow["id"], width: number, height: number) => setWindows((current) => current.map((item) => item.id === id ? { ...item, width, height } : item));
  const minimizeApp = (id: OpenWindow["id"]) => setWindows((current) => current.map((item) => item.id === id ? { ...item, minimized: true } : item));
  const maximizeApp = (id: OpenWindow["id"], bounds: DOMRect) => setWindows((current) => current.map((item) => {
    if (item.id !== id) return item;
    if (item.maximized && item.restore) return { ...item, ...item.restore, maximized: false, restore: undefined };
    return { ...item, maximized: true, restore: { x: item.x, y: item.y, width: item.width, height: item.height }, x: -bounds.left + 10, y: -bounds.top + 40, width: window.innerWidth - 20, height: window.innerHeight - 56 };
  }));
  const openAllApps = () => setWindows((current) => {
    const appIds: OpenWindow["id"][] = ["about", "work", "experience", "contact"];
    const highestZ = Math.max(0, ...current.map((item) => item.z));
    return appIds.map((id, index) => {
      const existing = current.find((item) => item.id === id);
      return existing ?? { id, x: 22 + index * 46, y: 18 + index * 34, z: highestZ + index + 1, width: 760, height: 570 };
    });
  });
  const renderApp = (id: OpenWindow["id"]) => id === "about" ? <AboutApp /> : id === "work" ? <WorkApp /> : id === "experience" ? <ExperienceApp /> : <ContactApp />;

  return <main className={`os-shell ${booted ? "is-booted" : ""}`}>
    <div className="grain" />
    <header className="menubar"><div><Monitor size={14} /> <b>MEHFOOZ OS</b><span>Finder</span><span>Projects</span><span>View</span></div><div><span className="live-dot" /> BUILDING THE NEXT THING <time>2026</time></div></header>
    <div className="desktop">
      <section className="desktop-intro"><p className="boot-label">WELCOME TO</p><h1>Mehfooz<br /><em>OS</em></h1><p>A working desktop for a full-stack product developer.</p></section>
      <nav className="desktop-icons" aria-label="Portfolio applications">{apps.map((app) => { const Icon = app.icon; return <button className={windows.some((item) => item.id === app.id) ? "selected" : ""} onClick={() => openApp(app.id)} key={app.id}><span><Icon size={25} /></span>{app.label}</button>; })}</nav>
      <div className="workspace">{windows.filter((windowState) => !windowState.minimized).map((windowState) => <WindowFrame key={windowState.id} title={apps.find((app) => app.id === windowState.id)!.label} windowState={windowState} onClose={() => closeApp(windowState.id)} onFocus={() => focusApp(windowState.id)} onMove={(x, y) => moveApp(windowState.id, x, y)} onResize={(width, height) => resizeApp(windowState.id, width, height)} onMinimize={() => minimizeApp(windowState.id)} onMaximize={(bounds) => maximizeApp(windowState.id, bounds)}>{renderApp(windowState.id)}</WindowFrame>)}</div>
    </div>
    <footer className="dock">{apps.slice(0, 4).map((app) => { const Icon = app.icon; const state = windows.find((item) => item.id === app.id); return <button className={`${state ? "active" : ""} ${state?.minimized ? "minimized" : ""}`} onClick={() => openApp(app.id)} aria-label={app.label} data-label={app.label} key={app.id}><Icon size={21} /></button>; })}<span /><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" data-label="LinkedIn"><ContactRound size={20} /></a><button onClick={openAllApps} aria-label="Open all portfolio applications" data-label="Open all apps"><Grid2X2 size={19} /></button></footer>
  </main>;
}
