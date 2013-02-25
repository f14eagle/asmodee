<?php
 include "func/dbservice.php";
 include "func/util.php";
 header("Content-Type: text/html; charset=utf-8");
 
 $conn = get_connection();
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<!-- saved from url=(0038)http://us.asmodee.com/ressources/news/ -->
<HTML xmlns="http://www.w3.org/1999/xhtml"><HEAD><TITLE>Asmodee editions : board games (Jungle Speed, Time's Up, Pokemon, The Settlers of Catan, Abalone, Werewolves of Miller's Hollow) | Asmodee Editions</TITLE>
<META content="text/html; charset=UTF-8" http-equiv=Content-Type><LINK 
rel=stylesheet type=text/css href="/style/default-us_2/stylesheet.css">
<META name=title 
content="Asmodee editions : board games (Jungle Speed, Time's Up, Pokemon, The Settlers of Catan, Abalone, Werewolves of Miller's Hollow)">
<META name=description content="">
<META name=publisher content=ASMODEE>
<META name=keywords 
content="asmodee, asmodée, éditions, jeux de société, party game, Jungle Speed, Time's Up, jeux de rôles, Pokémon, Les Colons de Catane, The Settlers of Catan, Abalone, Les Aventuriers du Rail, Ticket to Ride, Les loups garous de Thiercelieux, Werewolves of Miller's Hollow">
<META name=category content=jeux,internationnal,vente>
<META name=distribution content=global><!--<meta http-equiv="X-UA-Compatible" content="IE=7">-->
<META name=revisit-after content="15 day">
<META name=author content=ASMODEE>
<META name=abstract content="">
<META name=identifier-url content=http://www.asmodee.com/><!--<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Asmodee Web Site"/>-->
<SCRIPT language=javascript type=text/javascript>this.ListeDesLangues = ['be','de','en','es','fr','nl','uk','us'];this.Langs = eval('({\"Abbreviation\":\"Abbreviation (from)\",\"Abstract\":\"Resume\\/CV\",\"AccountValidated\":\"the member account has been validated\",\"AccountValidatedError\":\"account validation error\",\"AccountsManager\":\"user account manager\",\"Actions\":\"Actions\",\"Activites\":\"activities\",\"Activities\":\"activities\",\"Add\":\"add\",\"AddABonus\":\"add a bonus\",\"AddACategory\":\"add a category\",\"AddACountry\":\"add a country\",\"AddANews\":\"add an article\",\"AddASubCategoryIn\":\"Add a sub-category in\",\"AddATarget\":\"add a target\",\"AddAlbum\":\"add a photo album\",\"AddBonusManager\":\"add a bonus\",\"AddGroupProblem\":\"there was a problem  adding a user group.\",\"AddLang\":\"add a language\",\"AddModuleProblem\":\"there was a problem adding a module\",\"AddPersonTitle\":\"Add a person\",\"AddPhrase\":\"add a phrase\",\"AddTitleBonus\":\"Add a bonus\",\"AddTitleSubCate\":\"Add a sub-category in\",\"Add_Article\":\"add an article\",\"Add_Phrase\":\"add a sentence\",\"Add_Version\":\"add a game\",\"Administration\":\"administration\",\"Adress\":\"address\",\"AgeMinimum\":\"minimum age\",\"Album\":\"album\",\"All\":\"all\",\"AllCategories\":\"All categories\",\"April\":\"April\",\"ArticleCategories\":\"categories of articles\",\"AssociateWithMember\":\"associate this person with the member:\",\"August\":\"August\",\"Author\":\"Author\",\"AutorisationFailed\":\"you are not authorized to perform this action or access this page\",\"Avatar\":\"avatar\",\"Birthday\":\"birthday\",\"BlockThisGroup\":\"block this user group\",\"BlockThisUser\":\"block this user\",\"Blocked\":\"this element has been blocked\",\"BlockingProblem\":\"the element was not blocked because the attempt caused an error.\",\"Bonus\":\"Bonus\",\"BonusManager\":\"bonus manager\",\"BonusManagerTextExplanations\":\"The bonus module lets you add, modify and post information on bonuses.\",\"BonusManagerTextQuestion\":\"Do you want to add a bonus?\",\"BonusManagerTitleExplanations\":\"Module bonus. What is this?\",\"Books\":\"books\",\"BornCity\":\"city of birth\",\"BtnModifier\":\"Change\",\"ByAffinity\":\"by affinity\",\"ByType\":\"by type\",\"Cancel\":\"cancel\",\"Capacity\":\"capacity\",\"CartEmpty\":\"your basket is empty\",\"CategoriesManagerTitleExplanations\":\"category manager.  What is this?\",\"Category\":\"category\",\"CategoryManagerExplanations\":\"The category module allows you to add, change and delete all or parts of your documents\",\"CategoryName\":\"name of category\",\"ChooseEmail\":\"enter your email address\",\"ChooseLogin\":\"choose a login\",\"ChoosePassword\":\"enter a password\",\"ChooseStyle\":\"choose your style\",\"Citations\":\"citations\",\"City\":\"city\",\"ClickAddBonusManager\":\"Click to add a bonus\",\"ClickOnAddABonus\":\"Click to add a bonus\",\"ClickOnAddACategory\":\"click to add a category\",\"ClickOnAddANews\":\"\\\"Click on \\\"\\\"add an article\\\"\\\".\\\"\",\"ClickOnAddASubCategory\":\"\\\"click on \\\"\\\"add a sub-category\\\"\\\".\\\"\",\"Close\":\"close\",\"CodeEditor\":\"code editor\",\"Color\":\"colour\",\"Comment\":\"comment\",\"Compatibilities\":\"Compatibilities\",\"ConfigurationManager\":\"configure your profile\",\"ConfirmPassword\":\"confirm your password\",\"ConnectedSince\":\"connected since\",\"Content\":\"\",\"Coordonnees\":\"coordinates\",\"Copyright\":\"Copyright \\u00a9 2009 Asmod\\u00e9e. All rights reserved. Any form of copying is strictly prohibited.\",\"Country\":\"country\",\"CreateNewMember\":\"create a new member with this information\",\"Date\":\"date\",\"December\":\"December\",\"DefinitionDefaultModules\":\"Definition of  modules activated by default\",\"DelayedPublication\":\"delayed publication\",\"Delete\":\"delete\",\"DeleteMultiCate\":\"Delete multiple categories\",\"DeleteMultiCateReally\":\"Do you really want to delete all these categories?\",\"Description\":\"description\",\"Disconnection\":\"disconnection\",\"DiscoverOthersProducts\":\"discover other products like this\",\"DisplayOldDatas\":\"Display old Datas\",\"Donnees_Persos_Manager\":\"Personal Datas\",\"Donnees_Secure_Manager\":\"Secure datas\",\"Draft\":\"draft\",\"Edit\":\"edit\",\"EditModulesParameters\":\"Edit module parameters\",\"EditorYear\":\"Year of publication\",\"ElementAdded\":\"the element was added\",\"ElementDeleted\":\"the element was deleted\",\"EmailAdress\":\"email address\",\"EmailError\":\"email error\",\"EmailErrorText\":\"Verify your email address. It is not valid.\",\"EmailModification\":\"change email\",\"EmailModified\":\"email address modified\",\"EmailNotValid\":\"email address  not valid.\",\"EmailValidation\":\"confirm your email address\",\"EmptyCategory\":\"Sorry, the categories are empty\",\"EmptyImage\":\"you have not selected an image\",\"EmptySummary\":\"you have not filled in the resume\\/CV field\",\"EmptyText\":\"you have not filled in the text field\",\"EmptyTitle\":\"you have not filled in the title field\",\"English\":\"English\",\"EnterYourMail\":\"enter your email address\",\"Euros\":\"Euros\",\"Except for :\":\"Except for:\",\"Explanations\":\"Explanations\",\"February\":\"February\",\"Feed\":\"rss feed\",\"File\":\"file\",\"FindAGame\":\"find a game\",\"French\":\"French\",\"Friday\":\"Friday\",\"Game\":\"Entity rules (a group that owns the game)\",\"GameTime\":\"Game time in minutes\",\"Games\":\"Games\",\"GamesList\":\"games list\",\"GamesManager\":\"game manager\",\"GeneralsInformations\":\"general information\",\"GroupAdded\":\"the group has been added\",\"GroupModified\":\"the member has now changed group\",\"GroupsList\":\"list of user groups\",\"HideOldDatas\":\"Close the old data\",\"Home\":\"home\",\"IForgotMyPassword\":\"I have forgotten my password\",\"ImageBox1\":\"Image of opened box\",\"ImageBox2\":\"Image of the box\",\"ImagesOfBoxes\":\"box images\",\"IndBSince\":\"in the database since\",\"Infos_Membres\":\"members informations\",\"InstantAdress\":\"instant messaging\",\"Interests\":\"interests\",\"IsAEssentialGameFor\":\"is an essential game for\",\"IsAGameForThisAccessory\":\"is a game for this accessory\",\"IsAStandaloneExtensionFor\":\"is a standalone expansion for\",\"IsAnAccessoryFor\":\"is an accessory for\",\"IsAnExtension\":\"is an expansion for\",\"IsAnOptionalGameFor\":\"is an optional game for\",\"January\":\"January\",\"Jobs\":\"Jobs\",\"July\":\"July\",\"June\":\"June\",\"LangAdded\":\"the translation for this phrase has been added\",\"LangNotRegistered\":\"do you wish to keep this skin?\",\"LangsManager\":\"language manager\",\"Language\":\"language manager\",\"Links\":\"Informations\",\"Loading\":\"loading\\u2026\",\"Login\":\"login\",\"LoginPasswordProblem\":\"the login or password that you entered is not valid.\",\"ManagerGroupes\":\"group manager\",\"ManagerMembres\":\"member manager\",\"Manager_Groupes\":\"groups manager\",\"Manager_Membres\":\"members manager\",\"Manager_Permissions\":\"permissions manager\",\"March\":\"March\",\"May\":\"May\",\"MemberAccount\":\"member account\",\"MemberList\":\"member list\",\"MemberSpaceAccess\":\"Back Office\",\"Memorise\":\"memorise my login and password\",\"MemorisePermanent\":\"keep my session permanently open\",\"Mes_Bandeaux\":\"banners\",\"MobilePhone\":\"mobile phone\",\"ModificationGroupError\":\"error in modifying a member group\",\"Modified\":\"modified\",\"Modify\":\"modify\",\"ModifySubCategory\":\"Change the information in a sub-category\",\"ModifyTitleSubCate\":\"Change the information in a sub-category\",\"ModulesManager\":\"module manager\",\"Monday\":\"Monday\",\"Months\":\"month\",\"MoreDetails\":\"more details\",\"MostFrequentlyUsed\":\"Most used\",\"MsgDeleteMulti\":\"Delete multiple elements\",\"MsgDeleteMultiGame\":\"delete multiple games\",\"MsgDeleteMultiGameText\":\"delete multiple game texts\",\"MsgDeleteMultiText\":\"Do you really want to delete these elements?\",\"MsgDeleteProblem\":\"Problem with delete\",\"MsgDeleteProblemText\":\"One of the selected bonuses could not be deleted!\",\"MsgDeleteReally\":\"Do you really want to delete this?\",\"MsgElementListe\":\"Element already in the list\",\"MsgElementListeText\":\"This element has already been selected in the list!\",\"MsgErrorInsertion\":\"Insertion caused an error\",\"MsgErrorTextAddBonus\":\"Impossible to add this bonus!\",\"MsgErrorTextAddCategory\":\"Adding this category caused an error!\",\"MsgErrorTextAddLanguage\":\"The language has not been added!\",\"MsgErrorTextAddSubCategory\":\"The sub-category has not been added\",\"MsgErrorTextCheckFields\":\"Please check that the obligatory fields are all filled in\",\"MsgErrorTextDeleteABonus\":\"One of the selected bonuses could not be deleted!\",\"MsgErrorTextElement\":\"You have not selected anything!\",\"MsgErrorTextElementAlreadySelected\":\"This is already in the list!\",\"MsgErrorTextInvalidEmail\":\"Verify your email address. It is not valid!\",\"MsgErrorTextModifyLanguage\":\"The language was not changed!\",\"MsgErrorTextPublication\":\"Publication of this article has caused a problem!\",\"MsgErrorTitleAddBonus\":\"Problem adding the bonus\",\"MsgErrorTitleAddCategory\":\"Problem adding a category!\",\"MsgErrorTitleAddLanguage\":\"Error adding language!\",\"MsgErrorTitleAddSubCategory\":\"Problem adding the sub-category!\",\"MsgErrorTitleCheckFields\":\"Field not completed!\",\"MsgErrorTitleDeleteABonus\":\"Problem deleting a bonus!\",\"MsgErrorTitleElement\":\"Nothing selected!\",\"MsgErrorTitleInvalidEmail\":\"Invalid email address!\",\"MsgErrorTitleModifyLanguage\":\"Error changing language!\",\"MsgErrorTitlePublication\":\"Publication error!\",\"MsgFieldRequis\":\"Problem with obligatory fields!\",\"MsgFieldRequisText\":\"You have not completed all the required fields.\",\"MsgInsertionText\":\"Insertion successful\",\"MsgInsertionTitleOK\":\"Insertion ok\",\"MsgInsertionTitleOKSubCate\":\"This sub-category has been inserted\",\"MsgInsertionTitleTextOK\":\"The category has been inserted\",\"MsgNoGameSelected\":\"no game selected\",\"MsgNoGameSelectedText\":\"no game text selected\",\"MsgNoTypeSelected\":\"no type selected\",\"MsgNoTypeSelectedText\":\"\",\"MsgNotForgetProductCateText\":\"\",\"MsgNotForgetProductDescrpText\":\"\",\"MsgNotForgetProductLinksText\":\"\",\"MsgNotForgetProductReleaseText\":\"\",\"MsgPublicationError\":\"Publication error!\",\"MsgPublicationErrorText\":\"Publication caused an error.\",\"MsgPublicationSucces\":\"Publication ok!\",\"MsgPublicationSuccesText\":\"Publication of this version if going ok.\",\"MsgSelectGame\":\"select game\",\"MsgTextAddSubCategoryOk\":\"The sub-category has been added\",\"MsgTextBonusAdded\":\"The bonus has been added\",\"MsgTextDeleteABonus\":\"Do you really want to delete this bonus?\",\"MsgTextDeleteACategory\":\"Do you really want to delete this category?\",\"MsgTextDeleteASubCategory\":\"Do you really want to delete this sub-category?\",\"MsgTextDeleteCountry\":\"Do you really want to delete this country?\",\"MsgTextDeleteLanguage\":\"Do you really want to delete this language?\",\"MsgTextDeleteMultipleBonus\":\"Do you really want to delete multiple bonuses?\",\"MsgTextDeleteMultipleCategories\":\"Do you really want to delete this category?\",\"MsgTextPublicationOk\":\"Publication of this article is going ok\",\"MsgTitleAddSubCategoryOk\":\"Sub-category added\",\"MsgTitleBonusAdded\":\"Bonus added\",\"MsgTitleDeleteABonus\":\"Delete a bonus\",\"MsgTitleDeleteACategory\":\"Delete a category\",\"MsgTitleDeleteANews\":\"delete an article\",\"MsgTitleDeleteASubCategory\":\"Delete a sub-category\",\"MsgTitleDeleteCountry\":\"delete a country\",\"MsgTitleDeleteLanguage\":\"Delete language\",\"MsgTitleDeleteMultipleBonus\":\"Delete multiple bonuses\",\"MsgTitleDeleteMultipleCategories\":\"Delete multiple categories\",\"MsgTitlePublicationOk\":\"Publication successful!\",\"MsgTxtDeleteANews\":\"do you really want to delete the article?\",\"MyBrevesManager\":\"my briefs\",\"MyCart\":\"my basket\",\"MyParameters\":\"my parameters\",\"MyProfilManager\":\"my profile manager\",\"My_Articles\":\"articles\",\"Name\":\"name\",\"NameTitleSubCate\":\"Name of sub-category\",\"NewContinent\":\"new continent\",\"NewCountry\":\"new country\",\"NewEmailNotValidated\":\"new email not validated\",\"NewLanguage\":\"new language\",\"News\":\"news\",\"NewsManager\":\"news manager\",\"NewsManagerExplanations\":\"This manager allows you to add and change articles.\",\"NewsManagerQuestion\":\"Would you like to add an article?\",\"NewsManagerTitleExplanations\":\"Article manager. What is this?\",\"NoCategory\":\"no category\",\"NoElement\":\"No element\",\"NoElementText\":\"You have not selected anything!\",\"NoGameSelected\":\"no game selected\",\"NoLanguageInDatabase\":\"There are no languages in the database at the moment\",\"NoLanguageSelected\":\"No language selected\",\"NoOrdersInCart\":\"no orders in your basket\",\"NoRelatedArticle\":\"no linked articles\",\"NoResult\":\"no results\",\"NoSubscriptionsInCart\":\"no subscriptions in your basket\",\"NoTarget\":\"no target\",\"NormalEditor\":\"normal editor\",\"NotAssociated\":\"not associated with a member\",\"November\":\"November\",\"NumPlayer\":\"number of players\",\"October\":\"October\",\"OnLine\":\"online\",\"OperationError\":\"the operation you asked for does not exist\",\"OrderBy\":\"picked by\",\"OrderThisProduct\":\"order this product\",\"Orders\":\"orders\",\"PAF\":\"\",\"ParamNumber\":\"fix the number of elements to post\",\"ParamOrder\":\"ordered by\",\"ParamOrderNomAsc\":\"name: from A to Z\",\"ParamOrderNomDesc\":\"name: from Z to A\",\"ParamOrderNomDescTitle\":\"Name desc\",\"ParentCategory\":\"Parent category\",\"Password\":\"password\",\"PasswordConfirmation\":\"confirm this password\",\"PasswordConfirmationNotValid\":\"the password confirmation is not the same as the new password\",\"PasswordNotValid\":\"the password is not valid. Remember, it must be at least 6 characters long\",\"PasswordRegenerated\":\"the password has been regenerated and sent to the member\",\"PasswordSent\":\"the password has been sent\",\"Paying\":\"paying\",\"PeopleActiviteTitle\":\"Activity manager\",\"PeopleActiviteTitleText\":\"This manager lets you add and modify activities in order to associate them with each subsidiary\",\"PeopleActivitySectorTitle\":\"Do you want to add an activity sector?\",\"PeopleAddActivite\":\"Do you want to add an activity?\",\"PeopleAddActivityClick\":\"Click to add an activity\",\"PeopleAddActivitySectorTitle\":\"add an activity sector\",\"PeopleAddActivitySectorclick\":\"Click on add an activity sector\",\"PeopleAddContact\":\"add a contact\",\"PeopleAddContactManager\":\"Do you want to add a contact?\",\"PeopleAddJobManager\":\"Do you want to add a job?\",\"PeopleAddJobTitleManager\":\"Add a contact\",\"PeopleAddPersonManager\":\"Click to add a person\",\"PeopleAddPplTitle\":\"Click to add a person\",\"PeopleAddSecteur\":\"Add a sector\",\"PeopleAddTitleJob\":\"Add a job\",\"PeopleAdresse\":\"Address\",\"PeopleContact\":\"Contact\",\"PeopleEmail\":\"Email\",\"PeopleFax\":\"Fax\",\"PeopleFemme\":\"Woman\",\"PeopleGenre\":\"Genre\",\"PeopleHomme\":\"Man\",\"PeopleJobInvalid\":\"Invalid job!\",\"PeopleJobInvalidText\":\"\",\"PeopleJobManager\":\"Job manager\",\"PeopleJobTextManager\":\"The job manager lets you add and change jobs\",\"PeopleLinkMemberPersonManager\":\"Link a member to a person\",\"PeopleMemberAccountManager\":\"Does one of your contacts have a member account on this site?\",\"PeopleMemberAssocie\":\"Associated member\",\"PeopleModuleText\":\"The people module allows you to add, change and post information about your contacts. You can also link your contacts to members.\",\"PeopleModuleTitle\":\"People module. What is this?\",\"PeopleNeutre\":\"Neutral\",\"PeopleNom\":\"Name\",\"PeopleNomActivite\":\"name of activity\",\"PeoplePays\":\"Country\",\"PeoplePostal\":\"Postcode\",\"PeoplePrenom\":\"Forename\",\"PeopleSectorActivityTitle\":\"Activity sector\",\"PeopleSectorTitleManager\":\"Activity sector manager\",\"PeopleSectorTitleTextManager\":\"The manager lets you add and change activity sectors in  order to associate them with each subsidiary\",\"PeopleSiteWeb\":\"Web site\",\"PeopleTelFixe\":\"Home number\",\"PeopleTelMobile\":\"Mobile\",\"PeopleTitlePoste\":\"Job heading\",\"PeopleVille\":\"Town\",\"PeoplesManager\":\"people manager\",\"Permissions\":\"permissions\",\"PermissionsList\":\"list of permissions granted to user groups for each module\",\"PermissionsManager\":\"permissions manager\",\"PersonnalsInformations\":\"personal information\",\"Personnes\":\"persons\",\"Persons\":\"people\",\"Phone\":\"telephone\",\"PhotosManager\":\"Photo manager\",\"Place\":\"place\",\"Players\":\"players\",\"PlubishingInOrder\":\"Publication in progress\\u2026\",\"PostalCode\":\"postcode\",\"Preview\":\"preview\",\"Price\":\"Price\",\"ProductDatas\":\"Product datas\",\"ProductLists\":\"Lists\",\"Products\":\"products\",\"Profil\":\"profile\",\"ProfilManager\":\"profile manager\",\"Publication\":\"publication\",\"PublicationDate\":\"publication date\",\"PublicationError\":\"Publishing error!\",\"PublicationOk\":\"Publication ok!\",\"Publisher\":\"publisher\",\"Quantity\":\"Quantity\",\"Redaction\":\"editing\",\"Reference\":\"Reference\",\"Register\":\"register\",\"RegisteredSince\":\"registered since\",\"Release\":\"Release\",\"ReleaseManager\":\"release manager\",\"Religion\":\"religion\",\"RequestProblem\":\"the request encountered an error\",\"ReturnHome\":\"return to home page\",\"ReturnProfil\":\"return to profile\",\"Saturday\":\"Saturday\",\"SearchMember\":\"search for a member\",\"Secteurs\":\"business sectors\",\"SeeBox\":\"see the box\",\"SeeOpenedBox\":\"see opened box\",\"SelectGroup\":\"select a group\",\"SelectStyle\":\"select a skin\",\"SelectUser\":\"select a user\",\"SelectYourLanguage\":\"select your preferred language\",\"SendingPasswordError\":\"error sending password\",\"September\":\"September\",\"SignUp\":\"sign up\",\"SigninOk\":\"signin successful\",\"SigninProblem\":\"your signin generated an error\",\"SkinNotRegistered\":\"would you like to keep this skin?\",\"Societes\":\"companies\",\"SouscriptionManager\":\"subscription manager\",\"Spanish\":\"Spanish\",\"Statut\":\"statute\",\"StyleModified\":\"the skin has been modified\",\"StylesConfiguration_Manager\":\"configuration style\",\"StylesManager\":\"style manager\",\"SubCategory\":\"sub-category\",\"SubCategoryName\":\"Name of sub-category\",\"SubmitInformations\":\"submit information\",\"Subscribe\":\"subscribe\",\"Subscription Time Limit\":\"Subscription time limit\",\"Subscriptions\":\"subscriptions\",\"SuivisManager\":\"trace users\",\"Summary\":\"resume\\/CV\",\"Sunday\":\"Sunday\",\"Target\":\"target\",\"TextGestionGame\":\"This manager allows you to add and modfiy games and to associate them with families\",\"TextsList\":\"list of texts\",\"ThisGame\":\"This game\",\"Thursday\":\"Thursday\",\"Title\":\"title\",\"TitleActionManager\":\"Do you want to do something?\",\"TitleAddCate\":\"Add a category\",\"TitleAddCateModule\":\"Click to add a category\",\"TitleAddGame\":\"Would you like to add a game?\",\"TitleAddSubCateManager\":\"Click to add a sub-category title\",\"TitleBonusAddTextManager\":\"Do you want to add a bonus?\",\"TitleBonusManager\":\"Module bonus. What is this?\",\"TitleBonusTextManager\":\"The module bonus lets you  add modify and post information about bonuses.\",\"TitleCate\":\"Name of category\",\"TitleCateModule\":\"Category module. What is this?\",\"TitleCateModuleText\":\"The module category lets you add, change and delete headings associated with your documents\",\"TitleDefault\":\"Default Title (title on the box)\",\"TitleDescription\":\"Description\",\"TitleGestionGame\":\"game manager\",\"TitleParentCate\":\"Parent category\",\"TitleSelectCompatibility\":\"Select the compatibilities\",\"TitleSelectCompatibilityText\":\"Compatibilities\",\"TitleSelectRelease\":\"Release schedule\",\"TitleSendPassword\":\"Re-send your password\",\"TitleSendRegeneratedPassword\":\"Change and re-send your password\",\"Tools\":\"tools\",\"TournoiName\":\"name of tournament\",\"TournoisManager\":\"tournament manager\",\"Translation\":\"translation\",\"Tuesday\":\"Tuesday\",\"TxtModifEmailAdress\":\"Change your current email address\",\"TxtModifEmailAdress2\":\"Changing your email address requires validation. You will receive an email at the new address\",\"TxtModifLang\":\"changing your current language\",\"TxtModifPassword\":\"Change your password\",\"TxtModifPassword2\":\"Change your password. Remember it must be at least 6 characters long\",\"Type\":\"type\",\"UinGroup\":\"you are part of the group\",\"UseTitleDefault\":\"Use the default title\",\"Valid\":\"confirm\",\"ValidationEmailOk\":\"you have confirmed your email address\",\"ValidationEmailProblem\":\"problem sending email confirmation\",\"ValidationMailProblem\":\"an error occurred while sending your email confirmation\",\"ValidationMailProblemSeveralMembers\":\"this email address is used by several member accounts\",\"ValidationMailSent\":\"we have sent you a confirmation email\",\"ValidationOk\":\"you have confirmed your email address\",\"ValidationProblem\":\"you have still not validated your account\",\"WebSites\":\"web sites\",\"Wednesday\":\"Wednesday\",\"Weeks\":\"weeks\",\"WordsCode\":\"phrase code\",\"Year\":\"year\",\"YouAreConnectedAs\":\"you are connected as\",\"YouForgotYourPassword\":\"have you forgotten your password?\",\"added\":\"added\",\"de\":\"German\",\"en\":\"English\",\"es\":\"Spanish\",\"fr\":\"French\",\"link to the release\":\"Link to release\",\"link to the subscription\":\"Link to subscription\",\"nl\":\"Dutch\",\"PeopleSocieteTitle\":\"Add a company\",\"PeopleAddFiliale\":\"Add a subsidiary\",\"PeopleSociety\":\"society\",\"PeopleActivity\":\"Business Line\",\"PeopleRayonAction\":\"scope of action\",\"NoResultRecherche\":\"Your search was unsuccessful. Unfortunately, we have no game or article for your request. By default, therefore we redirect you to the complete list of our games.\",\"NoResultArticlesTri\":\"This choice of sorting has returned no results. Unfortunately, we have no game or article for your request. By default, therefore we redirect you to the complete list of our news.\",\"NoResultJeuxTri\":\"This choice of sorting has returned no results. Unfortunately, we have no game or article for your request. By default, therefore we redirect you to the complete list of our games.\",\"ok\":\"ok\",\"Authors\":\"Authors:\",\"Publishers\":\"Publishers:\",\"Next\":\"Read More\",\"CateNews\":\"News\",\"CateAccueil\":\"Home\",\"CateJeux\":\"Games\",\"QuiSommeNous\":\"About us\",\"ContactMenu\":\"Contact\",\"MentionLegale\":\"Legale Notice\",\"ArticlePlusConsulte\":\"\",\"ToutesLesNews\":\"All news\",\"TITLESITENAME\":\"Asmodee editions : board games (Jungle Speed, Time\'s Up, Pokemon, The Settlers of Catan, Abalone, Werewolves of Miller\'s Hollow)\",\"AccederProduit\":\"\",\"FicheProduit\":\"Game Details\",\"SeeDetails\":\"see details\",\"Everybody\":\"everybody\",\"Owner\":\"owner\",\"IncreasingDate\":\"increasing date\",\"DateDescending\":\"date descending\",\"GameEntity\":\"game entity\",\"GameEntityIncreasing\":\"game entity increasing\",\"GameEntityDescending\":\"game entity descending\",\"GameIncreasing\":\"game increasing\",\"GameDescending\":\"game descending\",\"NbToDisplay\":\"number of items to display\",\"PublicationSite\":\"publication site\",\"Offline\":\"off-line\",\"MsgDeleteVersionTitle\":\"removing a game\",\"MsgDeleteVersionText\":\"Do you really want to delete this game ?\",\"Search\":\"search\",\"OrderAlphabeticallyIncreasing\":\"alphabetically increasing\",\"OrderAlphabeticallyDescending\":\"alphabetically descending\",\"ArticleTitleIncreasing\":\"title increasing\",\"ArticleTitleDescending\":\"title descending\",\"WrittenLanguage\":\"written language\",\"EstAuteurDe\":\"is the author of\",\"EstEditorDe\":\"is editor of\",\"Keywords\":\"keywords\",\"LastImages\":\"Last images\",\"EAN\":\"EAN\",\"Back\":\"back\",\"IfYouLikeYoullLike\":\"If you like, you\'ll liked\",\"PeopleDept\":\"Dept\",\"Event\":\"event\",\"Version\":\"game\",\"Department\":\"department\",\"Events\":\"events\",\"Welcome\":\"Welcome to the \\u201cAsmodee US\\u201d website. This company is part of the Asmodee Group\",\"YouAreHere\":\"You are here\",\"MENTION\":\"\",\"SOCIETENAME\":\"\",\"SinceTime\":\"From : \",\"TimeGame\":\"Gametime : \",\"YearsTime\":\" years\",\"MinuteGame\":\" minutes\",\"France\":\"France\",\"Germany\":\"Germany\",\"Spain\":\"Spain\",\"USA\":\"United States\",\"Continuer\":\"continue\",\"DirectAccess\":\"Direct access to a game\",\"NewWindow\":\"open the link in a new window\",\"FilterDept\":\"Select by state\",\"TitleEngineShop\":\"Enter the name of a city, a state, or a store.\",\"listFullShop\":\"Search by State\",\"ListeBoutique\":\"> List of retailers\",\"Belgium\":\"Belgium\",\"CalendarManager\":\"calendar\",\"ReportsManager\":\"reports\",\"InscriptionsManager\":\"registration forms\",\"DeleteAll\":\"delete all\",\"EventsManager\":\"Events manager\",\"DateComplement\":\"date complement\",\"RepeatEvent\":\"repeat event\",\"Every\":\"every\",\"Days\":\"days\",\"Years\":\"years\",\"TypeOfEvent\":\"type of event\",\"Object\":\"object\",\"PhoneNumber\":\"phone number\",\"StandardForm\":\"standard form\",\"ComingSoon\":\"Coming soon\",\"ViewIn\":\"view in\",\"PhotosReportsLinked\":\"photos reports linked\",\"More\":\"More\",\"SeeMap\":\"see map\",\"AdditionalsInformations\":\"addictionnals informations\",\"FirstName\":\"first name\",\"Send\":\"send\",\"RegistrationForm\":\"registration form\",\"Display\":\"display\",\"AllDepartments\":\"All departments\",\"shoplistorder\":\"Store listed in alphabetical order.\",\"NousYEtions\":\"We were there\",\"VideosReportsLinked\":\"video reports linked\",\"Animations\":\"Animations\",\"Salons\":\"Shows\",\"Tournois\":\"Tournaments\",\"GamesReleases\":\"Games releases\",\"AllEvents\":\"All events\",\"MsgSocietyManager\":\"Le module peoples, qu\'est-ce que c\'est ?\",\"MsgSocietyTextManager\":\"Le module soci\\u00e9t\\u00e9s vous permet d\'ajouter, modifier et d\'afficher des informations sur les diff\\u00e9rentes soci\\u00e9t\\u00e9s et filiales du secteur.\",\"PeopleFilialeAdd\":\"Vous voulez ajouter une soci\\u00e9t\\u00e9 ?\",\"PeopleFilialeAddClick\":\"Cliquez ici pour ajouter une filiale.\",\"LISTEBOUTIQUElink\":\"\",\"Listeboutiquename\":\"\",\"Result\":\"\",\"DescRssNews\":\"Retrouvez les derni\\u00e8res news d\'Asmodee. Sorties de jeux, \\u00e9v\\u00e8nements du monde du jeu, etc.\",\"TitreRssNews\":\"News Asmodee\",\"SeeOnFacebook\":\"Voir cet \\u00e9v\\u00e8nement sur Facebook\",\"Contact\":\"contact\",\"Map\":\"map\",\"MapInfo\":\"\",\"AllEventTypes\":\"all\",\"DuMois\":\"du mois\",\"Styles\":\"Styles\",\"StylesDefault\":\"Style by default\",\"StylesDomains\":\"Style by default\",\"TimeFlash\":\"Flash Time in second (Default: 10s) :\",\"DomaineSelection\":\"Select your Domain :\",\"Page\":\"Page :\",\"SelectZone\":\"Select your Zone :\",\"NOMLANG\":\"nomUS\",\"LastAction\":\"Last Hit\",\"ArticleChoice\":\"Choose an Article\",\"SearchArticle\":\"Search an Article\",\"ListArticle\":\"Full list of Article \",\"ProductChoice\":\"Choose a Product :\",\"SearchGame\":\"Search a Game\",\"Gamelist\":\"Games List\",\"LinkArticle\":\"Link an Article\",\"LinkProduct\":\"Link a Product\",\"deArticle\":\"de\",\"toArticle\":\"to\",\"Month\":\"month\",\"UrlFacebook\":\"Url Facebook\",\"SeeReport\":\"see the report\",\"NextPhoto\":\"next\",\"PreviousPhoto\":\"prev\",\"imm\\u00e9diat\":\"now\",\"Welcomebar\":\"Welcome\",\"VIDEOS\":\"\\/ressources\\/video\\/\",\"Mes_Videos\":\"Video Manager\",\"CafeTour\":\"Caf\\u00e9 Tour\",\"BusDesJeux\":\"Bus des Jeux\",\"Festivals\":\"Festivals\",\"AnimationsMagasins\":\"\",\"SliderCalendar\":\"events slider\",\"EventObjectIncreasing\":\"event subject increasing\",\"EventObjectDescending\":\"event subject descending\",\"VillageJeux\":\"Village des Jeux\",\"EventsMap\":\"Events map\",\"RSS_Manager\":\"\",\"Sites_Manager\":\"\",\"MsgDeleteGameText\":\"\",\"MsgDeleteFeedText\":\"\",\"MsgDeleteFeedTitle\":\"\",\"VPCGamesDatas\":\"vpc games datas\",\"MailsSent\":\"mails sent for vpc\",\"ActionIncreasing\":\"\\u2228 action \\u2228\",\"ActionDescending\":\"\\u2227 action \\u2227\",\"EmailIncreasing\":\"\\u2228 email \\u2228\",\"EmailDescending\":\"\\u2227 email \\u2227\",\"PriceIncreasing\":\"\\u2227 price \\u2227\",\"PriceDescending\":\"\\u2228 price \\u2228\",\"Indifferent\":\"\",\"InDispo\":\"\",\"Dispo\":\"\",\"Disponibility\":\"\",\"EANIncreasing\":\"\",\"EANDescending\":\"\",\"ReferenceDescending\":\"\",\"ReferenceIncreasing\":\"\",\"Commandes\":\"Orders\",\"VPCManager\":\"VPC Manager\",\"ConfirmEmail\":\"\",\"vpcChoiceON\":\"Add to the shop\",\"vpcChoiceOFF\":\"Remove to the shop\",\"ChoosePasswordNew\":\"New password :\",\"ConfirmPasswordNew\":\"type new password again :\",\"ConditionVente\":\"\",\"FraisPort\":\"Shipping costs\",\"Taxes\":\"Taxes\",\"uk\":\"British\",\"it\":\"italian\",\"creationManager\":\"create campagne\",\"listingManager\":\"campagnes manager\",\"Constantes_Manager\":\"constants manager\",\"Mails_Manager\":\"mails manager\",\"Liste_Modules\":\"modules list\",\"Add_Modules\":\"add modules\",\"Modules_Default\":\"modules manager\",\"ErrorLiaison\":\"A problem has been detected, you need to check the fields (pictures   texts) which must not be empty.\",\"SuccessLiaison\":\"Congratulation ! The element has been added with success\",\"England\":\"England\",\"headerInfo\":\"\",\"web_stats\":\"Web stats\",\"video_stats\":\"Video stats\",\"SAV\":\"Customer service\"})');consolelog = function(argcons) {
		var Niveau = 99;
		if (Niveau<5 & !IE) {	console.log(argcons);}	
	}</SCRIPT>

