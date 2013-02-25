var IE  = window.ActiveXObject ? true : false;
var MOZ = window.sidebar       ? true : false; 
////A VIRER -> POUR FLASH/HTACCESS///
function GETCOOKIE(){
	return document.cookie;
}
/* BINDING
Ce code invoque la méthode apply de l'instance m. m est connu de la fonction grâce à la closure. m correspond à l'instance de la fonction this.count dans ce cas.
C'est donc this.count qui sera appelé.
Le premier paramètre de apply est l'instance souhaitée en tant que contexte.
C'est le premier paramètre passé à bind.
En l'occurrence c'est this lors de l'appel à addEvent.
Dans ce contexte this référencie l'instance de Compteur.

Il aurait été possible de donner des arguments supplémentaires à bind qui aurrait alors été transmis à count en arguments.

*/
function isEmpty(ob){
   for(var i in ob){ return false;}
  return true;
}

Function.prototype.bind = function() {
  var m = this; // sauve le context this
  // extrait le 1er argument et garde les autres pour propagation
  var instance = Array.prototype.shift.call(arguments)
  return function() {
    return m.apply(instance, arguments);
  }
}
function Swf( file , target , width , height , version , flashvars , params ){
	//function createSWF(attObj, parObj, id) {
			var UNDEF = "undefined",
		OBJECT = "object",
		SHOCKWAVE_FLASH = "Shockwave Flash",
		SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
		FLASH_MIME_TYPE = "application/x-shockwave-flash",
		EXPRESS_INSTALL_ID = "SWFObjectExprInst",
		
		win = window,
		doc = document,
		nav = navigator,
		
		domLoadFnArr = [],
		regObjArr = [],
		objIdArr = [],
		listenersArr = [],
		script,
		timer = null,
		storedAltContent = null,
		storedAltContentId = null,
		isDomLoaded = false,
		isExpressInstallActive = false;

	var ua = function() {
		var w3cdom = typeof doc.getElementById != UNDEF && typeof doc.getElementsByTagName != UNDEF && typeof doc.createElement != UNDEF,
			playerVersion = [0,0,0],
			d = null;
		if (typeof nav.plugins != UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] == OBJECT) {
			d = nav.plugins[SHOCKWAVE_FLASH].description;
			if (d && !(typeof nav.mimeTypes != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
				d = d.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
				playerVersion[0] = parseInt(d.replace(/^(.*)\..*$/, "$1"), 10);
				playerVersion[1] = parseInt(d.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
				playerVersion[2] = /r/.test(d) ? parseInt(d.replace(/^.*r(.*)$/, "$1"), 10) : 0;
			}
		}
		else if (typeof win.ActiveXObject != UNDEF) {
			var a = null, fp6Crash = false;
			try {
				a = new ActiveXObject(SHOCKWAVE_FLASH_AX + ".7");
			}
			catch(e) {
				try { 
					a = new ActiveXObject(SHOCKWAVE_FLASH_AX + ".6");
					playerVersion = [6,0,21];
					a.AllowScriptAccess = "always";	 // Introduced in fp6.0.47
				}
				catch(e) {
					if (playerVersion[0] == 6) {
						fp6Crash = true;
					}
				}
				if (!fp6Crash) {
					try {
						a = new ActiveXObject(SHOCKWAVE_FLASH_AX);
					}
					catch(e) {}
				}
			}
			if (!fp6Crash && a) { // a will return null when ActiveX is disabled
				try {
					d = a.GetVariable("$version");	// Will crash fp6.0.21/23/29
					if (d) {
						d = d.split(" ")[1].split(",");
						playerVersion = [parseInt(d[0], 10), parseInt(d[1], 10), parseInt(d[2], 10)];
					}
				}
				catch(e) {}
			}
		}
		var u = nav.userAgent.toLowerCase(),
			p = nav.platform.toLowerCase(),
			webkit = /webkit/.test(u) ? parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, // returns either the webkit version or false if not webkit
			ie = false,
			windows = p ? /win/.test(p) : /win/.test(u),
			mac = p ? /mac/.test(p) : /mac/.test(u);
		/*@cc_on
			ie = true;
			@if (@_win32)
				windows = true;
			@elif (@_mac)
				mac = true;
			@end
		@*/
		return { w3cdom:w3cdom, pv:playerVersion, webkit:webkit, ie:ie, win:windows, mac:mac };
	}();			
	if (ua.ie && ua.win) { // IE, the object element and W3C DOM methods do not combine: fall back to outerHTML
			target.innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+width+'" height="'+height+'" id="'+target.id+'"><param name="movie" value="'+file+'" /></object>';
				
	}else{
			var objet = document.createElement("object");
			objet.setAttribute("type", "application/x-shockwave-flash");
			objet.setAttribute("width", width);
			objet.setAttribute("height", height);
			objet.setAttribute("data", file);
			objet.id = target.id;
			objet.style.visibility = "visible";
			
			////FLASHVARS
			var param = document.createElement("param");
			param.name = "flashvars";
			var vars = "";
			for( var i in flashvars ){
				vars +="&"+i+"="+flashvars[i];
			}
			param.value = vars;
			objet.appendChild( param );

			//////PARAMS
			for( var i in params ){
				var param = document.createElement("param");
				param.name = i;
				param.value = params[i];
				objet.appendChild( param );
			}


			target.appendChild( objet );
	}
				
		
}
function createElement( balise , child ){
	var element = document.createElement( balise );
	if( child ){
		if( typeof(child) == "string" ){
			child = Text( child );
		}
		element.appendChild( child );
	}
	return element;
}
function getSelectedText( parent ){
	if (parent.getSelection){
	   var str = parent.getSelection();
	}else if (parent.document.getSelection){
	   var str = parent.document.getSelection();
	}else {
	   var str = parent.document.selection.createRange().htmlText;
	}
	return str;
}
function Form(name){
	var form = document.createElement("form");
	form.setAttribute("name" , name);
	form.setAttribute("id" , name);
	return form;
}
function Text(text){
	return document.createTextNode(text);
}
function BR(){
	return document.createElement("br");
}
function H(niveau,text){
	var h = document.createElement('h'+niveau);
	if( typeof(text) != "object" ){
		text = Text(text);
	}
	if(text == null ){ text = Text("undefined") ; }
	h.appendChild( text );
	return h;
}
function Span( text , classe , id ) {
	var span = document.createElement('span');
	span.appendChild( document.createTextNode(text) );
	if( classe ){
		span.className = classe;
	}
	if( id ){
		span.id = id;
	}
	return span;
}
function LinkButton(text,action){
	var a = document.createElement('a');
	a.className = "LikeButton";
	if( typeof(text) != "object" ){
		text = Text(text);
	}
	a.appendChild( text );
	if( action ){
		a.onclick = action;
	}
	return a;
}
function LinkSpan(text,id,href,blank){
	var a = document.createElement('a');
	a.className = "LikeButton";
	if( href ){
		a.href = href;
	}else{
		a.href = "javascript:void(0)";
	}
	if( blank ){
		a.target = "_blank";
	}
	
	if( id ){
		a.id = id;
	}else{
		a.id = text;
	}
	
	if( typeof(text) != "object" ){
		text = Span(text);
	}
	
	a.appendChild( text );
	return a;
}
function Icone(text,classe){
	var a = document.createElement('a');
	
	if( classe ){
		a.className = classe;
	}else{
		a.className = text;
	}
	
	if( typeof(text) != "object" ){
		text = Span(text);
	}
	a.appendChild( text );
	return a;
}
function Link(text,href){
	var a = document.createElement('a');
	if( typeof(text) != "object" ){
		text = Text(text);
	}
	a.appendChild( text );
	if( typeof(href) != "undefined" ){
		a.setAttribute( "href" , href );
	}
	return a;
}
function Checkbox(name,value){
	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	if( name ){
	checkbox.name = name;
	checkbox.id = name;
	}
	if( value ){
	checkbox.value = value;
	}
	return checkbox;
}
/* Champ avec recherche pendant la saisie */
function GroupCheckboxes(request,id,Default,explanations){
	
	this.Content = Div("GroupCheckboxes");
	
	this.request = request;
	
	
	var parentTarget = this;

	this.choix = function(){
		if( this.checked ){
			//s'il est checked on ajoute à la liste
			parentTarget.value += this.value + ";";
		}else{
			//s'il est pas checked on le retire de la liste
			
			var idSelected = parentTarget.value.split(";");
			
			parentTarget.value = "";
			
			for( var j = 0 ; j < idSelected.length ; j++ ){
				if( idSelected[j] != this.value && idSelected[j] != "" && idSelected[j] != " " ){
					parentTarget.value += idSelected[j] + ";";
				}

			}
		}
	}
	this.Construct = function(){
			/* Envoi la requete*/
				if( typeof(this.request) == "string" ){
					var RequeteRecherche = ObjXMLHttpRequest();
					RequeteRecherche.SendRequest( this.request ,false,"" );
					if ( RequeteRecherche.responseText != "error" ) {
						var liste= eval('('+RequeteRecherche.responseText+')');
					}else{
						var divitem = DivSelect();
						divitem.appendChild( Text( Langs['NoResult'] ) );
						this.Liste.appendChild(divitem);
					}
				}else{
					var liste= this.request;
				}
					this.value = "";
					
					//EXPLANATIONS//////////////////////
					if(explanations){
						var ExpText = createElement( "i" , explanations );
						this.Content.appendChild(ExpText);
					}
					////////////////////////////////////
					
					var tab = new Tableau(4);
					this.Content.appendChild(tab.Content);
					
					for( var i in liste ){
						var checkbox = Checkbox(id);
							checkbox.value = i;
							
							if(Default){ if(Default!=""){
								var selected = Default.split(";");
								for( var j in selected ){
									if( selected[j] == i ){
										this.value = i+";";
										checkbox.checked = true;
										break;
									}
								}
							} }
							
						checkbox.onclick = this.choix;
						tab.Add( checkbox );
						tab.Add( Text( liste[i] ) );
					}
///////////SI PROBLEME J'AI GARDE L'ANCIEN
/*					for( var i in liste ){
						var divitem = DivSelect();
							this.Content.appendChild( divitem );
						var tab = new Tableau(2);
							divitem.appendChild(tab.Content);
						var checkbox = Checkbox(id);
							checkbox.value = i;
							
							if(Default){
								var selected = Default.split(";");
								for( var j in selected ){
									if( selected[j] == i ){
										this.value = i+";";
										checkbox.checked = true;
										break;
									}
								}
							}
							
						checkbox.onclick = this.choix;
						tab.Add( checkbox );
						tab.Add( Text( liste[i] ) );
						this.Content.appendChild(tab.Content);
					}
*/	}
		this.value = Default;
		this.Construct();
}

function Checkbox2(name, donnee){
	var checkbox = document.createElement("input");
	checkbox.setAttribute("type","checkbox");
	checkbox.setAttribute("name" , name);
	checkbox.setAttribute("id" , name);
	if (donnee=="true") { 
	checkbox.setAttribute("checked" , "checked");
	}
	return checkbox;
}

function Radio(name, id, value, donnee){
	var radio = document.createElement("input");
	radio.type = "radio";
	radio.name = name;
	if( id != "" && id != undefined ){
		radio.id = id;
	}
	radio.value = value;
	
	if (value == donnee) {
		radio.checked=true;
	}

return radio;
}

function CheckboxInstant(label,cid,field,request,valInit,disable){
	this.Content = document.createElement("label");
	this.CheckBox = Checkbox("block");
	this.Content.appendChild( this.CheckBox );
	this.CheckBox.checked = eval(valInit);
	if( typeof(disable) != "undefined" ){
		if( disable == "true"  ){
			this.CheckBox.disabled = eval(disable);
			this.CheckBox.checked = eval(disable);
		}
	}
	this.Content.appendChild( Text( label ) );
	this.CheckBox.onclick = function(){
		var RequeteProfil = ObjXMLHttpRequest();
		RequeteProfil.SendRequest( request ,false,"&CID=" + cid + "&field=" + field + "&value=" + this.checked);
	}
			
}
function TextArea(name,value){
	var textarea = document.createElement("textarea");
	textarea.setAttribute("name" , name);
	if( value ){
	textarea.value = value;
	}
	return textarea;
}

function Field(name,value, id, size, maxlength, length){
	
	var field = document.createElement("input");
	field.type = "text";
	if( name ){
	field.name = name;
	}
	if( id ){
	field.id = id;
	}
	if( size ){
	field.size = size;
	}
	if( maxlength ){
	field.maxLength = maxlength;
	}
	if( length ){
	field.length = length;
	}
	if( value ){
	field.setAttribute("value" , value);
	}
	return field;
}
function FieldHidden(name,value){
	
	var field = document.createElement("input");
	field.type="hidden";
	field.name=name;
	if( value ){
	field.value=value;
	}
	return field;
}
function Button(value, width, height){
	var button = document.createElement("input");
	button.setAttribute("type" , "button");
	button.setAttribute("value" , value);
	button.setAttribute("width" , width);
	button.setAttribute("height" , height);
	return button;
}
function ImgButton(srcOff,srcOn){
	if( !srcOn ){ srcOn = srcOff ; }
	var img = document.createElement('img');
	img.srcOff = srcOff;
	img.srcOn = srcOn;
	img.setAttribute("src",srcOff);
	img.setAttribute("style","cursor:pointer");
	img.className = "LikeButton";
	img.onmouseover = function(){
		this.setAttribute("src",this.srcOn);
	}
	var parent = this;
	img.onmouseout = function(){
		if( this.Selected ){
			this.setAttribute("src",this.srcOn);
		}else{
			this.setAttribute("src",this.srcOff);
		}
	}
	img.TurnToOff = img.onmouseout;
	return img;
}

function FieldPassword(name){
	var field = document.createElement("input");
	field.setAttribute("type" , "password");
	field.setAttribute("name" , name);
	return field;
}
function Div( id, idclass ){
	var div = document.createElement('div');
	if( id ){
		div.id = id ;
	}
	if (idclass) {
		div.className = idclass;
	}
	return div;
}
function Liste( id ){
	this.Content = document.createElement('ul');
	if( id ){
		this.Content.setAttribute( "id" , id );
	}
	this.Add = function( element , classe ){
		var li = document.createElement('li');
		if( classe ){
			li.className = classe;
		}
		if( typeof(element) == "string" ){
			li.appendChild( Text( element ) );
		}else{
			li.appendChild( element );
		}
		this.Content.appendChild(li);
	}
	this.Reset = function(){
		RemoveAllChilds(this.Content,0);
	}
}
function DivSelect(){
	var divselect = Div();
	divselect.className = "divselect";
	return divselect;
}
function Img(src){
	var img = document.createElement('img');
	img.setAttribute("src",src);
	return img
}
/* Champ avec recherche pendant la saisie */
function FieldRecherche(pagerequest,id,Default,varlist){
	
	/* cree le champ */
	this.Content = document.createElement("input");
	this.Content.setAttribute("type" , "text");
	this.Content.setAttribute("id" , id);
	this.value = "";
	
	this.pagerequest = pagerequest;
	this.Liste = Div();
	this.Liste.className = "ListeFieldRecherche";
	this.Timer = 0;
	
	var listeconteneur = this.Liste;
	this.Content.onkeypress = function( parent ){
		return function(){
			/* Vire tout ce qu'il y a dans le div liste */
			RemoveAllChilds( parent.Liste,0 );
			
			
			/* Affiche les résultat après 1 seconde */
			clearTimeout( parent.Timer );
			
			parent.Timer = setTimeout( parent.recherche,1000 );
		}
	}(this)

	
	//RECHERCHE
	this.recherche = function(obj){
		return function(){
		
			/* Envoi la requete*/
				var RequeteRecherche = ObjXMLHttpRequest();
				RequeteRecherche.SendRequest( obj.pagerequest ,false,varlist+"&texte=" + encodeURIComponent( obj.Content.value ) );
				
				if ( RequeteRecherche.responseText != "error" ) {
					/*créé le div des mots trouvé*/
					var div = document.createElement('div');
					
					var liste= eval('('+RequeteRecherche.responseText+')');
					var divitem = "" ;
					
					/* s'il y a plusieurs items, liste est un tableau, ce n'est pas le cas s'il n'y a qu'une seule valeur */
					if(typeof(liste[0]) == "undefined"){ var elementseul = liste; liste = new Array(); liste[0] = elementseul; }
					
						for( var i = 0 ; i < liste.length ; i++ ){
							var divitem = DivSelect();
							
							divitem.appendChild( Text( liste[i][0] ) );
							
							
							divitem.texte = liste[i][0];
							divitem.id = liste[i][1];
							
							/*Si on clique sur le mot trouvé...*/
							divitem.onmousedown = function(){
							
								var ancien_value = obj.Content.value;
									obj.Content.style.fontStyle = "italic";
									obj.Content.value = "chargement en cours...";
									
									this.parentNode.parentNode.removeChild(this.parentNode);
									
									
									/* Balance l'action définit dans le parent du champ*/
									obj.Content.style.fontStyle = "normal";
									
									if( !obj.Action(this.id,this.texte) ){
									obj.Content.value = ancien_value;
									}
									
							}
							
							obj.Liste.appendChild( divitem );
						}
					
					
				}else{
							divitem = DivSelect();
							divitem.appendChild( Text( Langs['NoResult'] ) );
							obj.Liste.appendChild(divitem);
				}
					//REFERMER LA LISTE
					document.onmouseup = function(){
						if( listeconteneur.parentNode ){
						listeconteneur.parentNode.removeChild(listeconteneur);
						}
						document.onmouseup = function(){ return false; };
					}
				
					/*Ajoute le div dans le body*/
					document.body.appendChild(obj.Liste);
					var pos = findPos(obj.Content);
					
					/* STYLE DE LA LISTE */
					obj.Liste.style.position = "absolute";
					obj.Liste.style.top = ( pos.y+ obj.Content.offsetHeight + 1 )+"px" ;
					obj.Liste.style.left = pos.x+"px";
					obj.Liste.style.minWidth = obj.Content.offsetWidth+"px";
			}
	}(this)
		this.Construct = function(){
			var RequeteRecherche = ObjXMLHttpRequest();
			RequeteRecherche.SendRequest( this.pagerequest , false , "&id="+this.value );
			
			if ( RequeteRecherche.responseText != "error" ) {
				this.Content.value = RequeteRecherche.responseText;
			}
		}
	if( Default ){
		this.value = Default;
		this.Construct();
	}
}
/* Champ avec recherche pendant la saisie */
function FieldRecherchePreview(pagerequest,id,Default,varlist){
	var container_general = this;
	
	/* cree le champ */
	this.Content = document.createElement("input");
	this.Content.setAttribute("type" , "text");
	this.Content.setAttribute("id" , id);
	this.value = "";
	
	this.pagerequest = pagerequest;
	this.Liste = Div();
		var Container = this.Liste;
	this.Liste.className = "ListeFieldRecherche";
	this.Timer = 0;
	
	//resultats de recherche
	this.Items = Div();
	this.Liste.appendChild( this.Items );
	
	var listeconteneur = this.Items;
	
	var field = this.Content;
	this.Content.onkeypress = function( parent ){
		return function(){
			
			parent.page = 0;
			parent.numpages = 0;
			field.cid = "";
			field.idvalue = "";
			field.thumb = "";
			/* Vire tout ce qu'il y a dans le div liste */
			RemoveAllChilds( parent.Items,0 );
			/* Affiche les résultat après 1 seconde */
			clearTimeout( parent.Timer );
			
			parent.Timer = setTimeout( parent.recherche,1000 );
			
		}
	}(this)
	//Liste des pages dispo
	this.Pages = Div("pages");
	this.Liste.appendChild( this.Pages );
	this.ConstructPages = function( num ){
		
		var change_page = function(obj){
			return function(){
			
			RemoveAllChilds( listeconteneur );
			obj.page = this.page;
			///affiche precedent suivant
			if( obj.page >0 ){
				precedent.style.display = "block";
			}else{
				precedent.style.display = "none";
			}
			precedent.page = obj.page-1;
			if( obj.page < obj.numpages-1  ){
				suivant.style.display = "block";
			}else{
				suivant.style.display = "none";
			}
			suivant.page = obj.page+1;
			///
			obj.recherche();
			}
		}(this)
		
			RemoveAllChilds(this.Pages,0);
			if( this.numpages > 1 ){
			////PRECEDENT
			var tableau = new Tableau(null);
			this.Pages.appendChild( tableau.Content );
				precedent = LinkSpan("<");
					if( this.page >0 ){
						precedent.style.display = "block";
					}else{
						precedent.style.display = "none";
					}
					precedent.page = this.page-1;
					precedent.onclick = change_page;
					tableau.Add( precedent );
			////liste pages
			tableau.Add( Text(this.page + 1 +"/"+ this.numpages ) );
			////SUIVANT
				suivant = LinkSpan(">");
					if( this.page < this.numpages-1  ){
						suivant.style.display = "block";
					}else{
						suivant.style.display = "none";
					}
					suivant.page = this.page+1;
					suivant.onclick = change_page;
					tableau.Add( suivant );
				
			}
		//REFERMER LA LISTE
		document.onmouseup = function(event){
			var target = event.target || event.srcElement;
			
			if( suivant && precedent ){
			var verif_boutons_pages = target != suivant && target != suivant.firstChild && target != precedent && target != precedent.firstChild;
			}else{
				verif_boutons_pages = true;
			}
			var verif_parent = target.parentNode != Container && target.parentNode.parentNode != Container && target.parentNode.parentNode != Container && target.parentNode.parentNode != Container;
			
			if( verif_boutons_pages && verif_parent ){
			document.body.removeChild(Container);
			document.onmouseup = function(){ return false; };
			}
		}
	}
	//Init Pages
	this.page = 0;
	this.numpages = 0;
	this.limit = 5;
	
	var suivant ="";
	var precedent = "";
	
	
	this.Action = new Function();
	//RECHERCHE
	this.recherche = function(obj){
		return function(){
			
			//Si chant pas remplit, vide, juste espace -> quitter la fonction
			var reg = new RegExp("( )", "g");
			if( field.value.replace(reg,"") == "" ){ return false; }
			////////////////////////////////////////////////////////////////
			listeconteneur.innerHTML = Langs["Loading"];
			/* Envoi la requete*/
				var RequeteRecherche = ObjXMLHttpRequest();
				if (varlist) {
					RequeteRecherche.SendRequest( pagerequest ,false,"&texte=" + encodeURIComponent( field.value )+varlist+"&page="+obj.page+"&limit="+obj.limit   );
				}else{
					RequeteRecherche.SendRequest( pagerequest ,false,"&texte=" + encodeURIComponent( field.value )+"&page="+obj.page+"&limit="+obj.limit ); 
				}
				
				if ( RequeteRecherche.responseText != "error" && RequeteRecherche.responseText != "[]" ) {
					/*créé le div des mots trouvé*/
					var reponse= eval('('+RequeteRecherche.responseText+')');
					var liste = reponse['datas'];
					
					
					/////Construction des pages
						if( obj.numpages == 0 && reponse["nbPages"] > 1){
							obj.numpages = reponse["nbPages"];
						}
						
						obj.ConstructPages(obj.numpages);
						
					var divitem = "" ;
					RemoveAllChilds( listeconteneur );
					if( liste != null ){
						for( var i in liste ){
							listeconteneur.appendChild( H( 1 , i ) );
							for( var j in liste[i] ){
								
								var divitem = DivSelect();
								var tab = new Tableau(2);
								if( liste[i][j]["thumb"] ){
								tab.Add( Img( liste[i][j]["thumb"] ) );
								}else{
								tab.Add( null );
								}
								var infos = Div();
									infos.appendChild( Text( liste[i][j]["value"] ) );
								
								//Drapeaux Langues
								if(liste[i][j]["langues"]){
									var infoslangues = Div();
										infos.appendChild(infoslangues);
										for( var l in liste[i][j]["langues"] ){
											
											infoslangues.appendChild( Img( "/ressources/images/langues/"+liste[i][j]["langues"][l] ) );
										}
								}
								//
								tab.Add( infos );
								divitem.appendChild( tab.Content );
								
								divitem.variables = new Array();
								for( var variable in liste[i][j] ){
									divitem.variables[variable] = liste[i][j][variable];
								}
								
								divitem.onmousedown = function(){
									return function(){
										Container.style.height = Container.offsetHeight+"px";
										//Vire la liste
										RemoveAllChilds( listeconteneur );
										
										
										opened = false;
										
										container_general.value = this.variables.idvalue;
										container_general.Action( this.variables.idvalue , this.variables.value );
										//Ajout au champ texte
										for( var variable in this.variables ){
										field[variable] = this.variables[variable];
										}
										
									}
								}(this)
								
								listeconteneur.appendChild( divitem );
							}
						}
					}else{
						listeconteneur.appendChild( Text(Langs["NoResult"]) );	
					}
					

					/*Ajoute le div dans le body*/
						document.body.appendChild(Container);
						Container.onmouseup = function( event ){
							
							var target = event.target || event.srcElement;
							
							
							if( typeof(suivant) != "undefined" ){
								var testsuivant = target != suivant && target != suivant.firstChild;
							}else{
								var testsuivant = true;
							}
							
							if( typeof(precedent) != "undefined" ){
								var testprecedent = target != precedent && target != precedent.firstChild;
							}else{
								var testprecedent = true;
							}
							var verif_boutons_pages = testprecedent && testsuivant;
							
							var verif_parent = target.parentNode != Container && target.parentNode.parentNode != Container && target.parentNode.parentNode != Container && target.parentNode.parentNode != Container;
							
							if( verif_boutons_pages && verif_parent ){
							document.body.removeChild(Container);
							document.onmouseup = function(){ return false; };
							}
						};
						var pos = findPos(field);
						
						/* STYLE DE LA LISTE */
						Container.style.position = "absolute";
						Container.style.top = ( pos.y+ field.offsetHeight + 1 )+"px" ;
						Container.style.left = pos.x+"px";
						Container.style.minWidth = field.offsetWidth+"px";
						
						opened = true;
				}else{
					opened = false;
				}
		}
	}(this)
		this.Construct = function(){
			var RequeteRecherche = ObjXMLHttpRequest();
			RequeteRecherche.SendRequest( this.pagerequest , false , "&id="+this.value );

			if ( RequeteRecherche.responseText != "error" ) {
				this.Content.value = RequeteRecherche.responseText;
			}
		}
	if( Default ){
		this.value = Default;
		
		this.Construct();
	}
}
function DesactiveSelection( element ){
	function ffalse(){
		return false;
	}
	function ftrue(){
			return true;
	}
	element.onselectstart = new Function ("return false");
	if(window.sidebar)
	{
			element.onmousedown = ffalse;
			element.onclick = ftrue;
	}	
}

/* Champ avec recherche pendant la saisie */
function FieldSelecter(pagerequest,id,Default){
	
	this.Content = Div();
	var tab = new Tableau(null);
		this.Content.appendChild(tab.Content);
	// cree le champ 
	this.Field = document.createElement("input");
	this.Field.disabled = true;
	this.Field.setAttribute("type" , "text");
	this.Field.setAttribute("id" , id);
		tab.Add( this.Field );
	
	//modifier
	this.modifier = LinkSpan( "modify" );
		tab.Add( this.modifier );
	
	this.pagerequest = pagerequest;
	this.Liste = Div();
	this.Liste.className = "ListeFieldRecherche";
	this.Timer = 0;
	
	//Container
	this.Liste.field = document.createElement("input");
	this.Liste.field.setAttribute("type" , "text");
	this.Liste.appendChild( this.Liste.field );
	
	//resultats de recherche
	this.Items = Div();
	this.Liste.appendChild( this.Items );
	
	//Liste des pages dispo
	this.Pages = Div("pages");
	this.Liste.appendChild( this.Pages );
	this.ConstructPages = function( num ){
		var change_page = function(obj){
			return function(){
			RemoveAllChilds( obj.Items,0 );
			obj.page = this.page;
			///affiche precedent suivant
			if( obj.page >0 ){
				precedent.style.display = "block";
			}else{
				precedent.style.display = "none";
			}
			precedent.page = obj.page-1;
			if( obj.page < obj.numpages-1  ){
				suivant.style.display = "block";
			}else{
				suivant.style.display = "none";
			}
			suivant.page = obj.page+1;
			///
			obj.recherche();
			}
		}(this)
		
			RemoveAllChilds(this.Pages,0);
			////PRECEDENT
			var tableau = new Tableau(null);
			this.Pages.appendChild( tableau.Content );
				var precedent = LinkSpan("<");
					if( this.page >0 ){
						precedent.style.display = "block";
					}else{
						precedent.style.display = "none";
					}
					precedent.page = this.page-1;
					precedent.onclick = change_page;
					tableau.Add( precedent );
			////liste pages
			tableau.Add( Text(this.page + 1 +"/"+ this.numpages ) );
	/*		for( var i = this.page - 5 ; i < num ; i++ ){
				var lien = LinkSpan(i+1);
				lien.page = i;
				lien.onclick = change_page;
				this.Pages.appendChild( lien );
			}
	*/		////SUIVANT
				var suivant = LinkSpan(">");
					if( this.page < this.numpages-1  ){
						suivant.style.display = "block";
					}else{
						suivant.style.display = "none";
					}
					suivant.page = this.page+1;
					suivant.onclick = change_page;
					tableau.Add( suivant );
				
		
	}
	//Init Pages
	this.page = 0;
	this.numpages = 0;
	this.limit = 5;
	
	// BOUTON VALIDER
	var fermer = Button( Langs["Close"] );
		this.Liste.appendChild( fermer );
		
		//Si on clique sur valider...
		fermer.onmousedown = function(){
			this.parentNode.parentNode.removeChild(this.parentNode);
		}
	
	
	this.modifier.onclick = function( parent ){
		return function(){
			/* Vire tout ce qu'il y a dans le div liste */
			RemoveAllChilds( parent.Items,0 );
			parent.recherche();
		}
	}(this)
	this.Liste.field.onkeypress = function( parent ){
		return function(){
			// Vire tout ce qu'il y a dans le div liste 
			RemoveAllChilds( parent.Items,0 );
			
			
			// Affiche les résultat après 1 seconde
			clearTimeout( parent.Timer );
			
			parent.Timer = setTimeout( parent.recherche,1000 );
		}
	}(this)
	
	var fieldTarget = this.Field;
	var parentTarget = this;

	this.choix = function(){
		
		if( this.checked ){
			//s'il est checked on ajoute à la liste
			if(typeof(parentTarget.value)=="undefined"){
				parentTarget.value = "";
			}
			
			
			fieldTarget.value += this.texte + ";";
			parentTarget.value += this.value + ";";
		}else{
			//s'il est pas checked on le retire de la liste
			
			var idSelected = parentTarget.value.split(";");
			var texteSelected = fieldTarget.value.split(";");
			
			fieldTarget.value = "";
			parentTarget.value = "";
			
			for( var j = 0 ; j < idSelected.length ; j++ ){
				if( idSelected[j] != this.value && idSelected[j] != "" && idSelected[j] != " " ){
					fieldTarget.value += texteSelected[j] + ";";
					parentTarget.value += idSelected[j] + ";";
				}

			}
		}
	}
	function Apply_Events( element ){
		element.onmouseover = function(){
			window.onmousedown = false;
		}
		element.onmouseout = function(){
			window.onmousedown = function(){
				document.body.removeChild( parentTarget.Liste );
				window.onmousedown = false;
				window.onmouseout = false;
				window.onmouseover = false;
			}
		}
		window.onmousedown = function(){
			document.body.removeChild( parentTarget.Liste );
		}

	}
	//RECHERCHE
	this.recherche = function(obj){
		return function(){
			/* Envoi la requete*/
			
				var RequeteRecherche = ObjXMLHttpRequest();
				RequeteRecherche.SendRequest( obj.pagerequest ,false,"&texte=" + encodeURIComponent( obj.Liste.field.value )+"&page="+obj.page+"&limit="+obj.limit );
				
				if ( RequeteRecherche.responseText != "error" ) {
					/*créé le div des mots trouvé*/
					///////////////////////////////////
					var RetourRequete = eval('('+RequeteRecherche.responseText+')');
					var liste = RetourRequete["datas"];
					
					Apply_Events(obj.Liste);
					/////Construction des pages
					if( obj.numpages == 0 && RetourRequete["nPages"] > 1){
						obj.nPages = RetourRequete["nPages"];
					}
						obj.numpages = RetourRequete["nPages"];
						obj.ConstructPages(obj.nPages);
					var divitem = "" ;
					
					/* s'il y a plusieurs items, liste est un tableau, ce n'est pas le cas s'il n'y a qu'une seule valeur */
					if(typeof(liste[0]) == "undefined"){ var elementseul = liste; liste = new Array(); liste[0] = elementseul; }
					
						for( var i = 0 ; i < liste.length ; i++ ){
							var divitem = DivSelect();
							obj.Items.appendChild( divitem );
							var tab = new Tableau(2);
							divitem.appendChild(tab.Content);
							var checkbox = Checkbox();
								checkbox.texte = liste[i][0];
								checkbox.value = liste[i][1];
								checkbox.checked = false;
								
							//verifie si ce résultat a déjà été sélectionné dans une recherche précédente
							if( obj.value ){
								var arraySelected = obj.value.split(";");
								for( var j = 0 ; j < arraySelected.length ; j++ ){
									if( arraySelected[j] == checkbox.value ){
										checkbox.checked = true;
									}
								}
							}
							checkbox.onclick = obj.choix;
							
							tab.Add( checkbox );
							tab.Add( Text( liste[i][0] ) );
						}
				}else{
							var divitem = DivSelect();
							divitem.appendChild( Text( Langs['NoResult'] ) );
							obj.Items.appendChild(divitem);
				}
				/*Ajoute le div dans le body*/
				document.body.appendChild(obj.Liste);
				var pos = findPos(obj.Field);
				/* STYLE DE LA LISTE */
				obj.Liste.style.position = "absolute";
				obj.Liste.style.top = ( pos.y+ obj.Field.offsetHeight + 1 )+"px" ;
				obj.Liste.style.left = pos.x+"px";
				obj.Liste.style.minWidth = obj.Field.offsetWidth+"px";
			}
			

	}(this)
	this.Construct = function(){
		this.Field.value = "loading...";
		var Requete = ObjXMLHttpRequest();
		Requete.SendRequest( this.pagerequest , true , "&liste="+this.value );
		Requete.onreadystatechange = function(obj){
			return function(){
				if( this.readyState == 4 ){
					if( this.status == 200 ){
						obj.Field.value = this.responseText;
					}
				}
			}
		}(this)


	}
	
	
	if( typeof(Default) == "undefined" || Default == "undefined" ){
		Default = "";
	}
	if( Default ){
		this.value = Default;
		this.Construct();
	}
}
/* Select NORMAL */
function Select( param , id , Default , SensKeyValue , associatif, varlist ){
	var Selecter = document.createElement("select");

	if( id ){
	Selecter.setAttribute("id" , id);
	Selecter.setAttribute("name" , id);
	}
	Selecter.Construct = function(param ,Default , SensKeyValue, varlist) {
		RemoveAllChilds( this , 0 );
		if( typeof(vide)!='undefined' ){
		if( vide ){
			var option = document.createElement('option');
			option.setAttribute("value" , "" );
			option.appendChild( Text("selectionnez un élément") );
			Selecter.appendChild(option);
				if( !Default ){
					option.selected = true;
				}
		}
		
		}
		
	//premier vide////////////////////////////////
/*	var option = document.createElement('option');
	option.setAttribute("value" , "" );
	Selecter.appendChild(option);
*/	/////////////////////////////////////////////
			
			if( SensKeyValue){
				for( var key in param ){
					var option = document.createElement('option');
					option.setAttribute("value" , param[key] );
					option.appendChild( Text( key ) );
					Selecter.appendChild(option);
					if( param[key] == Default ){
						option.selected = true;
					}
					
				}
			}else{
				for( var key in param ){
					
					var option = document.createElement('option');
					option.setAttribute("value" , key );
					option.appendChild( Text( param[key] ) );
					Selecter.appendChild(option);
					if( key == Default ){
						option.selected = true;
					}
					
				}
			}
	


	}
		
	//Si Param est un string :
		if( typeof(param) == "string" ){
			var option = document.createElement('option');
				option.setAttribute("value" , "" );
				option.appendChild( Text( "chargement en cours..." ) );
				Selecter.appendChild(option);
				
			var RequeteSelect = ObjXMLHttpRequest();
			RequeteSelect.SendRequest( param ,true,""+varlist );
			RequeteSelect.onreadystatechange = function(obj){
				return function(){
					if( this.readyState == 4 ){
						if( this.status == 200 ){
							if( this.responseText != "error" ){
								var response = eval('('+this.responseText+')');
							}else{
								var response = new Object();
							}
					
							Selecter.Construct( response ,Default , SensKeyValue);
							
						}
					}
				}
			}(this)
		}else{
			Selecter.Construct(param ,Default , SensKeyValue, varlist);
		}
	return Selecter;
}
/* Select Instantane */
function SelectInstant( param , id , Default , firstOptionEmpty ){
	
	this.Content = document.createElement("select");
	this.Content.setAttribute("id" , id);
	this.Construct = function(param, Default) {
	if( typeof(param) == "object" ){
		var liste = new Array();
		for( var a = 0 ; a < param.length ; a++ ){
			liste[a] = new Array();
			liste[a]['nom'] = Langs[ param[a] ];
			liste[a]['id'] = param[a];
		}
	//Si Param est une valeur :
	}else{
		var RequeteSelect = ObjXMLHttpRequest();
		RequeteSelect.SendRequest( param ,false,"" );
		var liste= eval('('+RequeteSelect.responseText+')');
	}
	
	if( firstOptionEmpty ){
		var option = document.createElement('option');
		this.Content.appendChild(option);
	}
	
	for( var i = 0 ; i < liste.length ; i++ ){
		var option = document.createElement('option');
		
		option.setAttribute("value" , liste[i]['CID']);
		option.appendChild( Text( liste[i]['nom'] ) );
		this.Content.appendChild(option);
		if( liste[i]['CID'] == Default || liste[i]['nom'] == Default){
			option.selected = true;
		}
	}
	}
	  this.Construct(param , Default);
	  
	
}
/* DOUBLE DOUBLE DOUBLE SELECT */
/* completelist -> liste complète des choix ||||| elementsselected -> les choix deja selectionné */
function DoubleSelect(completelist,elementsselected,module,operation){
	this.Content = document.createElement('div');
	this.Content.className = "DoubleSelect";
	this.module=module;
	this.operation = operation;
	this.Infos = new Tableau(3);
	
	
	/* Les 2 boites de selection */
	this.InBox = document.createElement('select');
		this.InBox.setAttribute("multiple","multiple");
	this.OutBox = document.createElement('select');
		this.OutBox.setAttribute("multiple","multiple");
	
	/*Les boutons pour envoyer de droite à gauche */
	var boutons = new Tableau(1);
	
	var boutonToIn = LinkSpan("<");
	var boutonToOut = LinkSpan(">");
	
	boutons.Add( boutonToIn );
	boutons.Add( boutonToOut );
	
	this.Infos.Add(this.InBox);
	this.Infos.Add(boutons.Content);
	this.Infos.Add(this.OutBox);
	this.Content.appendChild(this.Infos.Content);
	
	if( typeof(completelist) == "string" ){
		var Requete = new ObjXMLHttpRequest();
		Requete.SendRequest( completelist , false , "" );
		if( Requete.responseText != "error" ){
			var completelist = eval('('+Requete.responseText+')');
		}else{
			var completelist = [];
		}
	}

	for( var i = 0 ; i < completelist.length ; i++ ){
		var selected = false;
		for( var j = 0 ; j < elementsselected.length ; j++ ){
			if( elementsselected[j]['id'] == completelist[i]['id'] ){
				selected = true;
			}
		}
		if( selected ){
			var option = document.createElement('option');
				option.setAttribute("value",completelist[i]['id']);
				option.appendChild( Text ( completelist[i]['nom'] ) );
			this.InBox.appendChild(option);
		}else{
			var option = document.createElement('option');
				option.setAttribute("value",completelist[i]['id']);
				option.appendChild( Text ( completelist[i]['nom'] ) );
			this.OutBox.appendChild(option);
		}
	}
	
		boutonToIn.onclick = function(obj) {
			return function(){
				var Options = obj.OutBox.options;
				/* parcours la liste des options pour voir si elles sont selected, et les envoi dans l'autre boite */
				for( var i = 0 ; i < Options.length ; i++ ){
					if( Options[i].selected ){
						/*envoi le cid de l'option (dugroupe) et donne la valeur true*/
						obj.Send( Options[i].value , true );
						obj.InBox.appendChild( Options[i] );
						/* quand on enleve un element, le prochain le remplace donc il faut pas passer au suivant */
						i--;
					}
				}
			}
		}(this)
		
		boutonToOut.onclick = function(obj) {
			return function(){
				var Options = obj.InBox.options;
				/* parcours la liste des options pour voir si elles sont selected, et les envoi dans l'autre boite */
				for( var i = 0 ; i < Options.length ; i++ ){
					if( Options[i].selected ){
						/*envoi le cid de l'option (dugroupe) et donne la valeur false*/
						obj.Send( Options[i].value , false );
						obj.OutBox.appendChild( Options[i] );
						/* quand on enleve un element, le prochain le remplace donc il faut pas passer au suivant */
						i--;
					}
				}
			}
		}(this)
	this.Send = function( CID , value ){
		this.RequetePermission = ObjXMLHttpRequest();
		this.RequetePermission.SendRequest(this.operation,false,"&module=" + this.module + "&id=" + CID + "&value=" + value );
		
	}
	
}

//////////////////////////////////////////////////////////////
////////////////Objets pour Sous Module SOcietes/////////////
//////////////////////////////////////////////////////////////
/*function SelectRelationnel( operation , table1 , table2 , elementsselected , explanations){
	
	
	this.Content = Div("SelectRelationnel");
	this.value = new String();
	this.array = new Array();
	this.Tableau = new Tableau(3,"top");
		this.Content.appendChild(this.Tableau.Content);
	
	var RequeteSelect = ObjXMLHttpRequest();
		RequeteSelect.SendRequest( operation ,false,"&table1="+table1+"&table2="+table2 );
		var Liste= eval('('+RequeteSelect.responseText+')');

	
		var select1 = Select( Liste[table1] , table1 , false , false , true );
		var select2 = Select( Liste[table2] , table2 , false , false , true );
		this.Tableau.Add( select1 );
		this.Tableau.Add( select2 );



	var Plus = Button("ajouter");
	Plus.onclick = function(obj){
		return function(ev){
			if(select1.value && select2.value){
				var arrayTmp = [ select1.selectedIndex , select2.selectedIndex ];
				var exists = false;
				for( var i in obj.array ){
					if( obj.array[i][0] == arrayTmp[0] && obj.array[i][1] == arrayTmp[1] ){
						exists = true;
						break;
					}
				}
				if( !exists ){
					obj.array.push( arrayTmp );
					obj.ConstructText();
				}
				if( obj.Action ){ obj.Action(ev); }
			}
		}
		
	}(this)
	this.ConstructText = function(){
		RemoveAllChilds( this.Text , 0 );
		for( var i in this.array ){
			var div = Div();
				this.Text.appendChild(div);
				var tab_li = new Tableau(null);
					div.appendChild(tab_li.Content);
				var supprimer = LinkSpan("delete");
					tab_li.Add( supprimer );
					tab_li.Add( Text(select1.options[ this.array[i][0] ].text +" → "+ select2.options[ this.array[i][1] ].text) );
				supprimer.indexes = this.array[i];
				supprimer.parent = div;
				supprimer.onclick = function(obj){
					return function(ev){
						for( var i in obj.array ){
							if( obj.array[i] == this.indexes ){
								obj.array.splice( i , 1 );
								this.parent.parentNode.removeChild( this.parent );
							}
						}
						obj.ConstructString();
						if( obj.Action ){ obj.Action(ev); }
					}
				}(this)
		}
		this.ConstructString();
	}
	this.ConstructString = function(){
		this.value = "";
		for( var i in this.array ){
			this.value += select1.options[ this.array[i][0] ].value +"-"+ select2.options[ this.array[i][1] ].value +";";
		}
	}
	this.Tableau.Add(Plus);
	if(explanations){
	var ExpText = createElement( "i" , explanations );
		this.Content.appendChild(ExpText);
	}
	this.Text = Div();
		this.Content.appendChild(this.Text);

	////SI elements deja selectionnes///
	if( elementsselected ){
		//this.value = elementsselected;
		var arrayselected = elementsselected.split(";");
		for( var i in arrayselected ){
			if( arrayselected[i] != "" ){
			var tab = arrayselected[i].split("-");
			var collection1 = select1.options;
			var collection2 = select2.options;
			
			for( var j in collection1 ){
				if(collection1[j]){
					if( collection1[j].value == tab[0] ){
						break;
					}
				}
			}
			for( var k in collection2 ){
				if( collection2[k] ){
					if( collection2[k].value == tab[1] ){
						break;
					}
				}
			}
			var arrayTmp = [ j , k ];
			this.array.push(arrayTmp);
			
			}
		}
		
		this.ConstructText();
	}
	
	//////////////////
	
}*/

function SelectRelationnel( operation , table1 , table2 , elementsselected , explanations){
	
	
	this.Content = Div("SelectRelationnel");
	this.value = new String();
	this.array = new Array();
	this.Tableau = new Tableau(3,"top");
		this.Content.appendChild(this.Tableau.Content);
	
	var RequeteSelect = ObjXMLHttpRequest();
		RequeteSelect.SendRequest( operation ,false,"&table1="+table1+"&table2="+table2 );
		var Liste= eval('('+RequeteSelect.responseText+')');

	if (table1 =='date') {
			var select1 = new FieldsDate("date_miseenligne",'',false);	
			this.Tableau.Add( select1.Content );
	}
	else {
		var select1 = Select( Liste[table1] , table1 , false , false , true );
		
		this.Tableau.Add( select1 );
	}
		var select2 = Select( Liste[table2] , table2 , false , false , true );
		this.Tableau.Add( select2 );



	var Plus = Button("ajouter");
	Plus.onclick = function(obj){
		return function(ev){

			if (table1 == 'date') { select1.selectedIndex = select1.Content.TimeStampPHP;
									select1.value = select1.Content.TimeStampPHP;
									 }
								
					
			if(select1.value && select2.value){
				var arrayTmp = [ select1.selectedIndex , select2.selectedIndex ];
					
				var exists = false;
				
				for( var i in obj.array ){
					if( obj.array[i][0] == arrayTmp[0] && obj.array[i][1] == arrayTmp[1] ){
						exists = true;
						break;
					}
				}
				if( !exists ){
					obj.array.push( arrayTmp );
					obj.ConstructText();
				}
				if( obj.Action ){ obj.Action(ev); }
			}
		}
		
	}(this)
	this.ConstructText = function(){
		RemoveAllChilds( this.Text , 0 );
		for( var i in this.array ){
			var div = Div();
				this.Text.appendChild(div);
				var tab_li = new Tableau(null);
					div.appendChild(tab_li.Content);
				var supprimer = LinkSpan("delete");
					tab_li.Add( supprimer );
					if (table1 == 'date') {
					var dt = new Date();
					var arrayparse = parseInt(this.array[i][0]);
					var arraytmp = parseInt(arrayparse*1000);
					dt.setTime(arraytmp);
					select1.datejour = dt.getDate();
					select1.datemois = dt.getMonth()+1;
					select1.dateannee = dt.getFullYear();
			
					tab_li.Add( Text("le "+select1.datejour+"/"+select1.datemois+"/"+select1.dateannee+" → "+ select2.options[ this.array[i][1] ].text) ); }
					else {	tab_li.Add( Text(select1.options[ this.array[i][0] ].text +" → "+ select2.options[ this.array[i][1] ].text) ); }
				supprimer.indexes = this.array[i];
				supprimer.parent = div;
				supprimer.onclick = function(obj){
					return function(ev){
						for( var i in obj.array ){
							if( obj.array[i] == this.indexes ){
								obj.array.splice( i , 1 );
								this.parent.parentNode.removeChild( this.parent );
							}
						}
						obj.ConstructString();
						if( obj.Action ){ obj.Action(ev); }
					}
				}(this)
		}
		this.ConstructString();
	}
	this.ConstructString = function(){
		this.value = "";
		for( var i in this.array ){
			if (table1=='date') { this.value += this.array[i][0] +"-"+ select2.options[ this.array[i][1] ].value +";"; }
			else {
			this.value += select1.options[ this.array[i][0] ].value +"-"+ select2.options[ this.array[i][1] ].value +";"; }
		}
	}
	this.Tableau.Add(Plus);
	if(explanations){
	var ExpText = createElement( "i" , explanations );
		this.Content.appendChild(ExpText);
	}
	this.Text = Div();
		this.Content.appendChild(this.Text);

	////SI elements deja selectionnes///
	if( elementsselected ){
		//this.value = elementsselected;
		var arrayselected = elementsselected.split(";");
		
		var collection1 = select1.options;
		var collection2 = select2.options;
		for( var i in arrayselected ){
			if( arrayselected[i] != "" ){
			var tab = arrayselected[i].split("-");
			
			if (table1 == 'date') { j = tab[0];}
		else {	

			
			for( var j in collection1 ){
				if(collection1[j]){
					if( collection1[j].value == tab[0] ){
						break;
					}
				}
			}
		}
			

			for( var k in collection2 ){
				if( collection2[k] ){
					if( collection2[k].value == tab[1] ){
						break;
					}
				}
			}
			var arrayTmp = [ j , k ];
			this.array.push(arrayTmp);
			
			}
		}
		
		this.ConstructText();
	}
	
	//////////////////
	
}

function Field_MultiLangues( operation , elementsselected , explanations ){
	
	
	this.Content = Div("SelectRelationnel");
	this.value = new String();
	this.array = new Array();
	this.Tableau = new Tableau(3);
		this.Content.appendChild(this.Tableau.Content);
	
	var RequeteSelect = ObjXMLHttpRequest();
		RequeteSelect.SendRequest( "selectattriblangue" ,false,"" );
		if( RequeteSelect.responseText !="error"){
			var retour  = eval('('+RequeteSelect.responseText+')');
			var Liste = new Array();
			for( var i in retour ){
				Liste[ retour[i]['id'] ] = retour[i]['nom'];
			}
		}else{
			var Liste = new Array();
		}
	
		var field = Field(  );
		var langues = Select( Liste );
		this.Tableau.Add( field );
		this.Tableau.Add( langues );



	var Plus = Button("ajouter");
	Plus.onclick = function(obj){
		return function(ev){
			
			var arrayTmp = [ field.value , langues.selectedIndex ];
			var exists = false;
			for( var i in obj.array ){
				if( obj.array[i][0] == arrayTmp[0] && obj.array[i][1] == arrayTmp[1] ){
					exists = true;
					break;
				}
			}
			if( !exists ){
				obj.array.push( arrayTmp );
				obj.ConstructText();
			}
			if( obj.Action ){ obj.Action(ev); }
			
		}
		
	}(this)
	this.ConstructText = function(){
		RemoveAllChilds( this.Text , 0 );
		for( var i in this.array ){
			var div = Div();
				this.Text.appendChild(div);
				var tab_li = new Tableau(null);
					div.appendChild(tab_li.Content);
				var supprimer = LinkSpan("delete");
					tab_li.Add( supprimer );
					tab_li.Add( Text(this.array[i][0] +" → "+ langues.options[ this.array[i][1] ].text) );
				supprimer.indexes = this.array[i];
				supprimer.parent = div;
				supprimer.onclick = function(obj){
					return function(ev){
						for( var i in obj.array ){
							if( obj.array[i] == this.indexes ){
								obj.array.splice( i , 1 );
								this.parent.parentNode.removeChild( this.parent );
							}
						}
						obj.ConstructString();
						if( obj.Action ){ obj.Action(ev); }
					}
				}(this)
		}
		this.ConstructString();
	}
	this.ConstructString = function(){
		this.value = "";
		for( var i in this.array ){
			this.value += this.array[i][0] +"-"+ langues.options[ this.array[i][1] ].value +";";
		}
	}
	this.Tableau.Add(Plus);
	if(explanations){
	var ExpText = createElement( "i" , explanations );
		this.Content.appendChild(ExpText);
	}
	this.Text = Div();
		this.Content.appendChild(this.Text);

	////SI elements deja selectionnes///
	if( elementsselected ){
		//this.value = elementsselected;
		var arrayselected = elementsselected.split(";");
		for( var i in arrayselected ){
			if( arrayselected[i] != "" ){
			var tab = arrayselected[i].split("-");
			var collection2 = langues.options;
			
			for( var k in collection2 ){
				if( collection2[k] ){
					if( collection2[k].value == tab[1] ){
						break;
					}
				}
			}
			var arrayTmp = [ tab[0] , k ];
			this.array.push(arrayTmp);
			
			}
		}
		
		this.ConstructText();
	}
	
	//////////////////
	
}

function SelectMonoRelationnel( operation , table1 , elementsselected, explanations, champ1, champ2){
	
	
	this.Content = Div("SelectRelationnel");
	this.value = new String();
	this.array = new Array();
	this.Tableau = new Tableau(3,"top");
		this.Content.appendChild(this.Tableau.Content);
	
	if (champ1 || champ2) {
		var varlist = "&champ1="+champ1+"&champ2="+champ2+"";
	}
	else { var varlist = ""; }
	
	if( typeof(operation) != "object" ){
		var RequeteSelect = ObjXMLHttpRequest();
		RequeteSelect.SendRequest( operation ,false,"&table1="+table1+""+varlist );
		var Liste = eval('('+RequeteSelect.responseText+')');
	}else{
		var Liste = operation;
	}
	
		if (Liste) {
			var select1 = Select( Liste[table1] , table1 );
	
			this.Tableau.Add( select1 );
	
	
			var Plus = LinkSpan("add");
			Plus.onclick = function(obj){
				return function(){
					
					var arrayTmp = [ select1.selectedIndex ];
					var exists = false;
					for( var i in obj.array ){
						if( obj.array[i][0] == arrayTmp[0] ){
							exists = true;
							break;
						}
					}
					if( !exists ){
						obj.array.push( arrayTmp );
						obj.ConstructText();
					}
				}
				
			}(this)
			this.ConstructText = function(){
				RemoveAllChilds( this.Text , 0 );
				for( var i in this.array ){
					var div = Div();
						this.Text.appendChild(div);
					
					var supprimer = LinkSpan(" Delete", "selectmono");
						supprimer.indexes = this.array[i];
						supprimer.parent = div;
						supprimer.onclick = function(obj){
							return function(){
								for( var i in obj.array ){
									if( obj.array[i] == this.indexes ){
										obj.array.splice( i , 1 );
										this.parent.parentNode.removeChild( this.parent );
									}
								}
								obj.ConstructString();
								}
						}(this)
						var tab1 = new Tableau(2);
						tab1.Add(supprimer);
						tab1.Add(Text(select1.options[ this.array[i] ].text +""));
						div.appendChild(tab1.Content);
						}
				this.ConstructString();
			}
			this.ConstructString = function(){
				this.value = "";
				for( var i in this.array ){
					this.value += select1.options[ this.array[i] ].value +";";
				}
			}
			this.Tableau.Add(Plus);
	}
	if(explanations){
		var ExpText = createElement( "i" , explanations );
		this.Content.appendChild(ExpText);
	}
	this.Text = Div();
		this.Content.appendChild(this.Text);

	////SI elements deja selectionnes///
	if( elementsselected ){
		//this.value = elementsselected;
		var arrayselected = elementsselected.split(";");
		for( var i in arrayselected ){
			if( arrayselected[i] != "" ){
			var tab = arrayselected[i];
			var collection1 = select1.options;
			
			for( var j in collection1 ){
				if( collection1[j].value == tab ){
					break;
				}
			}

			var arrayTmp = [j];
			this.array.push(arrayTmp);
			
			}
		}
		
		this.ConstructText();
	}
	
	//////////////////
	
}
function Publication( parent , online , elementsselected, explanations , horodatage , date_mise_enligne ){
	
	
	this.Content = Div("Publication");
	this.Content.appendChild( H(1,Langs["Publication"]) );
		this.Content.appendChild( H(2,Langs["PublicationSite"]) );
	this.value = new String();
	var tableau = new Tableau(2);
		tableau.Content.id = "table_domains";
		this.Content.appendChild(tableau.Content);
	if(explanations){
		var ExpText = createElement( "i" , explanations );
		this.Content.appendChild(ExpText);
	}
	var conteneur = this;
	this.domains = "";
	
	var textDisplayed = Div("text_domains");
		this.Content.appendChild(textDisplayed);
		//////DOMAINES////////////
		var RequeteSelect = ObjXMLHttpRequest();
		RequeteSelect.SendRequest( "permissionsdomaines" ,true );
		RequeteSelect.onreadystatechange = function(obj){
			if( this.readyState == 4 ){
				if( this.status == 200 ){
					var Liste = eval('('+RequeteSelect.responseText+')');
					
					//////////CONSTRUCTION STRING////////////////////////////////////////////////
					this.ConstructString = function(){
						conteneur.domains = "";
							for( var j in array_Checkboxes ){
								if( array_Checkboxes[ j ].checked ){
								conteneur.domains += array_Checkboxes[ j ].value +"-on;";
								}else{
								conteneur.domains += array_Checkboxes[ j ].value +"-off;";
								}
							}
					}
					
					var array_Checkboxes = new Array();
					for( var c in Liste ){
						
						var checkbox = Checkbox();
							checkbox.value = c;
							checkbox.checked = false;
							checkbox.onclick = this.ConstructString;
							tableau.Add( checkbox );
							tableau.Add( Text(Liste[c]) );
							
							array_Checkboxes.push( checkbox );
							
							if( c <= 0 ){ var premier_checkbox = checkbox; }
							
						
						
						////Check les element selectionnés
						if( elementsselected ){
						for( var i in elementsselected ){
								if( checkbox.value == elementsselected[i] || elementsselected =="All" ){
									checkbox.checked = true;
								}
						}
						}
						
						
					}
				///////////DEJA SELECTIONNES//////////////////////////////////////////////////
					if (Liste) {
						//Ajoute l'élément s'il est seul dans la liste 
						if( elementsselected ){
							this.ConstructString();
						}else{
							premier_checkbox.checked = true;
							this.ConstructString();
						}
					}
					///////////////////////////////////////////////////////////////////////////
				}
			}
		}
	if( horodatage ){
		if( !date_mise_enligne || date_mise_enligne == 0 ){
			var date_mise_enligne = "";
			this.differe = false;
		}else{
			this.differe = true;
		}
		this.Content.appendChild( H(2,Langs["DelayedPublication"]) );
		//Checkboxes horodate ou pas
		var tableau_choix = new Tableau(4);
			tableau_choix.Content.id = "ChoixTypeDateMiseEnLigne";
			
			//Choix immediat ou differe
			var immediat = Checkbox();
				immediat.onclick = function(obj){
					return function(){
						var Checked = this.checked;
						this.checked = Checked;
						differe.checked = !Checked;
						obj.differe = !this.checked;
						if( Checked ){ date_miseenligne.Content.style.display = "none"; }
						else{ date_miseenligne.Content.style.display = "block"; }
					}
				}(this)
			tableau_choix.Add( immediat );
			tableau_choix.Add( Text("immédiat") );
			var differe = Checkbox();
				differe.onclick = function(obj){
					return function(){
						var Checked = this.checked;
						this.checked = Checked;
						immediat.checked = !Checked;
						obj.differe = this.checked;
						if( Checked ){ date_miseenligne.Content.style.display = "block"; }
						else{ date_miseenligne.Content.style.display = "none"; }
						
					}
				}(this)
			tableau_choix.Add( differe );
			tableau_choix.Add( Text("différé") );
			////////////////////////////////////////
				differe.checked = false;
				immediat.checked = true;
			///////////////////////////////////////
			
		this.Content.appendChild(tableau_choix.Content);
		
		this.date_miseenligne = new Calendar( date_mise_enligne );
		var date_miseenligne = this.date_miseenligne;
			this.date_miseenligne.Content.style.display = "none";
		this.Content.appendChild(this.date_miseenligne.Content);
		if( this.differe ){
			immediat.checked = false;
			differe.checked = true;
			differe.onclick();
		}
	}
	/////////////////ACTIONS/////////////////////////////////////
	this.Content.appendChild( H(2,Langs["Actions"]) );
	var tableau_actions = new Tableau(2);
		this.enregistrer = LinkSpan("enregistrer");
			this.enregistrer.fermer = false;
			this.enregistrer.onclick = parent.Send;
			tableau_actions.Add(this.enregistrer);
		this.enregistrerfermer = LinkSpan("enregistrerfermer");
			this.enregistrerfermer.fermer = true;
			this.enregistrerfermer.onclick = parent.Send;
			tableau_actions.Add(this.enregistrerfermer);
	this.Content.appendChild(tableau_actions.Content);
	
}
function KeyWords( liste_selected ){
				
	
	/* cree le champ */
	this.Content = Div("keywords");
		var conteneur = this.Content;
		var tableau_conteneur = new Tableau(2);
		this.Content.appendChild( tableau_conteneur.Content );
	var parent = this;
	this.Field = new FieldRecherchePreview("searchkeywords");
	var field = this.Field.Content;
		tableau_conteneur.Add( this.Field.Content );
		
		
	//LISTE DES MOTS CLEFS
	this.value = new String();
	var value_container = this.value;
	
	if( liste_selected ){
		
		var Keywords = new Array();
		for( var i in liste_selected ){
			liste_selected[i]["preview"] = "<a href='" + liste_selected[i]['url'] + "' target='_blank'><img src='" + liste_selected[i]['thumb'] + "' ><h1>" + liste_selected[i]['value'] + "</h1></a><div class='clearleft' />";
			Keywords.push(liste_selected[i]);
		}
		
	}else{ var Keywords = new Array(); }
	
	
	var PrintKeywords = Div("liste_keywords");
		this.Content.appendChild( PrintKeywords );
	
	
	var PrintPreviewElements = Div("preview_element");
		document.body.appendChild( PrintPreviewElements );
		PrintPreviewElements.style.display = "none";
	
	//LISTE DES RESULTATS
	var Liste = Div();
	Liste.id = "ListeKeywords";
	
	
	var Timer = 0;
	var TimerPreview = 0;
	
	var opened = false;
	var previewopened = false;
	
	function RefreshKeywords(){
		var liens = new Array();
		for( var i in Keywords ){
			
			if( Keywords[i]["keyword"] == "false" ){
				var lien = Link( Span( Keywords[i]["texte"] ) );
					lien.className = 'link';
					lien.index = i ;
					PrintKeywords.appendChild( lien );
					
						lien.preview = Keywords[i]["preview"];
					
						lien.onmouseover = function(){
							if( previewopened ){
								RemoveAllChilds( PrintPreviewElements,0 );
								PrintPreviewElements.style.display = "none";
								previewopened = false;
							}
							
							PrintPreviewElements.innerHTML = this.preview;
							var pos = findPos(this);
							
							/* STYLE DE LA LISTE */
							PrintPreviewElements.style.display = "block";
							PrintPreviewElements.style.position = "absolute";
							PrintPreviewElements.style.top = ( pos.y+ this.offsetHeight + 1 )+"px" ;
							PrintPreviewElements.style.left = pos.x+"px";
							
							previewopened = true;
							
						}
						lien.onmouseout = function(){
							/* Affiche les résultat après 1 seconde */
							clearTimeout( TimerPreview );
							
							TimerPreview = setTimeout( function(){
																AlphaFade( -5 , PrintPreviewElements , false);
																previewopened = false;
																},2000 );

						}
						lien.onclick = function(){
							Keywords.splice(this.index,1);
							RemoveAllChilds( PrintKeywords , 0 );
							parent.value = "";
							//Init field
							field.value = "";
							field.cid = "";
							field.thumb = "";
							field.url = "";
							field.preview = "";
							field.keyword = "true";
							RefreshKeywords();
						}
				///Lien du mot clef liaison
				//affichage preview si nouveau
				if( field.cid ){
					
					if( field.cid == Keywords[i]["CID"] ){
						
						lien.onmouseover();
						/* Affiche les résultat après 1 seconde */
						clearTimeout( TimerPreview );
						
						TimerPreview = setTimeout( function(){
															AlphaFade( -5 , PrintPreviewElements , false);
															previewopened = false;
															},2000 );
	
	
					}
				}
				
				parent.value += "@"+Keywords[i]["CID"]+";";
				
			}else{
				var lien = Link( Span( Keywords[i]["texte"] ) );
					lien.className = 'keyword';
					lien.index = i;
					PrintKeywords.appendChild( lien );
					
					lien.onclick = function(){
						Keywords.splice(this.index,1);
						RemoveAllChilds( PrintKeywords , 0 );
						parent.value = "";
						//Init field
						field.value = "";
						field.cid = "";
						field.thumb = "";
						field.url = "";
						field.preview = "";
						field.keyword = "true";
						RefreshKeywords();
					}
				
				parent.value += Keywords[i]["texte"]+";";
				previewopened = false;
			}
		}
	}
	
	RefreshKeywords();
	
	
	var add = LinkSpan("add");
		add.onclick = function(){
				clearTimeout( Timer );
				if( opened ){
				/* Vire tout ce qu'il y a dans le div liste */
				RemoveAllChilds( Liste,0 );
				document.body.removeChild(Liste);
				opened = false;
				}
				if( previewopened ){
				/* Vire tout ce qu'il y a dans le div liste */
				AlphaFade( -5 , PrintPreviewElements);
				previewopened = false;
				}

				var preview = "<a href='" + field.url + "' target='_blank'><img src='" + field.thumb + "' /><h1>" + field.value + "</h1></a><div class='clearleft' />";
				Keywords.push( {texte:field.value,CID:field.cid,thumb:field.thumb,keyword:field.keyword,preview:preview} );
				RemoveAllChilds( PrintKeywords , 0 );
				
				parent.value = "";
				RefreshKeywords();
				//Init field
				field.value = "";
				field.cid = "";
				field.thumb = "";
				field.preview = "";
				field.url = "";
				field.keyword = "true";
		}
		
	tableau_conteneur.Add( add );
	
	
}
function IfYouLike( liste_selected ){
				
	
	/* cree le champ */
	this.Content = Div("ifyoulike");
		var conteneur = this.Content;
		var tableau_conteneur = new Tableau(2);
		this.Content.appendChild( tableau_conteneur.Content );
	var parent = this;
	this.Field = new FieldRecherchePreview("searchlike");
	var field = this.Field.Content;
		tableau_conteneur.Add( this.Field.Content );
		
		
	//LISTE DES MOTS CLEFS
	this.value = new String();
	var value_container = this.value;
	
	if( liste_selected ){
		
		var Keywords = new Array();
		for( var i in liste_selected ){
			liste_selected[i]["preview"] = "<a href='" + liste_selected[i]['url'] + "' target='_blank'><img src='" + liste_selected[i]['thumb'] + "' ><h1>" + liste_selected[i]['value'] + "</h1></a><div class='clearleft' />";
			Keywords.push(liste_selected[i]);
		}
		
	}else{ var Keywords = new Array(); }
	
	
	var PrintKeywords = Div("liste_keywords");
		this.Content.appendChild( PrintKeywords );
	
	
	var PrintPreviewElements = Div("preview_element");
		document.body.appendChild( PrintPreviewElements );
		PrintPreviewElements.style.display = "none";
	
	//LISTE DES RESULTATS
	var Liste = Div();
	Liste.id = "ListeKeywords";
	
	
	var Timer = 0;
	var TimerPreview = 0;
	
	var opened = false;
	var previewopened = false;
	
	
	removelike = function( i ){
		Keywords.splice(i,1);
		RemoveAllChilds( PrintKeywords , 0 );
		parent.value = "";
		//Init field
		field.value = "";
		field.cid = "";
		field.thumb = "";
		field.url = "";
		field.preview = "";
		field.keyword = "true";
		RefreshKeywords();
	}
	function RefreshKeywords(){
		var liens = new Array();
		for( var i in Keywords ){
			var container = Div();
				container.className = "jeu";
				PrintKeywords.appendChild( container );
				
				container.innerHTML = "<a href='" + Keywords[i]['url'] + "' target='_blank'><img src='"+Keywords[i]["thumb"]+"' /><span>"+Keywords[i]["texte"]+"</span><br /><a href='javascript:removelike("+i+")'>remove</a></a>";
				
				parent.value += "@"+Keywords[i]["CID"]+";";
				
		}
	}
	
	RefreshKeywords();
	
	
	var add = LinkSpan("add");
		add.onclick = function(){
				clearTimeout( Timer );
				if( opened ){
				/* Vire tout ce qu'il y a dans le div liste */
				RemoveAllChilds( Liste,0 );
				document.body.removeChild(Liste);
				opened = false;
				}
				if( previewopened ){
				/* Vire tout ce qu'il y a dans le div liste */
				AlphaFade( -5 , PrintPreviewElements);
				previewopened = false;
				}

				var preview = "<a href='" + field.url + "' target='_blank'><img src='" + field.thumb + "' /><h1>" + field.value + "</h1></a><div class='clearleft' />";
				Keywords.push( {texte:field.value,CID:field.cid,thumb:field.thumb,keyword:field.keyword,url:field.url} );
				RemoveAllChilds( PrintKeywords , 0 );
				
				parent.value = "";
				RefreshKeywords();
				//Init field
				field.value = "";
				field.cid = "";
				field.thumb = "";
				field.preview = "";
				field.url = "";
				field.keyword = "true";
		}
		
	tableau_conteneur.Add( add );
	
	
}
function KeyWordsANCIEN( liste_selected ){
				
	
	/* cree le champ */
	this.Content = Div("keywords");
		var conteneur = this.Content;
		var tableau_conteneur = new Tableau(2);
		this.Content.appendChild( tableau_conteneur.Content );
	var parent = this;
	this.Field = Field();
	var field = this.Field;
		tableau_conteneur.Add( this.Field );
		
		
	//LISTE DES MOTS CLEFS
	this.value = new String();
	var value_container = this.value;
	
	if( liste_selected ){
		
		var Keywords = new Array();
		for( var i in liste_selected ){
liste_selected[i]["preview"] = "<a href='" + liste_selected[i]['url'] + "' target='_blank'>" + liste_selected[i]['thumb'] + "<h1>" + liste_selected[i]['value'] + "</h1></a><div class='clearleft' />";
		Keywords.push(liste_selected[i]);
		}
		
	}else{ var Keywords = new Array(); }
	
	
	var PrintKeywords = Div("liste_keywords");
		this.Content.appendChild( PrintKeywords );
	
	
	var PrintPreviewElements = Div("preview_element");
		document.body.appendChild( PrintPreviewElements );
		PrintPreviewElements.style.display = "none";
	
	//LISTE DES RESULTATS
	var Liste = Div();
	Liste.id = "ListeKeywords";
	
	
	var Timer = 0;
	var TimerPreview = 0;
	
	var opened = false;
	var previewopened = false;
	
	function RefreshKeywords(){
		var liens = new Array();
		for( var i in Keywords ){
			
			if( Keywords[i]["keyword"] == "false" ){
				var lien = Link( Span( Keywords[i]["texte"] ) );
					lien.className = 'link';
					lien.index = i ;
					PrintKeywords.appendChild( lien );
					
						lien.preview = Keywords[i]["preview"];
					
						lien.onmouseover = function(){
							if( previewopened ){
								RemoveAllChilds( PrintPreviewElements,0 );
								PrintPreviewElements.style.display = "none";
								previewopened = false;
							}
							
							PrintPreviewElements.innerHTML = this.preview;
							var pos = findPos(this);
							
							/* STYLE DE LA LISTE */
							PrintPreviewElements.style.display = "block";
							PrintPreviewElements.style.position = "absolute";
							PrintPreviewElements.style.top = ( pos.y+ this.offsetHeight + 1 )+"px" ;
							PrintPreviewElements.style.left = pos.x+"px";
							
							previewopened = true;
							
						}
						lien.onmouseout = function(){
							/* Affiche les résultat après 1 seconde */
							clearTimeout( TimerPreview );
							
							TimerPreview = setTimeout( function(){
																AlphaFade( -5 , PrintPreviewElements , false);
																previewopened = false;
																},2000 );

						}
						lien.onclick = function(){
							Keywords.splice(this.index,1);
							RemoveAllChilds( PrintKeywords , 0 );
							parent.value = "";
							//Init field
							field.value = "";
							field.cid = "";
							field.thumb = "";
							field.url = "";
							field.preview = "";
							field.keyword = "true";
							RefreshKeywords();
						}
				///Lien du mot clef liaison
				//affichage preview si nouveau
				if( field.cid ){
					
					if( field.cid == Keywords[i]["CID"] ){
						
						lien.onmouseover();
						/* Affiche les résultat après 1 seconde */
						clearTimeout( TimerPreview );
						
						TimerPreview = setTimeout( function(){
															AlphaFade( -5 , PrintPreviewElements , false);
															previewopened = false;
															},2000 );
	
	
					}
				}
				
				parent.value += "@"+Keywords[i]["CID"]+";";
				
			}else{
				var lien = Link( Span( Keywords[i]["texte"] ) );
					lien.className = 'keyword';
					lien.index = i;
					PrintKeywords.appendChild( lien );
					
					lien.onclick = function(){
						Keywords.splice(this.index,1);
						RemoveAllChilds( PrintKeywords , 0 );
						parent.value = "";
						//Init field
						field.value = "";
						field.cid = "";
						field.thumb = "";
						field.url = "";
						field.preview = "";
						field.keyword = "true";
						RefreshKeywords();
					}
				
				parent.value += Keywords[i]["texte"]+";";
				previewopened = false;
			}
		}
	}
	
	RefreshKeywords();
	
	
	var add = LinkSpan("add");
		add.onclick = function(){
				clearTimeout( Timer );
				if( opened ){
				/* Vire tout ce qu'il y a dans le div liste */
				RemoveAllChilds( Liste,0 );
				document.body.removeChild(Liste);
				opened = false;
				}
				if( previewopened ){
				/* Vire tout ce qu'il y a dans le div liste */
				AlphaFade( -5 , PrintPreviewElements);
				previewopened = false;
				}

				var preview = "<a href='" + field.url + "' target='_blank'>" + field.thumb + "<h1>" + field.value + "</h1></a><div class='clearleft' />";
				Keywords.push( {texte:field.value,CID:field.cid,thumb:field.thumb,keyword:field.keyword,preview:preview} );
				RemoveAllChilds( PrintKeywords , 0 );
				
				parent.value = "";
				RefreshKeywords();
				//Init field
				field.value = "";
				field.cid = "";
				field.thumb = "";
				field.preview = "";
				field.url = "";
				field.keyword = "true";
		}
		
	tableau_conteneur.Add( add );
	
	this.Field.onkeypress = function( parent ){
		return function(){
			if( opened ){
			/* Vire tout ce qu'il y a dans le div liste */
			RemoveAllChilds( Liste,0 );
			document.body.removeChild(Liste);
			opened = false;
			}
			if( previewopened ){
			/* Vire tout ce qu'il y a dans le div liste */
			AlphaFade( -5 , PrintPreviewElements);
			previewopened = false;
			}
			
			/* Affiche les résultat après 1 seconde */
			clearTimeout( TimerPreview );
			clearTimeout( Timer );
			
			Timer = setTimeout( parent.recherche,1000 );
		}
	}(this)
	
	//RECHERCHE
	this.recherche = function(obj){
		

		
			/* Envoi la requete*/
				var RequeteRecherche = ObjXMLHttpRequest();
				RequeteRecherche.SendRequest( "searchkeywords" ,false,"&texte=" + encodeURIComponent( field.value ) );
				//udocument.body.removeChild(Liste);
				
				if ( RequeteRecherche.responseText != "error" && RequeteRecherche.responseText != "[]" ) {
					/*créé le div des mots trouvé*/
					var liste= eval('('+RequeteRecherche.responseText+')');
					var divitem = "" ;
					RemoveAllChilds( Liste,0 );
					
						for( var i in liste ){
							Liste.appendChild( H( 1 , i ) );
							for( var j in liste[i] ){
								
								var divitem = DivSelect();
								divitem.innerHTML = liste[i][j]["thumb"] + liste[i][j]["texte"];
								
								divitem.texte = liste[i][j]["texte"];
								divitem.cid = liste[i][j]["CID"];
								divitem.thumb = liste[i][j]["thumb"];
								divitem.keyword = liste[i][j]["keyword"];
								divitem.url = liste[i][j]["url"];
								
								divitem.onmousedown = function(){
									return function(){
										//Vire la liste
										RemoveAllChilds( Liste,0 );
										document.body.removeChild(Liste);
										document.onmouseup = function(){ return false; };
										opened = false;
										
										//Ajout au champ texte
										field.value = this.texte;
										field.cid = this.cid;
										field.thumb = this.thumb;
										field.url = this.url;
										field.keyword = this.keyword;
										
									}
								}(this)
								
								Liste.appendChild( divitem );
							}
						}
					//REFERMER LA LISTE
					document.onmouseup = function(){
						document.body.removeChild(Liste);
						document.onmouseup = function(){ return false; };
					}

					/*Ajoute le div dans le body*/
						document.body.appendChild(Liste);
						var pos = findPos(field);
						
						/* STYLE DE LA LISTE */
						Liste.style.position = "absolute";
						Liste.style.top = ( pos.y+ field.offsetHeight + 1 )+"px" ;
						Liste.style.left = pos.x+"px";
						Liste.style.minWidth = field.offsetWidth+"px";
						
						opened = true;
				}else{
					opened = false;
				}
	}
	
}

/* DOUBLE DOUBLE DOUBLE SELECT */
function DoubleSelectPassif(completelist,elementsselected,nom){
	this.Content = document.createElement('div');
	this.Content.className = "DoubleSelect";

	this.Infos = new Tableau(3);
	
	/*si elements selectionnees undefined...*/
	if( !elementsselected ){
	elementsselected = new Object();
	}
	
	/* Les 2 boites de selection */
	this.InBox = document.createElement('select');
		this.InBox.setAttribute("multiple","multiple");
		this.InBox.name = nom;
		this.InBox.id = nom;
	this.OutBox = document.createElement('select');
		this.OutBox.setAttribute("multiple","multiple");
	
	/*Les boutons pour envoyer de droite à gauche */
	var boutons = new Tableau(1);
	
	var boutonToIn = LinkSpan("<");
	var boutonToOut = LinkSpan(">");
	
	boutons.Add( boutonToIn );
	boutons.Add( boutonToOut );
	
	this.Infos.Add(this.InBox);
	this.Infos.Add(boutons.Content);
	this.Infos.Add(this.OutBox);
	this.Content.appendChild(this.Infos.Content);
	
	if( typeof(completelist) == "string" ){
		var Requete = new ObjXMLHttpRequest();
		Requete.SendRequest( completelist , false , "" );
		if( Requete.responseText != "error" ){
			var completelist = eval('('+Requete.responseText+')');
		}else{
			var completelist = [];
		}
	}

	for( var i = 0 ; i < completelist.length ; i++ ){
		var selected = false;
		for( var j = 0 ; j < elementsselected.length ; j++ ){
			if( elementsselected[j]['id'] == completelist[i]['id'] ){
				selected = true;
			}
		}
		if( selected ){
			var option = document.createElement('option');
				option.setAttribute("value",completelist[i]['id']);
				option.appendChild( Text ( completelist[i]['nom'] ) );
			this.InBox.appendChild(option);
		}else{
			var option = document.createElement('option');
				option.setAttribute("value",completelist[i]['id']);
				option.appendChild( Text ( completelist[i]['nom'] ) );
			this.OutBox.appendChild(option);
		}
	}
	
		boutonToIn.onclick = function(obj) {
			return function(){
				var Options = obj.OutBox.options;
				/* parcours la liste des options pour voir si elles sont selected, et les envoi dans l'autre boite */
				for( var i = 0 ; i < Options.length ; i++ ){
					if( Options[i].selected ){
						obj.InBox.appendChild( Options[i] );
						/* quand on enleve un element, le prochain le remplace donc il faut pas passer au suivant */
						i--;
					}
				}
			}
		}(this)
		
		boutonToOut.onclick = function(obj) {
			return function(){
				var Options = obj.InBox.options;
				/* parcours la liste des options pour voir si elles sont selected, et les envoi dans l'autre boite */
				for( var i = 0 ; i < Options.length ; i++ ){
					if( Options[i].selected ){
						obj.OutBox.appendChild( Options[i] );
						/* quand on enleve un element, le prochain le remplace donc il faut pas passer au suivant */
						i--;
					}
				}
			}
		}(this)
	
}
function SelectColor(){
	///////////////////////COLOR/////////////////////////
	var selecter = document.createElement("select");
	var colors = new Array("#000000","#8b0000","#ff0000","#ffa500","#a52a2a","#ffff00","#008000","#808000","#00ffff","#3399ff","#00008b","#4b0082","#ee82ee","#ffffff");
	
	for( var i = 0 ; i < colors.length ; i++ ){
		var option = document.createElement("option");
		option.style.backgroundColor = colors[i];
		option.value = colors[i];
		selecter.appendChild(option);
	}

	return selecter;
	
}
function SubmitButton(value){
	var bouton = document.createElement("input");
	bouton.setAttribute("type" , "button");
	bouton.setAttribute("value" , value);
	return bouton;
}
function Loading(){
	this.Content = document.createElement("div");
	this.text = document.createElement("span");
	this.Content.appendChild(this.text);
}

function Tableau(NumOfColumns,VAlign,Align){
	this.NumOfColumns = NumOfColumns;
	if( VAlign ){
	this.VAlign = VAlign;
	}
	this.Content = document.createElement('table');
	this.Tbody = document.createElement('tbody');
	if( Align ){
	this.Content.align = Align;
	}
	this.Content.appendChild(this.Tbody);
	this.Col = 1;
	/* fonction d'ajout de contenu au tableau */
	this.Add = function( element , width , classe , colspan ){
		/* si on s'apprete à ajouter un element en debut de ligne, on créé celle ci */
		if( this.Col == 1 ){

			var tr = document.createElement('tr'); this.Tbody.appendChild(tr);
		}
		/*création de la cellule, avec le contenu à l'interieur */
		var td = document.createElement('td');
		if( this.VAlign ){
			td.setAttribute("valign",this.VAlign);	
		}
		if( width ){
			td.setAttribute("width" , width );
		}
		if( colspan ){
			
			td.setAttribute("colspan" , colspan );
		}
		if( classe ){
			td.className = classe;
		}else{
			td.className = "Col"+this.Col;
		}
		
		if( element ){
			if( typeof(element) == "object" ){
				td.appendChild(element);
			}else if( typeof(element) == "string" ){
				td.appendChild(Text(element));
			}
		}
		this.Tbody.lastChild.appendChild(td);
		/* si le nombre de colonnes est null on fait qu'une ligne*/
		if( this.NumOfColumns != null ){
		/*si on arrive à la fin de la ligne, la prochaine cellule sera dans une nouvelle ligne */
			if( this.Col == this.NumOfColumns ){
				this.Col = 1;
			}else{
				if( colspan ){
				this.Col += colspan;
				}else{
				this.Col++;
				}
			}
		}else{
			if( colspan ){
			this.Col += colspan;
			}else{
			this.Col++;
			}
		}
		
		return td;
		
	}
	this.AddTh = function( element , width , classe , colspan ){
		/* si on s'apprete à ajouter un element en debut de ligne, on créé celle ci */
		if( this.Col == 1 ){

			var tr = document.createElement('tr'); this.Tbody.appendChild(tr);
		}
		/*création de la cellule, avec le contenu à l'interieur */
		var th = document.createElement('th');
		if( this.VAlign ){
			th.setAttribute("valign",this.VAlign);	
		}
		if( width ){
			th.setAttribute("width" , width );
		}
		if( colspan ){
			th.setAttribute("colspan" , colspan );
		}
		if( classe ){
			th.className = classe;
		}else{
			th.className = "Col"+this.Col;
		}
		
		if( element ){
			if( typeof(element) == "object" ){
				th.appendChild(element);
			}else if( typeof(element) == "string" ){
				th.appendChild(Text(element));
			}
		}
		this.Tbody.lastChild.appendChild(th);
		/* si le nombre de colonnes est null on fait qu'une ligne*/
		if( this.NumOfColumns != null ){
		/*si on arrive à la fin de la ligne, la prochaine cellule sera dans une nouvelle ligne */
			if( this.Col == this.NumOfColumns ){
				this.Col = 1;
			}else{
				this.Col++;
			}
		}else{
			this.Col++;
		}
		
	}
	this.changeTbody = function(){
		this.Col = 1;
		this.Tbody = document.createElement('tbody');
		this.Content.appendChild(this.Tbody);
	}
	this.Clear = function(){
		RemoveAllChilds( this.Tbody );
	}
}
Tableau.prototype.VTransforme = function(){};




function RemoveAllChilds(target,decalage){
	if( !decalage ){ decalage = 0 ; }
	if(target != undefined){
		while(target.childNodes.length>=(decalage+1)){
		target.removeChild(target.childNodes[decalage]);
		}
	}
}
function TextEditable( text , elementButton ){
	this.Content = Div();
	this.Text = text;
	
	this.Infos = new Tableau(3);
	
	this.Field = Text( text );
	
	if( elementButton ){
		this.Modif = elementButton;
	}else{
		this.Modif = SubmitButton("modifier");
	}
	
	this.Infos.Add( this.Modif );
	this.Infos.Add( this.Field );
	this.Content.appendChild(this.Infos.Content);
	this.Action = new Function();
	
	this.Modif.onclick = function(obj){
		return function(){
			
			//Récupere le parent
			var parent = obj.Field.parentNode;
			//Si le texte est en dur, transformation en Input//
			if( obj.Field.nodeName == "#text" ){
				var value = obj.Field.nodeValue;
				//Supprime le texte ou le champ
				parent.removeChild( obj.Field );
				//Créé un champ avec la meme valeur que le texte
				obj.Field = Field('element');
				obj.Field.value = value;
				//met le champ dans le parent
				parent.appendChild( obj.Field );
			}else if( obj.Field.nodeName == "INPUT" ){
				/* S'IL SE REMET EN ECRITURE NORMAL IL LANCE L'ACTION */
				obj.Action();
				var value = obj.Field.value;
				//Supprime le texte ou le champ
				parent.removeChild( obj.Field );
				//Créé un text avec la meme valeur que le champ
				obj.Field = Text( value );
				//met le texte dans le parent
				parent.appendChild( obj.Field );
			}else{
				alert("problem TextEditable");	
			}
		}
	}(this)
}


Date.prototype.dateToFrench = function(dateSelected){
	var MonthList = new Array("janvier", "f\351vrier", "mars", "avril", "mai", "juin", "juillet", "ao\373t", "septembre", "octobre", "novembre", "d\351cembre");
	var DayList = new Array("Dim","Lun", "Mar", "Mer", "Jeu", "Ven", "Sam");
	
	var annee = this.getFullYear();
	var mois = MonthList[ this.getMonth() ];
	var jour = this.getDate();
	var jourdelasemaine = DayList[ this.getDay() ];
		
	return jourdelasemaine + " " + jour + " " + mois + " " + annee ;
	
}
/* Quand on tape sur entrer dans un champ pâr ex */
function Enter(ev){
	keycode=null;
	if (window.event){
		keycode = window.event.keyCode;
	}else if (ev){
		keycode = ev.which;
	}
	if (keycode==13){
	return true;
	}
}
function ucwords( str ) {
    return str.replace(/^(.)|\s(.)/g, function ( $1 ) { return $1.toUpperCase ( ); } );
}
/* Desactiver tous les elements d'un container */
function Desactive( Container , Bool ){
	var liste = new Array( Container.getElementsByTagName('input') , Container.getElementsByTagName('textarea') , Container.getElementsByTagName('select') , Container.getElementsByTagName('iframe') );

	for( var i = 0 ; i < liste.length ; i++ ){
		for( var j = 0 ; j < liste[i].length ; j++ ){
			liste[i][j].disabled = Bool;
		}
	}
}
/* Champs de date */
function FieldsDate( id , TimeStamp , heure , horloge ){
	/*Héritage du Tableau*/
	this.Content = Div(id);
	if( !TimeStamp || TimeStamp == 0 ){
		var timestamp = new Date();
		this.Content.TimeStampPHP = timestamp.getTime()/1000;
		this.Content.TimeStamp = timestamp.getTime();
	}else{
		this.Content.TimeStampPHP = TimeStamp;
		this.Content.TimeStamp = TimeStamp*1000;
	}
	
	this.DateValue = new Date( this.Content.TimeStamp );
	
	
	this.MonthList = new Array(
								Langs["January"],
								Langs["February"],
								Langs["March"],
								Langs["April"],
								Langs["May"],
								Langs["June"],
								Langs["July"],
								Langs["August"],
								Langs["September"],
								Langs["October"],
								Langs["November"],
								Langs["December"]
								);
	
	this.DayList = new Array(
								Langs["Sunday"],
								Langs["Monday"],
								Langs["Tuesday"],
								Langs["Wednesday"],
								Langs["Thursday"],
								Langs["Friday"],
								Langs["Saturday"]
							);
	this.NumOfDays= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	
	
	this.Today = new Date();
	this.YearsArray = new Array();
	this.DaysArray = new Array();
	for( var annee = this.Today.getFullYear() + 5 ; annee >= this.Today.getFullYear() - 100 ; annee-- ){
		this.YearsArray[annee] = annee ;
	}
	
	
		if ( this.DateValue.getFullYear()%4 == 0 && this.DateValue.getFullYear()%100 > 0 || this.DateValue.getFullYear()%400 == 0 ){
			this.NumOfDays[1]=29;
		}else{
			this.NumOfDays[1]=28;
		}
		this.Year = Select( this.YearsArray , "year" , this.DateValue.getFullYear() , false );
		
		this.Month = Select( this.MonthList , "month" , this.DateValue.getMonth() , false );
		
		this.ConstructDays = function(){
			this.DaysArray = new Array();
			for( var day = 1 ; day <= this.NumOfDays[ this.DateValue.getMonth() ] ; day++ ){
				this.DaysArray[day] = day;
			}
		}
		this.ConstructDays();
		
		this.Day = Select( this.DaysArray , "day" , this.DateValue.getDate() , false );
		//
		this.Content.appendChild( this.Day );
		this.Content.appendChild( this.Month );
		this.Content.appendChild( this.Year );
		
		this.Month.onchange = function(obj){
			return function(){
				obj.DateValue.setMonth( this.value );
				obj.Content.TimeStamp = obj.DateValue.getTime();
				obj.Content.TimeStampPHP = obj.DateValue.getTime() / 1000;
				obj.ConstructDays();
				obj.Day.Construct( obj.DaysArray , obj.DateValue.getDate() );
			}
		}(this)
		
		this.Year.onchange = function(obj){
			return function(){
				obj.DateValue.setYear( this.value );
				obj.Content.TimeStamp = obj.DateValue.getTime();
				obj.Content.TimeStampPHP = obj.DateValue.getTime() / 1000;
			}
		}(this)
		this.Day.onchange = function(obj){
			return function(){
				obj.DateValue.setDate( this.value );
				obj.Content.TimeStamp = obj.DateValue.getTime();
				obj.Content.TimeStampPHP = obj.DateValue.getTime() / 1000;
			}
		}(this)
		
		if( heure ){
			
			/*Heures*/
			this.Hour = Field("hour");
			this.Hour.onchange = function(obj){
				return function(){
					obj.DateValue.setHours( this.value );
					obj.Content.TimeStamp = obj.DateValue.getTime();
					obj.Content.TimeStampPHP = obj.DateValue.getTime() / 1000;
				}
			}(this)
			if( this.DateValue.getHours() < 10 ){
				this.Hour.value = "0"+this.DateValue.getHours();
			}else{
				this.Hour.value = this.DateValue.getHours();
			}
				this.Hour.maxlength = 2 ;
				this.Hour.style.width = "20px" ;
				this.Hour.style.textAlign = "center" ;
				
				
			/*Minutes*/
			this.Minutes = Field("minutes");
			this.Minutes.onchange = function(obj){
				return function(){
					obj.DateValue.setMinutes( this.value );
					obj.Content.TimeStamp = obj.DateValue.getTime();
					obj.Content.TimeStampPHP = obj.DateValue.getTime() / 1000;
				}
			}(this)
			if( this.DateValue.getMinutes() < 10 ){
				this.Minutes.value = "0"+this.DateValue.getMinutes();
			}else{
				this.Minutes.value = this.DateValue.getMinutes();
			}
				this.Minutes.maxlength = 2 ;
				this.Minutes.style.width = "20px" ;
				this.Minutes.style.textAlign = "center" ;
				
			
			this.Content.appendChild( Text(" \340 ") );
			this.Content.appendChild( this.Hour );
			this.Content.appendChild( Text(":") );
			this.Content.appendChild( this.Minutes );
		}
}
function Calendar( date ){
	if( !date ){
		this.date = new Date();
	}else{
		this.date = new Date( parseInt(date) * 1000 );
	}
	
	this.Content = Div("Calendar");
		var month_bar = new Tableau(3);
			month_bar.Content.id = "Months";
			this.Content.appendChild( month_bar.Content );
		var days_table = new Tableau(7);
			days_table.Content.id = "Days";
			this.Content.appendChild( days_table.Content );
		var times_table = new Tableau(2);
			times_table.Content.id = "Times";
			this.Content.appendChild( times_table.Content );
	
	var MonthList = new Array(
								Langs["January"],
								Langs["February"],
								Langs["March"],
								Langs["April"],
								Langs["May"],
								Langs["June"],
								Langs["July"],
								Langs["August"],
								Langs["September"],
								Langs["October"],
								Langs["November"],
								Langs["December"]
								);
	
	var DayList = new Array(
								Langs["Sunday"].substr(0,3),
								Langs["Monday"].substr(0,3),
								Langs["Tuesday"].substr(0,3),
								Langs["Wednesday"].substr(0,3),
								Langs["Thursday"].substr(0,3),
								Langs["Friday"].substr(0,3),
								Langs["Saturday"].substr(0,3)
							);
	var NumOfDays= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	
	
	
	
	
	this.CalculDate = function(){
		parent.TimeStampPHP = parent.date.getTime() / 1000;
		
		this.Year = this.date.getFullYear();
		this.Month = this.date.getMonth();
		this.Day = this.date.getDate();
		this.DayWord = this.date.getDay();
		this.Hours = this.date.getHours();
		this.Minutes = this.date.getMinutes();
		
		//date pour pour premier jour
		this.DateFirstDay = new Date( this.Year , this.Month , 1 , this.Hours , this.Minutes , 00 );
		
		
		// 28 ou 29 jours pour le mois de février ?
		if ( this.Year%4 == 0 && this.Year%100 > 0 || this.Year%400 == 0 ){
			NumOfDays[1]=29;
		}else{
			NumOfDays[1]=28;
		}
		
		///
	}
	this.Construct = function(){
		month_bar.Clear();
		var previous = LinkSpan( "«" , "previous_month" );
			previous.date = new Date( this.Year , this.Month-1 , this.Day , this.Hours , this.Minutes , 00 );
			previous.onclick = ChangeDate;
			month_bar.Add( previous );
		month_bar.Add( Span( MonthList[ this.Month ] + " " + this.Year, "selected_month" ) );
		var next = LinkSpan( "»" , "next_month" );
			next.date = new Date( this.Year , this.Month+1 , this.Day , this.Hours , this.Minutes , 00 );
			next.onclick = ChangeDate;
			month_bar.Add( next );
	}
	this.Construct_Days = function(){
		/////////////////////////////////////////////////////////////////
		//LISTE DES JOURS
		/////////////////////////////////////////////////////////////////
			days_table.Clear();
			//Noms de jours
			for( var i = 0 ; i <= 6 ; i++ ){
				days_table.Add( Span( DayList[ i ] , "day_name" ) );
			}
			//Premiers Jours vides
			var num_jours = NumOfDays[this.Month];
			for( var i = 0 ; i < this.DateFirstDay.getDay() ; i++ ){
				days_table.Add( null );
			}
			//Jours
			for( var j = 1 ; j <= num_jours ; j++ ){
				//pour les dernier jours vides
				if( this.Day == j ){
					days_table.Add( Span( j , "selected_day" ) );
				}else{
					var lien_jour = LinkSpan( j );
						lien_jour.date = new Date( this.Year , this.Month , j , this.Hours , this.Minutes , 00 );
						lien_jour.onclick = ChangeDate;
					days_table.Add( lien_jour );
				}
				if( i >= 6 ){ i = 0; }else{ i++; }
			}
			for( var i = i ; i <= 6 ; i++ ){
				days_table.Add( null );
			}

	}
	function ChangeDate(){
		parent.date = this.date;
		parent.CalculDate();
		parent.Construct();
		parent.Construct_Days();
	}
	
	var parent = this;
	this.CalculDate();
	this.Construct();
	this.Construct_Days();
	
		////////Heures
		var TimesList = new Array();
		var time_now = (this.date.getHours() * 60 + this.date.getMinutes() );
		for( var i = 0 ; i < 24 ; i++ ){
			for( var j = 0 ; j < 60 ; j=j+5 ){
				//Prépare tableau heures et minutes
				var heure = i; if( heure < 10 ) heure="0"+heure;
				var minute = j; if( minute < 10 ) minute="0"+minute;
				TimesList[heure +":"+ minute] = heure +":"+ minute ;
				
				//Prépare l'heure courant
				//Dès que l'heure listée est supérieure à celle courante alors elle est sélectionnée
				if( !time_selected && time_now <= ( j + 60 * i ) ){
					
					var time_selected = heure +":"+ minute;
					this.date = new Date( this.Year , this.Month , this.Day , heure , minute , 00 );
				}
			}
		}
		
		times_table.Add( Text("Time") );
		var Time = Select( TimesList , "" , time_selected);
			Time.onchange = function(obj){
				return function(){
					var reg = new RegExp("[:]+", "g");
					var tab_h_m = this.value.split(reg);

					parent.date = new Date( obj.Year , obj.Month , obj.Day , tab_h_m[0] , tab_h_m[1] , 00 );
					parent.CalculDate();
				}
			}(this)
		times_table.Add( Time );

		
}
function SelectTime(id,value){
	var hoursArray = new Array();
	for( var n = 0 ; n <= 24 ; n++ ){
		if( n < 10 ){
			hoursArray[ "0" + n ] = "0" + n;
		}else{
			hoursArray[ n ] = n;
		}
	}
	var minutesArray = new Array();
	for( var n = 0 ; n <= 55 ; n+=5 ){
		if( n < 10 ){
			minutesArray["0" + n] = "0" + n;
		}else{
			minutesArray[ n ] = n;
		}
	}
	if( value ){
		var tmp = value.split(":");
		var defaultHour = tmp[0];
		var defaultMin = tmp[1];
	}else{
		var defaultHour = "10";
		var defaultMin = "00";
	}
	
	var hours = Select( hoursArray , "" , defaultHour);
	var minutes = Select( minutesArray , "" , defaultMin);
	
	hours.onchange = function(){
		div.TimeStampPHP = hours.value +":"+ minutes.value ;
	}
	minutes.onchange = function(){
		div.TimeStampPHP = hours.value +":"+ minutes.value ;
	}
	var div = Div(id);
	div.TimeStampPHP = "";
	div.appendChild( hours );
	div.appendChild( Text(":") );
	div.appendChild( minutes );
	hours.onchange();
	
	return div;
}
var message_box = false;
function Message( title , text , operations , form , type ){
	
	function Window(){
		
		this.Content = document.createElement('table');
			this.Content.width = "100%";
			this.Content.height = "100%";
			this.Content.style.height = "100%";
			this.Content.style.width = "100%";
			this.Content.style.position = "fixed";
			this.Content.style.top = "0";
			this.Content.style.left = "0";
			this.Content.style.zIndex = "990";
			
		var tbody = document.createElement('tbody');
		var tr = document.createElement('tr');
		var td = document.createElement('td');
			td.align = "center";
			td.valign = "middle";
		this.Content.appendChild( tbody ); tbody.appendChild( tr ); tr.appendChild( td );
		
		
		var top = Div("Message_Top");
			
		var bottom = Div("Message_Bottom");
			
		this.Container = Div("Message_Container");
			td.appendChild( top );
			td.appendChild( this.Container );
			td.appendChild( bottom );
		
		this.displayMessage = function( title , text , operations , form , type ){
			
			var titre = H( 1 , Span( title ) );
			if( type == "important" ){
				titre.style.backgroundColor = "#c9421d";
			}
			var comments = document.createElement('p'); comments.innerHTML = text;
			
			var instance = this;
			var fermer = AlphaFade.bind(instance);
			
			this.Container.appendChild( titre );
			this.Container.appendChild( comments );
			
			//Formulaire
			if( form ){
				var formulaire = createElement("form");
				var tab_Form = new Tableau(1);
					tab_Form.Content.className = "formulaire";
				for( var i in form ){
					var composant = form[i]["composant"]( form[i]["nom"] );
					if( form[i]["value"] ){
						composant.value = form[i]["value"];
					}
					if( form[i]["texte"] ){
						var txt = Text( form[i]["texte"] );
						tab_Form.Add( txt );
					}
					tab_Form.Add( composant );
					
				}
				formulaire.appendChild(tab_Form.Content);
				this.Container.appendChild(formulaire);
			}
			
			///bouton ok, bouton annuler, les actions genre delete, etc.
			var inputs = this.Container.getElementsByTagName("input");
			
			if( inputs ){
				for( var i in inputs ){
					if( typeof(inputs[i]) == "object" ){
					if( inputs[i].type == "button" ){
						inputs[i].parentNode.removeChild( inputs[i] );
					}
					}
				}
			}
			for( var i in operations ){
				var button = Button( operations[i]["button"] );
				if( operations[i]["action"] ){
					button.action = operations[i]["action"];
				}
				if( operations[i]["arg"] ){
					button.arg = operations[i]["arg"];
				}
				button.onclick = function(){
					
					//RAZ la boite message pour dire qu'il n'y a pas de mess en cours
					message_box = false;
					
					if( this.action ){
						if( this.arg ){
							this.action(this.arg);
						}else if( form ){
							this.action( formulaire );
						}else{
							this.action();
						}
					}
					fermer();
				}
				this.Container.appendChild( button );
				
			}
			
		}
		this.displayMessage( title , text , operations , form , type );
	}
	
	if( message_box ){
		message_box.displayMessage( title , text , operations , form , type );
	}else{
		message_box = new Window();
		document.body.appendChild( message_box.Content );
	}
}
function AlphaFade( vitesse , object , suppression ){
	if( typeof( suppression ) == "undefined" ){var suppression = true }
	if( !vitesse ){ vitesse = -100; }
	if( !object ){ object = this };
	if( !object.Content ){ object.Content = object };
	if( !object.alpha){
		if(vitesse<0 || vitesse=="" || vitesse=="undefined") {
			
			object.alpha = 100;
		}
		if (vitesse>=0) {
			object.alpha = 0;
		}
	}
	
	var interval = setInterval(
					function(obj){
						return function(){
							object.alpha = object.alpha + vitesse;
							var alpha = object.alpha;
							if( alpha > 0 && alpha <= 100){
								Opacite( object.Content , alpha );
							}
							if (alpha >= 100) {
								clearInterval(interval);
							}
							else{
								if (vitesse<0 && alpha == 0) {
								object.Content.style.display = "none";
								if( suppression ){
									object.Content.parentNode.removeChild(object.Content);
									delete(object);
								}else{
									Opacite( object.Content , 100 );
								}
								clearInterval(interval);
								}
							}
						
						} 
					}(this),1);
}
function Opacite( element , alpha ){
		element.style.opacity = alpha / 100;
		//Test pour notre cher IE
		if (document.body.filters != undefined){
				element.style.filter = 'alpha(opacity:' + alpha + ')';
		}
}
function VerifEmail( email ){
	if( email.match(/^[a-zA-Z0-9\-_]+[a-zA-Z0-9\.\-_]*@[a-zA-Z0-9\-_]+\.[a-zA-Z\.\-_]{1,}[a-zA-Z\-_]+/) != null ){
		return true;
	}else{
		return false;
	}
}
function VerifPassword( password , password_confirmation){
	/* verifie si le password a au moins 6 caracteres*/
	if( password.length >= 6 ){
		/* si le mot de passe de confirmation est précisé*/
		if( password_confirmation ){
			/* si le mot de passe et le mot de passe de confirmation sont les mêmes */
			if( password == password_confirmation ){
				return true;
			}else{
				return Langs['PasswordConfirmationNotValid'];
			}
		}else{
			return true;
		}
	}else{
		return Langs['PasswordNotValid'];
	}
}
function ErrorMessage( text , Element ){
	this.Content = Div( "Message_Erreur" );
	this.Content.appendChild( Text( text ) );
	
	var pos = findPos(Element);
	/* STYLE DE LA LISTE */
	this.Content.style.backgroundColor = "#ffffff";
	this.Content.style.position = "absolute";
	this.Content.style.top = ( pos.y+ Element.offsetHeight + 1 )+"px" ;
	this.Content.style.left = pos.x+"px";
	this.Content.style.minWidth = Element.offsetWidth+"px";
	this.Content.style.zindex = "990";
}
function DebugMessage( text ){
	if( document.getElementById('MessageDebugger' ) == undefined ){
		this.Content = Div("MessageDebugger");
		document.body.appendChild(this.Content);
	}else{
		this.Content = document.getElementById('MessageDebugger' );
	}
	this.Content.innerHTML = text;
	
	/* STYLE DE LA LISTE */
	this.Content.style.backgroundColor = "#d94b06";
	this.Content.style.position = "absolute";
	this.Content.style.top = "0" ;
	this.Content.style.right = "0";
	this.Content.style.padding = "5px";
}
function getSelectedText( element ) {
	if (element.getSelection) {
		// This technique is the most likely to be standardized.
		// getSelection() returns a Selection object, which we do not document.
		return element.getSelection().toString();
	}
	else if (document.getSelection) {
		// This is an older, simpler technique that returns a string
		return element.document.getSelection();
	}
	else if (element.document.selection) {
		// This is the IE-specific technique.
		// We do not document the IE selection property or TextRange objects.
		return element.document.selection.createRange().text;
	}
}
function Boutons_Traitement( instance , container , alignement , taille ){
	
	instance.Traitement = function(obj){
		return function(){
			if( this.nodeName == "SELECT" ){ this.option = this.value; }
			if( !this.option ){ this.option = ''; }
			if (navigator.appName=="Microsoft Internet Explorer"){
			objet = obj.iframe;
			}
			if (navigator.appName!="Microsoft Internet Explorer"){
			objet = obj.iframe.contentWindow;
			}
			
			switch( this.action ){
				case "CreateLink" :
					if( document.getElementById('FlyingField') ){
						document.body.removeChild(document.getElementById('FlyingField'));
					}else{
						var field = Div();
						field.className = "FlyingField";
						field.id = "FlyingField";
						var pos = findPos( this );
						field.style.top = ( pos.y + this.offsetWidth )+"px";
						field.style.left = pos.x+"px";
						field.appendChild(H(2,'Indiquez l\'URL du lien'));
						field.appendChild(BR());
						var table_target = new Tableau(2);
							var target = Checkbox();
							table_target.Add( target );
							table_target.Add( Text(Langs['NewWindow']) );
						field.appendChild(table_target.Content);
						
						field.appendChild(BR());
						
						field.appendChild(Text('http://'));
						var adresse = Field('url');
						field.appendChild( adresse );
						var ok = Button("ok");
						
						
						ok.onclick = function(){
							
						if( target.checked ){
						objet.document.execCommand("insertHTML", false, "<a href=\""+encodeURIComponent(adresse.value)+"\" target=\"_blank\">"+getSelectedText(objet)+"</a>");
						}else{
						objet.document.execCommand("insertHTML", false, "<a href=\""+encodeURIComponent(adresse.value)+"\">"+getSelectedText(objet)+"</a>");
						}
							document.body.removeChild(this.parentNode);
						}
						field.appendChild(ok);
						document.body.appendChild(field);
					}
					break;
				case "Mailto" :
					if( document.getElementById('FlyingField') ){
						document.body.removeChild(document.getElementById('FlyingField'));
					}else{
						var field = Div();
						field.className = "FlyingField";
						field.id = "FlyingField";
						var pos = findPos( this );
						field.style.top = ( pos.y + this.offsetWidth )+"px";
						field.style.left = pos.x+"px";
						field.appendChild(H(2,'Indiquez l\'adresse email'));
						field.appendChild(BR());
						var adresse = Field('url');
						field.appendChild( adresse );
						var ok = Button("ok");
						
						ok.onclick = function(){
							if( VerifEmail( adresse.value ) ){
								objet.document.execCommand("CreateLink", false, "mailto:"+adresse.value);
								document.body.removeChild(this.parentNode);
							}else{
								Message( "Email problem !" , "It's not an email !",[{button:"ok",action:false}]);
							}
						}
						field.appendChild(ok);
						document.body.appendChild(field);
					}
					break;
				case "FloatLeft" :
					setFloat( "left" );
				break;
				case "insertImage" :
					if( this.option2 == "center" ){
					objet.document.execCommand("insertHTML", false, "<div style=\"text-align: center;\"><img src=\""+this.option+"\" /></div><br />");
					}else{
					objet.document.execCommand("insertHTML", false, "<img src=\""+this.option+"\" class=\"float"+this.option2+"\" />");
					}
				break;
				case "insertTable" :
					if( document.getElementById('FlyingField') ){
						document.body.removeChild(document.getElementById('FlyingField'));
					}else{
						var field = Div();
						field.className = "FlyingField";
						field.id = "FlyingField";
						var pos = findPos( this );
						field.style.top = ( pos.y + this.offsetWidth )+"px";
						field.style.left = pos.x+"px";
						field.appendChild(H(2,'Indiquez le nombre de colonnes et de lignes'));
						
						field.appendChild(BR());
						field.appendChild(H(3,'colonnes'));
						var colonnes = Field('colonnes');
						field.appendChild( colonnes );
						
						
						field.appendChild(H(3,'lignes'));
						var lignes = Field('lignes');
						field.appendChild( lignes );
						
						
						var ok = Button("ok");
						
						ok.onclick = function(){
							if( lignes.value && colonnes.value ){
								var table = "<table style='width:100%'>";
								for( var i = 0 ; i < lignes.value ; i++ ){
									table += "<tr>";
									for( var j = 0 ; j < colonnes.value ; j++ ){
										table += "<td style='min-height:20px'></td>";
									}
									table += "</tr>";
								}
								table += "</table><br />"; //<br /> pour éviter le bug qui bloque le pointeur dans le tableau
								
								objet.document.execCommand("insertHTML", false, table );
								
								document.body.removeChild(this.parentNode);
							}
						}
						field.appendChild(ok);
						document.body.appendChild(field);
					}
				break;
				default :
					objet.document.execCommand(this.action, false, this.option);
					break;
			}
		}
	}(instance)
	
	if( alignement == "vertical" ){
		var Tableau_Boutons = new Tableau(1);
		Tableau_Boutons.Content.id = "TraitementVertical";
	}else{
		if( taille ){
		var Tableau_Boutons = new Tableau(taille);
		}else{
		var Tableau_Boutons = new Tableau(null);
		}
		Tableau_Boutons.Content.id = "Traitement";
	}
		container.appendChild(Tableau_Boutons.Content);
	
		/*Affiche les boutons de traitement du texte*/
	var path = "/style/default/editor/";
	var imagesStyle = [	{src:"gras.gif",action:"Bold"},
					{src:"italic.gif",action:"Italic"},
					{src:"souligne.gif",action:"Underline"},
					{src:"barre.gif",action:"StrikeThrough"}
				 ];
	var imagesAlign = [	{src:"align_gauche.gif",action:"JustifyLeft"},
					{src:"align_centre.gif",action:"JustifyCenter"},
					{src:"align_droite.gif",action:"JustifyRight"},
					{src:"align_justify.gif",action:"JustifyFull"},
					{src:"table.gif",action:"insertTable"}
				 ];
	var imagesOptions = [	{src:"link.gif",action:"CreateLink"},
					{src:"unlink.gif",action:"Unlink"},
					{src:"mailto.gif",action:"Mailto"},
					{src:"remove_format.gif",action:"removeFormat"}
					
				 ];
	var imagesActions = [	{src:"undo.gif",action:"Undo"},
							{src:"redo.gif",action:"Redo"}
					
				 ];
/////////////////STYLE////////////////////////////////
	var style_tab = new Tableau(null);
	style_tab.Add( Span( "Style" ) );
	for( var image in imagesStyle ){
		var img = ImgButton( path+imagesStyle[image].src );
		img.action = imagesStyle[image].action ;
		img.onclick = instance.Traitement;
		img.target = document.getElementById('WYSIWYG');
		style_tab.Add( img );
	}
	//Taille//
	var size_tab = new Tableau(null);
		size_tab.Add( Span( "Taille" ) );
		var size = Select({1:"8pt",2:"10pt",3:"12pt",4:"14pt",5:"18pt",6:"20pt",7:"36pt"},"size",2);
			size.action = "FontSize";
			size.onchange = instance.Traitement;
			size_tab.Add( size );
	//Color//
	var color_tab = new Tableau(null);
		color_tab.Add( Span( "Couleur" ) );
		var color = SelectColor();
			color.action = "foreColor";
			color.onchange = instance.Traitement;
			color_tab.Add( color );
	
/////////////////ALIGNEMENTS/////////////////////////////////////
	var align_tab = new Tableau(null);
		align_tab.Add( Span( "Alignement" ) );
		for( var image in imagesAlign ){
			var img = ImgButton( path+imagesAlign[image].src );
			img.action = imagesAlign[image].action ;
			img.onclick = instance.Traitement;
			img.target = document.getElementById('WYSIWYG');
			align_tab.Add( img );
		}
/////////////////OPTIONS/////////////////////////////////////

	var options_tab = new Tableau(null);
		options_tab.Add( Span( "Options" ) );
		for( var image in imagesOptions ){
			var img = ImgButton( path+imagesOptions[image].src );
			img.action = imagesOptions[image].action ;
			img.onclick = instance.Traitement;
			img.target = document.getElementById('WYSIWYG');
			options_tab.Add( img );
		}
/////////////////OPTIONS/////////////////////////////////////
	var actions_tab = new Tableau(null);
		actions_tab.Add( Span( "Actions" ) );
		for( var image in imagesActions ){
			var img = ImgButton( path+imagesActions[image].src );
			img.action = imagesActions[image].action ;
			img.onclick = instance.Traitement;
			img.target = document.getElementById('WYSIWYG');
			actions_tab.Add( img );
		}
//////////////////////////////////////////////////////
/////////////////UPLOAD IMAGE/////////////////////////////////////
	
		var img = ImgButton( path+"uploadimage.gif" );
		img.onclick = function(){
			if( document.getElementById('uploadImage') ){
				container.removeChild(document.getElementById('uploadImage'));
			}else{
				var pos = findPos(this);
				var div = Div('uploadImage');
				container.insertBefore(div,Tableau_Boutons.Content.nextSibling);
				var date = new Date();
				swfobject.embedSWF("/swfs/upload/upload.swf?nocache="+date.getTime(), 'uploadImage' ,"778" , "400" , "8");
			
			}
		}
		
		window.addImage = function( image , disposition ){
			instance.action = "insertImage";
			instance.option = image;
			instance.option2 = disposition;
			instance.Traitement();
			instance.resize();
		}

	Tableau_Boutons.Add( style_tab.Content );
	Tableau_Boutons.Add( size_tab.Content );
	Tableau_Boutons.Add( color_tab.Content );
	Tableau_Boutons.Add( align_tab.Content );
	Tableau_Boutons.Add( options_tab.Content );
	Tableau_Boutons.Add( actions_tab.Content );
	Tableau_Boutons.Add( Span( "Photothèque" ) );
	Tableau_Boutons.Add( img );
	
	
}
function Phototheque(instance,container){
	
//////////////////////////////////////////////////////
/////////////////UPLOAD IMAGE/////////////////////////////////////
	var phototheque = Div('phototheque');
	container.appendChild( phototheque );
	window.loadPhototheque = function( page ){
		var requetePhototheque = new ObjXMLHttpRequest();
			phototheque.innerHTML = "";
			if( !page ){
				var page = 0;
			}
			requetePhototheque.SendRequest( "loadphototheque" , true , "limit=8&page="+page+"&order=date&owner=all" );
			requetePhototheque.onreadystatechange = function(obj){
				return function(){
					if( this.readyState == 4 ){
						if( this.status == 200 ){
							phototheque.innerHTML = this.responseText;
						}
					}
				}
			}(this)
	}
	loadPhototheque();
	
		
		window.InfosImage = function( id_image ){
			
			var container = document.createElement('table');
				container.width = "100%";
				container.height = "100%";
				container.style.height = "100%";
				container.style.width = "100%";
				container.style.position = "fixed";
				container.style.top = "0";
				container.style.left = "0";
			var tbody = document.createElement('tbody');
			var tr = document.createElement('tr');
			var td = document.createElement('td');
				td.align = "center";
				td.valign = "middle";
			container.appendChild( tbody ); tbody.appendChild( tr ); tr.appendChild( td );
			document.body.appendChild( container );
			
			var div = Div("Informations_Image");
			td.appendChild( div );
			
			var requetePhototheque = new ObjXMLHttpRequest();
				requetePhototheque.SendRequest( "loadphototheque" , true , "id="+id_image );
				requetePhototheque.onreadystatechange = function(obj){
					return function(){
						if( this.readyState == 4 ){
							if( this.status == 200 ){
								var datas = eval('('+this.responseText+')');
								//image
								var id_image = datas["id"];
								var src = "/photos/"+datas["membre"]+"/"+datas["id"]+"/"+datas["nom"];
								var Close = LinkSpan( "Close" );
									Close.href =  "javascript:closeImage()";
									div.appendChild( Close );
									div.appendChild( Img( src ) );
								
								//operations informations
								var form = Div("form_infos_image");
									div.appendChild( form );
									form.appendChild( H(1,"Image datas :") );
									
									var tableau = new Tableau( 2 );
									
										form.appendChild( tableau.Content );
									tableau.Add( H(3,"title :") );
									var titre = Field( "titre" , datas['titre'] );
										tableau.Add( titre );
									tableau.Add( H(3,"keywords :") );
									var keywords = Field( "keywords" , datas['keywords'] );
										tableau.Add( keywords );
									tableau.Add( H(3,"author :") );
									var auteur = Field( "auteur" , datas['auteur'] );
										tableau.Add( auteur );
									tableau.Add( H(3,"year :") );
									var annee = Field( "annee" , datas['annee'] );
										tableau.Add( annee );
									tableau.Add( null );
									var enregistrer = Button( "write" );
										enregistrer.onclick = function(){
											
											this.value = "writing...";
											Desactive( form , true );
											
											var requete = new ObjXMLHttpRequest();
											requete.SendRequest( "modifydatasphototheque" , false ,
												"id="+id_image+
												"&titre="+encodeURIComponent(titre.value)+
												"&keywords="+encodeURIComponent(keywords.value)+
												"&auteur="+encodeURIComponent(auteur.value)+
												"&annee="+encodeURIComponent(annee.value)
												);
											Desactive( form , false );
											this.value = "write";
										}
										tableau.Add( enregistrer );
									
								//operations Ajout à l'éditeur
								var box = Div("add_to_editor");
									div.appendChild( box );
									box.appendChild( H(1,"Add to editor :") );
									var tableau = new Tableau( 2 );
										box.appendChild( tableau.Content );
									
										tableau.Add( Radio("align", "align" , "left" , "left" ) );
										tableau.Add( Text("left") );
										tableau.Add( Radio("align", "align" , "center" , "left" ) );
										tableau.Add( Text("center") );
										tableau.Add( Radio("align", "align" , "right" , "left" ) );
										tableau.Add( Text("right") );
									
									var add = Button("add");
										add.onclick = function(){
											var collection = tableau.Content.getElementsByTagName("input");
											for( var i in collection ){
												if( collection[i].checked ){
													var align = collection[i].value;
													break;
												}
											}
											if( align ){
												addImage( src , align );
											}
										}
									box.appendChild( add );
									
								var divclear = Div();
									divclear.className = "clear";
									div.appendChild( divclear );
									
							}
						}
					}
				}(this)
				
			window.closeImage = function(){
				document.body.removeChild( container );
			}
			window.addImage = function( image , disposition ){
				
				instance.action = "insertImage";
				instance.option = image;
				instance.option2 = disposition;
				instance.Traitement();
				instance.resize();
				closeImage();
			}
			
			

		}

}

function Navigation(parent,hide_letters){
	if( typeof(hide_letters)=="undefined"){ hide_letters = false }
	this.Content = Div("operations");
	var index = undefined;
	parent.recherche = "";
	parent.char = "";
	
	var precedent = LinkSpan("precedent", "precedent");
	precedent.onclick = function(){
		if(typeof(index)=="undefined"){
			index = Historique.length - 1;
		}
			index--;
			if( index < 0 ){
				index = 0;
			}else{
				parent.Infos.innerHTML = Langs['Loading'];
				var RequeteBreve = ObjXMLHttpRequest();
				RequeteBreve.SendRequest( Historique[ index ]['operation'] ,false, Historique[ index ]['vars'] );
				var retour = eval('('+RequeteBreve.responseText+')');
				parent.nPages = retour.nPages;
				parent.Infos.innerHTML = retour.txt;
				
				
			}
		
		}
	var suivant = LinkSpan("suivant", "suivant");
	suivant.onclick = function(){
		if(typeof(index)=="undefined"){
			index = Historique.length - 1;
		}
			
			index++;
			if( index > Historique.length-1 ){
				index = Historique.length-1;
			}else{
				parent.Infos.innerHTML = Langs['Loading'];
				var RequeteBreve = ObjXMLHttpRequest();
				RequeteBreve.SendRequest( Historique[ index ]['operation'] ,false, Historique[ index ]['vars'] );
				var retour = eval('('+RequeteBreve.responseText+')');
				parent.nPages = retour.nPages;
				parent.Infos.innerHTML = retour.txt;
			}
	}
	
	
	/////////////RECHERCHE//////////////////
	var recherche = Field("recherche");
	recherche.className = "recherche";
	recherche.value = "recherche";
	recherche.onkeypress = function(ev){
		if (ev.keyCode == 13){
			parent.recherche = this.value;
			parent.page = 0;
			unselect();
			searchpage(parent, parent.recherche);
			
		}
	}
	recherche.onfocus = function(ev){
		this.value = "";
	}
	
	
		///////////////LETTRAGE///////////////////
	var tablettrage = new Array("all","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");

	this.send = function(number) { 
		lettragepage(parent, number);
	}
	if( !hide_letters ){
	var liste_boutons_lettres = new Array();
	for (i=0; i<tablettrage.length; i++) {
		var lettre = LinkSpan(tablettrage[i], "lettrage");
		if( tablettrage[i] == "all" ){
		lettre.char = "";
		}else{
		lettre.char = tablettrage[i];
		}
		lettre.onclick = function() {
			if( this.className != "selected" ){
				unselect();
				this.id = "lettrageselected";
				parent.recherche = "";
				recherche.value = "";
				lettragepage(parent,this.char);
			}
		}
	
		this.Content.appendChild(lettre);
		liste_boutons_lettres.push( lettre );
	}
	}
		this.Content.appendChild(recherche);
	
	
	var Historique = new Array();
	this.AddHistorique = function( operation , vars){
		var action = new Object();
		action.operation = operation;
		action.vars = vars;
		Historique.push( action );
		
	}
	function unselect(){
		parent.char = "";
		for( var i in liste_boutons_lettres ) {
			liste_boutons_lettres[i].id = "lettrage";
		}
	}

}

function ancreAppel(ancre)
		{
		self.location.hash=ancre;
		
		}


function searchpage(parent, number) {
				parent.recherche=number;
				parent.Construct();
			}

function findpage(parent, number) {
				parent.page=number;
				parent.Construct();
			}
			
function lettragepage(parent, number) {
				parent.char=number;
				parent.page = 0;
				parent.Construct();
			}

function requeteListage(operation, table, titreliste, limit, order, page, char, recherche, objet, id, recherchetype) {

	if (recherche =='disabled' || recherche =='undefined') { recherche ='';}
	var Requete = new ObjXMLHttpRequest();
	if (id) {
		Requete.SendRequest( operation ,false,"&table="+table+"&LIMIT=" + limit + "&ORDER=" + order + "&PAGE=" + page+ "&lettrage="+char+"&recherche="+ recherche+"&id="+id); }
	else {
		Requete.SendRequest( operation ,false,"&table="+table+"&LIMIT=" + limit + "&ORDER=" + order + "&PAGE=" + page+ "&lettrage="+char+"&recherche="+ recherche+""); }

	this.Content = new Div();
	Opacite(this.Content,100);
//	this.Content.appendChild( H(3,""+titreliste+"") );
		if( Requete.responseText != "error" && Requete.responseText != "null"){
			var datas = eval('('+Requete.responseText+')');

			var peoples = new Div('listingRequest');
			peoples.innerHTML = datas['datas'];
			objet.nPages = datas['nPages'];
			objet.page = page;
			
			if (objet.nPages>1 && objet.limit>10) {
				var numberPage2 = new ListeNumberPage(objet);
				var pagination2 = new Div("pagination");
				pagination2.appendChild(numberPage2.Content);
				this.Content.appendChild(pagination2);	
			}
			this.Content.appendChild(peoples);
		
		//this.ouvrir = AlphaFade;
			
		var numberPage = new ListeNumberPage(objet);
		var pagination = new Div("pagination");
		pagination.appendChild(numberPage.Content);
		this.Content.appendChild(pagination);
		
		}else{
		var peoples ="Aucun Résultat suite à votre requête";
		return peoples;
		}
		
		// this.ouvrir(7);
}


function ListeNumberPage(parent) {
		this.Content = Div();
			var number = Div();
			var currentpage = parent.page;
			var totalpage = parent.nPages;
			
			this.send = function(number) {
				findpage(parent, number);
			}
			
//début de liste
				
				if (currentpage>=0) {
					if (totalpage>1) {
						if (totalpage>1) {
						var numberpageprec = LinkSpan ("<", 'numberpage');
						this.Content.appendChild(numberpageprec);
						}
					if (currentpage== 0) {
					var numberpage = LinkSpan("1", "numberpageselected");	
					}
					else {
					var numberpage = LinkSpan("1", "numberpage");
					}
					var numbertemp = Span("...", "numberpage");
					if (currentpage>0) {
					numberpageprec.i = currentpage-1;
					numberpageprec.onclick = function() { findpage(parent,this.i); } }
					numberpage.onclick = function() { findpage(parent,0); }
					
					this.Content.appendChild(numberpage);
					if (currentpage>4){
					this.Content.appendChild(numbertemp); }
					}
					
					
					if (currentpage>0 || currentpage == totalpage) {
							var numberprec = currentpage+1;
					for (i=3; i>0; i--) {
						if (numberprec>0) {
							numberprec2 = numberprec-i;
							if (numberprec2 == currentpage+1) { var style= 'numberpageselected'; } else { var style = 'numberpage'; }
							if (numberprec2 > 1) {
							var numberpage = LinkSpan(numberprec2, ""+style+"");
							numberpage.i= numberprec2-1;
							numberpage.onclick = function() { findpage(parent, this.i); }
							this.Content.appendChild(numberpage);}
						}
					}
				}
								
							
					var currentinterval = currentpage+3;
					if (currentinterval<=totalpage) {
					var numbersuivfin = currentpage;
					for (i=0; i<=3; i++) {

						numbersuivfin = numbersuivfin+1;
					if (numbersuivfin == currentpage+1) { var style= 'numberpageselected'; } else { var style = 'numberpage'; }
						if (numbersuivfin!=1 && numbersuivfin<=totalpage-1 ) {
							var numberpage = LinkSpan(numbersuivfin, ""+style+"");
							numberpage.i= numbersuivfin-1;
							numberpage.onclick = function() { findpage(parent, this.i); }
							this.Content.appendChild(numberpage);
						}
					}
					}
				}
					
					
					
				if (currentpage+3>totalpage) {
						var numbersuivfin = currentpage;
						var numberprecfin = currentpage+1;

						for (p=1; p<=3; p++) {
							if (numbersuivfin<totalpage){
							numbersuivfin = numbersuivfin+1;
						if (numbersuivfin == currentpage+1) { var style= 'numberpageselected'; } else { var style = 'numberpage'; }	
							if (numbersuivfin<=totalpage-1 && numbersuivfin!=1) {
							var numberpage = LinkSpan(numbersuivfin, ""+style+"");
								numberpage.i= numbersuivfin-1;
							numberpage.onclick = function() { findpage(parent, this.i); }
							this.Content.appendChild(numberpage);}
								}
						}
		
						
				}

						var numberpagefin = LinkSpan (">", 'numberpage');
				if (totalpage == currentpage+1) { var style= 'numberpageselected'; } else { var style = 'numberpage'; }	
					var numberpagelast = LinkSpan(totalpage, ""+style+"");
					var numbertemp = Span("...", "numberpage");
					if (currentpage<totalpage-1) {
					numberpagefin.i = currentpage+1;
					numberpagefin.onclick = function() { findpage(parent, this.i);} }
						numberpagelast.i= totalpage-1; 
					numberpagelast.onclick = function() { findpage(parent, this.i); }
					if (currentpage< totalpage-5){
					this.Content.appendChild(numbertemp); }
					if (totalpage>1) {
					this.Content.appendChild(numberpagelast);
					this.Content.appendChild(numberpagefin);
					}
					
}






/* fonction qui permet à un object d'hériter d'object d'un autre aobject*/
function heritage(destination, source) { 

    for (var element in source) { 
        destination[element] = source[element]; 

    } 

}
/* fonction qui permet à une classe d'hériter d'object d'une autre classe*/
function heritage_prototype(destination, source ) { 

    for (var element in source) {
        destination.prototype[element] = source[element]; 
    } 

}
/* Liste des valeurs des champs à envoyer dans la requete AJAX */
function ListeValeurAEnvoyer( Container , type ){
	var liste = new Array( Container.getElementsByTagName('input') , Container.getElementsByTagName('textarea') , Container.getElementsByTagName('select') );
	var VARS = new Array();
	for( var i = 0 ; i < liste.length ; i++ ){
		for( var j = 0 ; j < liste[i].length ; j++ ){
			if( ( liste[i][j].parentNode.TimeStampPHP ) ){
				VARS[ liste[i][j].parentNode.id ] = liste[i][j].parentNode.TimeStampPHP;
			}else{
				if( liste[i][j].type != "button" && liste[i][j].type != "submit" ){
					if( liste[i][j].type == "checkbox" ){
						VARS[ liste[i][j].name ] = liste[i][j].checked;
					}else{
						
						VARS[ liste[i][j].name ] = encodeURIComponent( liste[i][j].value );
					}
				}
				
			}
		}
	}
	
	if( type == "object" ){
		return VARS;
	}else{
		var retour = new String();
		for( var i in VARS ){
			retour += "&"+ i +"="+ VARS[i];
		}
		
		return retour;
	}
}
/* Liste des valeurs des champs à envoyer dans la requete AJAX */
function ListeValeurAEnvoyerSansSelect( Container , type ){
	var liste = new Array( Container.getElementsByTagName('input') , Container.getElementsByTagName('textarea') );
	var VARS = new Array();
	for( var i = 0 ; i < liste.length ; i++ ){
		for( var j = 0 ; j < liste[i].length ; j++ ){
			if( ( liste[i][j].parentNode.TimeStampPHP ) ){
				VARS[ liste[i][j].parentNode.id ] = liste[i][j].parentNode.TimeStampPHP;
			}else{
				VARS[ liste[i][j].name ] = liste[i][j].value;
				
			}
		}
	}
	
	
	if( type == "object" ){
		return VARS;
	}else{
		var retour = new String();
		for( var i in VARS ){
			retour += "&"+ i +"="+ VARS[i];
		}
		
		return retour;
	}
}


function ListeMultiEnvoi( Container , type , champs, except ){
	if( !except ){ var except = ""; }
	var liste = new Array( Container.getElementsByTagName('input') , Container.getElementsByTagName('textarea') , Container.getElementsByTagName('select') );
	var VARS = new Array();
	
	for( var i = 0 ; i < liste.length ; i++ ){
		for( var j = 0 ; j < liste[i].length ; j++ ){
			var check ="";
				if (except!='' || except!='undefined') {
					var reg1=new RegExp("[ ,]+", "g");
					var tab = except.split(reg1);
					for(var h = 0 ; h < tab.length ; h++) {
						if (liste[i][j].name==tab[h] ) {
							check = true;
						}
					}
					if (check != true) {
						if (liste[i][j].name!='' && liste[i][j].name!='undefined'){
							if (liste[i][j].type!='button' && liste[i][j].type!='submit'){
							VARS[ liste[i][j].name ] = liste[i][j].value;
							}
						}
					}
				}
				else {
					if (liste[i][j].type!='button' && liste[i][j].type!='submit'){
					VARS[liste[i][j].name] = liste[i][j].value;
					}
				}
		}
	}
	
	
    if (champs!="undefined" || champs!='') {
		var reg=new RegExp("[ ,]+", "g");
		var tableau=champs.split(reg);
		var info2 = new String();
		for (var i in tableau ) {
			if (VARS[tableau[i]] == "") {
				info2 = "problem";
						return info2; 
			}
//			
		if (tableau[i]=="email") 
			{
			 var emailcheck= VerifEmail(""+VARS['email']+""); 
		 	if (emailcheck == false) { return false; }
			}

		}
		
		}

		if (VARS['email']) 
			{
			 var emailcheck= VerifEmail(""+VARS['email']+""); 
		 	if (emailcheck == false) { return false; }
			}
		


	if( type == "object" ){
		return VARS;
	} 
	else{ 
		var retour = new String();
			for( var i in VARS ){
				retour += "&"+ i +"="+ VARS[i];
			}
		return retour;
	}
	
}

function EnregistrePrefs( element , objects ){

	for( var i in ModulesDispo ){
		
		if( i == element.index ){
			for( var j in objects ){
				
				ModulesDispo[i].params[ j ] = encodeURIComponent(objects[j]);
			}
		/*enregistre les préférences de modules*/
		WritePrefs( ModulesDispo , "modules" );
		}else{
			for( var j in ModulesDispo[i].params.subModules ){
				if( j == element.index ){
					for( var o in objects ){
						
						if( ModulesDispo[i].params.subModules[j].params[ o ] ){
							ModulesDispo[i].params.subModules[j].params[ o ] = encodeURIComponent(objects[o]);
						}
					}
				//enregistre les préférences de modules
				WritePrefs( ModulesDispo , "modules" );
				}
			}
		}
	}
/*	for( var i in FlyingModules ){
		if( i == element.index ){
			for( var j in objects ){
					FlyingModulesDispo[i].params[ j ] = objects[j];
			}
		//enregistre les préférences de modules//
				WritePrefs( ModulesDispo , "flyingmodules" );
		}
	}
*/
}
function WritePrefs( Variable , Type ){
		/*enregistre les préférences de modules*/
		var recmodules = new ObjXMLHttpRequest();
		recmodules.SendRequest("register_pref_modules",true,"&type="+Type+"&CID="+LireCookie('User')+"&modules="+JSON.stringify(Variable));
	
}
function RemoveModule( element ){
	for( var i in ModulesDispo ){
		if( i == element.index ){
			delete( ModulesDispo[i]);
			/*enregistre les préférences de modules*/
			var recmodules = new ObjXMLHttpRequest();
			recmodules.SendRequest("register_pref_modules",true,"&type=modules&CID="+LireCookie('User')+"&modules="+JSON.stringify(ModulesDispo));
		}

	}
	for( var i in FlyingModules ){
		if( FlyingModules[i] == element ){
			delete(FlyingModulesDispo[i]);
			/*enregistre les préférences de modules*/
			var recmodules = new ObjXMLHttpRequest();
			recmodules.SendRequest("register_pref_modules",true,"&type=flyingmodules&CID="+LireCookie('User')+"&modules="+JSON.stringify(FlyingModulesDispo));
		}
	}
}
/*AFFICHE LES ICONES MODULES */
function IconesModules(){
	this.Content = Div();
	var ContainerGeneral = this.Content;
	var ListeDesModules = new ListeModulesDisponibles();
	
	var Icones = Div("Icones");
	
	//OUVRIR MODULE
	this.Ouvrir_Module = function(){
		//document.onselectstart = function(){document.onselectstart = false ;  return false; }
		
				var prototype = eval(this.module.module_prototype);
				var module = eval(this.module.module);
				var path = this.module.module_path;
				/*prototype le module en fonction des options de prototypage*/
				module.prototype = new prototype;
				
				/*le module hérite des parametres de l'objet parent*/
				heritage_prototype( module , eval(this.module.params) );
				module.prototype.path = path;
				
				/*Vire l'interval pas supprimé sinon*/
				if( typeof(Module)!="undefined"){
					clearTimeout(Module.Interval);
				}
				
				/*créé le module*/
				Module = new module;
				
				Module.index = this.moduleIndex;
				SetCookie( "lastmodule" , this.moduleIndex );
								
				/*Affiche le module*/
				RemoveAllChilds(document.getElementById('Module'),0);
				document.getElementById('Module').appendChild(Module.Content);
				
				/*Déselectionne les autre icones de modules*/
				var collection = this.parentNode.getElementsByTagName("a");
				
				for( var i = 0 ; i < collection.length ; i++ ){
					if( collection[i] != this ){
						collection[i].className = "iconeModule";
					}else{
						this.className = "iconeModuleSelected";
					}
				}
				
					
				
	}
	
	
	//AJOUT DE MODULE
	Ajout_Module = function( module , i ){
		
		var script = document.createElement("script");  
		script.type = "text/javascript";  
		script.src  = "/modules/" + module.module_path + "/composants.js";
		document.body.insertBefore( script , document.body.firstChild );
		
		var icone = Link( Span(module.module_path) );
		icone.style.background = "transparent url(/modules/"+module.module_path+"/icones/icone.png) no-repeat scroll 0 0";
		icone.className = "iconeModule";
		
		/*donne à chaque icone les donnees de son module*/
		icone.module = module;
		icone.moduleIndex = i;
		
		/*Au clique de la souris, affiche le module*/
		icone.onclick = ouvrirmodule;

		/*affiche l'icone*/
		Icones.appendChild( icone );
		if( i == LireCookie("lastmodule") ){
			
			script.module = module;
			script.moduleIndex = i;
			script.onload = function() {icone.onclick();};
		}
	


	}
	var ajoutermodule = this.Ajout_Module;
	var ouvrirmodule = this.Ouvrir_Module;
	
	/*Bouton Modifier les modules*/
	var opened = false;
	
	//AGRANDIT LES MODULES DIPOS PLUS
	function Plus(){
		this.Content = Div();
		
		this.Construct = function(){
			RemoveAllChilds(this.Content,0);
			
			var add = ImgButton("/style/default/modules/modify.png","/style/default/modules/modify_on.png");
			/*Au clique de la souris, affiche le module*/
			add.onmousedown = function(obj){
				return function(){
					ListeDesModules.Open();
					obj.Editors();
				}
			}(this)
			this.Content.appendChild(add);
		}
		this.Construct();
		
		this.Editors = function(){
			RemoveAllChilds(this.Content,0);
			ContainerGeneral.insertBefore( this.Content , ListeDesModules.Content );
			
			this.Content.id = "boutons_modification";
			
			var bouton = LinkButton( "supprimer" , this.Delete_Modules);
			this.Content.appendChild(bouton);
			
			var bouton = LinkButton( "deplacer" , Move_Modules);
			this.Content.appendChild(bouton);
			
			var bouton = LinkButton( "fermer les modifications" , this.Close);
			this.Content.appendChild(bouton);
			
		}
		this.Delete_Modules = function(obj){
			return function(){
				RemoveAllChilds(obj.Content,0);
				
				var tableau = new Tableau(2);
				tableau.Add( Text( "suppression de modules en cours...") );
				var fermer = Button( "fermer");
				
				var parent = obj;
				fermer.onclick = function(){
					parent.Editors();
					parent.Undo_Delete_Modules();
				}
				tableau.Add( fermer );
				obj.Content.appendChild(tableau.Content);
				
				var collection = Icones.getElementsByTagName('a');
				
				for( var i in collection ){
					if ( collection[i].module ){
							var del = ImgButton("/style/default/modules/delete.png",
												"/style/default/modules/delete_on.png");
							del.id = "bouton_delete";
							del.target = collection[i];
							del.onclick = function(){
								this.target.parentNode.removeChild(this.target);
								delete( ModulesDispo[this.target.moduleIndex] );
								/*Envoi de la requete pour enregistrer les pref*/
								WritePrefs( ModulesDispo , "modules" );
							}
						collection[i].appendChild( del );
					}
				}
			}
		}(this)
		this.Undo_Delete_Modules = function(){
			var collection = Icones.getElementsByTagName('img');
			//Vire les boutons del des icones modules//
			
			for( var i = collection.length-1 ; i >= 0 ; i-- ){
				if( collection[i] ){
					if( collection[i].id == "bouton_delete" ){
						
						collection[i].parentNode.removeChild( collection[i] );
					}
				}
			}
		}
		
		function Move_Modules(){
		}
		this.Close = function(obj){
			return function(){
				ListeDesModules.Close();
				obj.Construct();
				plus.Content.id="";
				Icones.insertBefore( plus.Content , Icones.firstChild );
			}
		}(this)
	}
	
	/* parcourt la liste pour afficher les icones*/
	for( var i in ModulesDispo ){
		Ajout_Module( ModulesDispo[i] , i );
	}
	
	/*Boutons de modifications*/
	var plus = new Plus();
	Icones.insertBefore( plus.Content , Icones.firstChild );
	
	///AFFICHE LES MODULES DISPONIBLES ET AUTORISES
	function ListeModulesDisponibles(){
		this.Content = Div("ListeModules");
		var compt = 0;
		this.Open = function(){
					this.AfficheListe = function(){
						Listemodules.Reset();
						Listemodules.Add( Langs['Loading'] );
						
						var TousLesModules= new ObjXMLHttpRequest();
						
						if( this.categorie ){
							//Rend le bouton en "selected" parcours tous les autres pour les mettre en normal
							var listescategories = CategoriesBox.Content.getElementsByTagName('li');
							this.parentNode.className = "categorie_selected";
							for( var i = 0 ; i < listescategories.length ; i++ ){
								if( listescategories[i] != this.parentNode ){
								listescategories[i].className = "categorie";
								}
							}
							//Requete
							TousLesModules.SendRequest("modulesdispos",false,"&categorie="+this.categorie);
						}else{
							//Rend le bouton en "selected" parcours tous les autres pour les mettre en normal
							var listescategories = CategoriesBox.Content.getElementsByTagName('li');
							for( var i = 0 ; i < listescategories.length ; i++ ){
								listescategories[i].className = "categorie";
							}
							listescategories[0].className = "categorie_selected";
							//Requete
							TousLesModules.SendRequest("modulesdispos",false,"");
						}
						
						Listemodules.Reset();
						
						var listedesmodules = eval("("+TousLesModules.responseText+")");
			
						for( var i in listedesmodules ){
							compt++;
							/*ajoute l'icone à la liste déroulante de modules*/
							
							var button = Link( Span(listedesmodules[i].module_path) );
							button.style.background = "transparent url(/modules/"+listedesmodules[i].module_path+"/icones/icone.png) no-repeat scroll 0 0";
							button.className = "iconeModule";
							button.style.backgroundPosition = "0 -50px";

							button.module = listedesmodules[i];
							button.module.index = i;
							Listemodules.Add( button ) ;
							
							button.onmouseover = function(ev){
									BarreEtat.innerHTML = "<h3>"+Langs[this.module.params.nom]+"</h3>";
									BarreEtat.innerHTML += this.module.description;
									BarreEtat.innerHTML += " | auteur : "+this.module.auteur;
							}
							button.onmouseout = function(){
								BarreEtat.innerHTML = "";
							}
							
							button.onclick = function(){
								/*vérifie si le module est déjà présent*/
								var exists = false;
								for( var i in ModulesDispo ){
									if( ModulesDispo[i]['module'] == this.module['module'] ){
										exists = true;
									}
								}
								
								if( !exists ){
									/*ajoute le module à MoudlesDispo pour pouvoir enregistrer la liste des module dans son fichier.modules*/
									
									ModulesDispo[this.module.index] = this.module;
									/*Envoi de la requete pour enregistrer les pref*/
									WritePrefs( ModulesDispo , "modules" );
									
									/*ajoute licone à la barre de modules*/
									Ajout_Module( this.module , this.module.index );
									
								}else{

									alert('existe déjà');
								}
							}
						}
					}
					
			if (compt > 13) { Icones.style.height = "100px"; }	
			var ModulesBox = Div("ModulesBox");
			this.Content.appendChild(ModulesBox);
			
			var title = H( 1 , "Parcourir les modules disponibles" );
			ModulesBox.appendChild(title);
			
			var CategoriesBox = new Liste("ListeCategories");
			ModulesBox.appendChild(CategoriesBox.Content);
			
			
			//AFICCHE LES CATEGORIES DE MODULES//
			var Requete_Categories= new ObjXMLHttpRequest();
			Requete_Categories.SendRequest( "modules_categories" ,false,"");
			var categories = eval('('+Requete_Categories.responseText+')');
			
			var bouton = LinkButton( Langs["All"] , this.AfficheListe );
			CategoriesBox.Add(bouton);
			for( var i in categories ){
				var bouton = LinkButton( Langs[categories[i]] , this.AfficheListe );
				bouton.categorie = categories[i];
				CategoriesBox.Add(bouton , "categorie" );
			}
			//
			
			var Listemodules = new Liste("ListeModulesDispo");
			ModulesBox.appendChild(Listemodules.Content);
			var BarreEtat = Div("BarreEtat");
			this.AfficheListe();
			ModulesBox.appendChild(BarreEtat);
			
		}
		this.Close = function(){
			//Vire les modules dispo//
			RemoveAllChilds(this.Content,0);
		}
	}
	
	/*affiche l'icone*/
	this.Content.appendChild(Icones);
	this.Content.appendChild(ListeDesModules.Content);
}
/*AFFICHE MODULES VOLANTS*/
function FenetresFlyingModules(){
	/* parcourt la liste pour afficher les icones*/
	for( var i in FlyingModulesDispo ){
		
				var prototype = eval(FlyingModulesDispo[i].module_prototype);
				var module = eval(FlyingModulesDispo[i].module);
				/*prototype le module en fonction des options de prototypage*/
				module.prototype = new prototype;
				
				/*le module hérite des parametres de l'objet parent*/
				heritage_prototype( module , eval(FlyingModulesDispo[i].params) );
				
				/*créé le module*/
				this[i] = new module;
				this[i].index = i;
				/*Affiche le module*/
				document.body.appendChild(this[i].Content);
	}
}
/*Ouvre un module SOLO*/
function CreateModule( Module ){
	var prototype = eval(Module.module_prototype);
	var module = eval(Module.module);
	/*prototype le module en fonction des options de prototypage*/
	module.prototype = new prototype;
	/*le module hérite des parametres de l'objet parent*/
	heritage_prototype(module,Module.params);
	/*Vire l'interval pas supprimé sinon*/
	if( typeof(Module)!="undefined"){
		clearTimeout(Module.Interval);
	}
	/*créé le module*/
	return new module;
}
/* PROTOTYPE DES MODULES*/
function Module_SingleConfiguration(){
	this.Content = Div();
	
	
	this.Requete = new ObjXMLHttpRequest();

	this.Initialisation = function(){
		/*vire l'interval sinon il en créé 15,000*/
		clearTimeout(this.Interval);
		this.Titre = Div("TitreModule")
		this.Titre.appendChild(Text(Langs[this.nom]));
		this.Content.appendChild(this.Titre);
		this.Infos = Div();
		this.Content.appendChild(this.Infos);
		
		var footer = Div("FooterModule");
		this.Content.appendChild(footer);
		
		this.Construct();
	}
	
	
}
function subModule_Single(){
	this.Content = Div();
	
	this.Requete = new ObjXMLHttpRequest();

	this.Initialisation = function(){
		/*vire l'interval sinon il en créé 15,000*/
		clearTimeout(this.Interval);
		this.Infos = Div();
		this.Infos.className = "Informations";
		this.Content.appendChild(this.Infos);
		this.Construct();
	}
	
	
}
function subModule_SingleWithTimer(){
	this.Content = Div();
	
	this.Initialisation = function(){
		clearTimeout(this.Interval);
		this.Infos = Div();
		this.Infos.className = "Informations";
		this.Infos.innerHTML = Langs['Loading'];
		
		this.Content.appendChild(this.Infos);
		
		var footer = Div("FooterModule");
		this.Content.appendChild(footer);
		this.Refresh();
		
	}
	this.Refresh = function(){
		/*vire l'interval sinon il en créé 15,000*/
		clearTimeout(this.Interval);
		this.Construct();
		this.Interval = setTimeout( function(obj){ return function(){ obj.Refresh(); }}(this), parseInt(this.delayrefresh));
		
	}
	
}
function Module_SingleWithTimer(){
	this.Content = Div();
	
	this.Initialisation = function(){
		this.Titre = Div("TitreModule");
		this.Titre.appendChild(Text(Langs[this.nom]));
		this.Content.appendChild(this.Titre);
		
		this.Infos = Div();
		this.Content.appendChild(this.Infos);
		this.Infos.innerHTML = Langs['Loading'];
		
	
		var footer = Div("FooterModule");
		this.Content.appendChild(footer);
		this.Refresh();
		
	}
	this.Refresh = function(){
		/*vire l'interval sinon il en créé 15,000*/
		clearTimeout(this.Interval);
		this.Construct();
		this.Interval = setTimeout( function(obj){ return function(){ obj.Refresh(); }}(this), parseInt(this.delayrefresh));
		
	}
	
}
function Module_MultiConfiguration(){
	this.Content = Div();
	
	this.subModuleContent=Div();
	this.subModuleContent.className = "SubModule";
	
	this.CreateOnglets = function(){
		/* Creation des onglets */
		this.Onglets = Div("Onglets");
		this.Content.appendChild(this.Onglets);
		/*parcours la liste des submodules*/
		var Tab = new Tableau(10);
		var submodule_default = 0;
		for( var submodule in this.subModules ){
			/*création de l'onglet*/
			var onglet = document.createElement('a');
			var span = document.createElement('span');
			
			if( !Langs[this.subModules[submodule].module] ){
				console.log("Traduire : "+this.subModules[submodule].module );
			}
			
			span.appendChild( Text( Langs[this.subModules[submodule].module] ) );
			onglet.appendChild( span );
			
			onglet.namesubmodule = this.subModules[submodule].params.nom;
			onglet.submodule = submodule;
			onglet.path = this.path;
			onglet.onclick = function(obj){
				return function(){
					//Met ce bouton en on et les autres en off
					var collection_boutons = Tab.Content.getElementsByTagName('a');
					this.className = "here";
					for( var i = 0 ; i < collection_boutons.length ; i++ ){
						if( collection_boutons[i] != this ){
							collection_boutons[i].className = "";
						}
					}
					////////////////////
					
					var onglets = obj.Onglets.getElementsByTagName("a");
					/*Vire tout ce que contient submodule*/
					RemoveAllChilds(obj.subModuleContent,0);
					var prototype = eval(obj.subModules[this.submodule].module_prototype);
					var module = eval(obj.subModules[this.submodule].module);
					/*définit le content du sous module, ici correspond au content du module parent*/
					module.prototype = new prototype;
					module.prototype.path = this.path;
					
					/*le module hérite des parametres de l'objet parent*/
					heritage_prototype( module , eval(obj.subModules[this.submodule].params) );
					
					module.prototype.Content = obj.subModuleContent;
					/*créé le submodule*/
					obj.subModule = new module;
					obj.subModule.index = this.submodule;

				}
				
			}(this)
			if( submodule_default == 0 ){
				onglet.onclick();
				submodule_default = 1;
			}
			Tab.Add(onglet);
			
		}
			this.Onglets.appendChild(Tab.Content);
	}
	
	this.Requete = new ObjXMLHttpRequest();

	this.Initialisation = function(){
		/*vire l'interval sinon il en créé 15,000*/
		clearTimeout(this.Interval);
		RemoveAllChilds(this.Content,0);
		RemoveAllChilds(this.Onglets,0);
		
		var titre = Div("TitreModule");
		titre.appendChild(Text(Langs[this.nom]));
		
		this.Content.appendChild(titre);
		this.CreateOnglets();
		this.Content.appendChild(this.subModuleContent);
		
		var footer = Div("FooterModule");
		this.Content.appendChild(footer);
	}
	
	
}
/* MODULE VOLANT*/
function Flying_Module(){
	this.Content = Div();
	this.Content.className = "FlyingModule";
		/*Barre de déplacement / fermeture*/
		this.Barre = new Bar();
		this.Content.appendChild(this.Barre.Content);
	
	this.Requete = new ObjXMLHttpRequest();
	this.Initialisation = function(){
		/*vire l'interval sinon il en créé 15,000*/
		clearTimeout(this.Interval);
		this.Content.style.left = this.x + "px";
		this.Content.style.top = this.y + "px";
		
		var instance = this;
		this.Barre.Close.onclick = function(obj){
			return function(){
				RemoveModule( obj );
				document.body.removeChild(obj.Content);
				/*vire l'interval sinon il en créé 15,000*/
				clearTimeout(obj.Interval);
			}
		}(this)
		this.Barre.Content.onmousedown = downMovable.bind(instance,instance.Barre.Content);
		
		
		this.Titre = Div("TitreModule");
		this.Titre.appendChild(Text(Langs[this.nom]));
		this.Content.appendChild(this.Titre);
		
		this.Infos = Div();
		this.Content.appendChild(this.Infos);
		
		var footer = Div("FooterModule");
		this.Content.appendChild(footer);
		this.Construct();
	}
		
	
}

///ICONE MODULE EN BAR DE NOTIFICATION 
function IconesModulesBar(){
	this.Content = Div();
	var ContainerGeneral = this.Content;
	var ListeDesModules = new ListeModulesDisponibles();
	
	var Icones = Div("Icones");
	
	//OUVRIR MODULE
	this.Ouvrir_Module = function(){
				var prototype = eval(this.module.module_prototype);
				var module = eval(this.module.module);
				var path = this.module.module_path;
				/*prototype le module en fonction des options de prototypage*/
				module.prototype = new prototype;
				
				/*le module hérite des parametres de l'objet parent*/
				heritage_prototype( module , eval(this.module.params) );
				module.prototype.path = path;
				
				/*Vire l'interval pas supprimé sinon*/
				if( typeof(Module)!="undefined"){
					clearTimeout(Module.Interval);
				}
				
				/*créé le module*/
				Module = new module;
				
				Module.index = this.moduleIndex;
				SetCookie( "lastmodule" , this.moduleIndex );
								
				/*Affiche le module*/
				RemoveAllChilds(document.getElementById('Module'),0);
				document.getElementById('Module').appendChild(Module.Content);
				
				/*Déselectionne les autre icones de modules*/
				var collection = this.parentNode.getElementsByTagName("a");
				
				for( var i = 0 ; i < collection.length ; i++ ){
					if( collection[i] != this ){
						collection[i].className = "iconeModule";
					}else{
						this.className = "iconeModuleSelected";
					}
				}
				
	}
	
	
	//AJOUT DE MODULE
	Ajout_Module = function( module , i ){
		
		var script = document.createElement("script");  
		script.type = "text/javascript";  
		script.src  = "/modules/" + module.module_path + "/composants.js";
		document.body.insertBefore( script , document.body.firstChild );
		
		var icone = Link( Span(module.module_path) );
		icone.style.background = "transparent url(/modules/"+module.module_path+"/icones/iconebar.png) no-repeat scroll 0 0";
		icone.className = "iconeModule";
		
		/*donne à chaque icone les donnees de son module*/
		icone.module = module;
		icone.moduleIndex = i;
		
		/*Au clique de la souris, affiche le module*/
		icone.onmousedown = ouvrirmodule;

		/*affiche l'icone*/
		Icones.appendChild( icone );
		if( i == LireCookie("lastmodule") ){
			
			script.module = module;
			script.moduleIndex = i;
			script.onload = function() {icone.onmousedown();};
		}
	


	}
	var ajoutermodule = this.Ajout_Module;
	var ouvrirmodule = this.Ouvrir_Module;
	
	/*Bouton Modifier les modules*/
	var opened = false;
	
	//AGRANDIT LES MODULES DIPOS PLUS
	function Plus(){
		this.Content = Div();
		
		this.Construct = function(){
			RemoveAllChilds(this.Content,0);
			
			var add = ImgButton("/style/default/modules/modify.png","/style/default/modules/modify_on.png");
			/*Au clique de la souris, affiche le module*/
			add.onmousedown = function(obj){
				return function(){
					ListeDesModules.Open();
					obj.Editors();
				}
			}(this)
			this.Content.appendChild(add);
		}
		this.Construct();
		
		this.Editors = function(){
			RemoveAllChilds(this.Content,0);
			ContainerGeneral.insertBefore( this.Content , ListeDesModules.Content );
			
			this.Content.id = "boutons_modification";
			
			var bouton = LinkButton( "supprimer" , this.Delete_Modules);
			this.Content.appendChild(bouton);
			
			var bouton = LinkButton( "deplacer" , Move_Modules);
			this.Content.appendChild(bouton);
			
			var bouton = LinkButton( "fermer les modifications" , this.Close);
			this.Content.appendChild(bouton);
			
		}
		this.Delete_Modules = function(obj){
			return function(){
				RemoveAllChilds(obj.Content,0);
				
				var tableau = new Tableau(2);
				tableau.Add( Text( "suppression de modules en cours...") );
				var fermer = Button( "fermer");
				
				var parent = obj;
				fermer.onclick = function(){
					parent.Editors();
					parent.Undo_Delete_Modules();
				}
				tableau.Add( fermer );
				obj.Content.appendChild(tableau.Content);
				
				var collection = Icones.getElementsByTagName('a');
				
				for( var i in collection ){
					if ( collection[i].module ){
							var del = ImgButton("/style/default/modules/delete.png",
												"/style/default/modules/delete_on.png");
							del.id = "bouton_delete";
							del.target = collection[i];
							del.onclick = function(){
								this.target.parentNode.removeChild(this.target);
								delete( ModulesDispo[this.target.moduleIndex] );
								/*Envoi de la requete pour enregistrer les pref*/
								WritePrefs( ModulesDispo , "modules" );
							}
						collection[i].appendChild( del );
					}
				}
			}
		}(this)
		this.Undo_Delete_Modules = function(){
			var collection = Icones.getElementsByTagName('img');
			//Vire les boutons del des icones modules//
			
			for( var i = collection.length-1 ; i >= 0 ; i-- ){
				if( collection[i] ){
					if( collection[i].id == "bouton_delete" ){
						
						collection[i].parentNode.removeChild( collection[i] );
					}
				}
			}
		}
		
		function Move_Modules(){
		}
		this.Close = function(obj){
			return function(){
				ListeDesModules.Close();
				obj.Construct();
				plus.Content.id="";
				Icones.insertBefore( plus.Content , Icones.firstChild );
			}
		}(this)
	}
	
	/* parcourt la liste pour afficher les icones*/
	for( var i in ModulesDispo ){
		Ajout_Module( ModulesDispo[i] , i );
	}
	
	/*Boutons de modifications*/
	var plus = new Plus();
	Icones.insertBefore( plus.Content , Icones.firstChild );

	///AFFICHE LES MODULES DISPONIBLES ET AUTORISES
	function ListeModulesDisponibles(){
		this.Content = Div("ListeModules");
		this.Open = function(){
					this.AfficheListe = function(){
						Listemodules.Reset();
						Listemodules.Add( Langs['Loading'] );
						
						var TousLesModules= new ObjXMLHttpRequest();
						
						if( this.categorie ){
							//Rend le bouton en "selected" parcours tous les autres pour les mettre en normal
							var listescategories = CategoriesBox.Content.getElementsByTagName('li');
							this.parentNode.className = "categorie_selected";
							for( var i = 0 ; i < listescategories.length ; i++ ){
								if( listescategories[i] != this.parentNode ){
								listescategories[i].className = "categorie";
								}
							}
							//Requete
							TousLesModules.SendRequest("modulesdispos",false,"&categorie="+this.categorie);
						}else{
							//Rend le bouton en "selected" parcours tous les autres pour les mettre en normal
							var listescategories = CategoriesBox.Content.getElementsByTagName('li');
							for( var i = 0 ; i < listescategories.length ; i++ ){
								listescategories[i].className = "categorie";
							}
							listescategories[0].className = "categorie_selected";
							//Requete
							TousLesModules.SendRequest("modulesdispos",false,"");
						}
						
						Listemodules.Reset();
						
						var listedesmodules = eval("("+TousLesModules.responseText+")");
						
						for( var i in listedesmodules ){
							
							/*ajoute l'icone à la liste déroulante de modules*/
							
							var button = Link( Span(listedesmodules[i].module_path) );
							button.style.background = "transparent url(/modules/"+listedesmodules[i].module_path+"/icones/icone.png) no-repeat scroll 0 0";
							button.className = "iconeModule";
							button.style.backgroundPosition = "0 -50px";

							button.module = listedesmodules[i];
							button.module.index = i;
							Listemodules.Add( button ) ;
							
							button.onmouseover = function(ev){
									BarreEtat.innerHTML = "<h3>"+Langs[this.module.params.nom]+"</h3>";
									BarreEtat.innerHTML += this.module.description;
									BarreEtat.innerHTML += " | auteur : "+this.module.auteur;
							}
							button.onmouseout = function(){
								BarreEtat.innerHTML = "";
							}
							
							button.onclick = function(){
								/*vérifie si le module est déjà présent*/
								var exists = false;
								for( var i in ModulesDispo ){
									if( ModulesDispo[i]['module'] == this.module['module'] ){
										exists = true;
									}
								}
								
								if( !exists ){
									/*ajoute le module à MoudlesDispo pour pouvoir enregistrer la liste des module dans son fichier.modules*/
									
									ModulesDispo[this.module.index] = this.module;
									/*Envoi de la requete pour enregistrer les pref*/
									WritePrefs( ModulesDispo , "modules" );
									
									/*ajoute licone à la barre de modules*/
									Ajout_Module( this.module , this.module.index );
									
								}else{

									alert('existe déjà');
								}
							}
						}
					}
			var ModulesBox = Div("ModulesBox");
			this.Content.appendChild(ModulesBox);
			
			var title = H( 1 , "Parcourir les modules disponibles" );
			ModulesBox.appendChild(title);
			
			var CategoriesBox = new Liste("ListeCategories");
			ModulesBox.appendChild(CategoriesBox.Content);
			
			
			//AFICCHE LES CATEGORIES DE MODULES//
			var Requete_Categories= new ObjXMLHttpRequest();
			Requete_Categories.SendRequest( "modules_categories" ,false,"");
			var categories = eval('('+Requete_Categories.responseText+')');
			
			var bouton = LinkButton( Langs["All"] , this.AfficheListe );
			CategoriesBox.Add(bouton);
			for( var i in categories ){
				var bouton = LinkButton( Langs[categories[i]] , this.AfficheListe );
				bouton.categorie = categories[i];
				CategoriesBox.Add(bouton , "categorie" );
			}
			//
			
			var Listemodules = new Liste("ListeModulesDispo");
			ModulesBox.appendChild(Listemodules.Content);
			var BarreEtat = Div("BarreEtat");
			this.AfficheListe();
			ModulesBox.appendChild(BarreEtat);
			
		}
		this.Close = function(){
			//Vire les modules dispo//
			RemoveAllChilds(this.Content,0);
		}
	}
	
	/*affiche l'icone*/
	this.Content.appendChild(Icones);
	this.Content.appendChild(ListeDesModules.Content);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////


/* MODULE VOLANT*/
function Flying_ModuleWithTimer(){
	this.Content = Div();
	this.Content.className = "FlyingModule";
		
	/*Barre de déplacement / fermeture*/
	this.Barre = new Bar();

	this.Content.appendChild(this.Barre.Content);
	
	this.Requete = new ObjXMLHttpRequest();
	this.Initialisation = function(){
		/*vire l'interval sinon il en créé 15,000*/
		clearTimeout(this.Interval);
		
		var instance = this;
		
		this.Barre.Close.onclick = function(obj){
			return function(){
				RemoveModule( obj );
				document.body.removeChild(obj.Content);
				/*vire l'interval sinon il en créé 15,000*/
				clearTimeout(obj.Interval);
			}
		}(this)
		this.Barre.Content.onmousedown = downMovable.bind(instance);
		
		this.Content.style.left = this.x + "px";
		this.Content.style.top = this.y + "px";
		
		this.Titre = Div("TitreModule");
		this.Titre.appendChild(Text(Langs[this.nom]));
		this.Content.appendChild(this.Titre);
		
		this.Infos = Div();
		this.Content.appendChild(this.Infos);
		
		var footer = Div("FooterModule");
		this.Content.appendChild(footer);
		this.Refresh();
		
	}
	this.Refresh = function(){
		/*vire l'interval sinon il en créé 15,000*/
		clearTimeout(this.Interval);
		this.Construct();
		this.Interval = setTimeout( function(obj){ return function(){ obj.Refresh(); }}(this), parseInt(this.delayrefresh));
		
	}
	
}
function downMovable(){
	document.body.appendChild(this.Content);
	Opacite( this.Content , 80 );
	document.onmousemove = function(obj){
		return function(ev){

			ev = ev || window.event;
			var mousePos = mouseCoords(ev);
			var X=mousePos.x-(obj.Barre.Content.offsetWidth/2);
			var Y=mousePos.y-(obj.Barre.Content.offsetHeight/2);
			if( Y < 0 ){ Y = 0; }
			obj.Content.style.top = Y+"px";
			obj.Content.style.left = X+"px";	

		}
	}(this)
	document.onmouseup = function(obj){
		return function(){
			var pos = findPos( obj.Content );
			EnregistrePrefs( obj , pos );
			document.onmousemove = function(){return false;}
			Opacite( obj.Content , 100 );
		}
	}(this)
 // cancel out any text selections
 document.body.focus();
 // prevent text selection in IE
 document.onselectstart = function () { return false; };
 // prevent IE from trying to drag an image
 this.Content.ondragstart = function() { return false; };
 // prevent text selection (except IE)
 return false;


}
function downMovableDOM( element ){
	element.style.cursor = "move";
	/*cherche le parent*/
	var parent = element.parentNode;
	while( parent.nodeName == "TD" || parent.nodeName == "TR" || parent.nodeName == "TBODY" ){
		parent = parent.parentNode;
	}
	
	
	element.onmousedown = function(ev){
		var containerOrigin = parent.parentNode;
		document.body.appendChild(parent);
		parent.style.position = "absolute";
		Opacite( parent , 80 );
		
		document.onmousemove = function(ev){
	
				ev = ev || window.event;
				var mousePos = mouseCoords(ev);
				var X=mousePos.x-(element.offsetWidth/2);
				var Y=mousePos.y-(element.offsetHeight/2);
				if( Y < 0 ){ Y = 0; }
				parent.style.top = Y+"px";
				parent.style.left = X+"px";
				
			
				/* Cible en dessous de la souris*/
				var areas = document.getElementsByName("AREA");
				for( var i in areas ){
						var pos = findPos(areas[i]);
						if( mousePos.x > pos.x && mousePos.y > pos.y && mousePos.x < ( pos.x + areas[i].offsetWidth) && mousePos.y < ( pos.y + areas[i].offsetHeight) && !areas[i].firstChild){
							areas[i].className = "AREA_on";
							areas[i].style.width = parent.offsetWidth.toString() + "px";
							areas[i].style.height = parent.offsetHeight.toString() + "px";
							var instance = areas[i];
							break;
						}else{
							var instance = containerOrigin;
							areas[i].className = "AREA";
						}
				}
					document.onmouseup = function(){
							instance.appendChild( parent );
							instance.className = "AREA";
							parent.style.position = "static";
							document.onmousemove = function(){return false;}
							Opacite( parent , 100 );
					}
		}
		document.onmousemove(ev);
	 // cancel out any text selections
	 document.body.focus();
	 // prevent text selection in IE
	 document.onselectstart = function () { return false; };
	 // prevent IE from trying to drag an image
	 element.ondragstart = function() { return false; };
	 // prevent text selection (except IE)
	 return false;
	}

}
function MiniArea(){
	var area = document.createElement("div");
	area.setAttribute("name","AREA");
	area.className = "MINIAREA";
	return area;
}
function findPos(obj) {
	var curleft = 0;
	var curtop = 0;
	
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}
return {x:curleft,y:curtop};
}
	
function Params_Editor(){
	this.EditButton = LinkSpan("EditButton");
	this.EditButton.onclick = function(obj){
		return function(){
			obj.OpenEditor();
			obj.page=0;
			
		}
	}(this)
	this.Editor = Div();
	this.OpenEditor = function(){
		
		this.Editor =Div("ParametersEditor");
		var fields_tab = new Tableau(2);
		var selects_tab = new Tableau(2);
		var checkboxes_tab = new Tableau(2);
			
		for( var i in this.parametresEditable ){
			
			
			if( this.parametresEditable[i].type == Field){
				var element = this.parametresEditable[i].type( i , this[i] );
				fields_tab.Add( Text( this.parametresEditable[i].texte) );
				fields_tab.Add( element );
			}
			if( this.parametresEditable[i].type == Select){
				var element = this.parametresEditable[i].type( this.parametresEditable[i].options , i , this[i] );
				selects_tab.Add( Text( this.parametresEditable[i].texte) );
				selects_tab.Add( element );
			}
			if( this.parametresEditable[i].type == Checkbox){
				var element = this.parametresEditable[i].type( i );
				checkboxes_tab.Add( Text( this.parametresEditable[i].texte) );
				checkboxes_tab.Add( element );
			}
		}
		//this.Editor.appendChild( H(3,"tri") );
		this.Editor.appendChild( fields_tab.Content );
		//this.Editor.appendChild( H(3,"tri sélectif") );
		this.Editor.appendChild( selects_tab.Content );
		//this.Editor.appendChild( H(3,"choix multiples") );
		this.Editor.appendChild( checkboxes_tab.Content );
		var button = Button( Langs["Search"] );
		button.onclick = function(obj){
			return function(){

				obj.Search();
			}
		}(this)
		
		this.Editor.appendChild( button );
		var annuler = Button( Langs["Close"] );
		annuler.onclick = function(obj){
			return function(){
				obj.ReduceEditor();
			}
		}(this)
		
		this.Editor.appendChild( annuler );
		this.Content.replaceChild( this.Editor , this.EditButton );
		
	}
	this.Search = function(){
		var liste = ListeValeurAEnvoyer(this.Editor , "object");
		for( var i in liste ){
			this[i] = liste[i];
			
		}
		this.page=0;
		this.Construct();
	}
	this.ReduceEditor = function(){
		this.Content.replaceChild( this.EditButton , this.Editor );
	}
	this.Content.appendChild(this.EditButton);
	
	this.OpenEditor();
	
	var liste = ListeValeurAEnvoyer(this.Editor , "object");
	for( var i in liste ){
		this[i] = liste[i];
	}

}

function Liste_Pages(){
		
		var pages = Div("pages");
		if( this.page > 0 ){
			var button = LinkSpan( "precedente" );
			button.onclick = function(obj){
				return function(){
					obj.page--;
					obj.Construct();
				}
			}(this)
			pages.appendChild( button );
		}
		if( this.page + 1 < this.nPages ){
			var button = LinkSpan( "suivante" );
			button.onclick = function(obj){
				return function(){
					obj.page++;
					obj.Construct();
				}
			}(this)
			pages.appendChild( button );
		}
		this.Infos.appendChild( pages );
}


function Bar(){
	this.Content = Div();
	this.Content.className = "Bar";
	this.Close = LinkButton( "close" );
	this.Content.appendChild(this.Close);
	
}
function mouseCoords(ev){
	if(ev.pageX || ev.pageY){
		return {x:ev.pageX, y:ev.pageY};
	}
	return {
		x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
		y:ev.clientY + document.body.scrollTop  - document.body.clientTop
		
	};
}
function ChaineAleatoire( nombreCaracteres ){
	var parts = new Array();
	var texte = new String();
	parts[0] = [48,57];
	parts[1] = [65,90];
	parts[2] = [97,122];
	for( var i = 0 ; i < nombreCaracteres ; i++ ){
		var part = parts[Math.round(Math.random()*2)];
		var char = String.fromCharCode( Math.round( Math.random()* (part[1]-part[0]) + part[0] ) );
		texte += char;
	}
	return texte;
}
function resizeIframe(){
	var padding = 10;
	if ( this.contentWindow.document.body.offsetHeight + (padding * 2) > this.offsetHeight ){
		this.style.height = ( this.contentWindow.document.body.offsetHeight+ (padding * 2) )+"px";
	}
}

function CheckInt(variable)
{
var exp = new RegExp("^[0-9.]+$","g");
return exp.test(variable);
} 

function addslashes(str) {
str=str.replace(/\'/g,'\\\'');
str=str.replace(/\"/g,'\\"');
str=str.replace(/\\/g,'\\\\');
str=str.replace(/\0/g,'\\0');
return str;
}
function stripslashes(str) {
str=str.replace(/\\'/g,'\'');
str=str.replace(/\\"/g,'"');
str=str.replace(/\\\\/g,'\\');
str=str.replace(/\\0/g,'\0');
return str;
}
function strip_tags (str, allowed_tags) {
    // http://kevin.vanzonneveld.net
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Luke Godfrey
    // +      input by: Pul
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +      input by: Alex
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Marc Palau
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Eric Nagel
    // +      input by: Bobby Drake
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Tomasz Wesolowski
    // *     example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>');
    // *     returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
    // *     example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
    // *     returns 2: '<p>Kevin van Zonneveld</p>'
    // *     example 3: strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
    // *     returns 3: '<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
    // *     example 4: strip_tags('1 < 5 5 > 1');
    // *     returns 4: '1 < 5 5 > 1'
 
    var key = '', allowed = false;
    var matches = [];
    var allowed_array = [];
    var allowed_tag = '';
    var i = 0;
    var k = '';
    var html = '';
 
    var replacer = function (search, replace, str) {
        return str.split(search).join(replace);
    };
 
    // Build allowes tags associative array
    if (allowed_tags) {
        allowed_array = allowed_tags.match(/([a-zA-Z0-9]+)/gi);
    }
 
    str += '';
 
    // Match tags
    matches = str.match(/(<\/?[\S][^>]*>)/gi);
 
    // Go through all HTML tags
    for (key in matches) {
        if (isNaN(key)) {
            // IE7 Hack
            continue;
        }
 
        // Save HTML tag
        html = matches[key].toString();
 
        // Is tag not in allowed list? Remove from str!
        allowed = false;
 
        // Go through all allowed tags
        for (k in allowed_array) {
            // Init
            allowed_tag = allowed_array[k];
            i = -1;
 
            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}
            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
            if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}
 
            // Determine
            if (i == 0) {
                allowed = true;
                break;
            }
        }
 
        if (!allowed) {
            str = replacer(html, "", str); // Custom replace. No regexing
        }
    }
 
    return str;
}