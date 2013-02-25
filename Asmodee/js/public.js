// VERIFICATION SI JAVASCRIPT EST ACTIVE /////
function JSactif(nom, valeur, expires) {
	document.cookie=nom+"="+escape(valeur)+
  ((expires==null) ? "" : ("; expires="+expires.toGMTString()));
}
JSactif("asmojs", "ok");
var LumiereDiv = document.getElementById('Lumiere');
if (document.getElementById('Lumiere')) {
LumiereDiv.style.filter = "alpha(opacity=0)";
}
function CinemaMode(modeselect) {
	var LumiereDiv = document.getElementById('Lumiere');
	
	var opacitytab = new Array();
	opacitytab = [ "0", "0.2", "0.4", "0.6", "0.8", "0.9" ];
	
				LumiereDiv.onclick = function() {
			
							var i = 5;
							var intervalEteindre = function() {
			
							LumiereDiv.style.opacity = opacitytab[i];
							LumiereDiv.style.filter = "alpha(opacity="+tab[i]*100+")";
								if (i==0) {
									LumiereDiv.style.display = "none";
									clearInterval(EteindreOn);
								}
								else {
								var EteindreOn = setTimeout(intervalEteindre, 100);	
								}
								i--;
							//	console.log(i);
							
							
							}
							 VerifLumiere();
							var EteindreOn = setTimeout(intervalEteindre, 100);
			
				}
				
			
				
				if (LumiereDiv.style.display == "none") {
					LumiereDiv.style.display = "block";
					LumiereDiv.style.position = "fixed";
					LumiereDiv.style.height = "100%";
					LumiereDiv.style.width = "100%";
					LumiereDiv.style.backgroundColor = "#000000";
					LumiereDiv.style.zIndex = "998";
					LumiereDiv.style.left = "0";
					LumiereDiv.style.top = "0";
					
					var i = 0;
					var intervalAllumer = function() {
						
								if (navigator.appName == "Microsoft Internet Explorer")
									{
										LumiereDiv.style.filter = "alpha(opacity=" + opacitytab[i]*100 + ")";
									}
								else {
									LumiereDiv.style.opacity = opacitytab[i];	
									LumiereDiv.style.filter = "alpha(opacity="+opacitytab[i]*100+")";
								}
					if (i==5) {
							LumiereDiv.style.display = "block";
							clearInterval(AllumerOn);
						}
					else {
						var AllumerOn = setTimeout(intervalAllumer, 100);
					}
						i++;
					//	console.log(i);
					}
					var AllumerOn = setTimeout(intervalAllumer, 100);
			
				}
				else {
						if (LumiereDiv.style.display == "block") {
								LumiereDiv.style.position = "fixed";
							LumiereDiv.style.height = "100%";
							LumiereDiv.style.width = "100%";
							LumiereDiv.style.backgroundColor = "#000000";
							LumiereDiv.style.zIndex = "998";
							LumiereDiv.style.left = "0";
							LumiereDiv.style.top = "0";
							
							var i = 6;
							var intervalEteindre = function() {
						
							
								if (navigator.appName == "Microsoft Internet Explorer")
									{
										LumiereDiv.style.filter = "alpha(opacity=" + opacitytab[i]*100 + ")";
									
									}
								else {
									LumiereDiv.style.opacity = opacitytab[i];	
									LumiereDiv.style.filter = "alpha(opacity="+opacitytab[i]*100+")";
								}
								
								if (i==0) {
									LumiereDiv.style.display = "none";
									clearInterval(EteindreOn);
								}
								i--;
							//	console.log(i);
							}
							var EteindreOn = setInterval(intervalEteindre, 100);
						
						}
				}
}

//Tous les Jeux
function Jeux_Par_Lettre( lettre , page ){
	if( !page ){var page = 0;}
	if( !lettre ){var lettre = "";}
	var Requete = ObjXMLHttpRequest();
	Requete.SendRequest("", false, "" , "/ressources/jeux/liste_jeux_lettre.php?lettre="+lettre+"&page="+page);
	document.getElementById('Liste_Jeux_Tous_liste').innerHTML = Requete.responseText;
	if( lettre ){
	 var lettreselection = document.getElementById(lettre); 
	lettreselection.className = 'selected';
	}
	tab = ['all','num','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z'];
	for (var i in tab) {
		if (tab[i]!=lettre) { 	var lettrenormal = document.getElementById(tab[i]);
		if (lettrenormal) {
	lettrenormal.className = 'normal'; }
		}
	}
}
function Toute_La_Gamme( gamme , page ){
	if( !page ){var page = 0;}
	if( !gamme ){var gamme = "";}
	var Requete = ObjXMLHttpRequest();
	Requete.SendRequest("", false, "" , "/ressources/jeux/toute_la_gamme.php?gamme="+gamme+"&page="+page);
	document.getElementById('Toute_La_Gamme').innerHTML = Requete.responseText;
}
function Articles_Par_Lettre( lettre , page , cate ){
	if( !page ){var page = 0;}
	if( !cate ){var cate = "";}else{ cate = "&cate="+cate; }
	var Requete = ObjXMLHttpRequest();
	Requete.SendRequest("", false, "" , "/newslist.php?page="+page+cate);
	document.getElementById('Liste_Articles_Tous_liste').innerHTML = Requete.responseText;
	/*var lettreselection = document.getElementById(lettre); 
	lettreselection.className = 'selected';
	tab = ['all','num','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z'];
	for (var i in tab) {
		if (tab[i]!=lettre) { 	var lettrenormal = document.getElementById(tab[i]);
		if (lettrenormal) {
	lettrenormal.className = 'normal'; }
		}
	}*/
	
}
function Archives_Par_Lettre( lettre , page , cate ){
	if( !page ){var page = 0;}
	if( !cate ){var cate = "";}else{ cate = "&cate="+cate; }
	var Requete = ObjXMLHttpRequest();
	Requete.SendRequest("archivelist", false, "lettre="+lettre+"&page="+page+cate);
	
	var Datas = eval('('+Requete.responseText+')');
	if (Datas) {
	document.getElementById('contentarchives').innerHTML = Datas['datas'];
	}
	 var lettreselection = document.getElementById(lettre); 
	lettreselection.className = 'selected';
	tab = ['all','num','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z'];
	for (var i in tab) {
		if (tab[i]!=lettre) { 	var lettrenormal = document.getElementById(tab[i]);
		if (lettrenormal) {
	lettrenormal.className = 'normal'; }
		}
	}
	
}
function Video_Par_Lettre( lettre , page , cate ){
	if( !page ){var page = 0;}
	if( !cate ){var cate = "";}else{ cate = "&cate="+cate; }
	var Requete = ObjXMLHttpRequest();
	Requete.SendRequest("", false, "" , "/ressources/video/listevideofull.php?lettre="+lettre+"&page="+page+cate);
	document.getElementById('Liste_Articles_Tous_liste').innerHTML = Requete.responseText;
	 var lettreselection = document.getElementById(lettre); 
	lettreselection.className = 'selected';
	tab = ['all','num','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z'];
	for (var i in tab) {
		if (tab[i]!=lettre) { 	var lettrenormal = document.getElementById(tab[i]);
		if (lettrenormal) {
	lettrenormal.className = 'normal'; }
		}
	}
}
	