<SCRIPT language="javascript" type="text/javascript" src="js/composants.js"></SCRIPT>

<SCRIPT language=javascript type=text/javascript>
	
	var today = new Date();
	today.setTime( today.getTime() );
	
	var expires_date = new Date( today.getTime() + 86400000 );
	
	document.cookie = "js=active;expires=" + expires_date.toGMTString() + ";path=/;domain=";
</SCRIPT>

<SCRIPT language="javascript" type="text/javascript" src="js/public.js"></SCRIPT>

<SCRIPT language="javascript" type="text/javascript" src="js/public2.js"></SCRIPT>

<SCRIPT language="javascript" type="text/javascript" src="js/swfobject.js"></SCRIPT>

<SCRIPT language="javascript" type="text/javascript" src="js/json.js"></SCRIPT>

<SCRIPT language="javascript" type="text/javascript" src="js/securite.js"></SCRIPT>

<SCRIPT language="javascript" type="text/javascript" src="js/xmlhttprequest.js"></SCRIPT>

<META name=GENERATOR content="MSHTML 8.00.7600.17185"></HEAD>
<BODY id=body>
<DIV id=backbody>
<DIV id=event2></DIV>
<DIV id=pubasmo></DIV>
<STYLE>#fondhomeauto {
	POSITION: absolute; TEXT-ALIGN: center; MARGIN: auto; WIDTH: 100%; DISPLAY: block; BACKGROUND: url(/ressources/images/custom/originals/custom_1165.png) no-repeat center top; HEIGHT: 1176px; TOP: 151px; LEFT: -5px
}
</STYLE>

