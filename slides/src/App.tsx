import { Presentation } from './components/Presentation';
import { CoverSlide } from './slides/CoverSlide';
import { AgendaSlide } from './slides/AgendaSlide';
import { PlatformSlide } from './slides/PlatformSlide';
import { CompetitorsSlide } from './slides/CompetitorsSlide';
import { ComparisonSlide } from './slides/ComparisonSlide';
import { SkillsOverviewSlide } from './slides/SkillsOverviewSlide';
import { TopSkillsSlide } from './slides/TopSkillsSlide';
import { PricingSlide } from './slides/PricingSlide';
import { BudgetSlide } from './slides/BudgetSlide';
import { TimelineSlide } from './slides/TimelineSlide';
import { FlywheelSlide } from './slides/FlywheelSlide';
import { OutroSlide } from './slides/OutroSlide';

function App() {
  return (
    <Presentation
      slides={[
        /* ── Cover ── */
        <CoverSlide />,
        /* ── Overview (2 min) ── */
        <AgendaSlide />,
        <PlatformSlide />,
        /* ── 01 Competitive Landscape (3 min) ── */
        <CompetitorsSlide />,
        <ComparisonSlide />,
        /* ── 02 Skill Research (5 min) ── */
        <SkillsOverviewSlide />,
        <TopSkillsSlide />,
        <PricingSlide />,
        /* ── 03 Distribution Plan (7 min) ── */
        <BudgetSlide />,
        <TimelineSlide />,
        /* ── Thesis ── */
        <FlywheelSlide />,
        /* ── Q&A ── */
        <OutroSlide />,
      ]}
    />
  );
}

export default App;