function ChangeLangueDescriptif( path ){
	var requete = new ObjXMLHttpRequest();
	requete.SendRequest("",false,"",path);
	document.getElementById('Container_Jeu').innerHTML = requete.responseText;
}

function LangBE() {
	
	document.getElementById('langBe').style.display = "block";
	var langbediv = document.getElementById('langBe');
	
	document.onclick = function () {
		document.getElementById('langBe').style.display = "none";		
	}
}

	
function SeeBox(){
	document.getElementById('seebox').style.display = "none";
	document.getElementById('eclate').style.display = "none";
	document.getElementById('seeopenedbox').style.display = "block";
	document.getElementById('boite').style.display = "block";
}
function SeeOpenedBox(){
	document.getElementById('seeopenedbox').style.display = "none";
	document.getElementById('boite').style.display = "none";
	document.getElementById('seebox').style.display = "block";
	document.getElementById('eclate').style.display = "block";
}

function ListOpenBoxVideo2() {
	var divSelect = document.getElementById('listeTopPrime');
	var divSelect2 = document.getElementById('listeTop10');
	var divSelectPrime = document.getElementById('selectionlistePrime');
	var divSelectTop = document.getElementById('selectionlisteTop');
	
	var DivContentVideo = document.getElementById('listeVideo');
	var DivContentListTop = document.getElementById('listeTopMain2');
	var DivContentListPrime = document.getElementById('listeTopMain');
	
	var divSelectVideo = document.getElementById('selectionlisteVideo');
	var divSelectTopVideo = document.getElementById('listeTopVideo');
	
		divSelect.style.display = "block";
	//	divSelect.setAttribute('style','height:295px;overflow:hidden;position:relative;');
		divSelectPrime.className="ListePrimedown";
		divSelect2.style.display = "block";
		divSelectTop.className="ListeTopdown";
		
		if (DivContentVideo) {
		DivContentVideo.style.height = "350px";
		DivContentVideo.style.overflow = "hidden";
		DivContentVideo.style.zIndex = "100";
		divSelectVideo.style.height = "30px";
		divSelectVideo.style.zIndex = "110";
		}
		else if (DivContentListTop) {
			DivContentListTop.style.top = "295px";
			DivContentListTop.style.position = "absolute";
			DivContentListTop.style.zIndex = "200";
		}
		else if (DivContentListPrime) {
				DivContentListTop.style.top = "325px";
			DivContentListPrime.style.position = "absolute";
			DivContentListPrime.style.zIndex = "300";
		}


		//initialisation des listes vers le haut;
		
		DivContentVideo.style.top = "0px";
		DivContentVideo.style.left = "0px";
		DivContentListTop.style.top = "300px";
		DivContentListTop.style.left = "0px";
		DivContentListPrime.style.top = "330px";
		DivContentListPrime.style.left = "0px";
		
		// Tableau de Coordonnées de Déplacement
		
		var tab = new Array();
		var tab = ['350px','340px','335px','330px','310px','305px','300px','260px','230px','200px','180px','160px','140px','130px','120px','110px','100px','90px','80px','70px','60px','50px','40px','30px','20px','10px','3px'];
		
		var ModeListeVideo = function() {
					function ModeVideo1() {
						if (DivContentListPrime.style.top == "60px") {
								divSelectPrime.className="ListePrimedown";
							var i = 20;
							var glissementPrime = function () {
								if (i>=3) {
								//DivContentListPrime.style.top = ""+tab[i]+"px";
								DivContentListPrime.style.top = tab[i];
								i--;
								}
								else {
									clearInterval(TempoPrime);
								}
					
							}
									var TempoPrime = setInterval(glissementPrime, 10);
						}
					}
					function ModeVideo2() {
						if (DivContentListTop.style.top <= "40px" && DivContentListTop.style.top != "330px") {
					
								divSelectTop.className="ListeTopdown";
							var t = 22;
							var glissementTop = function() {
								if (t>=6) {
								DivContentListTop.style.top = tab[t];
			
								t--;
								}
								else {
									clearInterval(TempoTop);
								}
							}
							var TempoTop = setInterval(glissementTop, 10);
						}	
					}
					ModeVideo1();
					ModeVideo2();
			
			
		}
		

		
		
		var ModeListTop = function() {
						if (DivContentListTop.style.top == "30px" && DivContentListPrime.style.top != "60px") {
						divSelectTop.className="ListeTopdown";
							var i = 22;
							var glissementPrime = function () {
								if (i>=6) {
							
								//DivContentListPrime.style.top = ""+tab[i]+"px";
								DivContentListTop.style.top = tab[i];
									
								i--;
								}
								else {
									
									clearInterval(TempoPrime);
								}
					
							}
									var TempoPrime = setInterval(glissementPrime, 10);
						}
						
						if (DivContentListTop.style.top == "30px" && DivContentListPrime.style.top == "60px") {
						divSelectTop.className="ListeTopdown";
							var i = 20;
							var glissementPrime = function () {
								if (i>=3) {
							
								//DivContentListPrime.style.top = ""+tab[i]+"px";
								DivContentListPrime.style.top = tab[i];
									
								i--;
								}
								else {
									
									clearInterval(TempoPrime);
								}
					
							}
									var TempoPrime = setInterval(glissementPrime, 10);
							if (DivContentListPrime.style.top == "60px") {
								divSelectTop.className="ListeTopup";
								divSelectPrime.className="ListePrimedown";
							}
							
						}
						
						
						if (DivContentListTop.style.top == "300px") {
							divSelectTop.className="ListeTopup";
			
							var t = 3;
							var glissementTop = function() {
								if (t<=23) {
								DivContentListTop.style.top = tab[t];
								
								t++;
								}
								else {
									clearInterval(TempoTop);
								}
							}
							var TempoTop = setInterval(glissementTop, 10);
						}	
		}
		
		var ModeListPrime = function() {
						if (DivContentListTop.style.top == "300px") {
							var i = 3;
							divSelectTop.className="ListeTopdown";
							var glissementPrime = function () {
								if (i<=23) {
							
								//DivContentListPrime.style.top = ""+tab[i]+"px";
								DivContentListTop.style.top = tab[i];
									
								i++;
								}
								else {
									
									clearInterval(TempoPrime);
								}
					
							}
									var TempoPrime = setInterval(glissementPrime, 10);
						}
						
						
						if (DivContentListPrime.style.top == "330px") {
							
							divSelectPrime.className="ListePrimeup";
							var t = 3;
							var glissementPrime = function() {
								if (t<=20) {
								DivContentListPrime.style.top = tab[t];
						
								t++;
								
								}
								else {
									clearInterval(TempoPrime);
								}
							}
							if (DivContentListTop.style.top == "30px") {
								divSelectTop.className="ListeTopdown";
							}
						
							var TempoPrime = setInterval(glissementPrime, 10);
						}	
						if (DivContentListPrime.style.top == "60px") {
							
							divSelectPrime.className="ListePrimedown";
							var t = 20;
							var glissementPrime = function() {
								if (t>=3) {
								DivContentListPrime.style.top = tab[t];
						
								t--;
								
								}
								else {
									clearInterval(TempoPrime);
								}
							}
							if (DivContentListTop.style.top == "30px") {
							divSelectTop.className="ListeTopup";
						}
							var TempoPrime = setInterval(glissementPrime, 10);
						}	
						
		}
		
	divSelectVideo.style.cursor = "pointer";
	divSelectVideo.onclick = function() {
		ModeListeVideo();			
	}
	divSelectTop.onclick = function() {
		ModeListTop();
	}
	divSelectPrime.onclick = function() {
		ModeListPrime();
	}
		ModeListeVideo();	
}



