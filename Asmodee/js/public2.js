function CalendarPublic( date_origine ){
	/*fixe les paramètres pouvant être édité dans l'éditor*/
	this.Content = Div("Agenda");
	this.date = new Date();
	if( date_origine ){
		this.date.setTime( date_origine );
	}
	
	var SelectionEnCours = false;
	
	var premiere_date_selectionnee = null; //pour la multiselection de dates
		
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
								Langs["Sunday"],
								Langs["Monday"],
								Langs["Tuesday"],
								Langs["Wednesday"],
								Langs["Thursday"],
								Langs["Friday"],
								Langs["Saturday"]
							);
	var NumOfDays= new Array(31,28,31,30,31,30,31,31,30,31,30,31);

	
	//Triage
	this.Barre_Triage = Div("titre");
		this.Content.appendChild( this.Barre_Triage );
		//Construction selecter mois année
		var aujourdhui = new Date();
		var array_selecter_months = new Array();
		var timestamp_aujourdhui = "";
		for( var annee = aujourdhui.getFullYear() ; annee <= aujourdhui.getFullYear() + 1 ; annee++ ){
			for( var m in MonthList ){
				var date_TMP = new Date(annee, m, 1 );
				if( m == aujourdhui.getMonth() && annee == aujourdhui.getFullYear() ){
					timestamp_aujourdhui = date_TMP.getTime();
				}
				array_selecter_months[date_TMP.getTime()] = MonthList[m]+" "+annee;
			}
		}
		
		if( date_origine ){
		var default_mois = date_origine;
		}else{
		var default_mois = timestamp_aujourdhui;
		}
		var selecter_months = Select( array_selecter_months , "selecter_months" , default_mois );
		this.Barre_Triage.appendChild( selecter_months );
		var selecter_dept = Select( "selectdepartements" , "selecter_dept" );
		this.Barre_Triage.appendChild( selecter_dept );
		//liens facebook Rss
		var rss = LinkSpan("rss","rss","evenements-rss.php");
		this.Barre_Triage.appendChild( rss );
														
	
	///Types
	var div_types = Div("types");
		this.Content.appendChild( div_types );
			
		
	var div_ajout = Div("Agenda_Ajout_Event");
		div_ajout.style.position = "absolute";
		document.body.appendChild( div_ajout );
		div_ajout.style.display = "none";
	
	
	this.Construct = function(){
		
		this.Infos = Div();
			this.Content.appendChild(this.Infos);
		this.Infos.className = "Informations";
		
		this.bottom = Div();
				
			var mois_bas = H( 1 , "-" ); mois_bas.className = "mois_bas";
			this.bottom.appendChild( mois_bas );
			var dept_bas = H( 1 , "-" ); dept_bas.className = "dept_bas";
			this.bottom.appendChild( dept_bas );
			var voir_medias = LinkSpan( "voir medias" );
				voir_medias.href = "/ressources/reportages/?past=";
				voir_medias.className = "voir_medias";
			this.bottom.appendChild( voir_medias );
			
			
			this.Content.appendChild(this.bottom);
		this.bottom.className = "bottom";
		
		this.Calendrier = Div("Agenda");
			this.Infos.appendChild(this.Calendrier);
			
	
			var month_bar = new Tableau(3);
				month_bar.Content.id = "Months";
				this.Calendrier.appendChild( month_bar.Content );
			var days_table = document.createElement('table');
				days_table.id = "Days";
				this.Calendrier.appendChild( days_table );
			var times_table = new Tableau(2);
				times_table.Content.id = "Times";
				this.Calendrier.appendChild( times_table.Content );
		
		
		
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
		}
		this.Construct_Days = function(){
			RemoveAllChilds(days_table);
			/////////////////////////////////////////////////////////////////
			//LISTE DES JOURS
			/////////////////////////////////////////////////////////////////
				var liste_dates = new Array();
				//Noms de jours
				//Premiers Jours vides
				var num_jours = NumOfDays[this.Month];
				
				
				var tbody = document.createElement('tbody');
				
				
				var tr1 = document.createElement('tr');
				var tr2 = document.createElement('tr');
				var tr3 = document.createElement('tr');
				
				
				if( this.DateFirstDay.getDay() != 1 ){
					
					var td1 = document.createElement('td');
					var td2 = document.createElement('td');
					var td3 = document.createElement('td');
					tr1.appendChild(td1); tr2.appendChild(td2); tr3.appendChild(td3); 
					
					for( var i = 2 ; i <= 6 ; i++ ){
						if( i != this.DateFirstDay.getDay() ){
							var td1 = document.createElement('td');
							var td2 = document.createElement('td');
							var td3 = document.createElement('td');
							tr1.appendChild(td1); tr2.appendChild(td2); tr3.appendChild(td3); 
						}else{
							break;
						}
					}
				}else{
					var i=1;
				}
				
				
				//Jours
				for( var j = 1 ; j <= num_jours ; j++ ){
					var td1 = document.createElement('td');
					var td2 = document.createElement('td');
					td2.setAttribute( "valign" , "top");
					var td3 = document.createElement('td');
						td1.className = "top_off";
						td2.className = "infos_off";
						td3.className = "bottom_off";
					tr1.appendChild(td1); tr2.appendChild(td2); tr3.appendChild(td3); 

						
						var date_lien_jour = new Date( this.Year , this.Month , j , this.Hours , this.Minutes , 00 );
						var lien_jour = LinkSpan( DayList[date_lien_jour.getDay()] +" "+ j);// +" "+MonthList[date_lien_jour.getMonth()].substr(0,4));
							lien_jour.className = "day";
							liste_dates.push( lien_jour );
							lien_jour.date = date_lien_jour;
								td2.appendChild( lien_jour );
							
							
							var premiere_date_selectionnee = false;
							var derniere_date_selectionnee = false;

							var evenements = Div('evenements');
								td2.appendChild( evenements );
							
							
						for( var t in this.ListeEvenements ){
								for( var e in this.ListeEvenements[t] ){
									
									var debut = new Date( this.Year , this.Month , j , 00 , 00 , 00 );
									var fin = new Date( this.Year , this.Month , j , 23 , 59 , 59 );
									
									if( t == "release" ){
										if( this.ListeEvenements[t][e]["date"] >= debut.getTime() && this.ListeEvenements[t][e]["date"] <= fin.getTime() ){
											
											//JOUR ON/////////////////////////////////
												td1.className = "top_on";
												td2.className = "infos_on";
												td3.className = "bottom_on";
											
											var titre = this.ListeEvenements[t][e]['titre'];
											var lien = LinkSpan( "» "+titre , "release" );
												lien.type = t;
												lien.debut = this.ListeEvenements[t][e]["date"];
												lien.fin = this.ListeEvenements[t][e]["date"];
												lien.idElement = this.ListeEvenements[t][e]["id"];
												lien.idProduct = this.ListeEvenements[t][e]["idProduct"];
												lien.date = debut;
												
												
												lien.titre = titre;
												lien.description = "";//this.ListeEvenements[t][e]['text'];
												lien.thumb = this.ListeEvenements[t][e]['thumb'];
												lien.fichier = this.ListeEvenements[t][e]['fichier'];
												
												lien.onmouseover = BoxEvenement;
												lien.onmouseout = BoxEvenement;
												
												evenements.appendChild( lien );
										}
									}else if( t == "event" ){
										var date_debut_event = this.ListeEvenements[t][e]["debut"];
										var date_fin_event = this.ListeEvenements[t][e]["fin"];
										
										if(
												date_debut_event >= debut.getTime() &&
												date_debut_event <= fin.getTime()
											){
											
											//JOUR ON/////////////////////////////////
												td1.className = "top_on";
												td2.className = "infos_on";
												td3.className = "bottom_on";
											if(typeof(this.ListeEvenements[t][e]['id']) == "undefined"){
												this.ListeEvenements[t][e]['id'] = this.ListeEvenements[t][e]['idEl'];
											}
											var titre = this.ListeEvenements[t][e]['objet'];
											var lien = LinkSpan( "» "+titre , "event" , "?event="+this.ListeEvenements[t][e]["id"]);
												lien.style.color = this.ListeEvenements[t][e]["couleur"];
												lien.couleur = this.ListeEvenements[t][e]["couleur"];
												lien.type = t;
												lien.titre = titre;
												lien.description = this.ListeEvenements[t][e]['text'];
												lien.thumb = this.ListeEvenements[t][e]['thumb'];
												lien.idElement = this.ListeEvenements[t][e]["id"];
												lien.debut = date_debut_event;
												lien.fin = date_fin_event;
												lien.date = debut;
												
												
												for( var l in liste_types ){
													if( liste_types[l]['id'] == this.ListeEvenements[t][e]['type'] ){
														lien.nom_type = Langs[ liste_types[l]['nom'] ];
														break;
													}
												}
												
												lien.onmouseover = BoxEvenement;
												lien.onmouseout = BoxEvenement;
												
												evenements.appendChild( lien );
										}
									}else{
									//JOUR ON/////////////////////////////////
										td1.className = "top_off";
										td2.className = "infos_off";
										td3.className = "bottom_off";
									}
									
								}
						}
					
					if( j+1 <= num_jours ){	
						if( i >= 7 ){
							tbody.appendChild( tr1 );
							tbody.appendChild( tr2 );
							tbody.appendChild( tr3 );
							
							var tr1 = document.createElement('tr');
							var tr2 = document.createElement('tr');
							var tr3 = document.createElement('tr');
							i = 1;
						}else{
							i++;
						}
					}else{
						
						if( i <= 6 ){
							
							for( var k = i+1 ; k <= 7 ; k++ ){
								var td1 = document.createElement('td');
								var td2 = document.createElement('td');
								var td3 = document.createElement('td');
								tr1.appendChild(td1); tr2.appendChild(td2); tr3.appendChild(td3); 
							}
							tbody.appendChild( tr1 );
							tbody.appendChild( tr2 );
							tbody.appendChild( tr3 );
						}
					}
					
					
				}
				//Derniers Jours vides
				/*
				if( i ){
					for( var i = i ; i <= 6 ; i++ ){
						var td1 = document.createElement('td');
						var td2 = document.createElement('td');
						var td3 = document.createElement('td');
							//JOUR ON/////////////////////////////////
								td1.className = "top_off";
								td2.className = "infos_off";
								td3.className = "bottom_off";
						tr1.appendChild(td1); tr2.appendChild(td2); tr3.appendChild(td3); 
					}
				}
				*/		
					tbody.appendChild( tr1 );
					tbody.appendChild( tr2 );
					tbody.appendChild( tr3 );
						days_table.appendChild( tbody );
		}
		this.ChangeDate = function( force_liste_events ){
				var type = "";
			if( this.id == "selecter_months" ){
				this.date = new Date();
					this.date.setTime( this.value );
			}else if( this.id == "selecter_dept" ){
				this.date = parent.date;
			}else if( this.id == "typeevents" ){
				this.date = parent.date;
				var type = "&type="+this.typeevent;
			}else if( this.id == "release" ){
				this.date = parent.date;
				var type = "&type=release";
			}else if( this.id == "tout" ){
				this.date = parent.date;
				var type = "&type=tout";
			}
			
			if( parent.Month != this.date.getMonth() || force_liste_events ){
				var date_debut = new Date( this.date.getFullYear() , this.date.getMonth() , 1 , 00 , 00 , 00 );
				var date_fin = new Date( this.date.getFullYear() , this.date.getMonth() , NumOfDays[this.date.getMonth()] , 23 , 59 , 59 );
				
				var Requete = new ObjXMLHttpRequest();
					Requete.SendRequest( "listeevents" , false , "date_debut="+(date_debut.getTime()/1000)+"&date_fin="+(date_fin.getTime()/1000)+"&departement="+selecter_dept.value+type );
					
					parent.ListeEvenements = eval('('+Requete.responseText+')');
					
			}
			parent.date = this.date;
			parent.CalculDate();
			
			
			parent.Construct();
			parent.Construct_Days();
			
			mois_bas.innerHTML = MonthList[this.date.getMonth()];
			dept_bas.innerHTML = selecter_dept.options[selecter_dept.selectedIndex].text;
		}
		var ChangeDate = this.ChangeDate;
		selecter_months.onchange = ChangeDate;
		selecter_dept.onchange = ChangeDate;
		
		//types evenements
		var Requete = new ObjXMLHttpRequest();
		Requete.SendRequest( "listetypesevents" , false );
		var liste_types = eval('('+Requete.responseText+')');
		
			div_types.appendChild( Text(Langs["Display"]+" : ") );
			
				//Voir Tout
				var lien = LinkSpan( Langs["AllEventTypes"]  , "tout");
					lien.onclick  = ChangeDate;
					lien.typeevent  = "";
				div_types.appendChild( lien );
				div_types.appendChild( Text(" | ") );
				
				//Voir Sorties
				var lien = LinkSpan( Langs["GamesReleases"]  , "release");
					lien.onclick  = ChangeDate;
					lien.typeevent  = "";
				lien.style.color = "#F57E16";
				div_types.appendChild( lien );
				div_types.appendChild( Text(" | ") );
			
			for( var i in liste_types ){
				var lien = LinkSpan( Langs[ liste_types[i]['nom'] ] , "typeevents" );
					lien.onclick  = ChangeDate;
					lien.typeevent  = liste_types[i]['id'];
				lien.style.color = liste_types[i]['couleur'];
				div_types.appendChild( lien );
				div_types.appendChild( Text(" | ") );
				
			}
		
		var parent = this;
		
		this.ChangeDate();
		
		
	}

	
	
	//DesactiveSelection(this.Content);
	this.Construct();
	
}
function BoxEvenement( ev ){
	ev = ev || window.event;
	if( ev.type == "mouseover" ){
		if( !document.getElementById("BoxEvenement") ) {
			var Pos = findPos(this.firstChild);
			
			var box = Div("BoxEvenement");
				document.body.appendChild( box );
				box.style.position = "absolute";
				box.style.display = "block";
				box.style.top = (Pos.y - Math.round(box.offsetHeight/2) ) + "px";
				box.style.left = (Pos.x + this.firstChild.offsetWidth - 2 ) + "px";
				
				box.lien_parent = this;
				
				box.onmouseover = function(){ return false; }
				box.onmouseout = EventsBoxEvenement;
				
			var texte = strip_tags(this.description);
			if( this.type == "release" ){
				box.innerHTML = "<h1 style='color:#F57E16'>"+this.titre+"<span>["+Langs['GamesReleases']+"]</span></h1><p>"+texte.substr(0,50)+"</p><img src='/ressources/images/versions/thumbs/"+this.thumb+"' /><a href='/ressources/jeux_versions/"+this.fichier+"'>"+Langs['SeeDetails']+"</a>";
			}else{
				box.innerHTML = "<h1 style='color:"+this.couleur+"'>"+this.titre+"<span>["+this.nom_type+"]</span></h1><p>"+texte.substr(0,50)+"</p><img src='/ressources/images/evenements/thumbs/"+this.thumb+"' /><a href='?event="+this.idElement+"'>"+Langs["More"]+"</a><a href='?event="+this.idElement+"'>"+Langs["SeeMap"]+"</a>";
			}
		}
	}else if( ev.type == "mouseout" ){
		if( ev.relatedTarget != document.getElementById("BoxEvenement") ){ // Autres Target : relatedTarget, fromElement, toElement
		document.body.removeChild( document.getElementById("BoxEvenement") );
		}
	}
}
function EventsBoxEvenement( ev ){
	ev = ev || window.event;
	if( ev.relatedTarget != this.lien_parent && !targetIsAChild( this , ev.relatedTarget ) && ev.relatedTarget != this ){
		
			document.body.removeChild( this );
	}
}
	// Autres Target : relatedTarget, fromElement, toElement
function targetIsAChild( element , evTarget){
	var collection = element.childNodes;
	if( collection ){
		
		for( var i in collection ){
			if( evTarget == collection[i] ){
				return evTarget;
			}else{
				if( targetIsAChild( collection[i] , evTarget ) ){
					return evTarget;
				}
			}
		}
	}
	return false;
}