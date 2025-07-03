# Express Blog API CRUD
(esercizio)

## Passaggi giorno 1

1. Creare una cartella 'data' in cui creare un file che contenga ed esporti l’array di posts.

2. Importiamo questo file in cima al router dei posts.

3. Implementare le logiche CRUD di base.

4. Far restituire ad Index la lista dei post in formato JSON.

5. Far restituire a Show un singolo post in formato JSON.

6. Far eliminare a Destroy un singolo post dalla lista, stampare nel terminale la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

## Bonus

1. Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato 'tag'.

2. In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore in formato JSON.

3. Creiamo un controller per i nostri post, in una cartella controllers.

    1. All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna, la logica delle funzioni che attualmente si trovano nel router.

    2. Nel file delle rotte importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte.

## Passaggi giorno 2

1. Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.

2. All’interno della rotta Store, stampiamo nel terminale i dati in arrivo, grazie a un console.log.

3. Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.

4. Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.

## Bonus

In Update, controllare se il parametro si riferisce ad un post esistente e, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore in formato JSON.

## Passaggi giorno 3

1. Inserire un middleware per la gestione delle rotte non registrate, che interverrà in caso di endpoint inesistente, rispondendo con un messaggio e uno status appropriato.

2. Inserire un middleware per la gestione degli errori, che interverrà in caso di errore, rispondendo con un messaggio e uno status appropriato.