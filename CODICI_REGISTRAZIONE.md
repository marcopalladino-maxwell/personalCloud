# Codici di Registrazione Validi

Questo file contiene i codici di registrazione attualmente validi per la piattaforma.

## Codici Attivi

I seguenti codici sono configurati nel file `config/registrationCodes.js`:

1. **ADMIN2024** - Codice amministratore generale
2. **PHOTO2024** - Codice per utenti fotografici
3. **CLOUD2024** - Codice per utenti cloud

## Come Gestire i Codici

### Aggiungere un Nuovo Codice

Modifica il file `config/registrationCodes.js` e aggiungi il nuovo codice nell'array:

```javascript
const validRegistrationCodes = [
  'ADMIN2024',
  'PHOTO2024',
  'CLOUD2024',
  'NUOVO_CODICE'  // Aggiungi qui
];
```

### Rimuovere un Codice

Rimuovi il codice dall'array in `config/registrationCodes.js`.

### Riavviare il Server

Dopo aver modificato i codici, riavvia il server:

```bash
npm start
```

## Sicurezza

> **IMPORTANTE**: I codici di registrazione dovrebbero essere:
> - Complessi e difficili da indovinare
> - Condivisi solo con utenti autorizzati
> - Cambiati periodicamente
> - Mai pubblicati in repository pubblici

## Miglioramenti Futuri

Per un sistema di produzione, considera:
- Database per gestire i codici
- Codici monouso che scadono dopo il primo utilizzo
- Codici con data di scadenza
- Interfaccia admin per gestire i codici
- Log di utilizzo dei codici
