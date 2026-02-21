# Data Directory

Questa directory contiene i dati persistenti dell'applicazione.

## ⚠️ IMPORTANTE - Sicurezza

- **NON condividere** questo file pubblicamente
- **NON versionare** questo file su Git (è già nel `.gitignore`)
- **NON accessibile** via web (la directory `data/` non è servita come statica)

## 📁 File Contenuti

### `users.json`
Contiene i dati degli utenti registrati:
- ID utente
- Username
- Email
- Password (crittografate con bcrypt)

## 🔒 Formato

```json
[
  {
    "id": "1707567890123",
    "username": "testuser",
    "email": "test@example.com",
    "password": "$2a$10$..." // Password hashata con bcrypt
  }
]
```

## 🔐 Sicurezza delle Password

Le password sono sempre salvate in formato **hashato** usando bcrypt con:
- Salt rounds: 10
- Algoritmo bcrypt sicuro
- Mai salvate in chiaro

## 💾 Backup

Per fare un backup dei tuoi utenti, copia semplicemente il file `users.json` in un luogo sicuro.

## 🗑️ Reset

Per cancellare tutti gli utenti, elimina il file `users.json`. Verrà ricreato vuoto al prossimo avvio.
