import { useRef, useState, useCallback, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { caseStudies } from "../content/homeContent";
import antarcticaImg800 from "@/assets/antarctica-800.webp";
import antarcticaImg1200 from "@/assets/antarctica-1200.webp";

function OGCVisual({ badge, metric }: { badge: string; metric: string }) {
  return (
    <div className="cs-visual" style={{ background: "linear-gradient(135deg, #05102a 0%, #0a1e4a 50%, #0d2860 100%)" }}>
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Workflow nodes — left */}
        {[40, 80, 120].map((y, i) => (
          <g key={i}>
            <rect x="18" y={y} width="68" height="26" rx="5" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
            <rect x="24" y={y + 7} width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
            <rect x="24" y={y + 13} width="34" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
            <rect x="24" y={y + 19} width="16" height="3" rx="1.5" fill="rgba(245,215,4,0.4)" />
          </g>
        ))}

        {/* Animated dashed connectors left→center */}
        {[53, 93, 133].map((y, i) => (
          <line key={i} x1="86" y1={y} x2="168" y2="100" stroke="rgba(245,215,4,0.55)" strokeWidth="1.2" strokeDasharray="5,4">
            <animate attributeName="stroke-dashoffset" from="0" to="-18" dur={`${1.4 + i * 0.3}s`} repeatCount="indefinite" />
          </line>
        ))}

        {/* AI agent center node */}
        <circle cx="200" cy="100" r="26" fill="rgba(0,69,139,0.7)" stroke="#f5d704" strokeWidth="1.5" />
        <circle cx="200" cy="100" r="34" fill="none" stroke="rgba(245,215,4,0.22)" strokeWidth="1" strokeDasharray="10,7">
          <animateTransform attributeName="transform" type="rotate" from="0 200 100" to="360 200 100" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="100" r="40" fill="none" stroke="rgba(245,215,4,0.08)" strokeWidth="1">
          <animate attributeName="r" values="40;44;40" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3.5s" repeatCount="indefinite" />
        </circle>
        {/* Processor / agent chip */}
        <rect x="191" y="91" width="18" height="18" rx="2" fill="rgba(245,215,4,0.1)" stroke="#f5d704" strokeWidth="1.5"/>
        <line x1="185" y1="96" x2="191" y2="96" stroke="#f5d704" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="185" y1="104" x2="191" y2="104" stroke="#f5d704" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="209" y1="96" x2="215" y2="96" stroke="#f5d704" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="209" y1="104" x2="215" y2="104" stroke="#f5d704" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="196" y1="85" x2="196" y2="91" stroke="#f5d704" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="204" y1="85" x2="204" y2="91" stroke="#f5d704" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="196" y1="109" x2="196" y2="115" stroke="#f5d704" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="204" y1="109" x2="204" y2="115" stroke="#f5d704" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="200" cy="100" r="2.5" fill="#f5d704" opacity="0.9"/>

        {/* Single animated connector center→right (green = packaged output) */}
        <line x1="228" y1="100" x2="308" y2="100" stroke="rgba(0,210,100,0.55)" strokeWidth="1.5" strokeDasharray="5,4">
          <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1.2s" repeatCount="indefinite" />
        </line>

        {/* Single CWL container output node */}
        <g>
          <rect x="310" y="56" width="80" height="88" rx="3" fill="rgba(0,20,12,0.7)" stroke="rgba(0,210,100,0.5)" strokeWidth="1.5" />
          {/* Header */}
          <rect x="310" y="56" width="80" height="17" rx="3" fill="rgba(0,185,92,0.2)" />
          <line x1="310" y1="73" x2="390" y2="73" stroke="rgba(0,210,100,0.3)" strokeWidth="0.8" />
          <text x="350" y="68" textAnchor="middle" fill="rgba(0,240,130,1)" fontSize="7.5" fontWeight="800" letterSpacing="0.18em">CWL</text>
          {/* Stacked layer bars */}
          <rect x="319" y="78" width="52" height="5" rx="1.5" fill="rgba(0,210,100,0.6)" />
          <rect x="319" y="87" width="42" height="5" rx="1.5" fill="rgba(0,210,100,0.45)" />
          <rect x="319" y="96" width="50" height="5" rx="1.5" fill="rgba(0,210,100,0.32)" />
          <rect x="319" y="105" width="36" height="5" rx="1.5" fill="rgba(0,210,100,0.2)" />
          <rect x="319" y="114" width="44" height="5" rx="1.5" fill="rgba(0,210,100,0.12)" />
          {/* Package tag */}
          <rect x="319" y="124" width="52" height="13" rx="2" fill="rgba(0,180,90,0.1)" stroke="rgba(0,200,100,0.3)" strokeWidth="0.8" />
          <text x="345" y="133" textAnchor="middle" fill="rgba(0,220,110,0.7)" fontSize="5" fontWeight="700" letterSpacing="0.12em">CONTAINER</text>
        </g>

        <text x="350" y="157" textAnchor="middle" fill="rgba(0,210,100,0.45)" fontSize="7" fontWeight="600" letterSpacing="0.15em">PACKAGED</text>
        <text x="53" y="165" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="7" fontWeight="600" letterSpacing="0.15em">CODE</text>
      </svg>
      <span className="cs-badge">{badge}</span>
      <span className="cs-metric">{metric}</span>
    </div>
  );
}

