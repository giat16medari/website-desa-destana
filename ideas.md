# Design Philosophy: DESTANA Desa Medari

## Chosen Approach: **Resilient Guardian**

### Design Movement
**Modern Civic Design** — A blend of government/institutional clarity with warm, human-centered aesthetics. Inspired by disaster resilience programs, agricultural heritage, and community-first design systems.

### Core Principles
1. **Clarity Over Decoration**: Information hierarchy is paramount; every visual element serves an informational purpose.
2. **Trust Through Warmth**: Institutional authority balanced with approachable, human-centered design to encourage community participation.
3. **Resilience Symbolism**: Visual language emphasizes protection, preparedness, and community strength.
4. **Accessibility First**: High contrast, readable typography, and intuitive navigation for all literacy levels.

### Color Philosophy
- **Primary Orange (#FF6B35)**: Represents alertness, urgency, and action—the "siaga" (alert) state. Used for CTAs and key information.
- **Trust Blue (#0066CC)**: Represents safety, authority, and reliability. Used for headers, navigation, and secondary CTAs.
- **Life Green (#2D7A3E)**: Represents agriculture, growth, and community resilience. Used for accents and success states.
- **Neutral Gray (#4A5568)**: Professional, readable text and backgrounds.
- **White (#FFFFFF)**: Clean, accessible backgrounds with ample breathing room.

### Layout Paradigm
**Asymmetric, Section-Based Flow**: 
- Hero section with strong visual hierarchy (image + text overlay).
- Alternating content blocks: full-width sections with varied alignments.
- Cards and modular components for disaster information.
- Sticky navigation for quick access to critical pages.
- Mobile-first responsive design with clear touch targets.

### Signature Elements
1. **Shield Icon**: Represents protection and resilience; appears subtly in headers and section dividers.
2. **Wave Dividers**: Organic, flowing transitions between sections—symbolizing both water hazards and flowing information.
3. **Disaster Icon Set**: Consistent, flat-design icons for each disaster type (landslide, wind, eruption).

### Interaction Philosophy
- **Purposeful Hover States**: Subtle color shifts and underlines on interactive elements.
- **Smooth Transitions**: 200-300ms ease-out for page transitions and modal openings.
- **Feedback**: Toast notifications for form submissions; visual confirmation of button clicks.
- **Accessibility**: Keyboard navigation fully supported; focus rings visible and styled.

### Animation
- **Page Transitions**: Fade-in with 200ms ease-out on route changes.
- **Scroll Animations**: Subtle fade-in and slide-up for cards as they enter viewport (300ms, staggered by 50ms).
- **Button Interactions**: Scale down to 0.97 on active state (100ms); hover state adds subtle shadow lift.
- **Form Inputs**: Smooth focus ring expansion; label floats up on input.
- **Modals**: Slide up from bottom on mobile; center fade-in on desktop (250ms).

### Typography System
- **Display Font**: "Poppins" Bold (700) for hero titles and section headers—modern, friendly, strong.
- **Body Font**: "Inter" Regular (400) for body text—clean, highly readable, professional.
- **Accent Font**: "Poppins" Semibold (600) for subheadings and emphasis.

**Hierarchy:**
- H1: Poppins 700, 48px (desktop), 32px (mobile)
- H2: Poppins 600, 32px (desktop), 24px (mobile)
- H3: Poppins 600, 24px (desktop), 20px (mobile)
- Body: Inter 400, 16px (desktop), 14px (mobile)
- Small: Inter 400, 14px (desktop), 12px (mobile)

### Brand Essence
**One-liner**: *A digital guardian for Desa Medari—empowering communities to prepare, respond, and recover from natural disasters through accessible, timely information.*

**Personality Adjectives**: Trustworthy, Proactive, Community-Focused

### Brand Voice
- **Headlines**: Direct, action-oriented, community-centric. Avoid jargon; use local language where appropriate.
- **CTAs**: Encouraging, urgent but not alarming. E.g., "Lihat Jalur Evakuasi" (View Evacuation Route), "Laporkan Risiko" (Report Risk).
- **Microcopy**: Warm, supportive tone. E.g., "Kami siap membantu Anda" (We're ready to help you).

**Example Lines:**
- "Desa Medari Tangguh Bencana — Bersama Kita Siap" (Resilient Medari Village — Together We're Ready)
- "Ketahui Risiko, Ambil Tindakan, Selamatkan Nyawa" (Know the Risk, Take Action, Save Lives)

### Wordmark & Logo
**Logo Concept**: A shield with a stylized mountain/village silhouette inside, overlaid with a green leaf (agriculture). The shield's outline is in orange (alert), the interior is white with green and blue accents. Below the shield: "DESTANA MEDARI" in Poppins Bold, with "Desa Tangguh Bencana" as a subtitle in smaller Inter Regular.

**Wordmark**: "DESTANA" in Poppins Bold Orange, "Medari" in Poppins Bold Blue, stacked vertically or horizontally depending on context.

### Signature Brand Color
**Orange (#FF6B35)** — Unmistakably DESTANA. Used for all primary CTAs, alert badges, and key visual accents. This color signals preparedness and action throughout the site.

---

## Visual Assets Generated
- ✅ Logo DESTANA Medari (shield + mountain + leaf design)
- ✅ Disaster Icon Set (landslide, wind, eruption)
- ✅ Evacuation Route Sign Illustration

## Implementation Notes
- Use Poppins from Google Fonts for display; Inter is already in the template.
- Implement wave dividers between major sections using SVG.
- All buttons use orange primary color with white text; secondary buttons use blue outline.
- Ensure all images have alt text and are optimized for web.
- Mobile navigation uses hamburger menu; desktop uses top navigation bar.
