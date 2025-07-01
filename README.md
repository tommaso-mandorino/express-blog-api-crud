# Express Blog API CRUD
(esercizio)

## Passaggi

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