function UrbanVisual({ badge, metric }: { badge: string; metric: string }) {
  const A = "#d4a843";   // amber residential
  const D = "#b8922e";   // dark amber
  const T = "#b05848";   // terracotta historic
  const C = "#4f6e98";   // commercial blue
  const L = "#7090c0";   // light commercial
  const G = "#4a7850";   // park green
  const P = "#dedad2";   // pavement
  return (
    <div className="cs-visual" style={{ background: "#c8c3b5" }}>
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="urbFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
          </linearGradient>
        </defs>

        {/* === ZONE A — upper-left amber residential (x:0-149, y:29-90) === */}
        <rect x="0" y="29" width="24" height="12" fill={A}/><rect x="24" y="29" width="22" height="12" fill={D}/><rect x="46" y="29" width="28" height="12" fill={A}/><rect x="74" y="29" width="22" height="12" fill={D}/><rect x="96" y="29" width="26" height="12" fill={A}/><rect x="122" y="29" width="27" height="12" fill={D}/>
        <rect x="0" y="43" width="28" height="11" fill={D}/><rect x="28" y="43" width="20" height="11" fill={A}/><rect x="48" y="43" width="24" height="11" fill={D}/><rect x="72" y="43" width="26" height="11" fill={A}/><rect x="98" y="43" width="24" height="11" fill={D}/><rect x="122" y="43" width="27" height="11" fill={A}/>
        <rect x="0" y="56" width="22" height="11" fill={A}/><rect x="22" y="56" width="26" height="11" fill={D}/><rect x="48" y="56" width="22" height="11" fill={A}/><rect x="70" y="56" width="28" height="11" fill={D}/><rect x="98" y="56" width="24" height="11" fill={A}/><rect x="122" y="56" width="27" height="11" fill={D}/>
        <rect x="0" y="69" width="26" height="11" fill={D}/><rect x="26" y="69" width="22" height="11" fill={A}/><rect x="48" y="69" width="24" height="11" fill={D}/><rect x="72" y="69" width="26" height="11" fill={A}/><rect x="98" y="69" width="24" height="11" fill={D}/><rect x="122" y="69" width="27" height="11" fill={A}/>
        <rect x="0" y="82" width="24" height="8" fill={A}/><rect x="24" y="82" width="24" height="8" fill={D}/><rect x="48" y="82" width="24" height="8" fill={A}/><rect x="72" y="82" width="26" height="8" fill={D}/><rect x="98" y="82" width="24" height="8" fill={A}/><rect x="122" y="82" width="27" height="8" fill={D}/>

        {/* === ZONE B — upper-center commercial blue (x:161-283, y:29-90) === */}
        <rect x="161" y="29" width="28" height="12" fill={C}/><rect x="189" y="29" width="22" height="12" fill={L}/><rect x="211" y="29" width="30" height="12" fill={C}/><rect x="241" y="29" width="20" height="12" fill={L}/><rect x="261" y="29" width="22" height="12" fill={C}/>
        <rect x="161" y="43" width="24" height="11" fill={L}/><rect x="185" y="43" width="28" height="11" fill={C}/><rect x="213" y="43" width="24" height="11" fill={L}/><rect x="237" y="43" width="22" height="11" fill={C}/><rect x="259" y="43" width="24" height="11" fill={L}/>
        <rect x="161" y="56" width="30" height="11" fill={C}/><rect x="191" y="56" width="22" height="11" fill={L}/><rect x="213" y="56" width="26" height="11" fill={C}/><rect x="239" y="56" width="22" height="11" fill={L}/><rect x="261" y="56" width="22" height="11" fill={C}/>
        <rect x="161" y="69" width="26" height="11" fill={L}/><rect x="187" y="69" width="24" height="11" fill={C}/><rect x="211" y="69" width="28" height="11" fill={L}/><rect x="239" y="69" width="20" height="11" fill={C}/><rect x="259" y="69" width="24" height="11" fill={L}/>
        <rect x="161" y="82" width="28" height="8" fill={C}/><rect x="189" y="82" width="24" height="8" fill={L}/><rect x="213" y="82" width="26" height="8" fill={C}/><rect x="239" y="82" width="22" height="8" fill={L}/><rect x="261" y="82" width="22" height="8" fill={C}/>

        {/* === ZONE C — upper-right terracotta (x:293-353, y:29-90) === */}
        <rect x="293" y="29" width="22" height="12" fill={T}/><rect x="315" y="29" width="20" height="12" fill={A}/><rect x="335" y="29" width="18" height="12" fill={T}/>
        <rect x="293" y="43" width="20" height="11" fill={A}/><rect x="313" y="43" width="22" height="11" fill={T}/><rect x="335" y="43" width="18" height="11" fill={A}/>
        <rect x="293" y="56" width="24" height="11" fill={T}/><rect x="317" y="56" width="18" height="11" fill={A}/><rect x="335" y="56" width="18" height="11" fill={T}/>
        <rect x="293" y="69" width="20" height="11" fill={A}/><rect x="313" y="69" width="22" height="11" fill={T}/><rect x="335" y="69" width="18" height="11" fill={A}/>
        <rect x="293" y="82" width="22" height="8" fill={T}/><rect x="315" y="82" width="20" height="8" fill={A}/><rect x="335" y="82" width="18" height="8" fill={T}/>

        {/* === ZONE D — far-right commercial (x:363-400, y:29-90) === */}
        <rect x="363" y="29" width="37" height="12" fill={C}/>
        <rect x="363" y="43" width="37" height="11" fill={L}/>
        <rect x="363" y="56" width="37" height="11" fill={C}/>
        <rect x="363" y="69" width="37" height="11" fill={L}/>
        <rect x="363" y="82" width="37" height="8" fill={C}/>

        {/* === ZONE E — park (x:0-149, y:102-167) === */}
        <rect x="0" y="102" width="149" height="65" fill={G}/>
        <ellipse cx="30" cy="118" rx="22" ry="14" fill="#3d6342" opacity="0.7"/>
        <ellipse cx="110" cy="112" rx="26" ry="14" fill="#3d6342" opacity="0.65"/>
        <ellipse cx="70" cy="155" rx="30" ry="12" fill="#3d6342" opacity="0.6"/>
        <ellipse cx="120" cy="148" rx="20" ry="13" fill="#5a8a5a" opacity="0.65"/>
        <ellipse cx="22" cy="152" rx="18" ry="12" fill="#5a8a5a" opacity="0.6"/>
        <rect x="58" y="126" width="16" height="16" fill="#d4cfc0" opacity="0.8"/>
        <line x1="66" y1="119" x2="66" y2="152" stroke="#c4bfb0" strokeWidth="1.5" opacity="0.7"/>
        <line x1="40" y1="134" x2="100" y2="134" stroke="#c4bfb0" strokeWidth="1.5" opacity="0.7"/>

        {/* === ZONE F — lower-center amber residential (x:161-283, y:102-167) === */}
        <rect x="161" y="102" width="26" height="11" fill={A}/><rect x="187" y="102" width="22" height="11" fill={D}/><rect x="209" y="102" width="28" height="11" fill={A}/><rect x="237" y="102" width="22" height="11" fill={D}/><rect x="259" y="102" width="24" height="11" fill={A}/>
        <rect x="161" y="115" width="24" height="11" fill={D}/><rect x="185" y="115" width="26" height="11" fill={A}/><rect x="211" y="115" width="22" height="11" fill={D}/><rect x="233" y="115" width="28" height="11" fill={A}/><rect x="261" y="115" width="22" height="11" fill={D}/>
        <rect x="161" y="128" width="28" height="11" fill={A}/><rect x="189" y="128" width="22" height="11" fill={D}/><rect x="211" y="128" width="26" height="11" fill={A}/><rect x="237" y="128" width="22" height="11" fill={D}/><rect x="259" y="128" width="24" height="11" fill={A}/>
        <rect x="161" y="141" width="22" height="11" fill={D}/><rect x="183" y="141" width="28" height="11" fill={A}/><rect x="211" y="141" width="24" height="11" fill={D}/><rect x="235" y="141" width="26" height="11" fill={A}/><rect x="261" y="141" width="22" height="11" fill={D}/>
        <rect x="161" y="154" width="26" height="13" fill={A}/><rect x="187" y="154" width="22" height="13" fill={D}/><rect x="209" y="154" width="28" height="13" fill={A}/><rect x="237" y="154" width="22" height="13" fill={D}/><rect x="259" y="154" width="24" height="13" fill={A}/>

        {/* === ZONE G — lower-right terracotta (x:293-353, y:102-167) === */}
        <rect x="293" y="102" width="22" height="11" fill={T}/><rect x="315" y="102" width="20" height="11" fill={A}/><rect x="335" y="102" width="18" height="11" fill={T}/>
        <rect x="293" y="115" width="20" height="11" fill={A}/><rect x="313" y="115" width="22" height="11" fill={T}/><rect x="335" y="115" width="18" height="11" fill={A}/>
        <rect x="293" y="128" width="24" height="11" fill={T}/><rect x="317" y="128" width="18" height="11" fill={A}/><rect x="335" y="128" width="18" height="11" fill={T}/>
        <rect x="293" y="141" width="20" height="11" fill={A}/><rect x="313" y="141" width="22" height="11" fill={T}/><rect x="335" y="141" width="18" height="11" fill={A}/>
        <rect x="293" y="154" width="22" height="13" fill={T}/><rect x="315" y="154" width="20" height="13" fill={A}/><rect x="335" y="154" width="18" height="13" fill={T}/>

        {/* === ZONE H — far-right lower commercial (x:363-400, y:102-167) === */}
        <rect x="363" y="102" width="37" height="11" fill={L}/>
        <rect x="363" y="115" width="37" height="11" fill={C}/>
        <rect x="363" y="128" width="37" height="11" fill={L}/>
        <rect x="363" y="141" width="37" height="11" fill={C}/>
        <rect x="363" y="154" width="37" height="13" fill={L}/>

        {/* === TOP STRIP === */}
        <rect x="0" y="0" width="30" height="17" fill={A}/><rect x="30" y="0" width="24" height="17" fill={D}/><rect x="54" y="0" width="28" height="17" fill={A}/><rect x="82" y="0" width="22" height="17" fill={D}/><rect x="104" y="0" width="26" height="17" fill={A}/><rect x="130" y="0" width="20" height="17" fill={D}/>
        <rect x="161" y="0" width="26" height="17" fill={C}/><rect x="187" y="0" width="24" height="17" fill={L}/><rect x="211" y="0" width="28" height="17" fill={C}/><rect x="239" y="0" width="22" height="17" fill={L}/><rect x="261" y="0" width="22" height="17" fill={C}/>
        <rect x="293" y="0" width="22" height="17" fill={T}/><rect x="315" y="0" width="20" height="17" fill={A}/><rect x="335" y="0" width="18" height="17" fill={T}/>
        <rect x="363" y="0" width="37" height="17" fill={C}/>

        {/* === BOTTOM STRIP === */}
        <rect x="0" y="179" width="30" height="21" fill={A}/><rect x="30" y="179" width="24" height="21" fill={D}/><rect x="54" y="179" width="28" height="21" fill={T}/><rect x="82" y="179" width="22" height="21" fill={A}/><rect x="104" y="179" width="26" height="21" fill={D}/><rect x="130" y="179" width="20" height="21" fill={A}/>
        <rect x="161" y="179" width="26" height="21" fill={A}/><rect x="187" y="179" width="24" height="21" fill={D}/><rect x="211" y="179" width="28" height="21" fill={A}/><rect x="239" y="179" width="22" height="21" fill={D}/><rect x="261" y="179" width="22" height="21" fill={T}/>
        <rect x="293" y="179" width="22" height="21" fill={T}/><rect x="315" y="179" width="20" height="21" fill={A}/><rect x="335" y="179" width="18" height="21" fill={T}/>
        <rect x="363" y="179" width="37" height="21" fill={L}/>


{/* === ROADS — on top of everything === */}
        <rect x="0" y="18" width="400" height="11" fill={P}/>
        <path d="M 0 92 L 160 90 L 400 93" stroke={P} strokeWidth="12" fill="none"/>
        <rect x="0" y="168" width="400" height="11" fill={P}/>
        <rect x="150" y="0" width="11" height="200" fill={P}/>
        <rect x="284" y="0" width="9" height="200" fill={P}/>
        <rect x="354" y="0" width="9" height="200" fill={P}/>
        <path d="M 0 38 C 50 30 96 52 110 82 C 120 108 114 136 96 155 C 76 172 44 180 0 184" stroke={P} strokeWidth="10" fill="none"/>
        <line x1="222" y1="93" x2="222" y2="168" stroke={P} strokeWidth="5"/>

{/* === ANIMATED CARS === */}
        <rect x="0" y="90" width="8" height="5" rx="1" fill="white" opacity="0.9">
          <animateTransform attributeName="transform" type="translate" from="-10 0" to="414 0" dur="5.5s" repeatCount="indefinite"/>
        </rect>
        <rect x="0" y="95" width="8" height="5" rx="1" fill="white" opacity="0.7">
          <animateTransform attributeName="transform" type="translate" from="414 0" to="-10 0" dur="7s" begin="2s" repeatCount="indefinite"/>
        </rect>
        <rect x="152" y="0" width="5" height="7" rx="1" fill="white" opacity="0.8">
          <animateTransform attributeName="transform" type="translate" from="0 -8" to="0 208" dur="6.5s" begin="1s" repeatCount="indefinite"/>
        </rect>
        <rect x="286" y="0" width="5" height="7" rx="1" fill="white" opacity="0.75">
          <animateTransform attributeName="transform" type="translate" from="0 208" to="0 -8" dur="8s" begin="3s" repeatCount="indefinite"/>
        </rect>

        {/* Depth overlay */}
        <rect width="400" height="200" fill="url(#urbFade)"/>
      </svg>
      <span className="cs-badge">{badge}</span>
      <span className="cs-metric">{metric}</span>
    </div>
  );
}

