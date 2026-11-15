# Dr. Anshul & Anshu — Wedding Website
Pure HTML/CSS/JS. Open `index.html` directly, or run `python3 -m http.server` in this folder. Upload the folder contents to Hostinger `public_html`.

## You must add (not included)
- `public/assets/groom-portrait.png` and `bride-portrait.png` — your original photos (monograms show until added)
- `public/assets/wedding-music.mp3` — royalty-free track you have rights to

## Edit everything in `js/wedding-config.js`
Names, events, venue, family, phones, gallery list (add photos there), music path.

## RSVP
- WhatsApp: set `rsvp.whatsappNumber` (left empty = pending).
- Online submit: set `rsvp.endpointUrl` to a backend that accepts JSON POST. Without it the form reports that nothing was stored.
