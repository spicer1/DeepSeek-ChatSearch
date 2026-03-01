# DeepSeek-ChatSearch
Ricerca all'interno delle chat DeepSeek applicazione web
Uno script bookmarklet che aggiunge una funzione **"Cerca Chat"** alla sidebar di DeepSeek Web, simulando l’esperienza di ricerca presente in ChatGPT.

## ✨ Funzionalità

- Barra di ricerca flottante
- Filtro in tempo reale mentre scrivi
- Evidenziazione delle chat trovate
- Nasconde le chat non corrispondenti
- Tasto `ESC` per chiudere e ripristinare la lista
- Nessuna dipendenza da classi hash (usa selettori strutturali stabili)

---

## 🚀 Installazione (Bookmarklet)

### Metodo rapido

1. Copia il contenuto del file `bookmarklet.js`
2. Crea un nuovo segnalibro nel browser
3. Incolla il codice nel campo **URL**
4. Salva

### Metodo alternativo

Crea un nuovo segnalibro con:

- Nome: `DeepSeek ChatSearch`
- URL: incolla il contenuto completo di `bookmarklet.js`

---

## 🖱 Utilizzo

1. Apri https://chat.deepseek.com
2. Clicca il bookmarklet
3. Digita nella barra di ricerca
4. Premi `ESC` per chiudere

---

## 🔒 Compatibilità

Testato su:
- Chrome
- Firefox
- Edge

Richiede:
- Interfaccia web DeepSeek attiva

---

## 🛠 Come funziona

Lo script:

- Individua le chat tramite selettore:
  
  ```javascript
  a[href^="/a"]
  ```

- Filtra dinamicamente in base al testo
- Non utilizza classi CSS hashate generate dinamicamente

Questo lo rende più resistente ai cambiamenti dell'interfaccia.

---

## 📄 Licenza

Distribuito sotto licenza GPL-3.0.
Vedi file `LICENSE` per dettagli.

---

## ⚠ Disclaimer

Questo progetto non è affiliato a DeepSeek.
È uno script client-side che modifica temporaneamente il DOM della pagina.

---

## ⭐ Contribuire

Pull request e suggerimenti sono benvenuti!