function ListOpenBoxVideo() {
	var divSelect = document.getElementById('listeTopPrime');
	var divSelect2 = document.getElementById('listeTop10');
	var divSelectPrime = document.getElementById('selectionlistePrime');
	var divSelectTop = document.getElementById('selectionlisteTop');
	
	var DivContentVideo = document.getElementById('listeVideo');
	var divSelectVideo = document.getElementById('selectionlisteVideo');
	var divSelectTopVideo = document.getElementById('listeTopVideo');
	
		divSelect.style.display = "block";
		divSelect.setAttribute('style','height:295px;overflow:hidden;position:relative;');
		divSelectPrime.className="ListePrimedown";
		divSelect2.style.display = "block";
		divSelectTop.className="ListeTopdown";
		
		if (DivContentVideo) {
		DivContentVideo.style.height = "33px";
		DivContentVideo.style.overflow = "hidden";
		}
	//document.getElementById('listeTop10').style.display = "block";
	
	var tab = new Array();
	var tab = ['354px','340px','330px','320px','310px','300px','296px','250px','230px','200px','180px','160px','140px','130px','120px','110px','100px','90px','80px','70px','60px','50px','40px','30px','20px','10px','3px'];
	divSelect.style.overflow = "hidden";
	divSelect2.style.overflow = "hidden";
	divSelect.style.height='295px';
	divSelect2.style.height='295px';
	
	

											
											
	divSelectPrime.onclick = function() {
	
		
			if (divSelect2.style.height != "3px") {   
						divSelectPrime.className="ListePrimeup"; divSelectTop.className="ListeTopdown";
						var i = 7;
						var glissement = function(DivChoose){	
														DivChoose.style.height = tab[i];
														i++;
											
														if (DivChoose.style.height=='3px' || i==27) {clearInterval ( Tempo );  
														
														}c
										}
									if(divSelect2.style.height!='3px') {
											var Tempo = setInterval(function() { glissement(divSelect2);}, 10 );			
											}

			}
			 else { 
			 
			 		var i = 7;
			 		var glissement = function(DivChoose){	
														DivChoose.style.height = tab[i];
														i++;
													//	console.log('i'+i);
														if (DivChoose.style.height=='33px' || i==24) {clearInterval ( Tempo );  
														
														}
														
										}
										
						var t = 27;
					 divSelectPrime.className="ListePrimedown";  divSelectTop.className="ListeTopup"; 
							var glissement2 = function(DivChoose){	
									//divSelect2.style.height = tab[i];
									DivChoose.setAttribute("style","height:"+tab[t]+";overflow:hidden;position: relative;");
									t--;
									//console.log('i'+i);
									if (DivChoose.style.height=='295px' ||t==5) {clearInterval ( Tempo2 );
									}
						}
								
								var Tempo2 = setInterval(function() { glissement2(divSelect2);}, 10 );
								if ( DivContentVideo.style.height != '33px' ) {
								var Tempo = setInterval (function() { glissement(DivContentVideo);},10);
								}
								}	
				
	}
	
	
	divSelectTop.onclick = function() {
		
			if (divSelect2.style.height != "3px") {   
									divSelectPrime.className="ListePrimeup"; divSelectTop.className="ListeTopdown";
						var i = 7;
						var glissement = function(DivChoose){	
														DivChoose.style.height = tab[i];
														i++;
													//	console.log('i'+i);
														if (DivChoose.style.height=='3px' || i==27) {clearInterval ( Tempo );  
														
														}
										}
									if(divSelect2.style.height!='3px') {
											var Tempo = setInterval(function() { glissement(divSelect2);}, 10 );			
									}
					
					var t = 24;
					var glissement2 = function(DivChoose){	
									//divSelect2.style.height = tab[i];
									DivChoose.setAttribute("style","height:"+tab[t]+";overflow:hidden;position: relative;");
									t--;
									//console.log('i'+i);
										if (DivChoose.style.height=='335px' || t==2) {clearInterval ( Tempo2 );
									}
						}
						if ( DivContentVideo.style.height == '33px' ) {
								var Tempo2 = setInterval (function() { glissement2(DivContentVideo);},10);
							}
								
											
			
			}
		else  {   
		
					var i = 7;
		
								var glissement = function(DivChoose){	
														DivChoose.style.height = tab[i];
														i++;
													//	console.log('i'+i);
														if (DivChoose.style.height=='33px' || i==24) {clearInterval ( Tempo );  
														
														}
										}
												
						var t = 24;
					 divSelectPrime.className="ListePrimedown";  divSelectTop.className="ListeTopup"; 
							var glissement2 = function(DivChoose){	
									//divSelect2.style.height = tab[i];
									DivChoose.setAttribute("style","height:"+tab[t]+";overflow:hidden;position: relative;");
									t--;
									//console.log('i'+i);
									if (DivChoose.style.height=='295px' ||t==5) {clearInterval ( Tempo2 );
									}
						}
								
								var Tempo2 = setInterval(function() { glissement2(divSelect2);}, 10 );
								if ( DivContentVideo.style.height != '33px' ) {
								var Tempo = setInterval (function() { glissement(DivContentVideo);},10);
								}
			}
			//divSelectPrime.onclick();	
	}
	
		if (DivContentVideo) { 
		DivContentVideo.onclick = function() 
			{
						if (DivContentVideo.style.height  == "33px") 
						{
							var i = 24;
								var glissementVideo = function(divchoose)
								{	
											divchoose.setAttribute("style","height:"+tab[i]+";overflow:hidden;position: relative;");
										//		divchoose.style.height = ""+tab[i]+"px";
												consolelog(divchoose.style.height);
												divchoose.style.overflow = "hidden";
												divchoose.style.position = "relative";
												divchoose.style.display = "block";
												i--;
												//console.log('i'+i);
												if (divchoose.style.height=='335px' || i==2) 
												{clearInterval ( TempoV2 );}
												
								}
								
								
								
									
									var t = 7;
								var glissementelementVideo = function(divchoose)
								{	
										  divchoose.style.height = tab[t];
										  t++;
									  //	console.log('i'+i);
										  if (divchoose.style.height=='33px' || t==24) {clearInterval ( TempoV );  	}
										  
									  
								}

											var TempoV = setInterval(function(){glissementelementVideo(divSelect2);}, 10 );			
											var TempoV2 = setInterval(function(){glissementVideo(DivContentVideo);}, 10 );	
											var TempoV3 = setInterval(function(){glissementelementVideo(divSelect2);}, 10 );		
							}
							
						else if (DivContentVideo.style.height > "100px") {
										
												var i = 27;
													var glissementVideo = function(divchoose)
													{	
															divchoose.setAttribute("style","height:"+tab[i]+";overflow:hidden;position: relative;");
													//		divchoose.style.height = ""+tab[i]+"px";
															consolelog(divchoose.style.height);
															divchoose.style.overflow = "hidden";
															divchoose.style.position = "relative";
															divchoose.style.display = "block";
															i--;
															//console.log('i'+i);
															if (divchoose.style.height=='335px' || i==2) 
															{clearInterval ( TempoV2 );}
																	
													}
													
													
													
														
														var t = 7;
													var glissementelementVideo = function(divchoose)
													{	
															divchoose.style.height = tab[t];
															t++;
														//	console.log('i'+i);
															if (divchoose.style.height=='33px' || t==24) {clearInterval ( TempoV );  	}
															
																			
													}
								
											var TempoV = setInterval(function(){glissementelementVideo(DivContentVideo);}, 10 );			
										//var TempoV2 = setInterval(function(){glissementVideo(DivContentVideo);}, 10 );
								
								}		
					
							}
											
					}
					setTimeout ( divSelectTop.onclick, 500 );	
}