function AntarcticaVisual({ badge, metric }: { badge: string; metric: string }) {
  return (
    <div className="cs-visual">
      <img
        src={antarcticaImg1200}
        srcSet={`${antarcticaImg800} 800w, ${antarcticaImg1200} 1200w`}
        sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt=""
        loading="lazy"
        decoding="async"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "center 25%" }}
      />
      {/* Vignette */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 40%, rgba(5,10,20,0.55) 100%)" }} />
      {/* Bottom fade so badge/metric sit cleanly */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,20,0.6) 0%, transparent 50%)" }} />
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 400 260"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        {/* 3×3 panel dividers */}
        <line x1="133" y1="0" x2="133" y2="260" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="266" y1="0" x2="266" y2="260" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="0" y1="87" x2="400" y2="87" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
        <line x1="0" y1="174" x2="400" y2="174" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

        {/* Panel labels */}
        {([
          [4, 9, "Surface Elevation", 64],
          [137, 9, "Ice Temperature", 56],
          [270, 9, "Ice Velocity", 44],
          [4, 100, "Ice Thickness", 48],
          [137, 100, "Subglacial Lakes", 60],
          [270, 100, "Calving Fronts", 52],
          [4, 215, "Firn Air", 32],
          [137, 215, "Basal Melt", 38],
          [270, 215, "Bedrock", 28],
        ] as [number, number, string, number][]).map(([x, y, label, w]) => (
          <g key={label}>
            <rect x={x - 2} y={y - 7} width={w} height={10} fill="rgba(0,0,0,0.65)" rx="1" />
            <text x={x} y={y} fill="rgba(255,255,255,0.9)" fontSize="6" fontWeight="700" letterSpacing="0.06em">
              {label}
            </text>
          </g>
        ))}

        {/* Animated horizontal scan line sweeping down */}
        <line x1="0" x2="400" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5">
          <animateTransform attributeName="transform" type="translate" from="0 0" to="0 260" dur="4s" repeatCount="indefinite" />
        </line>
        {/* Faint glow band behind the scan line */}
        <rect x="0" width="400" height="6" fill="rgba(255,255,255,0.04)">
          <animateTransform attributeName="transform" type="translate" from="0 -6" to="0 260" dur="4s" repeatCount="indefinite" />
        </rect>

        {/* Pulsing data-point rings at key locations across the panels */}
        {([
          [66, 44, "rgba(180,220,60,0.9)", "2.8s"],
          [200, 38, "rgba(220,100,20,0.9)", "3.4s"],
          [333, 44, "rgba(20,180,200,0.9)", "2.2s"],
          [66, 130, "rgba(80,160,220,0.9)", "3.8s"],
          [200, 125, "rgba(0,220,255,0.9)", "2.6s"],
          [333, 125, "rgba(200,220,240,0.9)", "4.1s"],
          [66, 235, "rgba(60,60,80,0.7)", "3.1s"],
          [200, 232, "rgba(200,120,100,0.9)", "2.4s"],
          [333, 235, "rgba(160,140,110,0.9)", "3.6s"],
        ] as [number, number, string, string][]).map(([cx, cy, color, dur], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="3" fill={color} opacity="0.9" />
            <circle cx={cx} cy={cy} r="3" fill="none" stroke={color} strokeWidth="1.5" opacity="0">
              <animate attributeName="r" values="3;14;3" dur={dur} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;0;0.8" dur={dur} repeatCount="indefinite" />
            </circle>
            <circle cx={cx} cy={cy} r="3" fill="none" stroke={color} strokeWidth="0.8" opacity="0">
              <animate attributeName="r" values="3;22;3" dur={dur} begin="0.3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur={dur} begin="0.3s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
      <span className="cs-badge">{badge}</span>
      <span className="cs-metric">{metric}</span>
    </div>
  );
}

function SustainabilityVisual({ badge, metric }: { badge: string; metric: string }) {
  const S1 = "#f5d704"; // brand gold  — Scope 1 direct emissions
  const S2 = "#7eb8d4"; // sky blue    — Scope 2 purchased energy
  const S3 = "#a8c8e8"; // pale blue   — Scope 3 value chain
  return (
    <div
      className="cs-visual"
      style={{ background: "linear-gradient(135deg, #040e18 0%, #071c2c 45%, #0a2220 100%)" }}
    >
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* === LEFT PANEL: Scope data bars === */}
        <text x="16" y="22" fill="rgba(255,255,255,0.28)" fontSize="6.5" fontWeight="700" letterSpacing="0.2em">
          CARBON FOOTPRINT
        </text>

        {/* Scope 1 */}
        <text x="16" y="44" fill={S1} fontSize="7.5" fontWeight="800" letterSpacing="0.1em">SCOPE 1</text>
        <text x="16" y="55" fill="rgba(255,255,255,0.32)" fontSize="5.5" letterSpacing="0.06em">Direct emissions</text>
        <rect x="16" y="59" width="126" height="4.5" rx="2.25" fill="rgba(255,255,255,0.07)" />
        <rect x="16" y="59" width="0" height="4.5" rx="2.25" fill={S1} opacity="0.88">
          <animate attributeName="width" from="0" to="52" dur="1.2s" fill="freeze" begin="0.3s" />
        </rect>

        {/* Scope 2 */}
        <text x="16" y="82" fill={S2} fontSize="7.5" fontWeight="800" letterSpacing="0.1em">SCOPE 2</text>
        <text x="16" y="93" fill="rgba(255,255,255,0.32)" fontSize="5.5" letterSpacing="0.06em">Purchased energy</text>
        <rect x="16" y="97" width="126" height="4.5" rx="2.25" fill="rgba(255,255,255,0.07)" />
        <rect x="16" y="97" width="0" height="4.5" rx="2.25" fill={S2} opacity="0.88">
          <animate attributeName="width" from="0" to="77" dur="1.2s" fill="freeze" begin="0.6s" />
        </rect>

        {/* Scope 3 */}
        <text x="16" y="120" fill={S3} fontSize="7.5" fontWeight="800" letterSpacing="0.1em">SCOPE 3</text>
        <text x="16" y="131" fill="rgba(255,255,255,0.32)" fontSize="5.5" letterSpacing="0.06em">Value chain</text>
        <rect x="16" y="135" width="126" height="4.5" rx="2.25" fill="rgba(255,255,255,0.07)" />
        <rect x="16" y="135" width="0" height="4.5" rx="2.25" fill={S3} opacity="0.88">
          <animate attributeName="width" from="0" to="108" dur="1.2s" fill="freeze" begin="0.9s" />
        </rect>

        {/* === RIGHT PANEL: Concentric emission rings === */}
        {/* Centered at cx=285, cy=100 */}

        {/* Scope 3 — value chain (outermost) */}
        <circle cx="285" cy="100" r="82" fill="none" stroke={S3} strokeWidth="22" opacity="0.045" />
        <circle cx="285" cy="100" r="82" fill="none" stroke={S3} strokeWidth="1" strokeDasharray="9,6" opacity="0.28">
          <animateTransform attributeName="transform" type="rotate" from="0 285 100" to="360 285 100" dur="24s" repeatCount="indefinite" />
        </circle>

        {/* Scope 2 — purchased energy (middle) */}
        <circle cx="285" cy="100" r="57" fill="none" stroke={S2} strokeWidth="16" opacity="0.065" />
        <circle cx="285" cy="100" r="57" fill="none" stroke={S2} strokeWidth="1.2" strokeDasharray="7,5" opacity="0.38">
          <animateTransform attributeName="transform" type="rotate" from="0 285 100" to="-360 285 100" dur="17s" repeatCount="indefinite" />
        </circle>

        {/* Scope 1 — direct (innermost) */}
        <circle cx="285" cy="100" r="34" fill="none" stroke={S1} strokeWidth="10" opacity="0.1" />
        <circle cx="285" cy="100" r="34" fill="none" stroke={S1} strokeWidth="1.5" strokeDasharray="5,4" opacity="0.55">
          <animateTransform attributeName="transform" type="rotate" from="0 285 100" to="360 285 100" dur="11s" repeatCount="indefinite" />
        </circle>

        {/* Building — chimney */}
        <rect x="277" y="57" width="6" height="17" rx="1" fill="rgba(255,255,255,0.16)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
        {/* Roof */}
        <polygon points="273,80 285,67 297,80" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.22)" strokeWidth="0.8" />
        {/* Body */}
        <rect x="273" y="80" width="24" height="26" rx="1" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        {/* Windows */}
        <rect x="277" y="85" width="5" height="5" rx="0.5" fill={S1} opacity="0.7" />
        <rect x="286" y="85" width="5" height="5" rx="0.5" fill={S2} opacity="0.6" />
        <rect x="277" y="95" width="5" height="4" rx="0.5" fill={S2} opacity="0.55" />
        <rect x="286" y="95" width="5" height="4" rx="0.5" fill={S3} opacity="0.65" />
        {/* Door */}
        <rect x="281" y="101" width="8" height="5" rx="0.5" fill="rgba(255,255,255,0.14)" />

        {/* Smoke particles from chimney */}
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={280 + (i % 2 === 0 ? 0 : 1.5)} cy={55} r={2.5 + i * 0.4} fill={S1} opacity="0">
            <animate
              attributeName="cy"
              values={`55;${42 - i * 5};${22 - i * 7}`}
              dur={`${2.3 + i * 0.75}s`}
              begin={`${i * 0.85}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              values={`${280 + (i % 2 === 0 ? 0 : 1.5)};${280 + (i % 2 === 0 ? 3 : -2)};${280 + (i % 2 === 0 ? 5 : -4)}`}
              dur={`${2.3 + i * 0.75}s`}
              begin={`${i * 0.85}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.7;0.38;0"
              dur={`${2.3 + i * 0.75}s`}
              begin={`${i * 0.85}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values={`${2.5 + i * 0.4};${4.5 + i * 1.2};${7 + i * 2}`}
              dur={`${2.3 + i * 0.75}s`}
              begin={`${i * 0.85}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Pulsing data points on rings */}
        {([
          // [cx, cy, color, dur, begin]
          [285, 18, S3, "4.2s", "0s"],    // Scope 3 top
          [367, 100, S3, "4.2s", "1.4s"], // Scope 3 right
          [285, 43, S2, "3.1s", "0.2s"],  // Scope 2 top
          [342, 100, S2, "3.1s", "1.1s"], // Scope 2 right
          [309, 76, S1, "2.4s", "0.5s"],  // Scope 1 upper-right
          [309, 124, S1, "2.4s", "1.7s"], // Scope 1 lower-right
        ] as [number, number, string, string, string][]).map(([cx, cy, color, dur, begin], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="2.5" fill={color} opacity="0.9" />
            <circle cx={cx} cy={cy} r="2.5" fill="none" stroke={color} strokeWidth="1" opacity="0">
              <animate attributeName="r" values="2.5;9;2.5" dur={dur} begin={begin} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.75;0;0.75" dur={dur} begin={begin} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
      <span className="cs-badge">{badge}</span>
      <span className="cs-metric">{metric}</span>
    </div>
  );
}

function EMRVisual({ badge, metric }: { badge: string; metric: string }) {
  const MG = "#4ac9a0"; // medical green — health indicators
  const GD = "#f5d704"; // brand gold    — DoH hub / primary data flow
  const MB = "#7eb8d4"; // sky blue      — hospital nodes / secondary fields
  return (
    <div
      className="cs-visual"
      style={{ background: "linear-gradient(135deg, #001226 0%, #001e3c 50%, #001830 100%)" }}
    >
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* === LEFT PANEL: EMR record === */}
        <text x="14" y="18" fill="rgba(255,255,255,0.28)" fontSize="6" fontWeight="700" letterSpacing="0.2em">PATIENT RECORD</text>
        <rect x="10" y="23" width="152" height="108" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />

        {/* Field rows with animated bar fills */}
        {([
          ["PATIENT ID", MB, "0.2s", 88],
          ["DIAGNOSIS", MG, "0.5s", 112],
          ["MEDICATION", "rgba(255,255,255,0.38)", "0.8s", 64],
          ["STATUS", GD, "1.1s", 97],
        ] as [string, string, string, number][]).map(([label, color, begin, w], i) => {
          const y = 36 + i * 22;
          return (
            <g key={label}>
              <text x="18" y={y} fill={color} fontSize="5" fontWeight="700" letterSpacing="0.1em">{label}</text>
              <rect x="18" y={y + 3} width="130" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
              <rect x="18" y={y + 3} width="0" height="3" rx="1.5" fill={color} opacity="0.85">
                <animate attributeName="width" from="0" to={w} dur="1.1s" fill="freeze" begin={begin} />
              </rect>
            </g>
          );
        })}

        {/* ECG line drawn from left to right */}
        <polyline
          points="14,133 26,133 30,129 32,133 37,133 39,143 41,115 43,143 45,133 65,133 69,129 71,133 76,133 78,143 80,115 82,143 84,133 104,133 108,129 110,133 115,133 117,143 119,115 121,143 123,133 162,133"
          fill="none" stroke={MG} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="500" strokeDashoffset="500" opacity="0.75"
        >
          <animate attributeName="stroke-dashoffset" from="500" to="0" dur="2.4s" fill="freeze" begin="1.5s" />
        </polyline>

        {/* Replicated status pill */}
        <rect x="14" y="155" width="72" height="13" rx="6.5" fill="rgba(74,201,160,0.1)" stroke={MG} strokeWidth="0.8" />
        <circle cx="23" cy="161.5" r="2.5" fill={MG}>
          <animate attributeName="opacity" values="1;0.25;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text x="29" y="165" fill={MG} fontSize="5" fontWeight="700" letterSpacing="0.1em">REPLICATED</text>

        {/* === DIVIDER === */}
        <line x1="174" y1="14" x2="174" y2="186" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />

        {/* === RIGHT PANEL: Hospital network === */}
        {/* DoH hub at (295, 100) */}
        <circle cx="295" cy="100" r="22" fill="rgba(245,215,4,0.07)" stroke={GD} strokeWidth="1.5" />
        <circle cx="295" cy="100" r="30" fill="none" stroke="rgba(245,215,4,0.14)" strokeWidth="0.8" strokeDasharray="6,5">
          <animateTransform attributeName="transform" type="rotate" from="0 295 100" to="360 295 100" dur="14s" repeatCount="indefinite" />
        </circle>
        {/* Cross symbol */}
        <line x1="295" y1="89" x2="295" y2="111" stroke={GD} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="284" y1="100" x2="306" y2="100" stroke={GD} strokeWidth="2.5" strokeLinecap="round" />
        <text x="295" y="128" textAnchor="middle" fill={GD} fontSize="4.5" fontWeight="800" letterSpacing="0.1em">DEPT OF HEALTH</text>

        {/* Hospital nodes: A(215,52), B(215,148), C(370,52), D(370,148) */}
        {([
          [215, 52, MB, 1, "HOSPITAL A"],
          [215, 148, MB, 1, "HOSPITAL B"],
          [375, 148, MB, 1, "HOSPITAL D"],
        ] as [number, number, string, number, string][]).map(([cx, cy, color, opacity, label]) => (
          <g key={label}>
            <circle cx={cx} cy={cy} r="13" fill="rgba(126,184,212,0.08)" stroke={color} strokeWidth="1.2" opacity={opacity} />
            <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 7} stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity={opacity} />
            <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity={opacity} />
            <text x={cx} y={cy + 20} textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="4.5" fontWeight="700">{label}</text>
          </g>
        ))}

        {/* Hospital C (375, 52) — offline/syncing node */}
        <circle cx="375" cy="52" r="13" fill="rgba(126,184,212,0.05)" stroke="rgba(126,184,212,0.38)" strokeWidth="1.2" strokeDasharray="4,3" />
        <line x1="375" y1="45" x2="375" y2="59" stroke="rgba(126,184,212,0.45)" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="368" y1="52" x2="382" y2="52" stroke="rgba(126,184,212,0.45)" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="375" cy="52" r="18" fill="none" stroke={GD} strokeWidth="0.8" strokeDasharray="3,4" opacity="0.55">
          <animateTransform attributeName="transform" type="rotate" from="0 375 52" to="360 375 52" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <text x="375" y="72" textAnchor="middle" fill="rgba(245,215,4,0.55)" fontSize="4.5" fontWeight="700" letterSpacing="0.05em">SYNCING</text>

        {/* Connection lines: DoH (295,100) → each hospital */}
        {([
          [215, 52, GD, "1.4s"],       // A
          [215, 148, GD, "1.7s"],      // B
          [375, 52, MB, "2.2s"],       // C (pale, syncing)
          [375, 148, GD, "1.9s"],      // D
        ] as [number, number, string, string][]).map(([hx, hy, color, dur], i) => (
          <line key={i} x1="295" y1="100" x2={hx} y2={hy}
            stroke={color} strokeWidth="0.9" strokeDasharray="5,4"
            opacity={color === MB ? 0.3 : 0.45}
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-18" dur={dur} repeatCount="indefinite" />
          </line>
        ))}
      </svg>
      <span className="cs-badge">{badge}</span>
      <span className="cs-metric">{metric}</span>
    </div>
  );
}

export function CaseStudies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const dragOrigin = useRef({ x: 0, scrollLeft: 0 });

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
  }, [updateArrows]);

  const scrollCard = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".cs-card");
    const cardWidth = card ? card.offsetWidth + 28 : 408;
    el.scrollBy({ left: dir === "next" ? cardWidth : -cardWidth, behavior: "smooth" });
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    dragOrigin.current = { x: e.pageX, scrollLeft: trackRef.current?.scrollLeft ?? 0 };
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !trackRef.current) return;
    e.preventDefault();
    trackRef.current.scrollLeft = dragOrigin.current.scrollLeft - (e.pageX - dragOrigin.current.x);
  };

  const onDragEnd = () => {
    isDraggingRef.current = false;
    setIsDragging(false);
  };

  return (
    <section className="section case-studies-reference" id="case-studies">
      <div className="case-studies-inner">
        <div className="mb-10 md:mb-14">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center md:gap-4">
            <h2 className="section-title max-w-4xl text-balance">Real work. Real impact.</h2>
            <p className="section-copy">
              From AI-powered open science to polar data infrastructure, here is how Lampata's geo-spatial work creates lasting value.
            </p>
          </div>
        </div>

        <div className="cs-carousel-wrapper">
          <button
            className="cs-arrow cs-arrow-prev"
            onClick={() => scrollCard("prev")}
            aria-label="Previous case study"
            style={{ opacity: canScrollLeft ? 1 : 0, pointerEvents: canScrollLeft ? "auto" : "none" }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="cs-grid"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onScroll={updateArrows}
            style={{ cursor: isDragging ? "grabbing" : "grab", userSelect: isDragging ? "none" : undefined }}
          >
            {caseStudies.map((study) => (
              <article key={study.title} className="cs-card">
                {study.visual === "ogc" && <OGCVisual badge={study.badge} metric={study.metric} />}
                {study.visual === "urban" && <UrbanVisual badge={study.badge} metric={study.metric} />}
                {study.visual === "antarctica" && <AntarcticaVisual badge={study.badge} metric={study.metric} />}
                {study.visual === "sustainability" && <SustainabilityVisual badge={study.badge} metric={study.metric} />}
                {study.visual === "emr" && <EMRVisual badge={study.badge} metric={study.metric} />}

                <div className="cs-body">
                  <h3>{study.title}</h3>
                  {study.description.map((para, i) => <p key={i}>{para}</p>)}
                  <div className="cs-outcomes">
                    {study.outcomes.map((outcome) => (
                      <div key={outcome} className="cs-outcome">
                        {outcome}
                      </div>
                    ))}
                  </div>
                  <div className="cs-client">
                    <div className="cs-client-dot" />
                    {study.client}
                  </div>
                  {study.href ? (
                    <a
                      href={study.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#00458b] transition-opacity hover:opacity-72"
                    >
                      View case study
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <button
            className="cs-arrow cs-arrow-next"
            onClick={() => scrollCard("next")}
            aria-label="Next case study"
            style={{ opacity: canScrollRight ? 1 : 0, pointerEvents: canScrollRight ? "auto" : "none" }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
