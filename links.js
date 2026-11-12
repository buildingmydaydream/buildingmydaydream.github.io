/* ============================================================
   BUILDING MY DAYDREAM — LINK IN BIO
   This is the only file you edit to change what's on the page.
   Add, remove or reorder lines, save, then publish.
   Each item: { name, note (optional), tag (optional), url }
   ============================================================ */
window.BMD = {
  kicker: "Business strategy + done-for-you builds",
  tagline: "That daydream won't build itself. But you don't have to build it alone.",

  // Small photo and one line about Brandi, under the logo. Set to null to hide it.
  about: {
    photo: "img/brandi.jpg",
    name: "I'm Brandi.",
    line: "I'm a strategist who can build the thing."
  },

  // Optional big video card. Set to { label, title, youtubeId } when a new video is public; null hides it.
  featured: null,

  // Optional banner for an announcement. Set to { text, url } or null.
  promo: null,

  // The two free things. These lead the page.
  startHere: [
    {
      tag: "Free · 15 to 20 minutes",
      name: "The Mirror Method",
      note: "Got an idea you haven't built yet? A guided AI conversation that ends in a two-week plan to test it.",
      url: "https://www.buildingmydaydream.com/mirror-method"
    },
    {
      tag: "Free · eleven questions",
      name: "The Punch List",
      note: "Already in business and outgrown what you built yourself? Find out what's unfinished, in under five minutes.",
      url: "https://www.buildingmydaydream.com/punch-list"
    }
  ],

  channels: [
    { name: "YouTube", note: "Building My Daydream", url: "https://www.youtube.com/@BuildingMyDaydream" },
    { name: "TikTok", note: "@buildingmydaydream", url: "https://www.tiktok.com/@buildingmydaydream" },
    { name: "The blog", note: "buildingmydaydream.com", url: "https://www.buildingmydaydream.com/blog" }
  ],

  moreVideos: [],

  // Newsletter sign-up box. Sign-ups go to "The Daydream Dispatch" list (#11) in Brevo, through the
  // Brevo form "Daydream Dispatch - Link in bio". Set to null to hide the box.
  newsletter: {
    heading: "The Daydream Dispatch",
    blurb: "One email a week: the thing I wish someone had told me that week, and the one step to take about it.",
    button: "Send it to me",
    success: "You're in. Talk soon.",
    formUrl: "https://8c15e4ec.sibforms.com/serve/MUIFAIB0vjEdnIIP3raZiozaZtfqMQJJt-6IbJyvUEanTmuyEPGVl8WGtDrzF8hsBDe2Sfxxf9-Sj0Lz11_fvRa2X019vV7IFnbxU7zM8-JHBjSfEUhoFfM584CvsteM_rKTujKBfQ705TR4fhqQKCdDz7e0tWDLvEzVLcWfgi6ZzvZ6B3qNvzQ3GzB1EldJdOspy7MMsBF7rkqF0g=="
  },

  // Paid work. Names, prices and lengths copied from buildingmydaydream.com/work-with-me (checked Nov 12, 2026).
  // Check that page again before changing any price here.
  workIntro: "You aren't missing an audience. You're missing an address, and the engine that keeps it running.",
  work: [
    {
      name: "The Survey · $2,500",
      note: "One week, three sessions, and a written read on your business. Book it directly.",
      url: "https://tidycal.com/buildingmydaydream/the-survey"
    },
    {
      name: "The Address · $7,500",
      note: "Three weeks. The Survey, then your brand, website, booking and email list, built.",
      url: "https://www.buildingmydaydream.com/work-with-me#wwm-invest"
    },
    {
      name: "The Address + The Engine · from $10,000",
      note: "Four weeks. Everything in The Address, plus the systems that make it earn.",
      url: "https://www.buildingmydaydream.com/work-with-me#wwm-invest"
    },
    {
      name: "Book a call",
      note: "20 to 30 minutes. We talk about your business and where it's stuck.",
      url: "https://tidycal.com/buildingmydaydream/discovery-call",
      primary: true
    }
  ],
  workProof: { text: "Client story: her new site sold her top offer within a month", url: "https://www.buildingmydaydream.com/amanda-story" },

  otherProjects: [
    { name: "Remote Ramblers", note: "Four years in a school bus, now 14 acres in the South", url: "https://remoteramblers.github.io" },
    { name: "Etch and Echo Goods", note: "Our leather goods shop on Etsy", url: "https://etchandechogoods.etsy.com" }
  ],

  contactUrl: "https://www.buildingmydaydream.com/contact"
};