function ListOpenBox() {

	var divSelect = document.getElementById('listeTopPrime');
	var divSelect2 = document.getElementById('listeTop10');
	var divSelectPrime = document.getElementById('selectionlistePrime');
	var divSelectTop = document.getElementById('selectionlisteTop');
		divSelect.style.display = "block";
	//	divSelect.setAttribute('style','height:295px;overflow:hidden;position:relative;');
		divSelect.style.height = "295px";
		divSelect.style.overflow = "hidden";
		divSelect.style.position = "relative";
		divSelectPrime.className="ListePrimedown";
		divSelect2.style.display = "block";
		divSelectTop.className="ListeTopdown";
	//document.getElementById('listeTop10').style.display = "block";
	
	var tab = new Array();
	var tab = ['354px','340px','330px','320px','310px','300px','295px','250px','230px','200px','180px','160px','140px','130px','120px','110px','100px','90px','80px','70px','60px','50px','40px','30px','20px','10px','3px'];
	divSelect.style.overflow = "hidden";
	divSelect2.style.overflow = "hidden";
	divSelect.style.height='295px';
	divSelect2.style.height='295px';
	
	divSelectPrime.onclick = function() {
			if (divSelect2.style.height == "295px") {   divSelectPrime.className="ListePrimeup"; divSelectTop.className="ListeTopdown";
			var i = 7;
			var glissement = function(){	
									divSelect2.style.height = tab[i];
									i++;
								//	console.log('i'+i);
									if (divSelect2.style.height=='3px' || i==27) {clearInterval ( Tempo );  
									
									}
								}
								if(divSelect2.style.height!='3px') {
								var Tempo = setInterval(glissement, 10 );			
								}
			}
			 else if (divSelect2.style.height == "3px") { 
						var i = 27;
					 divSelectPrime.className="ListePrimedown";  divSelectTop.className="ListeTopup"; 
							var glissement2 = function(){	
									//divSelect2.style.height = tab[i];
									divSelect2.style.height = tab[i];
								//	divSelect2.setAttribute("style","height:"+tab[i]+";overflow:hidden;position: relative;");
									//divSelect2.style.height = tab[i];
									divSelect2.style.overflow = "hidden";
									divSelect2.style.position = "relative";
									i--;
									//console.log('i'+i);
									if (divSelect2.style.height=='295px' || i==5) {clearInterval ( Tempo2 );
									}
								}
								var Tempo2 = setInterval(glissement2, 10 );
								}	
				
	}
	
	
	divSelectTop.onclick = function() {
			divSelectPrime.onclick();
	}
	setTimeout ( divSelectTop.onclick, 500 );
}


