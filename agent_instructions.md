# Agent Instructions – Gourmetverkstan

## Viktig regel
Du får **inte** ändra något i denna wireframe eller designkrav. Följ exakt som det står.  
Bygg alltid med:
- **Next.js 14**
- **TailwindCSS**
- **framer-motion**
- Full responsivitet (mobil först)
- Hög prestanda och optimerade bilder

---

## Wireframe

[SEKTION 1: HERO]  
------------------------------------------------------------  
| Fullbredd bakgrundsvideo (100% width, 100vh height)      |  
| Overlay med mörk transparens                             |  
|                                                          |  
|   [LOGOTYP uppe till vänster]                            |  
|                                                          |  
|   CENTRERAD TEXT:                                        |  
|   "Din personliga AI-kock – recept, videos och matglädje |  
|    varje dag"                                            |  
|                                                          |  
|   [CTA-knapp: Prova gratis i 3 dagar]                    |  
------------------------------------------------------------  

[SEKTION 2: AI-KOCKAR]  
------------------------------------------------------------  
| Rubrik: "Möt våra AI-kockar"                             |  
| Grid: 2 rader x 3 kolumner (6 kort totalt)               |  
| Varje kort:                                              |  
|   - Avatarbild (rund)                                    |  
|   - Namn                                                 |  
|   - Specialitet                                          |  
|   - Kort textbeskrivning                                 |  
|   - [Knapp: Spela video]                                 |  
------------------------------------------------------------  

[SEKTION 3: FÖRE / EFTER]  
------------------------------------------------------------  
| Två kolumner (50/50)                                     |  
| Vänster: Bild + rubrik "Före" + kort text                |  
| Höger: Bild + rubrik "Efter" + kort text                 |  
------------------------------------------------------------  

[SEKTION 4: SENASTE RECEPT/VIDEOS]  
------------------------------------------------------------  
| Rubrik: "Senaste nytt från våra AI-kockar"               |  
| Filtreringsknappar: [Alla] [Middag] [Dessert]            |  
| Grid: 3 kolumner på desktop, 1 på mobil                  |  
| Varje kort: bild, titel, hover-effekt                    |  
------------------------------------------------------------  

[SEKTION 5: SOCIAL PROOF]  
------------------------------------------------------------  
| Rubrik: "Älskad av våra kunder"                          |  
| 3 kundrecensioner (kort)                                 |  
| Siffror: "+127 nya recept denna månad"                   |  
------------------------------------------------------------  

[SEKTION 6: PRISPLANER]  
------------------------------------------------------------  
| Rubrik: "Välj din plan"                                  |  
| 3 kolumner: Gratis / Premium / Exklusiv                  |  
| Premium highlightad (färg + skugga)                      |  
| Stripe-dummy-knappar                                     |  
------------------------------------------------------------  

[SEKTION 7: FOOTER]  
------------------------------------------------------------  
| Kolumn 1: Kontakt                                        |  
| Kolumn 2: Om oss                                         |  
| Kolumn 3: Sociala länkar (FB, IG, TikTok)                 |  
------------------------------------------------------------  

---

## Extra instruktioner till agent
1. All text ska vara på **svenska**.
2. Bilder ska optimeras för webben och lagras i `/public`.
3. Använd **framer-motion** för subtila animationer (t.ex. fade-in på scroll, hover-lyft).
4. Testa sidan i Chrome, Safari och mobilvisning innan deployment.
5. Använd endast TailwindCSS klasser – ingen inline CSS.
6. Deploya alltid till **Vercel** när koden är klar och felfri.
7. Felsök och rätta egna buggar innan push till GitHub.

---

**Målgrupp:** Matintresserade mellan 20–50 år som vill inspireras och köpa AI-genererade recept & kurser.  
**Känsla:** Modern, inspirerande, “wow-effekt” redan vid första besöket.