<DIV id=fondhomeauto></DIV>
<DIV id=Container>
<DIV 
style="BACKGROUND-IMAGE: url(/ressources/images/custom/custom_1041.jpg); BACKGROUND-REPEAT: no-repeat" 
id=SiteTitle>
<UL class=langues>
  <LI id=fr><A 
href="http://fr.asmodee.com/?previous=us"><SPAN>FR</SPAN></A></LI>
  <LI id=us_on><SPAN></SPAN></LI>
  <LI id=es><A 
href="http://es.asmodee.com/?previous=us"><SPAN>ES</SPAN></A></LI>
  <LI id=de><A 
href="http://de.asmodee.com/?previous=us"><SPAN>DE</SPAN></A></LI>
  <LI id=uk><A 
href="http://uk.asmodee.com/?previous=us"><SPAN>UK</SPAN></A></LI>
  <LI id=be><A href="javascript:LangBE();"><SPAN>BE-fr</SPAN></A></LI>
  <LI id=nl><A 
href="http://nl.asmodee.com/?previous=us"><SPAN>NL</SPAN></A></LI></UL><A 
href="http://us.asmodee.com/">
<DIV 
style="Z-INDEX: 50; POSITION: absolute; WIDTH: 150px; HEIGHT: 150px; TOP: 25px; LEFT: 20px"></DIV></A><A 
href="http://us.asmodee.com/ressources/jeux_versions/dixit-journey.php">
<DIV 
style="Z-INDEX: 50; POSITION: absolute; WIDTH: 500px; HEIGHT: 100px; TOP: 10px; LEFT: 200px"></DIV></A>
<DIV style="DISPLAY: none" id=langBe>
<DIV id=Changement_Langue_Background_Belge></DIV>
<TABLE id=Changement_Langue_BE>
  <TBODY>
  <TR>
    <TD>
      <DIV id=message><SPAN id=attentebelge></SPAN><A 
      href="http://benl.asmodee.com/?previous=us">
      <DIV id=belgediv1></DIV></A><A href="http://be.asmodee.com/?previous=us">
      <DIV id=belgediv2></DIV></A></DIV></TD></TR></TBODY></TABLE></DIV><A 