function ListBoutique(typemode, pageselect, deptselect) {
		var Main = document.getElementById('MainBoutique');
		RemoveAllChilds(Main,0);
		var limit = "";
		var dept = "";

		this.deptselect = deptselect;
		
		this.deptselect = dept;
		if (pageselect) { this.page = pageselect; }
		else { 	this.page = 0; }
		var shopname = "";
		var parent = this;
		if (typemode == 'full') { var Tools = Div('ToolsBoutique2'); }
		else { var Tools = Div('ToolsBoutique'); }
		if (typemode == 'search' && deptselect) { parent.shopname = deptselect; }
		else { parent.shopname = ""; }
		var Content = Div('ListingBoutique');
		var Content2 = Div('ListingBoutique2');
		Content.appendChild(Content2);
		Main.appendChild(Tools);
		Main.appendChild(Content);
		var DivListing = Div();
		var TabMain = new Tableau(1);
		var Tabtool = new Tableau(2);
		//Content.appendChild(H(3, "Localiser une boutique"));
		parent.page = this.page;
		Content2.appendChild(TabMain.Content);
		
		var TabToolTri = new Tableau(1);
		//Content.appendChild(Text("Recherche par Tri :"));
		
		//parent.shopname = shopname;
		
		if (typemode == 'full') {
		var ChoixDept = Select('selectDeptBoutique',"region_pays",deptselect,false,false);

		var DivDeptInfo = Div('DeptInfo');

		var DivDeptTitre = Div('DeptTitre');
		var DivDeptTitre2 = Div('DeptTitre2');
		var TabDept = new Tableau(1);
		DivDeptTitre2.appendChild(Text(Langs['FilterDept']));
		DivDeptTitre2.appendChild(ChoixDept);
		//DivDeptTitre.appendChild(TabDept.Content);
		DivDeptTitre.appendChild(DivDeptTitre2);
		TabToolTri.Add(DivDeptTitre);
			//	var DivListeFull = Div('listefullboutique');
		//var Listebtn = LinkSpan('Liste des boutiques','listefullshop','/ressources/boutique/');
	
		//DivListeFull.appendChild(Listebtn);
		//TabToolTri.Add(DivListeFull);
		ChoixDept.onchange = function() {
			DivListing.innerHTML= "";
						parent.page = 0;
			listage(ChoixDept.options[ChoixDept.options.selectedIndex].value, parent.shopname, parent.limit, parent.page,'json' );

		}

		Content2.appendChild(TabToolTri.Content);
		}
		
		
		if (typemode == 'search') {
		var DivSearch = Div('searchboutique');
		var DivTitreRecherche = Div('boutiquetitre');
		DivTitreRecherche.appendChild(Text(Langs['TitleEngineShop']));
		TabToolTri.Add(DivTitreRecherche);
		var DivListeFull = Div('listefullboutique');
		var Listebtn = LinkSpan(Langs['listFullShop'],'listefullshop','/ressources/boutique/?mode=dept');
	
		DivListeFull.appendChild(Listebtn);
		
		DivSearch.appendChild(TabToolTri.Content);
		DivSearch.appendChild(DivListeFull);	

		var TabSearch2 = new Tableau(2);
		var FieldNameSearch = Field('shopname', "", 'shopname');
		TabSearch2.Add(FieldNameSearch);
		
		FieldNameSearch.onkeypress=function(ev){
 		if( Enter(ev) ){
				parent.page=0;
				parent.shopname = FieldNameSearch.value;
				//console.log(FieldNameSearch.value);
			listage(parent.dept,FieldNameSearch.value,parent.limit, 0,'json');
		}
		
		}
		var SearchBtn = LinkSpan('Search','search');
		TabSearch2.Add(SearchBtn);
				SearchBtn.onclick = function() {
					parent.page=0;
						parent.shopname = FieldNameSearch.value;
				listage(parent.dept,FieldNameSearch.value,parent.limit,0,'json');
				
		}
		TabToolTri.Add(TabSearch2.Content);
		//TabToolTri.Add(Text('Résultats pour '+parent.shopname));
		//TabToolTri.Add(Text('liste des boutiques classée par ordre alphabétique'));

		
		Content2.appendChild(DivSearch);
		}
		TabMain.Add(Tabtool.Content);
		
		
		
		var listage = function(dept,shopname, limit, pagelistage, type) {
		parent.dept = dept;
		
		
		if (pagelistage) { parent.page = pagelistage; }
			
		//parent.shopname = shopname;
		parent.limit = limit;
		parent.shopname = shopname;
		if (!limit) { limit = 10; }
		var RequestListe = new ObjXMLHttpRequest();
			//		console.log('listage '+parent.shopname);	
		RequestListe.SendRequest('selectDeptBoutique',false, "&dept="+parent.dept+"&shopname="+shopname+"&limit="+limit+"&page="+parent.page+"&mode="+typemode+"&type="+type);
		var Datas = eval('('+RequestListe.responseText+')');
			
		this.nPages = Datas['nPages'];
		this.limit = limit;
		Content2.appendChild(DivListing);

		if (type == 'json') {
			RemoveAllChilds(DivListing,0);
			if (typeof(Datas['datas']) == 'object') {
				var cadreboutique = Div('cadreboutique');
				for (var i in Datas['datas']) {
					if (Datas['datas'][i]['nom']) {
					var TabMain = new Tableau(1);
					var TabShopAll = new Tableau(3);
					var TabShop = new Tableau(1);
					var DivName = Div("nomboutique");
					var interDiv = Div("interbar");
					DivName.style.fontWeight = 'bold';
					
					DivName.appendChild(Text(Datas['datas'][i]['nom']));
					TabShop.Add(DivName);
						var adresseTxt = "";
					if (Datas['datas'][i]['locate']) {
							adresseTxt += Datas['datas'][i]['locate']+" ";
					}
					if (Datas['datas'][i]['codepostal']) {
							adresseTxt += Datas['datas'][i]['codepostal']+" ";
					}
					if (Datas['datas'][i]['ville']) {
							adresseTxt += Datas['datas'][i]['ville']+" ";
					}
					var adresseShop = Text(adresseTxt);
					TabShop.Add(adresseShop);
					
					TabShopAll.Add(TabShop.Content);
					TabShop.Content.style.width = "310px";
					var TabContact = new Tableau(1);
					if (Datas['datas'][i]['telephone']) {
						var TabPhone = new Tableau(2);
						TabPhone.Add(Text(Datas['datas'][i]['contact']));
						TabPhone.Add(Text(Datas['datas'][i]['telephone']));
						TabContact.Add(TabPhone.Content);
					}
					if (Datas['datas'][i]['email']) {
						var emailButton = LinkButton(Datas['datas'][i]['email'] );
						emailButton.href = "mailto:"+Datas['datas'][i]['email'];
						var TabEmail = new Tableau(1);
						
						TabEmail.Add(emailButton);
						TabContact.Add(TabEmail.Content);
						
					}
					if (Datas['datas'][i]['siteweb']) {
						var webButton = LinkButton(Datas['datas'][i]['siteweb']);
						webButton.href = "http://"+Datas['datas'][i]['siteweb'];
						var TabWeb = new Tableau(1);
						TabWeb.Add(webButton);
						TabContact.Add(TabWeb.Content);
					}	
					TabContact.Content.style.width = "150px";
					var btnGoogle = LinkButton('Google Map');
					btnGoogle.href = "javascript:OpenSpan("+Datas['datas'][i]['idt']+", \""+Datas['datas'][i]['nom']+" "+Datas['datas'][i]['adresse']+" "+Datas['datas'][i]['codepostal']+" "+Datas['datas'][i]['ville']+"\",1);"; 	
					

					TabShopAll.Content.style.width = "100%";
					TabShopAll.Add(TabContact.Content);
					TabShopAll.Add(btnGoogle);
					TabMain.Add(TabShopAll.Content);
					this["divMap"+i] = Div(Datas['datas'][i]['idt']+"map");
					TabMain.Add(this["divMap"+i]);
					TabMain.Add(interDiv);
					
					this["divMap"+i].style.width = "495px";
					this["divMap"+i].style.overflow = "hidden";
					
					cadreboutique.appendChild(TabMain.Content);
					
					
					TabMain.Content.style.width = "100%";
					interDiv.style.borderBottom = '1px solid #999';
					}
					
				}
				
				var ElementBoutique = Div('ElementBoutique');
				ElementBoutique.style.paddingBottom = "20px";
				ElementBoutique.appendChild(cadreboutique);

				DivListing.appendChild(ElementBoutique);
				
				
			}
			var DivPages = Div();
			DivPages.innerHTML = Datas['pages'];
			DivListing.appendChild(DivPages);
		}
		else {
		DivListing.innerHTML=Datas['adresse'];
		}
		
		var NavigationDiv = document.getElementById('NavigationBoutique');
		
	//	this.nPages = 10;
		//var numberPage = new ListeNumberPage(this);
	//	var pagination = new Div("pagination");
		//pagination.appendChild(numberPage.Content);
		//NavigationDiv.appendChild(pagination);
	
		//var trilimit = document.getElementById('trilimit');	
		//trilimit.setAttribute('style','padding-bottom:5px;');
		//var tab = new Array();
	//	tab[5] = ['5'];
		//tab[10] = ['10'];
	//	tab[15] = ['15'];
	//	tab[20] = ['20'];
	//	var fieldlimit = Select(tab, "fieldlimit", limit);
	//	trilimit.appendChild(fieldlimit);
		
		//fieldlimit.onchange = function() {
		//	listage(dept,shopname,fieldlimit.value);			
	//	}
		}
		
		//console.log('fin '+parent.shopname);
		
		listage(parent.dept, parent.shopname, parent.limit, pageselect, 'json');
		
		var FooterBoutique = Div('FooterBoutique');
		Main.appendChild(FooterBoutique);
}


