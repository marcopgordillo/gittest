process.stdin.resume(); // Por defecto stdin está en pausa, por lo que hay que poner resume.

process.stdin.on('data', function (chunk) { // Recoge la intrada del teclado.
	process.stdout.write('data: ' + chunk); // Imprime en la pantalla de stdout ambas stdin y stdout son asincronicas.
											// stderr es sincrónica.
});