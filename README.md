# zaplanje
Sajt poljoprivrednog gazdinstva u Prisjanu

Unapredjen sajt 'pcelarstvo' sa github-a. Navbar je meni koji omogucava
poziv na navedenbi broj telefona (ako se sajtu pristupa sa mobilnog), a
klikom na korpu se vide trenutno poruceni artikli. Narucivanjem proizvoda
se salje porudzbina na firestore ugradjenom funkcijom addDoc iz biblioteke
firebase-a koji je prethodno instaliran (npm i firebase).
Admin se moze prijaviti lozinkom koja se cuva u env fajlu (dodat u gitignore)
zajedno sa API key za firestore. Kada se uspesno admin prijavi, dobija sa server-a
firestore sve porudzbine (getDoc funkcija iz firebase/firestore biblioteke) sa 
podacima kupaca. Podaci se dobijaju sa firebase servera uz useeffect kada je 
admin=true (pri prvom ucitavanju komponente).

Moze se posetiti na zaplanjski-med.netlify.app
