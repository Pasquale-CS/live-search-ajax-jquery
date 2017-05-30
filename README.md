Demo: https://pasquale-cs.github.io/live-search-ajax-jquery/

***

# [EN] - Plugin live search for jQuery
Plugin live search for jQuery

Include "js/pcsLiveSearch.jquery.js" in your project and use the function "$(selector).pcsLiveSearch()" in your script.

### Example include plugin (JS):
```js
<body>
  ...
  <script src="js/pcsLiveSearch.jquery.js"></script>
  ...
</body>
```

### Example use function:
```js
<body>
  ...
  <input type="text" id="pcs-live-search">
  ...
  <script>
  	$(document).ready(function() {
		$('#pcs-live-search').pcsLiveSearch({	// Set element to start search *
			file: 'files/list.json',	// Set file to search (Also dynamic file such as PHP) *
			print: 'name',			// Set index to print in search box *
			timePause: 500,			// Set time pause (ms) before post
			minChSearch: 2			// Set min character to search
		});
		// Values with * are required
	});
  </script>
  ...
</body>
```

## Do you Like!
Give me a coffee: https://www.paypal.me/pasqualecs
Thank you =)

***

# [IT] - Ricerca in tempo reale con jQuery
Plugin per la ricerca iin tempo reale con jQuery.

Includere il file "js/pcsLiveSearch.jquery.js" net tuo progetto e usare la funzione "$(selector).pcsLiveSearch()" nel tuo script.

### Esempio per l'inclusione del plugin (JS):
```js
<body>
  ...
  <script src="js/pcsLiveSearch.jquery.js"></script>
  ...
</body>
```

### Esempio per l'uso:
```js
<body>
  ...
  <input type="text" id="pcs-live-search">
  ...
  <script>
  	$(document).ready(function() {
		$('#pcs-live-search').pcsLiveSearch({	// Selezionare l'elemento da cercare *
			file: 'files/list.json',	// Settare il percorso del file json (Anche pagine dinamiche, tipo PHP) *
			print: 'name',			// Settare l'indice da cercare nella post *
			timePause: 500,			// Settare una pausa (ms) prima della post
			minChSearch: 2			// Settare il numero minimo di caratteri per iniziare la ricerca
		});
		// I valori con * sono obbligatori
	});
  </script>
  ...
</body>
```
## Ti Piace!
Mi offri un caffè: https://www.paypal.me/pasqualecs
Grazie =)