href="http://us.asmodee.com/ressources/trap/antivilain.php"><IMG 
src="ressources/images/1x1.gif"></A> 
<UL id=Navigation>
  <LI><A class=home href="/index.php"><SPAN>home</SPAN></A></LI>
  <LI><A class=news_selected href="/news.php"><SPAN>news</SPAN></A></LI>
  <LI><A class=jeux href="/jeux.php"><SPAN>Games</SPAN></A></LI>
  <LI><A class=videos 
  href="http://us.asmodee.com/ressources/video/"><SPAN>Videos</SPAN></A></LI>
  <LI><A class=societe 
  href="http://us.asmodee.com/ressources/footercontenu/index.php?mode=quisommesnous"><SPAN></SPAN></A></LI></UL>
<FORM id=Recherche method=get name=Recherche action=/ressources/recherche/>
<TABLE class=champ_recherche align=right>
  <TBODY>
  <TR>
    <TD vAlign=center><INPUT name=text></TD>
    <TD vAlign=center><A id=bouton_recherche 
      href="javascript:document.Recherche.submit()"><SPAN>search</SPAN></A></TD></TR></TBODY></TABLE></FORM>
<DIV id=leftbar></DIV></DIV>
<DIV id=Main>
<DIV class=MiniNavig>
<TABLE valign="middle">
  <TBODY>
  <TR>
    <TD>You are here : </TD>
    <TD><A href="http://us.asmodee.com/index.php">Home</A></TD>
    <TD>
      <DIV class=fleche></DIV></TD>
    <TD>news</TD></TR></TBODY></TABLE></DIV>