function OpenSpan(element, adresse, googlemap, flottant) {
	var elementtmp = document.getElementById(element);
	var tab = new Array();
	var tab = ['10px','20px','30px','45px','50px','55px','60px','65px','70px','75px','80px','85px','90px','100px','120px','130px','150px','170px','190px','210px','220px','230px','240px','250px'];
	var tab2 = ['50px','100px','150px','200px','250px'];
	var txt = element+'span';
	// if (element) {
	var spantmp = document.getElementById(txt);
	// }
	
	
	var map = null;
	var geocoder = null;
	var mgr= null;
	var batchEtbl=[];//ce tableau stockera les markers des adresses
	var batchPays=[];//ce tableau stockera les markers des pays

		var pays=[];
		var etbl=[];
		pays[0]=[10,"France"];
		pays[1]=[11,"Italy"];
		pays[2]=[12,"Spain"];
	var parent = this;
//var	adresse = "rue Joffre 47400 Tonneins FRANCE" ;
	parent.adresse = adresse;

//VERIFIE SI GOOGLE MAP EST COMPATIBLE AVEC LE NAVIGATEUR

	if (googlemap) {
			
			var divmap = document.getElementById(element+"map");
		//	divmap.setAttribute('style', 'height:286px; width:500px; overflow:hidden;background-color:#F7F7F7');
		//divmap.setAttribute('style', 'overflow:hidden;background-color:#F7F7F7');
		divmap.style.overflow = "hidden";
		divmap.style.backgroundColor = "#F7F7F7";
			RemoveAllChilds( divmap,0 );
				  	var tableaumap = new Tableau(1);
			
		
			var DivMapHead = Div('MapTitle');
			var DivMapContent = Div('MapGoogleContent');
			tableaumap.Add(DivMapHead);
			tableaumap.Add(DivMapContent);
			tableaumap.Add(Text(Langs['MapInfo']));
			var glissement2 = function(){
					
				if (DivMapContent.style.height<'250px' && DivMapContent.style.height!='250px') {
						var t = 0 ;
					var hauteur = function() {
							
						if (t==0) { 
						DivMapContent.style.height = "0px"; 	 
						
					//	if (flottant==1) {					
						DivMapContent.style.width = "488px";
						//DivMapContent.setAttribute('style', 'overflow:hidden; position:relative; border:1px solid;');
						
						DivMapContent.style.overflow = "hidden";
						DivMapContent.style.position = "relative";
						DivMapContent.style.border = "1px";
						
				//		DivMapContent.style.width = divmap.style.width - 12;
					//	DivMapContent.style.height = divmap.style.height - 50;
						var TabTitle = new Tableau(2);
						var DivTitlemap1 = Div('leftdivmap');
						var DivTitlemap2 = Div('rightdivmap');
					//	DivTitlemap2.setAttribute('style', 'text-align:right; width:206px;');
						
						DivTitlemap2.style.textAlign = "right";
						DivTitlemap2.style.width = "206px";
						
						DivTitlemap1.appendChild(Text('GoogleMap'));
						DivTitlemap1.setAttribute('style', 'width:268px;');
					var ClosePanel = LinkSpan(Langs['Close']);
						ClosePanel.onclick = function () {
						//	RemoveAllChilds( tableaumap.Content,0 );	
								RemoveAllChilds( divmap,0 );
								divmap.style.height = "0px"; 
						}
						DivTitlemap2.appendChild(ClosePanel);
						
						TabTitle.Add(DivTitlemap1);
							TabTitle.Add(DivTitlemap2);
							
						DivMapHead.appendChild(TabTitle.Content);
						
						//}
						//else { DivMapContent.setAttribute('style', 'height=0px; width:488px; overflow:hidden;'); }
							}
						if (DivMapContent.style.height>='234px' || t==24) {
						clearInterval(Interv2);
						googlemapexec();
						}
						else {
								if (DivMapContent.style.height<'234px' && t<24) {
								DivMapContent.style.height='234px';
							
								t++;
								}
						}
				}
				
				var Interv2 = setInterval(hauteur, 50);
				}
		
			 }
		
				 var init = function () {
									google.load("maps", "2");
									google.setOnLoadCallback(googlemapexec);
								}; // init
								
				 var googlemapexec = function() {
					//	if (GBrowserIsCompatible()) {
							/*	
						var map = new google.maps.Map2(divmap);
						 
						var geocoder = new google.maps.ClientGeocoder();
						geocoder.getLatLng(adresse, function (coord) { map.setCenter(coord, 15); } );
*/
							//Si le navigateur est compatible 
									map = new GMap2(DivMapContent);//création de l'objet map

										map.addControl(new GSmallMapControl());//ajout des controles de zoom et déplacement au format mini
									//	map.setCenter(new GLatLng(47.4419, 2.1419), 5);//positionnement initial de la map (ici la france) 
										// Recherche des coordonnées d'un point dont on connait l'adresse :
										var geocoder = new google.maps.ClientGeocoder();
										//console.log(parent.adresse);
										geocoder.getLatLng(parent.adresse, function (coord) {
												// Et centrage de la map sur les coordonnées renvoyées par Google :
												
										if (coord!=null) {
												map.setCenter(coord, 15);
												map.addOverlay(new GMarker(coord));
										}
								else {		if (coord==null) {
										tableaumap.Add(Text('Location not found'));
										}
								}
								});
								
								//geocoder = new GClientGeocoder();//création de l'objet geocoder (nécessaire pour la localisation des adresse)
								//	map.setCenter(new geocoder.getLatLng(adresse), 5);//positionnement initial de la map (ici la france) 
								//createMarkersPays(0);//lancement de la fonction permettant de créer les markers des pays
								
								mgr = new GMarkerManager(map);//on créer un marker manager//création d'un manager de marker
								//	console.log('test'+mgr);
									//  }
								
							
							}
	
		divmap.appendChild(tableaumap.Content);
		 var Tempo = setTimeout(glissement2, 10 );	
		 
	}
//createMarkersEtbl();

	// }
	// console.log(spantmp.style.height);
	
 	else {
	 var glissement = function(){	
	
	 		if (spantmp.style.height<'60px' && spantmp.style.height!='60px') {
				var i = 0 ;
				var hauteur = function() {
			
				if (i==0) { spantmp.style.height = "0px"; 	 
				spantmp.setAttribute('style', 'height:0px; width:500px; border:1px solid #000; margin-left:50px; padding-left:10px; overflow:hidden;');
							}
				if (spantmp.style.height>='60px' || i==7) {
				clearInterval(Interv);
				}
				else {
				if (spantmp.style.height<'60px' && i<=7) {
				spantmp.style.height=tab[i];
			//	console.log(spantmp.style.height);
				i++;
				}
				} 
				}
				var Interv = setInterval(hauteur, 50);
			}

	 }

	 var Tempo = setTimeout(glissement, 10 );	
	}
	 
}
function FieldAccesDirect(pagerequest,id,Default,varlist){
	var container_general = this;
	
	/* cree le champ */
	this.Content = document.createElement("input");
	this.Content.setAttribute("type" , "text");
	this.Content.setAttribute("id" , id);
	this.value = Langs['DirectAccess'];
	
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
			
			if( Container.parentNode ){
			if( Container.parentNode == document.body ){
			document.body.removeChild(Container);
			}
			}
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
			if( field.value.replace(reg,"") == "" ){  return false; }
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
								
								divitem.url = liste[i][j]["url"];
								divitem.onmousedown = function(){
										window.location.href= this.url;
										
								}
								
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
	
	this.Content.value = Langs['DirectAccess'];
	var InitValue = true;
	
	this.Content.onfocus = function(){
		if( InitValue ){
		this.value = "";
		InitValue = false;
		}
	}
}
function Cart( hide ){
	
	this.empty = function(){
	
		this.Requete.SendRequest( "emptymycart", true );
		
	}
	this.view = Div("Cart");
	this.view.style.display = "none";
	var cart = this;
	var view = this.view;
	var timer_change_num = 0;
	this.Requete = ObjXMLHttpRequest();
	this.Requete.onreadystatechange = function(){
		
		if( this.readyState == 4 ){
			if( this.status == 200 ){
				
				if( this.responseText == "none" ){
					view.innerHTML = "" ;
					view.style.display = "none";
				}else{
					view.innerHTML = this.responseText ;
					if( !hide ){
					view.style.display = "block";
					}
				}
			}
		}
	}
	
	this.addAGame = function( game ){
	
		this.Requete.SendRequest( "addagametomycart", true, "&game="+game );
		
	}
	this.deleteGame = function( game ){
		
		this.Requete.SendRequest( "deleteagamefrommycart", true, "&game="+game );
			
	}
	this.changeNumGame = function( game , sens , keyup ){
		
		if( keyup ){
			clearTimeout(timer_change_num);
			timer_change_num = setTimeout(function(){ cart.changeNumGame(game,sens,false);} , 1000);
		}else{
			if( !sens ){
				sens = 1;
				document.getElementById( "displayQ"+game ).value = 1 ;
			}else if( sens == 0 ){
				sens = 1;
				document.getElementById( "displayQ"+game ).value = 1 ;
			}
			var Requete = ObjXMLHttpRequest();
				Requete.SendRequest( "changenumgamefrommycart", false, "&game="+game+"&sens="+sens );
				
			document.getElementById("q"+game).value = Requete.responseText
			document.getElementById( "displayQ"+game ).value = Requete.responseText ;
			
			
			var prixU = parseFloat(document.getElementById("prixU"+game).value);
			var q = parseFloat(document.getElementById("q"+game).value);
			
				
				var totalGame = (q * prixU).toFixed(2);
				document.getElementById( "total"+game ).value = totalGame.toString();
				document.getElementById( "displayTotal"+game ).innerHTML = totalGame.toString() + "€";
				
				var collectionTotal = document.getElementsByName("total");
				var total = 0;
				
				for( var i in collectionTotal ){
					if( collectionTotal[i].value ){
					total = (total + parseFloat(collectionTotal[i].value));
					}
				}
				if( total < 60 ){
					total += 6;
				document.getElementById( "Port" ).innerHTML = "6€";
				}else{
				document.getElementById( "Port" ).innerHTML = "offerts";
				}
				total = total.toFixed(2);
				document.getElementById( "Total" ).innerHTML = total.toString() + "€";
				
			if( Requete.responseText <= 0 ){
				if( view.style.display == "block" ){
					this.refreshCart();
				}else{
					document.location.href = "/vpc/basket.php";
				}
			}
		}
	}
	this.refreshCart = function(){
		
		this.Requete.SendRequest( "mycart", true );
		
	}
	
	this.addAdresseLivraison = function( form ){
		
		var VARS = ""
		for( var i in form.elements ){
			if( typeof(form.elements[i]) == "object" ){
				VARS += "&"+i+"="+encodeURIComponent(form.elements[i].value);
			}
		}
		
		//this.Requete.SendRequest( "addadresselivraison", true, "&game="+game );
			
	}
	this.refreshCart();
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
