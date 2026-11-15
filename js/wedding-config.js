/* ALL editable wedding data lives here. */
window.WEDDING = {
  groom: { en: "Dr. Anshul Rajput", hi: "डॉ. अंशुल राजपूत", nick: { en: "Dimpi", hi: "डिम्पी" }, short: { en: "Dr. Anshul", hi: "डॉ. अंशुल" },
    parents: { en: "Smt. Neeta Devi and Shri Sarvesh Rajput", hi: "श्रीमती नीता देवी एवं श्री सर्वेश राजपूत" }, photo: "public/assets/groom-portrait.png" },
  bride: { en: "Anshu Rajput", hi: "अंशु राजपूत", nick: { en: "Shalu", hi: "शालू" }, short: { en: "Anshu", hi: "अंशु" },
    parents: { en: "Smt. Noratam Rajput and Late Shri Santram Rajput", hi: "श्रीमती नोरतम राजपूत एवं स्व. श्री संतराम राजपूत" },
    residence: { en: "Mohalla Makbara, Najibabad", hi: "मोहल्ला मकबरा, नजीबाबाद" }, photo: "public/assets/bride-portrait.png" },
  weddingDate: "2026-12-12T10:00:00+05:30",
  dateLabel: { en: "12 December 2026", hi: "12 दिसंबर 2026" },
  events: [
    { id: "manda", date: { en: "Saturday, 12 December 2026", hi: "शनिवार, 12 दिसंबर 2026" }, time: { en: "10:00 AM", hi: "प्रातः 10:00 बजे" },
      name: { en: "Manda Ceremony", hi: "मण्डा रस्म" }, desc: { en: "The auspicious Manda ceremony begins the wedding celebrations.", hi: "मांगलिक मण्डा रस्म के साथ विवाह उत्सव का शुभारंभ।" } },
    { id: "ghurchadhi", date: { en: "Saturday, 12 December 2026", hi: "शनिवार, 12 दिसंबर 2026" }, time: { en: "4:00 PM", hi: "सायं 4:00 बजे" },
      name: { en: "Ghurchadhi", hi: "घुड़चढ़ी" }, desc: { en: "The groom's traditional procession on the horse.", hi: "दूल्हे की पारंपरिक घुड़चढ़ी की रस्म।" } },
    { id: "baraat", date: { en: "Saturday, 12 December 2026", hi: "शनिवार, 12 दिसंबर 2026" }, time: { en: "5:00 PM", hi: "सायं 5:00 बजे" },
      name: { en: "Baraat Departure", hi: "बारात प्रस्थान" }, desc: { en: "Departs from the family residence for Kanha Palace, near Double Phatak, Najibabad.", hi: "परिवार के निवास से कान्हा पैलेस, डबल फाटक के पास, नजीबाबाद के लिए प्रस्थान।" }, maps: true },
    { id: "vadhu", date: { en: "Sunday, 13 December 2026", hi: "रविवार, 13 दिसंबर 2026" }, time: { en: "With the first rays of sunrise", hi: "सूर्योदय की प्रथम किरण के साथ" },
      name: { en: "Vadhu Aagman", hi: "वधु आगमन" }, desc: { en: "Welcoming the bride into the family.", hi: "वधु का परिवार में स्वागत।" } }
  ],
  venue: { name: { en: "Kanha Palace", hi: "कान्हा पैलेस" },
    address: { en: "Kanha Palace, Near Double Phatak, Najibabad, Uttar Pradesh, India", hi: "कान्हा पैलेस, डबल फाटक के पास, नजीबाबाद, उत्तर प्रदेश, भारत" },
    mapsQuery: "Kanha Palace, Near Double Phatak, Najibabad, Uttar Pradesh, India",
    baraatStart: { en: "Family residence", hi: "परिवार का निवास" } },
  host: { name: { en: "Sarvesh Rajput", hi: "सर्वेश राजपूत" },
    address: { en: "Village Vansh Gopalpur alias Chowkpuri, Post Jalalabad, Tehsil Najibabad, District Bijnor, Uttar Pradesh, India",
               hi: "ग्राम वंश गोपालपुर उर्फ चौकपुरी, पोस्ट जलालाबाद, तहसील नजीबाबाद, जनपद बिजनौर, उत्तर प्रदेश, भारत" },
    phones: ["9760174814", "7248351048", "7021461053"] },
  /* RSVP: set a 10-digit number (e.g. "9760174814") to enable WhatsApp RSVP. PENDING on purpose.
     endpointUrl: optional backend URL that accepts a JSON POST. */
  rsvp: { whatsappNumber: "", countryCode: "91", endpointUrl: "" },
  /* Add more photos here: { src, alt: {en,hi} } */
  gallery: [
    { src: "public/assets/groom-portrait.png", alt: { en: "Portrait of Dr. Anshul Rajput", hi: "डॉ. अंशुल राजपूत का चित्र" } },
    { src: "public/assets/bride-portrait.png", alt: { en: "Portrait of Anshu Rajput", hi: "अंशु राजपूत का चित्र" } }
  ],
  musicSrc: "public/assets/wedding-music.mp3"
};
