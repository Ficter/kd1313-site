export const alliances = [
  { tag: "TiNY", name: "Tiddies N' Yams", role: "Primary kingdom alliance", focus: "Main alliance for KD1313 leadership, KVK activity, events, and kingdom coordination." },
  { tag: "1313", name: "Support Wing", role: "Secondary structure", focus: "Space for farms, support accounts, growth players, and kingdom event coverage." },
  { tag: "1313", name: "Academy Wing", role: "Growth structure", focus: "Future onboarding lane for newer governors and returning players." }
];

export const notices = [
  { title: "Announcements", text: "Use this space for kingdom-wide updates that should not disappear in Discord chat." },
  { title: "KVK Preparation", text: "Keep readiness notes, checklists, and rally instructions in one predictable place." },
  { title: "Discord Recruitment", text: "Migration candidates apply through Discord. The website stays as the clean public front door." }
];

export const memberPosts = [
  {
    category: "Command Brief",
    date: "This Week",
    title: "Kingdom focus: clean preparation before the next push",
    summary: "Keep troops ready, review event timing, and make sure important updates do not get buried in Discord.",
    priority: "High",
    bullets: [
      "Check hospital capacity, speedups, troop reserves, and preset marches before major objectives.",
      "Use the stats board to track contribution and spot accounts that need attention.",
      "Keep leadership questions in the correct Discord channels so decisions stay visible."
    ]
  },
  {
    category: "Operations",
    date: "Pinned",
    title: "MGE and KE discipline",
    summary: "MGE ranks and kill events only work when everyone follows the kingdom plan.",
    priority: "Council",
    bullets: [
      "Do not push MGE ranks without approval.",
      "Respect KE timing, target rules, and any temporary no-hit instructions.",
      "Report issues quickly instead of turning them into kingdom drama."
    ]
  },
  {
    category: "Community",
    date: "Ongoing",
    title: "Member spotlight queue",
    summary: "A place to collect achievements worth showing: strong KvK performances, support work, and clutch plays.",
    priority: "Open",
    bullets: [
      "Submit screenshots of KP pushes, deads taken, healing support, rally fills, and alliance work.",
      "Leadership can turn the best moments into public highlights later.",
      "Support players matter too: resources, farms, title help, and coordination all count."
    ]
  }
];

export const memberResources = [
  { title: "Migration and recruitment", text: "Public migration information and Discord entry point for candidates.", href: "/migration" },
  { title: "Kingdom rules", text: "The shared standards members are expected to follow.", href: "/rules" },
  { title: "Stats board", text: "Interactive contribution board for power, DKP, KP, deads, healed, and acclaim.", href: "/members/stats" },
  { title: "KVK room", text: "Preparation notes, checklist space, and war planning references.", href: "/members/kvk" }
];

export const mgeRows = [
  { rank: 1, governor: "Reserved", alliance: "TiNY", points: "0", status: "Open" },
  { rank: 2, governor: "Reserved", alliance: "TiNY", points: "0", status: "Open" },
  { rank: 3, governor: "Reserved", alliance: "Open", points: "0", status: "Open" },
  { rank: 4, governor: "Reserved", alliance: "Open", points: "0", status: "Open" }
];

export const rosterRows = [
  { governor: "Ficter", alliance: "TiNY", role: "Founder / Admin", timezone: "SGT", status: "Active" },
  { governor: "Officer Seat", alliance: "TiNY", role: "R4 / Organizer", timezone: "Open", status: "Recruiting" },
  { governor: "Rally Captain", alliance: "TiNY", role: "War Lead", timezone: "Open", status: "Recruiting" },
  { governor: "Gatekeeper", alliance: "TiNY", role: "Recruitment", timezone: "Open", status: "Recruiting" }
];
