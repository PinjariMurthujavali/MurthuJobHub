import React, { useMemo, useState } from "react";
import { Search, MapPin, SlidersHorizontal, ArrowUpRight, BriefcaseBusiness, Sparkles, ShieldCheck, Bell, Menu, X, ChevronDown, Bookmark, Send, CircleHelp, Zap } from "lucide-react";

const categories = ["All jobs", "IT & Software", "Core Engineering", "Government", "Banking", "Teaching", "Healthcare", "Sales & Marketing", "BPO", "Internships", "Remote"];
const locations = ["Any location", "Hyderabad", "Bengaluru", "Chennai", "Mumbai", "Pune", "Delhi NCR", "Vijayawada", "Visakhapatnam", "Remote"];
const features = [
  ["◎", "Verified-first", "Clear verification status and last-checked details on every listing."],
  ["↗", "Original apply links", "Apply on the employer's or source platform's own website."],
  ["◷", "Freshness checks", "Expired and closed roles are removed after successful revalidation."]
];

export default function App() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("Any location");
  const [category, setCategory] = useState("All jobs");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const hasSearch = query.trim().length > 0 || location !== "Any location" || category !== "All jobs";
  const headline = useMemo(() => query.trim() ? `Search: “${query.trim()}”` : category !== "All jobs" ? category : "Latest opportunities", [query, category]);

  function submitFeedback(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return <div className="app-shell">
    <div className="announcement"><Sparkles size={14}/> Your next opportunity starts with one search <span className="announce-dot">•</span><span>Built for India</span></div>
    <header className="navbar">
      <a className="brand" href="#" aria-label="Murthu Job Hub home"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MURTHU <b>JOB HUB</b></span></a>
      <nav className={mobileOpen ? "nav-links open" : "nav-links"}>
        <a href="#jobs" onClick={()=>setMobileOpen(false)}>Find jobs</a>
        <a href="#categories" onClick={()=>setMobileOpen(false)}>Explore categories</a>
        <a href="#how" onClick={()=>setMobileOpen(false)}>How it works</a>
        <button className="nav-feedback" onClick={()=>{setFeedbackOpen(true);setMobileOpen(false)}}>Send feedback</button>
      </nav>
      <div className="nav-actions"><button className="icon-button" aria-label="Saved jobs" onClick={()=>setSaved(!saved)}><Bookmark size={17}/></button><button className="signin" onClick={()=>document.getElementById("jobs").scrollIntoView({behavior:"smooth"})}>Explore jobs <ArrowUpRight size={15}/></button><button className="mobile-menu" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen?<X/>:<Menu/>}</button></div>
    </header>

    <main>
      <section className="hero">
        <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
        <div className="hero-content">
          <div className="eyebrow"><span className="pulse"/> CAREER OPPORTUNITIES, ALL IN ONE PLACE</div>
          <h1>Find work that<br/>moves <span>you forward.</span></h1>
          <p className="hero-copy">Discover opportunities across India. Search smarter, explore confidently, and apply directly at the source.</p>
          <div className="search-panel">
            <div className="search-field"><Search size={19}/><input value={query} onChange={e=>setQuery(e.target.value)} onKeyDown={e=>e.key==="Enter"&&document.getElementById("jobs").scrollIntoView({behavior:"smooth"})} placeholder="Job title, skill, or company"/></div>
            <div className="search-divider"/>
            <div className="location-field"><MapPin size={18}/><select value={location} onChange={e=>setLocation(e.target.value)}>{locations.map(x=><option key={x}>{x}</option>)}</select><ChevronDown size={15}/></div>
            <button className="search-button" onClick={()=>document.getElementById("jobs").scrollIntoView({behavior:"smooth"})}>Search jobs <ArrowUpRight size={17}/></button>
          </div>
          <div className="popular"><span>Popular:</span>{["Python","Fresher","Remote","Internship","Data Analyst"].map(x=><button key={x} onClick={()=>setQuery(x)}>{x}</button>)}</div>
        </div>
        <div className="hero-side">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="hero-center"><span>MJH</span><small>YOUR NEXT<br/>CHAPTER</small></div>
          <div className="float-card card-top"><span className="float-icon purple"><Zap size={16}/></span><span><b>Search smarter</b><small>One place. Many paths.</small></span></div>
          <div className="float-card card-bottom"><span className="float-icon blue"><ShieldCheck size={17}/></span><span><b>Source transparency</b><small>Know where to apply</small></span></div>
        </div>
        <div className="hero-bottom"><span>MADE FOR EVERY CAREER STAGE</span><span className="hero-line"/><span>FRESHERS · EXPERIENCED · CAREER SWITCHERS</span></div>
      </section>

      <section className="trust-strip"><div><ShieldCheck/><span><b>Verification transparency</b><small>See what is and isn't verified</small></span></div><div><ArrowUpRight/><span><b>Apply at the source</b><small>No misleading apply buttons</small></span></div><div><Bell/><span><b>Stay opportunity-ready</b><small>Alerts planned for account setup</small></span></div></section>

      <section className="jobs-section" id="jobs">
        <div className="section-heading"><div><div className="eyebrow dark-eyebrow">YOUR NEXT MOVE</div><h2>{headline}</h2><p>Search opportunities by role, location, and career path.</p></div><button className="filter-button" onClick={()=>setShowFilters(!showFilters)}><SlidersHorizontal size={16}/> Filters</button></div>
        <div className="category-row" id="categories">{categories.map(c=><button key={c} className={category===c?"category active":"category"} onClick={()=>setCategory(c)}>{c}</button>)}</div>
        {showFilters&&<div className="filter-panel"><label>Location<select value={location} onChange={e=>setLocation(e.target.value)}>{locations.map(x=><option key={x}>{x}</option>)}</select></label><label>Experience<select><option>Any experience</option><option>Fresher</option><option>1–3 years</option><option>3–5 years</option><option>5+ years</option></select></label><label>Work mode<select><option>Any work mode</option><option>On-site</option><option>Hybrid</option><option>Remote</option></select></label><label>Employment type<select><option>Any type</option><option>Full-time</option><option>Part-time</option><option>Internship</option><option>Contract</option></select></label></div>}
        <div className="results-bar"><span>{hasSearch ? "Matching opportunities" : "Job board status"}</span><span className="status-pill"><span className="status-dot"/> Live verification system not connected</span></div>
        <div className="empty-state">
          <div className="empty-graphic"><div className="empty-ring ring1"/><div className="empty-ring ring2"/><div className="empty-icon"><BriefcaseBusiness size={30}/></div><span className="spark s1">✦</span><span className="spark s2">✧</span></div>
          <div className="empty-label">READY FOR THE RIGHT OPPORTUNITY</div>
          <h3>{hasSearch ? "No verified matches yet" : "Your next opportunity belongs here."}</h3>
          <p>{hasSearch ? "There are no verified listings for these filters yet. Try a broader search or clear your filters." : "The job board is ready, but authorized job-source feeds have not been connected yet. We won't show made-up vacancies or fake hiring counts."}</p>
          <button className="outline-button" onClick={()=>{setQuery("");setLocation("Any location");setCategory("All jobs");setShowFilters(false)}}>Clear search filters <X size={15}/></button>
          <div className="empty-foot"><ShieldCheck size={15}/> Listings appear here only after a source is connected and the job is validated.</div>
        </div>
      </section>

      <section className="how-section" id="how"><div className="eyebrow dark-eyebrow">BUILT AROUND YOUR SEARCH</div><h2>A clearer way to find your next role.</h2><div className="feature-grid">{features.map(([icon,title,desc],i)=><article className="feature-card" key={title}><div className="feature-number">0{i+1}</div><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

      <section className="cta-section"><div><div className="eyebrow">HAVE A SUGGESTION?</div><h2>Help make job searching<br/>a little less stressful.</h2><p>Tell us what would make this platform more useful.</p></div><button onClick={()=>setFeedbackOpen(true)} className="cta-button">Share feedback <Send size={16}/></button><div className="cta-glow"/></section>
    </main>

    <footer><a className="brand" href="#"><span className="brand-mark">M<span>.</span></span><span className="brand-name">MURTHU <b>JOB HUB</b></span></a><span>© {new Date().getFullYear()} Murthu Job Hub. Built for opportunity.</span><a href="#how">About this platform <ArrowUpRight size={13}/></a></footer>

    {feedbackOpen&&<div className="modal-backdrop" onClick={()=>setFeedbackOpen(false)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setFeedbackOpen(false)}><X/></button>{submitted?<><div className="modal-symbol">✓</div><h3>Thanks for the feedback.</h3><p>Your message is ready, but a feedback service has not been connected yet. Nothing has been sent to a server.</p><button className="search-button full" onClick={()=>{setFeedbackOpen(false);setSubmitted(false);setFeedback("")}}>Close</button></>:<><div className="eyebrow dark-eyebrow">YOUR VOICE MATTERS</div><h3>Share your feedback</h3><p>What should we improve or add?</p><form onSubmit={submitFeedback}><textarea required minLength={5} value={feedback} onChange={e=>setFeedback(e.target.value)} placeholder="Type your suggestion here…"/><button className="search-button full" type="submit">Submit feedback <Send size={15}/></button></form><small className="form-note">Feedback backend is not connected in this starter build.</small></>}</div></div>}
  </div>;
}