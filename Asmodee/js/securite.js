////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////SECURITE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Authentification_Membre(){
	this.Content = Form("trictracform");
	
	this.Login = Field("login");
	this.Password = FieldPassword("password");
	this.Memorise = Checkbox("memorise");
	
	var label = document.createElement('label');
	label.appendChild(this.Memorise);
	label.appendChild( Text( Langs['Memorise'] ) );
	
	this.LoadingDiv = new Loading();
	
	this.Memorise.onclick = function(){
		SetCookie( "mem" , this.checked );
	}
	
	this.Bouton = SubmitButton("envoyer");
	this.Bouton.onmousedown = function(obj){
		return function() {
			obj.Submit();
		}
	}(this)
	
	/* Fonction pour soumettre le formulaire */
	this.Submit = function( ev ){
		if( Enter(ev) || ev == undefined ){
			var RequeteAuthentification = ObjXMLHttpRequest();
			RequeteAuthentification.SendRequest("authentification",false,"&login=" + this.Login.value + "&password=" + this.Password.value);
			if ( RequeteAuthentification.responseText ) {
				SetCookie("private" , RequeteAuthentification.responseText );
				window.location.replace( PROFILLINK );
			}else{
				this.LoadingDiv.text.innerHTML = RequeteAuthentification.responseText;
			}
			
		}
	}
	
	/* Tape sur entrer sur un champ */
	this.Password.onkeydown = this.Login.onkeydown = function(obj){
		return function( ev ) {
			obj.Submit( ev );
		}
	}(this)
	
	
//Si le memoriser n'a pas été coché il efface et prend le login/default //
	if ( LireCookie("user") && LireCookie("private") && LireCookie("mem") == 'true' ) {
		this.Login.value = LireCookie("membername");
		this.Password.value = LireCookie("private");
		this.Memorise.checked = LireCookie("mem");
	}else{
		SetCookie( "user" , DEFAULTUSER );
		deleteCookie("private") ; 
		deleteCookie("membername") ; 
		deleteCookie("style") ; 
	}
	
	
	this.Tableau = new Tableau(1);
	this.Tableau.Add( Text( Langs['Login'] ) );
	this.Tableau.Add( this.Login );
	this.Tableau.Add( Text( Langs['Password'] ) );
	this.Tableau.Add( this.Password );
	this.Tableau.Add( label );
	this.Tableau.Add( this.Bouton );
	this.Content.appendChild( this.Tableau.Content );
	this.Content.appendChild( this.LoadingDiv.Content );
	
	

}
function yop( txt ){
	alert('yop');
	return "essai ok "+ txt;
}
/////////////////////////LIRE COOKIES ////////////////////////////////////////
function getCookieVal(offset){
	var endstr=document.cookie.indexOf (";", offset);
	if (endstr==-1){
		endstr=document.cookie.length;
	}
	return unescape(document.cookie.substring(offset, endstr));
}
function LireCookie(nom){
	var arg=nom+"=";
	var alen=arg.length;
	var clen=document.cookie.length;
	var i=0;
	while (i<clen){
		var j=i+alen;
		if (document.cookie.substring(i, j)==arg){
			return getCookieVal(j);
		}
		i=document.cookie.indexOf(" ",i)+1;
		if (i==0) break;
	}
return null;
}
/////////////////////////DEFINIR COOKIE////////////////////////////
function SetCookie( nom , valeur , ExpiredDate , path ){
	if( ExpiredDate == undefined ){
		var ExpiredDate=new Date();
		ExpiredDate.setTime (ExpiredDate.getTime() +17280000000);
	}
	if( !path ){ path = "/"; }
	document.cookie= nom + "=" + valeur + "; expires="+ExpiredDate.toGMTString()+"; path="+path+"";

}
function deleteCookie( nom ){
	var date=new Date;
	date.setFullYear(date.getFullYear()-1);
	SetCookie( nom , null , date);
}
function disconnect(){
		SetCookie( "user" , DEFAULTUSER );
		deleteCookie("private") ; 
		deleteCookie("membername") ;
		deleteCookie("style") ;
		window.location.replace( HOMELINK );
}