<DIV id=sidebarright>
<DIV id=sidebarfond>
<DIV id=Cart></DIV>
<?php include("block_hotnews.php") ?>
</DIV>
<DIV id=sidebarfond2>
<DIV id=clear></DIV>
<DIV id=listecontent>
<DIV id=listetophome>
<DIV id=listeVideo class=listeVideo>
<DIV style="MIN-HEIGHT: 0px" id=selectionlisteVideo><SPAN></SPAN></DIV>
<DIV style="OVERFLOW: hidden" id=listeTopVideo>
<DIV id=textvideo><A 
href="http://us.asmodee.com/ressources/video/?video=173"><SPAN 
id=titreVideo>Jungle Speed</SPAN><SPAN id=txtvideohome>The fast and furious 
game...</SPAN></A></DIV>
<DIV id=picvideocontent><A 
href="http://us.asmodee.com/ressources/video/?video=173"><SPAN 
id=apercuvideo><SPAN class=imgselection><IMG 
src="news_files/custom_823.jpg"></SPAN></SPAN></A></DIV></DIV></DIV>
<DIV style="MIN-HEIGHT: 30px" id=listeTopMain2 class=listeTop10>
<DIV style="MIN-HEIGHT: 30px" id=selectionlisteTop><SPAN></SPAN></DIV>
<DIV style="OVERFLOW: hidden" id=listeTop10>
<UL>
  <LI><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//jungle-speed_3.php"><IMG 
  src="news_files/versions_1178.png"></A><SPAN><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//jungle-speed_3.php">Jungle 
  Speed</A></SPAN><SPAN id=imglist></SPAN>
  <DIV style="CLEAR: both"></DIV>
  <LI><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//the-werewolves-of-miller-hollow.php"><IMG 
  src="news_files/versions_1175.jpg"></A><SPAN><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//the-werewolves-of-miller-hollow.php">Werewolves 
  of Miller's Hollow</A></SPAN><SPAN id=imglist></SPAN>
  <DIV style="CLEAR: both"></DIV>
  <LI><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//ghost-stories_2.php"><IMG 
  src="news_files/versions_1190.jpg"></A><SPAN><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//ghost-stories_2.php">Ghost 
  Stories</A></SPAN><SPAN id=imglist></SPAN>
  <DIV style="CLEAR: both"></DIV>
  <LI><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//claustrophobia_2.php"><IMG 
  src="news_files/versions_1650.jpg"></A><SPAN><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//claustrophobia_2.php">Claustrophobia</A></SPAN><SPAN 
  id=imglist></SPAN>
  <DIV style="CLEAR: both"></DIV></LI></UL></DIV></DIV>
