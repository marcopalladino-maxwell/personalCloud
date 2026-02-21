# 📸 Photo & Video Cloud

Una piattaforma cloud personale per la gestione di foto e video, costruita con Node.js, Express e Bootstrap.

## ✨ Caratteristiche

- 🔐 **Autenticazione Sicura**: Sistema di registrazione e login con password crittografate
- 🎫 **Codici di Registrazione**: Accesso controllato tramite codici forniti dall'amministratore
- 📤 **Upload Multiplo**: Carica fino a 10 file contemporaneamente
- 🖼️ **Galleria Responsive**: Visualizza le tue foto e video in una griglia moderna
- 🎬 **Supporto Video**: Riproduci video direttamente nel browser
- 🗑️ **Gestione File**: Elimina i file che non ti servono più
- 📱 **Design Responsive**: Funziona perfettamente su desktop, tablet e mobile

## 🎫 Codici di Registrazione

Per registrarsi, gli utenti devono inserire un codice di registrazione valido. I codici attualmente attivi sono:

- `ADMIN2024`
- `PHOTO2024`
- `CLOUD2024`

Per gestire i codici, consulta il file `CODICI_REGISTRAZIONE.md` o modifica `config/registrationCodes.js`.

## 🚀 Installazione

```bash
# Installa le dipendenze
npm install

# Avvia il server
npm start
```

Il server sarà disponibile su: **http://localhost:3000**

## 📋 Requisiti

- Node.js (v14 o superiore)
- npm

## 🔧 Tecnologie Utilizzate

- **Backend**: Node.js, Express
- **Autenticazione**: express-session, bcryptjs
- **Upload File**: Multer
- **Template Engine**: EJS
- **Frontend**: Bootstrap 5, CSS3
- **Icone & Emoji**: Unicode

## 📁 Struttura del Progetto

```
├── config/          # Configurazioni (Multer)
├── middleware/      # Middleware di autenticazione
├── models/          # Modelli dati (User)
├── public/          # File statici (CSS)
├── routes/          # Route Express (auth, upload)
├── views/           # Template EJS
├── uploads/         # File caricati dagli utenti
└── server.js        # Server principale
```

## 🎨 Formati Supportati

### Immagini
- JPG/JPEG
- PNG
- GIF

### Video
- MP4
- AVI
- MOV
- WMV
- FLV
- MKV

## 📏 Limiti

- **Dimensione massima file**: 10MB per file
- **Numero massimo file**: 10 file per upload

## 🔒 Sicurezza

- Password crittografate con bcrypt
- Sessioni sicure con express-session
- Validazione dei tipi di file
- Route protette con middleware di autenticazione
- Cartelle separate per ogni utente

## 💡 Prossimi Sviluppi

- [ ] Database persistente (MongoDB/PostgreSQL)
- [ ] Archiviazione cloud (AWS S3, Cloudinary)
- [ ] Compressione automatica delle immagini
- [ ] Anteprima video automatica
- [ ] Condivisione file con altri utenti
- [ ] Organizzazione in album
- [ ] Ricerca e filtri avanzati

## 📝 Note

> **Per la produzione**, assicurati di:
> - Cambiare il secret delle sessioni in `server.js`
> - Usare un database reale invece dello storage in memoria
> - Implementare variabili d'ambiente per le configurazioni sensibili
> - Abilitare HTTPS
> - Implementare rate limiting
> - Aggiungere verifica email

## 👨‍💻 Sviluppo

Per lo sviluppo con auto-reload:

```bash
npm run dev
```

(Richiede nodemon installato)

## 📄 Licenza

ISC

## 🙏 Contributi

I contributi sono benvenuti! Sentiti libero di aprire issue o pull request.

---

Creato con ❤️ usando Node.js e Express
