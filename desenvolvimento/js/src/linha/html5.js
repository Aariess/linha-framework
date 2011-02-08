/**
 * Recomendo usar http://www.iecss.com/print-protector/
 */
Linha.extend({
	
	/**
	 * Elementos HTML5 que serão inseridos
	 */
	html5: 'abbr article aside audio canvas datalist details figure footer header hgroup mark menu meter nav output progress ruby rt section time video'.split(' '),
		
	/**
	 * Cria alguns elementos HTML5 em navegadores antigos
	 */
	criarHtml5: function(){

        var i = this.html5.length;
        while( i-- ){
            elem = document.createElement( this.html5[i] );
        }
        
    	return this;
    }
	
})

// Cria o HTML5
.criarHtml5();