<DIV style="MIN-HEIGHT: 30px" id=listeTopMain class=listeTopPrime>
<DIV style="MIN-HEIGHT: 30px" id=selectionlistePrime><SPAN></SPAN></DIV>
<DIV id=listeTopPrime>
<UL>
  <LI><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//7-wonders_4.php"><IMG 
  src="news_files/versions_2252.jpg" width=50></A><SPAN><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//7-wonders_4.php">7 
  Wonders</A></SPAN><SPAN id=imglist></SPAN>
  <DIV style="CLEAR: both"></DIV>
  <LI><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//dixit_2.php"><IMG 
  src="news_files/versions_1169.png" width=50></A><SPAN><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//dixit_2.php">Dixit</A></SPAN><SPAN 
  id=imglist></SPAN>
  <DIV style="CLEAR: both"></DIV>
  <LI><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//dice-town_3.php"><IMG 
  src="news_files/versions_1170.jpg" width=50></A><SPAN><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//dice-town_3.php">Dice 
  Town</A></SPAN><SPAN id=imglist></SPAN>
  <DIV style="CLEAR: both"></DIV>
  <LI><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//skull-roses_5.php"><IMG 
  src="news_files/versions_2371.jpg" width=50></A><SPAN><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/jeux_versions//skull-roses_5.php">Skull 
  &amp; Roses</A></SPAN><SPAN id=imglist></SPAN>
  <DIV style="CLEAR: both"></DIV></LI></UL></DIV></DIV></DIV>
<DIV id=endliste></DIV></DIV>
<DIV id=clear></DIV>
<DIV id=encartpub>
<UL>
  <LI>
  <OBJECT width=255 height=331><PARAM NAME="allowFullScreen" VALUE="true"><PARAM NAME="wmode" VALUE="transparent"><PARAM NAME="menu" VALUE="false">
   <embed width='255' height='331' src='/swfs/home/asmodeePub.swf?domaine=9' 
  loop='false' autostart='true' wmode='transparent'/></OBJECT></LI></UL>
<SCRIPT language=javascript type=text/javascript>ListOpenBoxVideo2();</SCRIPT>
</DIV></DIV></DIV>
<DIV id=welcome>Welcome to the “Asmodee US” website. This company is part of the 
Asmodee Group</DIV>
<DIV class=MainArticle>
<UL class=Dernieres_News><A id=rss 
  href="http://us.asmodee.com/ressources/news/news-rss.php"><SPAN>rss</SPAN></A>
  <LI style="POSITION: relative"><A class=nextcontent3 
  href="http://us.asmodee.com/ressources/articles/gentlemen-thieves-become-the-king-of-burglars.php">
  <H1>Gentlemen Thieves, become the King of Burglars!</H1></A><A 
  class=nextcontent3 
  href="http://us.asmodee.com/ressources/articles/gentlemen-thieves-become-the-king-of-burglars.php"><IMG 
  src="news_files/articles_1751.jpg"></A>
  <P><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/articles/gentlemen-thieves-become-the-king-of-burglars.php">The 
  renowned thief, the infamous enemy of authority, who else could inspire 
  Gentlemen...</A></P><A class=lienfiche 
  href="http://us.asmodee.com/ressources/articles/gentlemen-thieves-become-the-king-of-burglars.php"><SPAN>Read 
  More</SPAN></A>
  <DIV class=clear></DIV></LI>
  <LI><A class=nextcontent3 
  href="http://us.asmodee.com/ressources/articles/city-of-horror-contest.php">
  <H1>City of Horror Contest</H1></A><A class=nextcontent3 
  href="http://us.asmodee.com/ressources/articles/city-of-horror-contest.php"><IMG 
  src="news_files/articles_1749.jpg"></A>
  <P><A class=nextcontent2 
  href="http://us.asmodee.com/ressources/articles/city-of-horror-contest.php">Create 
  a card for City of HorrorRepos Production gives you the opportunity to 
  create...</A></P><A class=lienfiche 
  href="http://us.asmodee.com/ressources/articles/city-of-horror-contest.php"><SPAN>Read 
  More</SPAN></A>
  <DIV class=clear></DIV></LI></UL>
<DIV id=liste_boutons_article>
<UL>
  <LI><A class=fullnews_selected 
  href="http://us.asmodee.com/ressources/news/?cate=full"><SPAN>tout</SPAN></A></LI>
  <LI><A class=actualitesnews 
  href="http://us.asmodee.com/ressources/news/?cate=actualites"><SPAN>actualites</SPAN></A></LI>
  <LI><A class=voirnews 
  href="http://us.asmodee.com/ressources/news/?cate=voir"><SPAN>avoir</SPAN></A></LI>
  <LI><A class=fairenews 
  href="http://us.asmodee.com/ressources/news/?cate=faire"><SPAN>afaire</SPAN></A></LI>
  <LI><A class=scoopnews 
  href="http://us.asmodee.com/ressources/news/?cate=scoop"><SPAN>scoop</SPAN></A></LI>
  <LI><A class=reportagenews 
  href="http://us.asmodee.com/ressources/news/?cate=reportage"><SPAN>reportage</SPAN></A></LI></UL></DIV>
<DIV class=clearleft></DIV>
<UL class=Categories_News>
  <LI><SPAN class=categorie_news>[To see]</SPAN><SPAN 
  class=date>31-01-2013</SPAN><A 
  href="http://us.asmodee.com/ressources/articles/city-of-horror-faq.php"><IMG 
  src="news_files/articles_1741.jpg"></A><A 
  href="http://us.asmodee.com/ressources/articles/city-of-horror-faq.php">
  <H1>City of Horror FAQ</H1></A><A 
  href="http://us.asmodee.com/ressources/articles/city-of-horror-faq.php">
  <P>The English FAQ for City of Horror is now available: City of Horror FAQIf 
  you didn't...</P></A><A class=lienfiche_categories 
  href="http://us.asmodee.com/ressources/articles/city-of-horror-faq.php"><SPAN>» 
  Read More</SPAN></A></LI>
  <LI><SPAN class=categorie_news>[Upcoming]</SPAN><SPAN 
  class=date>27-01-2013</SPAN><A 
  href="http://us.asmodee.com/ressources/articles/archipelago-solo-expansion-release-february-27.php"><IMG 
  src="news_files/articles_1736.png"></A><A 
  href="http://us.asmodee.com/ressources/articles/archipelago-solo-expansion-release-february-27.php">
  <H1>Archipelago solo expansion...</H1></A><A 
  href="http://us.asmodee.com/ressources/articles/archipelago-solo-expansion-release-february-27.php">
  <P>Live your adventures with famous discoverers!With this expansion, you can 
  play...</P></A><A class=lienfiche_categories 
  href="http://us.asmodee.com/ressources/articles/archipelago-solo-expansion-release-february-27.php"><SPAN>» 
  Read More</SPAN></A></LI>
  <LI><SPAN class=categorie_news>[Upcoming]</SPAN><SPAN 
  class=date>27-01-2013</SPAN><A 
  href="http://us.asmodee.com/ressources/articles/room-25-release-27-february.php"><IMG 
  src="news_files/articles_1735.jpg"></A><A 
  href="http://us.asmodee.com/ressources/articles/room-25-release-27-february.php">
  <H1>Room 25 release: February 27</H1></A><A 
  href="http://us.asmodee.com/ressources/articles/room-25-release-27-february.php">
  <P>In this futurist reality TV show you are gambling with your life, trapped 
  in a prison...</P></A><A class=lienfiche_categories 
  href="http://us.asmodee.com/ressources/articles/room-25-release-27-february.php"><SPAN>» 
  Read More</SPAN></A></LI>
  <LI><SPAN class=categorie_news>[Upcoming]</SPAN><SPAN 
  class=date>27-01-2013</SPAN><A 
  href="http://us.asmodee.com/ressources/articles/mr-jack-restock-february-13.php"><IMG 
  src="news_files/articles_1734.jpg"></A><A 
  href="http://us.asmodee.com/ressources/articles/mr-jack-restock-february-13.php">
  <H1>Mr. Jack restock: February 13</H1></A><A 
  href="http://us.asmodee.com/ressources/articles/mr-jack-restock-february-13.php">
  <P>Jack the Ripper is loose in Whitechapel, and it’s up to you to stop him! 
  Gentleman...</P></A><A class=lienfiche_categories 
  href="http://us.asmodee.com/ressources/articles/mr-jack-restock-february-13.php"><SPAN>» 
  Read More</SPAN></A></LI>
  <LI><SPAN class=categorie_news>[Upcoming]</SPAN><SPAN 
  class=date>17-01-2013</SPAN><A 
  href="http://us.asmodee.com/ressources/articles/jaipur-restock-february-13.php"><IMG 
  src="news_files/articles_1729.jpg"></A><A 
  href="http://us.asmodee.com/ressources/articles/jaipur-restock-february-13.php">
  <H1>Jaipur restock: February 13</H1></A><A 
  href="http://us.asmodee.com/ressources/articles/jaipur-restock-february-13.php">
  <P>My kingdom for a camel Work hard, earn more than your opponent and become 
  the official...</P></A><A class=lienfiche_categories 
  href="http://us.asmodee.com/ressources/articles/jaipur-restock-february-13.php"><SPAN>» 
  Read More</SPAN></A></LI>
  <LI><SPAN class=categorie_news>[Upcoming]</SPAN><SPAN 
  class=date>17-01-2013</SPAN><A 
  href="http://us.asmodee.com/ressources/articles/lady-alice-release-february-13.php"><IMG 
  src="news_files/articles_1728.png"></A><A 
  href="http://us.asmodee.com/ressources/articles/lady-alice-release-february-13.php">
  <H1>Lady Alice release: February 13</H1></A><A 
  href="http://us.asmodee.com/ressources/articles/lady-alice-release-february-13.php">
  <P>Can you find the culprit first?You are one of the Baker Street Kids in this 
  game of...</P></A><A class=lienfiche_categories 
  href="http://us.asmodee.com/ressources/articles/lady-alice-release-february-13.php"><SPAN>» 
  Read More</SPAN></A></LI>
  <LI><SPAN class=categorie_news>[To see]</SPAN><SPAN 
  class=date>17-01-2013</SPAN><A 
  href="http://us.asmodee.com/ressources/articles/p-i-release-january-23.php"><IMG 
  src="news_files/articles_1727.jpg"></A><A 
  href="http://us.asmodee.com/ressources/articles/p-i-release-january-23.php">
  <H1>P.I. release: January 23</H1></A><A 
  href="http://us.asmodee.com/ressources/articles/p-i-release-january-23.php">
  <P>Can you stay ahead of your competitors to solve the crime?Prove your 
  detective skills...</P></A><A class=lienfiche_categories 
  href="http://us.asmodee.com/ressources/articles/p-i-release-january-23.php"><SPAN>» 
  Read More</SPAN></A></LI>
  <LI><SPAN class=categorie_news>[To see]</SPAN><SPAN 
  class=date>14-01-2013</SPAN><A 
  href="http://us.asmodee.com/ressources/articles/games-now-available.php"><IMG 
  src="news_files/articles_1725.jpg"></A><A 
  href="http://us.asmodee.com/ressources/articles/games-now-available.php">
  <H1>Games Now Available!</H1></A><A 
  href="http://us.asmodee.com/ressources/articles/games-now-available.php">
  <P>&nbsp; Both Asmodee and your preferred distributors are now taking orders 
  on the...</P></A><A class=lienfiche_categories 
  href="http://us.asmodee.com/ressources/articles/games-now-available.php"><SPAN>» 
  Read More</SPAN></A></LI></UL>
<DIV class=clear></DIV></DIV></DIV><!--fermeture Main--></DIV><!--fermeture Container-->
<DIV class=clear></DIV>
<DIV id=links_footer>
<DIV id=footerbar>
<UL>
  <LI><A href="http://us.asmodee.com/index.php">Home</A> | <A 
  href="http://us.asmodee.com/ressources/news/">News</A> | <A 
  href="http://us.asmodee.com/ressources/jeux">Games</A>| <A 
  href="http://us.asmodee.com/ressources/footercontenu/index.php?mode=quisommesnous">companies</A> 

  <LI><A 
  href="http://us.asmodee.com/ressources/footercontenu/index.php?mode=contact">Contact</A> 
  | <A href="http://us.asmodee.com/ressources/gaming/SAV/index.php">Customer 
  service</A> |<A 
  href="http://us.asmodee.com/ressources/footercontenu/index.php?mode=mention">Legale 
  Notice</A> </LI>
  <LI id=elementboutique><IMG src="news_files/boutiqueicon.jpg"><SPAN><A 
  href="http://us.asmodee.com/ressources/boutique/index.php">&gt; List of 
  retailers</A></SPAN> </LI>
  <LI id=copyright><A style="COLOR: #003453; FONT-WEIGHT: bold" 
  href="http://www.asmodee.com/" target=_blank>Copyright © 2009 Asmodee</A>. 
  Copyright © 2009 Asmodée. All rights reserved. Any form of copying is strictly 
  prohibited.</LI></UL>
<DIV id=logofooter></DIV></DIV>
<SCRIPT type=text/javascript>
			var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
			document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
			</SCRIPT>

<SCRIPT type=text/javascript>
			try {
			var pageTracker = _gat._getTracker("UA-11619540-6");
			pageTracker._trackPageview();
			} catch(err) {}</SCRIPT>
</DIV><!--fermeture Container--></DIV></BODY></HTML>
