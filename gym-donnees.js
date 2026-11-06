/* Données du cycle de gymnastique CA3 Première (Lycée G. Pompidou) : séances, échauffements, ateliers,
   installation, sécurité, parade, validation. Partagées par l'écran de cours (index.html) et l'outil complet (outils.html).
   Les 6 ateliers et les niveaux A à F sont ceux de l'appli élève (gym-eleves) et de la fiche CA3 : ne pas les changer ici sans eux.
   Sources : séances et fiches de travail de l'équipe (dossier Gymnastique), fiches d'échauffement (Gym final YD/Echauffement,
   echauffement.net, Fiche 207, leçon de Seconde L. Laumonier), « Gestion du couple risque-sécurité » (Rejwerski). */
/* ================== DONNÉES DU CYCLE GYMNASTIQUE CA3 — PREMIÈRE ================== */
const DUREE = 110;
const NB_GROUPES = 6;

/* ---------- Les 6 ateliers (identiques à l'appli élève et à la fiche CA3) ---------- */
const ATELIERS = [
 {n:1, nom:"Roulade avant → Salto", court:"Roulade avant", coul:"#0f766e",
  niv:[["A","Roulade groupée aidée"],["B","Roulade groupée sol"],["C","Roulade élevée"],["D","Salto trampoline",1],["E","Salto tremplin",1],["F","Salto au sol",1]],
  mat:["Tremplin + tapis dessus (plan incliné)","1 cube, 1 bloc dur","1 tapis mi-dur, 1 tapis mou","1 tapis mou sur la fosse, 1 mini-trampoline"]},
 {n:2, nom:"Roulade arrière → Salto", court:"Roulade arrière", coul:"#0e7490",
  niv:[["A","Roulade groupée / écart sur plan incliné"],["B","Roulade groupée / écart au sol"],["C","Roulade groupée / écart jambes tendues au sol"],["D","Salto trampoline",1],["E","Salto tremplin",1],["F","Salto au sol",1]],
  mat:["Plan incliné (tremplin + tapis ou bloc triangulaire)","2 tapis durs pour une surface haute de 30 cm","1 tapis fin mou"]},
 {n:3, nom:"ATR → Saut de mains", court:"ATR", coul:"#7c3aed",
  niv:[["A","Placement du dos puis ATR dos au mur"],["B","ATR dos au mur"],["C","ATR tombé plat dos"],["D","ATR impulsion bras tombé plat dos"],["E","Sursaut & saut de mains trampoline"],["F","Élan 3 pas, sursaut & saut de mains"]],
  mat:["3 gros cubes (dont un en long contre le mur)","2 grands tapis mous"]},
 {n:4, nom:"Roue → Rondade", court:"Roue", coul:"#b45309",
  niv:[["A","Roue mains sur plinth"],["B","Roue avec obstacle"],["C","Roue dans un couloir"],["D","Sursaut + rondade sur trampoline"],["E","Sursaut + rondade sur tremplin"],["F","Sursaut + rondade au sol + saut extension"]],
  mat:["2 cubes","1 tapis contre le mur (couloir)","1 tremplin + 1 tapis"]},
 {n:5, nom:"Saut (table)", court:"Saut", coul:"#be185d",
  niv:[["A","Saut extension trampoline"],["B","Saut extension trampoline ½ tour"],["C","ATR roulé épaules tombé plat dos"],["D","ATR tombé plat dos"],["E","Saut lune réception dos à la table"],["F","Saut avec ¼ ou ½ tour réception face à la table"]],
  mat:["Table de saut à deux hauteurs","Tapis de fosse + tapis à hauteur de la table","Tapis mou sur la table, mini-trampoline"]},
 {n:6, nom:"Trampoline", court:"Trampoline", coul:"#1d4ed8",
  niv:[["A","Saut chandelle ou saut demi-tour"],["B","Saut groupé, carpé ou carpé écart"],["C","Saut tombé assis"],["D","Tomber dos"],["E","Pull-over avant ou salto avant",1],["F","Pull-over arrière ou salto arrière",1]],
  mat:["Trampoline, grand tapis de protection","Le groupe aide à installer l'atelier ATR"]}
];
const atelierById = n => ATELIERS.find(a => a.n === +n);
/* pictos disponibles (images de l'appli élève) : certains niveaux n'en ont pas */
const PICTOS = new Set("1A 1B 1C 1D 1E 1F 2A 2B 2D 2E 2F 3A 3B 3C 3D 3E 3F 4A 4B 4C 4D 4F 5A 5B 5C 5D 5E 5F 6A 6B 6C 6D 6E 6F".split(" "));

/* ---------- Règles (reprises de l'appli élève) ---------- */
const SECU = {
 regles:["Un seul élève passe sur l'atelier, les autres libèrent l'espace.","Avant chaque passage : les tapis sont collés les uns aux autres et à leur place, l'espace de travail est libre.","« Je libère l'atelier dès que possible. » « J'attends que l'élève précédent ait terminé. » « Je ne traverse pas la zone de travail. »","On ne travaille pas un niveau sans avoir validé le précédent, ni un autre élément que ceux de la progression.","Niveaux ⚠️ (saltos, pull-over) : seulement en présence du professeur, avec la parade prévue.","Cheveux attachés, aucun bijou, poches vides, chewing-gum interdit."],
 zones:"Les 4 zones clés à échauffer en gymnastique : chevilles (réceptions), poignets (renversements), cervicales (rotations), adducteurs et hanches (fentes, écarts). Plus les épaules, qui portent le corps à l'ATR.",
 postures:[["Groupé : la boule","Menton contre la poitrine, regard sur le ventre, genoux contre la poitrine, mains sur les tibias."],["Aligné : le bâton","Tête dans l'axe, regard sur les mains, bras aux oreilles, fesses serrées, ventre rentré, pointes tendues."]],
 devise:"« Simple et correct vaut mieux que difficile et incorrect. »"
};
const PARADE = {
 defs:[["Manipulation","Le pareur fait le mouvement avec l'élève, à vitesse réduite, pour qu'il sente les positions. L'élève reste actif."],["Aide","Le pareur facilite le mouvement sans le remplacer : il accompagne du début à la fin à l'endroit clé."],["Parade","Le pareur n'intervient que si ça tourne mal : déséquilibre, mauvaise impulsion, chute. Prêt du début à la fin."]],
 questions:["QUAND intervenir : au début, au milieu, à la fin de l'élément ?","OÙ intervenir : à quel endroit du corps (cuisse, hanche, épaule, haut du dos) ?","COMMENT intervenir : tirer ou pousser, créer une rotation ou soutenir une élévation ?"],
 crit:["Je me place bien : ni trop près, ni trop loin, de profil, genoux fléchis, dos droit.","Je reste attentif du début à la fin de l'élément.","Je communique simplement, sans crier, avec un code convenu (« prêt ? », « vas-y »)."],
 cas:[["ATR","Pareur de profil, côté de la jambe arrière de la fente ; il saisit la cuisse qui monte, puis les deux chevilles, et accompagne la redescente en fente."],["Placement du dos / marche sur les mains","Le pareur tient les chevilles ; il ne pousse pas, il maintient l'alignement."],["Saut de mains","Deux pareurs de chaque côté : une main sous l'épaule (haut du dos), une main sous les cuisses ; ils soutiennent la rotation, ils ne la créent pas."],["Saut lune, table","Un pareur de chaque côté de la table : une main sous l'épaule, une main qui pousse à la cuisse."],["Salto avant (trampoline, tremplin)","Pareur sur le côté de la réception : une main dans le dos, une main sur le ventre ou la nuque, il accompagne la rotation et la réception."],["Trampoline","Quatre élèves aux 4 côtés de la toile, bras prêts : ils repoussent vers le centre, ils n'attrapent pas."]]
};
const VALID = {
 regles:["L'élément est réussi du premier coup.","Les 2 critères de réussite sont respectés.","La réception est maîtrisée (pas de pas, pas de chute)."],
 qui:"E : un camarade observe et coche dans l'appli (co-évaluation). P : seul le professeur valide le niveau, avec le QR « Montrer au professeur » du téléphone de l'élève.",
 note:"Note du cycle : 16 points sur la validation des niveaux, 4 points sur la participation (engagement, rôles d'aide et de pareur, respect des règles).",
 appli:"Les validations se font dans l'appli élève Gymnastique (QR de la classe au 1er cours, code du cours pour les niveaux ⚠️) et remontent dans l'outil prof."
};

/* ---------- Déroulé type ---------- */
const TL_STD = [["Accueil, appel, installation",10,"inst"],["Échauffement",15,"ech"],["Thème du jour",20,"ex"],["Ateliers en rotation",45,"ex"],["Validations P, envoi, rangement",20,"bil"]];

/* ---------- Bloc « Ateliers en rotation » (commun, avec une consigne propre à la séance) ---------- */
const ROTATION = (consigne, plus) => ({titre:"Ateliers en rotation", duree:45, cat:"6 ateliers, 6 groupes",
 dispo:"6 groupes de 5 ou 6, un groupe par atelier. Environ 6 min par atelier et 1 min pour tourner, au signal (outil prof › Rotation des ateliers). Le groupe garde l'ordre 1 → 2 → 3 → 4 → 5 → 6 → 1.",
 roles:"Dans le groupe, à chaque passage : 1 gymnaste, 1 pareur ou aide si l'élément le demande, 1 observateur qui coche la validation E dans l'appli. On tourne à chaque passage.",
 deroul:[consigne,"À l'arrivée sur l'atelier : on vérifie les tapis (collés, à leur place) avant le premier passage.","Chacun travaille SON niveau : le premier niveau non validé, jamais au-dessus.","Un élément réussi du premier coup avec les 2 critères : l'observateur valide E dans l'appli.","Validé E sur un niveau ⚠️ ou en fin de série : « Montrer au professeur » pour la validation P."].concat(plus||[]),
 crit:"Un passage à la fois, l'atelier libéré tout de suite, personne ne traverse la zone de travail.",
 reussite:"Chaque élève a tenté au moins un niveau sur chaque atelier et le groupe a coché ses validations E.",
 moins:"Rester au niveau en cours avec un aménagement (plan incliné, tapis plus haut, pareur).",
 plus:"Niveau validé E : enchaîner l'élément avec une liaison (saut, tour, pas chassé) avant de demander la validation P.",
 schema:"plan"});

/* ---------- Bloc de fin (commun, avec la question de bilan propre à la séance) ---------- */
const FIN = (question, plus) => ({titre:"Validations P, envoi, rangement", duree:20, cat:"Fin de séance",
 dispo:"Les élèves qui ont une validation E à faire passer en P viennent au professeur avec leur téléphone, les autres rangent. Chaque groupe range SON atelier, toujours le même.",
 roles:"Le professeur scanne les QR « Montrer au professeur ». Un élève par groupe envoie la fiche du groupe (QR ou fichier dans le Nuage).",
 deroul:["5 min : validations P au poste du professeur (scan du QR, puis l'élève scanne la réponse ou l'aura avec le QR de la classe).","5 min : chaque groupe range son atelier, tapis empilés par taille, rien ne traîne sur le praticable.","3 min : un élève par groupe envoie la fiche du groupe (onglet Envoyer de l'appli).","5 min : bilan assis, en cercle : " + question].concat(plus||[]),
 crit:"Rangement complet avant de partir ; aucune fiche non envoyée.",
 reussite:"Tous les groupes ont envoyé leur fiche et l'atelier est rangé.",
 schema:""});

/* ================== LES 8 SÉANCES ================== */
const SEANCES = [
/* ============ S1 ============ */
{id:"S1", titre:"Sécurité, postures et découverte des ateliers",
 obj:"Connaître les règles de sécurité, les deux postures de base (groupé, aligné) et le rôle de pareur ; découvrir les 6 ateliers et valider ses premiers niveaux A ou B avec l'appli.",
 tl:[["Accueil, groupes, appli",15,"inst"],["Échauffement",15,"ech"],["Postures, sécurité, parade",20,"ex"],["Découverte des 6 ateliers",40,"ex"],["Validations, envoi, rangement",20,"bil"]],
 install:"Former 6 groupes de 5 ou 6 qui resteront les mêmes jusqu'à la fin du cycle. Chaque groupe reçoit SON atelier : il l'installera et le rangera à chaque séance. Montrer le QR de la classe : chaque groupe crée son groupe dans l'appli élève (tablette ou téléphone). Rappeler la tenue : cheveux attachés, sans bijou, sans chewing-gum.",
 prepare:["Les 2 postures qui reviennent dans tous les éléments : groupé et aligné.","Les règles de sécurité de l'atelier (un passage à la fois, tapis collés).","Le geste de pareur à l'ATR, utilisé dès S2.","Le fonctionnement de la validation E et P dans l'appli."],
 bilan:"Dans quel atelier as-tu le plus de marge ? Quel niveau vises-tu la semaine prochaine ? Rappel : on ne saute jamais un niveau.",
 fiches:[
  {titre:"Échauffement de référence : les 4 zones clés", duree:15, cat:"Échauffement", dispo:"Toute la classe sur le praticable, en dispersion, puis en 2 lignes face au professeur.",
   roles:"Tous pratiquent. Le professeur montre et nomme chaque zone : cet échauffement est la base de tous les autres.",
   deroul:["Activation 4 min : course dispersée, talons-fesses, montées de genoux, pas chassés, demi-tour en course arrière ; au signal, s'asseoir, se coucher sur le dos, sur le ventre, et repartir.","Chevilles 2 min : marche sur demi-pointes, sur les talons, pieds en dedans, pieds en dehors ; sauts pieds joints sur demi-pointes, mains sur les hanches.","Poignets et épaules 3 min : à 4 pattes, mains orientées devant, dehors, dedans, petites flexions des coudes ; cercles de bras petits puis grands, dans un sens puis l'autre.","Cervicales 1 min : flexion, extension, inclinaison lentes, sans rotation brusque.","Hanches et adducteurs 2 min : fentes avant à 90°, fentes latérales, battements de jambe tendue.","Postures 3 min : « la boule » assis, groupé, tenir 5 s ; « le bâton » sur le dos, puis sur le ventre, tenir 5 s ; culbuto départ assis, puis départ accroupi."],
   crit:"Mouvements contrôlés, amplitude progressive. Le dos reste rond dans le culbuto pour garder la vitesse.",
   reussite:"Chaque élève sait nommer les 4 zones clés et tenir la boule et le bâton 5 s.",
   moins:"Culbuto départ assis seulement.", plus:"Culbuto jusqu'à la chandelle, puis retour debout sans les mains.", schema:"vagues"},
  {titre:"Postures, sécurité et premier geste de pareur", duree:20, cat:"Partie commune", dispo:"Le praticable en 5 couloirs ; les groupes passent par vagues, d'un bout à l'autre.",
   roles:"Par deux dans le groupe : A gymnaste, B pareur, puis on échange. Le professeur arrête la vague pour corriger.",
   deroul:["Rappel des règles (1 min) : un passage à la fois, tapis collés, on ne traverse pas une zone de travail.","Culbute (roulade avant) groupée : menton-poitrine, mains à plat, on se relève sans les mains.","Chandelle : du culbuto à la chandelle, corps aligné, tenir 3 s.","Placement du dos à deux : A pose les mains, B tient les chevilles, A monte les épaules au-dessus des mains et tient 3 s.","Premier geste de pareur à l'ATR : B se place de profil côté jambe arrière de la fente, saisit la cuisse qui monte puis les chevilles, accompagne la redescente.","Les 3 questions du pareur : quand, où, comment intervenir ?"],
   crit:"Groupé : menton contre la poitrine. Aligné : bras aux oreilles, regard sur les mains, fesses serrées. Pareur : de profil, genoux fléchis, dos droit.",
   reussite:"Chaque binôme réalise 3 placements du dos et 3 montées vers l'ATR parées, sans chute.",
   moins:"Placement du dos pieds sur un cube.", plus:"ATR tenu 3 s avec un pareur qui ne tient plus que d'une main.", schema:"vagues"},
  {titre:"Découverte des 6 ateliers", duree:40, cat:"6 ateliers, 6 groupes",
   dispo:"6 groupes, 6 ateliers, 6 min par atelier et 1 min pour tourner. Les fiches de l'appli élève (onglet Apprendre) montrent les vidéos et le matériel de chaque niveau.",
   roles:"1 gymnaste, 1 pareur si besoin, 1 observateur qui coche la validation E. On tourne à chaque passage.",
   deroul:["Sur chaque atelier, lire les 2 critères du niveau A dans l'appli avant de commencer.","Chacun tente le niveau A ; réussi du premier coup avec les 2 critères : validé E, il peut tenter le B.","Pas de niveau ⚠️ aujourd'hui (saltos, pull-over) : ils s'ouvrent quand le professeur est sur l'atelier.","L'observateur coche l'élève qui a réussi, pas celui qui l'a « presque » fait."],
   crit:"Un passage à la fois ; on vérifie les tapis avant le premier passage.",
   reussite:"Chaque élève a au moins un niveau A validé E dans 4 ateliers.",
   moins:"Travailler l'élément décomposé avec un pareur.", plus:"Niveau B tenté sur les ateliers où le A est validé.", schema:"plan"},
  FIN("Quelle posture (groupé, aligné) est la plus difficile pour toi ? Qui a déjà paré quelqu'un aujourd'hui ?")
 ]},

/* ============ S2 ============ */
{id:"S2", titre:"Se renverser : ATR et roue",
 obj:"Monter à l'ATR aligné avec un pareur et réaliser une roue dans l'axe, en partant d'une grande fente avant.",
 tl:TL_STD,
 install:"Chaque groupe installe son atelier. Au centre du praticable : 5 lignes au scotch ou au plot pour la roue.",
 prepare:["ATR : niveaux A à C de l'atelier 3.","Roue : niveaux A à C de l'atelier 4.","La fente avant qui sert à l'ATR, à la roue, puis à la rondade et au saut de mains."],
 bilan:"Ta fente avant est-elle alignée bras, tronc, jambe arrière ? Qu'est-ce que ton pareur a senti ?",
 fiches:[
  {titre:"Animal flow : les déplacements quadrupédiques", duree:15, cat:"Échauffement", dispo:"Par vagues, du mur vers les tables de saut ; une vague par groupe, la suivante part quand la précédente est à mi-chemin.",
   roles:"Tous pratiquent. Le premier de chaque vague annonce l'animal suivant.",
   deroul:["Activation 3 min : footing, pas chassés bras qui balancent, pas croisés.","L'ours : à 4 pattes, genoux décollés, dos parallèle au sol.","Le crabe : planche faciale, déplacement latéral sur les mains.","L'araignée : ventre vers le plafond, épaules, bassin et genoux alignés.","La chenille : de la planche, les pieds viennent près des mains jambes tendues, puis les mains repartent.","L'alligator : grande fente, main et pied opposés avancent ensemble.","Le lapin puis le lièvre : les deux mains loin devant, puis les deux pieds ; le lièvre garde les jambes tendues et verrouille les épaules.","Le phasme : bras tendus au-dessus de la tête, corps gainé, sauts d'une cheville à l'autre.","Fin 2 min : culbuto départ accroupi ; poignets en appui à 4 pattes."],
   crit:"Épaules au-dessus des mains, coudes verrouillés, ventre rentré.",
   reussite:"Chaque vague traverse sans s'arrêter, dos plat dans l'ours et l'éléphant.",
   moins:"Ours genoux posés ; pas de lièvre.", plus:"Ours à reculons, crabe avec ½ tour, lièvre sur 3 m.", schema:"vagues"},
  {titre:"L'ATR avec parade, la roue dans l'axe", duree:20, cat:"Partie commune", dispo:"Demi-classe A sur le praticable côté mur (ATR), demi-classe B sur les lignes (roue) ; on échange à mi-temps.",
   roles:"ATR : par trois, 1 gymnaste, 2 pareurs (un de chaque côté). Roue : par deux, 1 gymnaste, 1 observateur qui regarde les 4 appuis sur la ligne.",
   deroul:["ATR 1 : planche sur un pied, bras tendus devant ; le pareur attrape le pied arrière, l'élève pose les mains loin devant et monte en placement du dos.","ATR 2 : du placement du dos, monter une jambe à la verticale ; le pareur l'attrape et lâche l'autre : ATR tenu 3 s.","ATR 3 : départ en fente avant, monter à l'ATR, trouver l'équilibre avec le pareur, redescendre en fente.","Roue 1 : grande fente, pied droit devant (ou gauche), bras dans le prolongement de la jambe arrière.","Roue 2 : main droite loin devant, doigts tournés vers la droite ; main gauche face à la main droite ; jambes tendues au-dessus de la tête.","Roue 3 : sur la ligne, arriver face au point de départ, bras aux oreilles."],
   crit:"ATR : regarder ses mains, pousser fort sur la jambe d'appui, lancer la jambe libre tendue, serrer les fesses. Roue : 4 appuis sur la ligne, main-main-pied-pied.",
   reussite:"ATR tenu 3 s avec un pareur ; roue avec les 4 appuis sur la ligne.",
   moins:"ATR : placement du dos pieds sur un cube. Roue : mains sur un plinth.", plus:"ATR : marcher sur les mains, le pareur tient une cheville. Roue d'un bras.", schema:"pictos:3A,3B,3C,4A,4B,4C"},
  ROTATION("Priorité du jour : les ateliers 3 (ATR) et 4 (roue) ; sur les autres, terminer les niveaux A et B."),
  FIN("Ta fente avant est-elle alignée bras, tronc, jambe arrière ? Qu'est-ce que ton pareur a senti ?")
 ]},

/* ============ S3 ============ */
{id:"S3", titre:"Tourner en arrière et en avant : roulades",
 obj:"Réaliser une roulade arrière écart jambes tendues et une roulade avant élevée, en contrôlant la position groupée et la réception.",
 tl:TL_STD,
 install:"Chaque groupe installe son atelier. Sur le praticable : 2 plans inclinés (tremplin + tapis) pour la roulade arrière, 2 rangées de blocs pour la roulade avant élevée.",
 prepare:["Roulade arrière : niveaux A à C de l'atelier 2.","Roulade avant élevée : niveau C de l'atelier 1, étape avant le salto.","L'impulsion deux pieds qui servira au salto et au saut."],
 bilan:"Ta roulade arrière tourne-t-elle dans l'axe ? Où as-tu placé tes mains ?",
 fiches:[
  {titre:"Au signal ! Postures et gainage à deux", duree:15, cat:"Échauffement", dispo:"Toute la classe trottine sur le praticable ; par deux pour le gainage.",
   roles:"Tous pratiquent. Par deux : 1 et 2 s'échangent les rôles à chaque signal.",
   deroul:["Trottiner ; au signal, faire la consigne puis repartir : saut extension ; accroupi groupé ; à plat ventre dur comme un bâton ; à plat dos dur comme un bâton.","Au signal « deux » : 1 couché sur le dos genoux fléchis, 2 en appui mains sur les genoux de 1, aligné ; 1 fait 5 abdominaux, 2 tient l'alignement. Puis on échange.","Mobilisation des 4 zones clés (3 min), comme en S1.","Culbuto à deux, face à face : 5 culbutos et on se relève ensemble, sans les mains.","Par deux : A sur le dos bras tendus derrière la tête, B à ses pieds essaie d'écarter les jambes de A ; A serre tout : c'est la sensation de l'ATR.","Roulade avant groupée sur le praticable, puis roulade avant jambes tendues."],
   crit:"Le bâton ne plie pas quand le partenaire le touche ; la boule reste ronde dans le culbuto.",
   reussite:"Chaque binôme réalise 5 culbutos synchronisés et se relève sans poser les mains.",
   moins:"Culbuto seul ; abdominaux genoux fléchis, pieds tenus.", plus:"Culbuto à la chandelle puis roulade arrière.", schema:"vagues"},
  {titre:"Roulade arrière écart, roulade avant élevée", duree:20, cat:"Partie commune", dispo:"Demi-classe A sur les plans inclinés (roulade arrière), demi-classe B sur les blocs (roulade avant élevée) ; on échange à mi-temps.",
   roles:"Par deux : 1 gymnaste, 1 observateur qui regarde l'axe (arrière) ou les jambes tendues (avant).",
   deroul:["Roulade arrière 1 : départ debout, bras aux oreilles ; descendre jambes tendues en cassant le buste, poitrine près des genoux, mains au niveau des genoux.","Roulade arrière 2 : en passant sur le dos, mains près des oreilles, coudes serrés pour tourner dans l'axe.","Roulade arrière 3 : ouvrir le bassin, jambes vers le ciel, pousser sur les bras, écarter et garder les jambes tendues jusqu'aux pieds.","Roulade avant élevée 1 : un pas, un saut, appel deux pieds.","Roulade avant élevée 2 : pousser fort sur les jambes pour tourner en contre-haut, menton contre la poitrine.","Roulade avant élevée 3 : jambes tendues après l'impulsion, talons ramenés contre les fesses pour se relever."],
   crit:"Arrière : je tourne dans l'axe, coudes et genoux ne touchent pas le sol. Avant élevée : jambes tendues, envol et rotation enchaînés sans arrêt.",
   reussite:"3 roulades arrière dans l'axe ; 3 roulades avant élevées jambes tendues.",
   moins:"Roulade arrière sur plan incliné ; roulade avant sans bloc, sur tapis épais.", plus:"Roulade arrière vers l'ATR, le pareur tire une cheville vers le haut ; roulade avant élevée par-dessus un cube.", schema:"pictos:2A,2B,2C,1B,1C"},
  ROTATION("Priorité du jour : les ateliers 1 et 2 (roulades) ; ATR et roue : viser le niveau suivant."),
  FIN("Ta roulade arrière tourne-t-elle dans l'axe ? Où as-tu placé tes mains ?")
 ]},

/* ============ S4 ============ */
{id:"S4", titre:"Se renverser avec impulsion : rondade et saut de mains",
 obj:"Transformer la roue en rondade et l'ATR en saut de mains, en ajoutant le sursaut et l'impulsion des bras, avec des aménagements et des pareurs.",
 tl:TL_STD,
 install:"Chaque groupe installe son atelier. Sur le praticable : un plan incliné et un gros tapis mou (rondade), un trampoline ou un tremplin et un grand tapis mou (saut de mains).",
 prepare:["Rondade : niveaux D à F de l'atelier 4.","Saut de mains : niveaux D à F de l'atelier 3.","Le sursaut (pré-appel), commun à la rondade, au saut de mains et au saut à la table."],
 bilan:"Qu'est-ce qui change entre la roue et la rondade ? Où étaient tes jambes au passage à l'ATR ?",
 fiches:[
  {titre:"Par vagues vers le renversement", duree:15, cat:"Échauffement", dispo:"Par vagues, du mur vers les tables de saut ; puis par trois sur le praticable.",
   roles:"Tous pratiquent. Par trois : 1 gymnaste, 2 pareurs pour l'ATR.",
   deroul:["Activation 3 min : footing, pas chassés, sauts pieds joints en avançant et en reculant.","Quadrupédies : ours, éléphant, puis « ours bras fixes » : les deux bras repoussent le sol ensemble (préparation du saut de mains).","Gainage et culbuto sur place, 3 × 10 s.","Marcher sur les mains en placement du dos, le pareur tient les pieds.","ATR tenu 3 s avec un pareur, puis rebondir sur les mains sur place.","Roue sur une ligne, puis roue « fin d'ATR » : arriver face à la ligne."],
   crit:"Fente avant alignée ; épaules qui poussent le sol ; coudes verrouillés.",
   reussite:"Chaque élève tient l'ATR 3 s avec le pareur et rebondit 3 fois sur les mains.",
   moins:"Placement du dos au lieu de l'ATR.", plus:"Rebonds sur les mains en avançant d'un pas.", schema:"vagues"},
  {titre:"Rondade et saut de mains : les étapes", duree:20, cat:"Partie commune", dispo:"Demi-classe A : rondade (plan incliné, gros tapis). Demi-classe B : saut de mains (trampoline, tapis bloc). On échange à mi-temps.",
   roles:"Rondade : 1 gymnaste, 1 observateur. Saut de mains : 1 gymnaste, 2 pareurs (main sous l'épaule, main sous les cuisses).",
   deroul:["Rondade 1 : sur le plan incliné, arrivée à plat ventre sur un gros tapis mou.","Rondade 2 : arrivée à genoux sur un gros tapis élevé, puis par-dessus un obstacle bas.","Rondade 3 : sursaut, rondade, réception pieds joints face au point de départ.","Saut de mains 1 : ATR arrivée plat dos sur un grand tapis mou et fin.","Saut de mains 2 : ATR repoussé (rebond des mains avant d'être à la verticale), arrivée plat dos.","Saut de mains 3 : ATR jambes écartées, poser la première jambe sur deux tapis blocs empilés.","Saut de mains 4 : départ en contre-haut, mains sur le trampoline, arrivée en contre-bas sur un grand tapis mou, avec deux pareurs."],
   crit:"Rondade : les mains quittent le sol avant la pose des pieds, réception pieds joints de face. Saut de mains : passage à l'ATR jambes écartées, la 2e jambe rejoint vite, réception debout bras verticaux.",
   reussite:"Rondade arrivée pieds joints sur le plan incliné ; saut de mains en contre-bas avec pareurs.",
   moins:"Rondade arrivée à plat ventre ; saut de mains étapes 1 et 2 seulement.", plus:"Rondade + saut extension ; saut de mains au trampoline, arrivée à la même hauteur.", schema:"pictos:4D,4E,4F,3D,3E,3F"},
  ROTATION("Priorité du jour : les ateliers 3 et 4 au-delà du niveau C, avec les pareurs vus en partie commune."),
  FIN("Qu'est-ce qui change entre la roue et la rondade ? Où étaient tes jambes au passage à l'ATR ?")
 ]},

/* ============ S5 ============ */
{id:"S5", titre:"Voler : table de saut et trampoline",
 obj:"Construire une course d'élan avec pré-appel et appel deux pieds, voler aligné au-dessus de la table, et contrôler ses sauts et réceptions au trampoline.",
 tl:TL_STD,
 install:"Chaque groupe installe son atelier. Table de saut basse (1,05 m) avec des tapis blocs au même niveau ; trampoline entouré, 4 élèves aux côtés de la toile.",
 prepare:["Saut à la table : niveaux A à E de l'atelier 5.","Trampoline : niveaux A à D de l'atelier 6.","L'appel deux pieds dynamique, commun au saut, à la rondade et au saut de mains."],
 bilan:"Ton pré-appel est-il un vrai petit saut ? Ton corps reste-t-il aligné en vol ?",
 fiches:[
  {titre:"Impulsions et réceptions", duree:15, cat:"Échauffement", dispo:"Par vagues sur le praticable, puis 5 couloirs avec un tremplin ou une ligne d'appel.",
   roles:"Tous pratiquent. Dans chaque couloir, un élève contrôle la réception de celui qui le précède.",
   deroul:["Activation 3 min : course, pas chassés, talons-fesses, montées de genoux.","Chevilles : sauts pieds joints sur demi-pointes, en avant, en arrière, latéraux ; cloche-pied droit puis gauche.","Saut de grenouille (flexion jusqu'à 45°) puis saut extension complet, bras au-dessus de la tête.","Phasme : bras tendus, corps gainé, petits sauts de chevilles.","Réceptions « plantées » : saut extension, réception pieds joints, genoux fléchis, bras devant, tenir 2 s.","Course d'élan : 3 pas, pré-appel (petit saut) et appel deux pieds sur la ligne, saut extension.","Saute-mouton par deux : on pousse sur les mains, on ne s'assoit pas sur le dos."],
   crit:"Pieds joints à l'appel ; bras qui montent ensemble ; réception sans pas.",
   reussite:"3 réceptions plantées de suite sans pas après un appel deux pieds.",
   moins:"Appel sans pré-appel, départ de pied ferme.", plus:"Appel deux pieds + ½ tour en l'air, réception plantée.", schema:"vagues"},
  {titre:"La table de saut et le trampoline", duree:20, cat:"Partie commune", dispo:"Demi-classe A : 2 tables de saut. Demi-classe B : trampolines. On échange à mi-temps.",
   roles:"Table : 1 gymnaste, 2 pareurs (main sous l'épaule, main à la cuisse). Trampoline : 1 sauteur, 4 élèves aux côtés de la toile, bras prêts, qui repoussent vers le centre.",
   deroul:["Table 1 : saut de lapin + saut extension, puis saut groupé, saut écart : on travaille surtout la course d'élan, le pré-appel et l'appel.","Table 2 : départ sur le trampoline, mains sur la table, placement du dos jambes fléchies avec un pareur de chaque côté.","Table 3 : la même chose jambes tendues, puis ATR tombé plat dos sur les tapis blocs.","Trampoline 1 : impulsion pieds écartés largeur du bassin, jambes tendues, bras qui montent par l'avant.","Trampoline 2 : saut chandelle, saut ½ tour, saut groupé, carpé, carpé écart, toujours le regard droit devant.","Trampoline 3 : saut tombé assis, puis tomber dos, se relever jambes tendues corps gainé."],
   crit:"Table : impulsion deux pieds dynamique, corps tendu de la verticale à la réception. Trampoline : corps gainé, regard droit devant, on s'arrête en fléchissant les genoux.",
   reussite:"Placement du dos à la table avec les pareurs ; 10 sauts de suite au centre de la toile.",
   moins:"Table plus basse, tapis plus haut ; au trampoline, 5 sauts puis arrêt.", plus:"Saut lune réception dos à la table ; au trampoline, enchaîner 3 sauts différents.", schema:"pictos:5A,5C,5E,6A,6B,6D"},
  ROTATION("Priorité du jour : ateliers 5 et 6 ; le professeur se place à l'atelier 6 pour ouvrir les niveaux ⚠️ (pull-over, salto)."),
  FIN("Ton pré-appel est-il un vrai petit saut ? Ton corps reste-t-il aligné en vol ?")
 ]},

/* ============ S6 ============ */
{id:"S6", titre:"Parer, aider et choisir son projet",
 obj:"Savoir quand, où et comment parer selon l'élément ; choisir les 2 ateliers où l'on vise un niveau de plus d'ici la fin du cycle.",
 tl:TL_STD,
 install:"Chaque groupe installe son atelier. Un coin du praticable reste libre pour l'atelier des pareurs.",
 prepare:["La parade des niveaux ⚠️ (saltos, pull-over) et du saut de mains.","Le projet : 2 ateliers prioritaires, entourés sur la fiche CA3, pour S7 et S8.","La note de participation : rôles de pareur et d'observateur."],
 bilan:"Quels sont tes 2 ateliers prioritaires ? Quel niveau vises-tu sur chacun ?",
 fiches:[
  {titre:"Circuit gainage et renforcement", duree:15, cat:"Échauffement", dispo:"6 stations sur le praticable, une par groupe ; 40 s d'effort, 20 s pour changer. Musique rythmée si possible.",
   roles:"Tous pratiquent. Dans chaque groupe, un élève compte et donne le top.",
   deroul:["Activation 3 min : footing, pas chassés, montées de genoux, talons-fesses.","Station 1 : pompes (sur les genoux ou sur les pieds), dos plat.","Station 2 : sur les coudes, jambes serrées, monter et descendre le bassin sans toucher le sol, puis planche 10 s.","Station 3 : sur le ventre, battements de jambes, relevés de buste, planche 10 s.","Station 4 : chaise contre le mur, bras tendus aux oreilles.","Station 5 : position « bâton » sur le dos, épaules et pieds décollés (hollow), 3 × 10 s.","Station 6 : placement du dos pieds sur un cube, se grandir 3 fois en enfonçant le sol.","Fin 2 min : mobilisation des poignets et des épaules."],
   crit:"Dos plat, ventre rentré, fesses serrées ; on s'arrête si le dos se creuse.",
   reussite:"Chaque élève tient chaque station sans se creuser.",
   moins:"20 s d'effort par station.", plus:"Station 6 : ATR dos au mur, se grandir 3 fois.", schema:"plan"},
  {titre:"Les pareurs : quand, où, comment", duree:20, cat:"Partie commune", dispo:"Par groupe, sur son atelier ; le professeur passe de groupe en groupe. Chaque groupe travaille la parade de SON atelier.",
   roles:"Par trois : 1 gymnaste, 2 pareurs, puis on tourne. Le pareur dit à voix haute quand, où et comment il intervient.",
   deroul:["Rappel (2 min) : manipulation, aide, parade ; les 3 questions quand, où, comment.","Atelier 1 et 2 (saltos) : pareur sur le côté de la réception, une main dans le dos, une sur le ventre ou la nuque ; il accompagne la rotation.","Atelier 3 (ATR, saut de mains) : deux pareurs, main sous l'épaule, main sous les cuisses ; ils soutiennent, ils ne créent pas la rotation.","Atelier 4 (rondade) : un pareur au niveau des mains, il tient la hanche au passage à l'ATR.","Atelier 5 (table) : un pareur de chaque côté, main sous l'épaule, main qui pousse à la cuisse.","Atelier 6 (trampoline) : 4 élèves aux côtés de la toile, ils repoussent vers le centre, ils n'attrapent pas.","Fin : chaque élève choisit ses 2 ateliers prioritaires et les entoure sur sa fiche CA3."],
   crit:"Le pareur est prêt avant le départ, de profil, genoux fléchis, dos droit ; il parle avec un code convenu.",
   reussite:"Chaque élève a paré au moins 3 passages sur l'atelier de son groupe et sait dire quand, où, comment.",
   moins:"Manipulation lente avant la parade.", plus:"Parade d'un seul pareur sur un élément déjà validé E.", schema:""},
  ROTATION("Chacun commence par ses 2 ateliers prioritaires ; les niveaux ⚠️ seulement avec le professeur sur l'atelier."),
  FIN("Quels sont tes 2 ateliers prioritaires ? Quel niveau vises-tu sur chacun ?")
 ]},

/* ============ S7 ============ */
{id:"S7", titre:"Simple et correct : valider du premier coup",
 obj:"Réussir ses éléments du premier coup, dans les conditions de la validation, et faire valider en P les niveaux validés en E.",
 tl:[["Accueil, appel, installation",10,"inst"],["Échauffement",15,"ech"],["Thème du jour",15,"ex"],["Ateliers en rotation",45,"ex"],["Validations P, envoi, rangement",25,"bil"]],
 install:"Chaque groupe installe son atelier. Le poste du professeur au centre, visible de tous les ateliers.",
 prepare:["Les validations P des niveaux validés E.","La note de validation (16 points).","La régularité : un élément réussi une fois par hasard n'est pas validé."],
 bilan:"Combien de niveaux as-tu validés en P ? Lequel te reste-t-il à faire valider en S8 ?",
 fiches:[
  {titre:"Les élèves mènent l'échauffement", duree:15, cat:"Échauffement", dispo:"Toute la classe en cercle, puis par vagues. Chaque groupe mène 2 min sur une zone.",
   roles:"Chaque groupe prépare 1 exercice pour sa zone et le montre à la classe ; le professeur vérifie la sécurité.",
   deroul:["Activation menée par le professeur 3 min : course, pas chassés, talons-fesses.","Groupe 1 : les chevilles (réceptions).","Groupe 2 : les poignets (renversements).","Groupe 3 : les épaules (ATR, saut de mains).","Groupe 4 : les cervicales et le dos (rotations).","Groupe 5 : les hanches et les adducteurs (fentes, écarts).","Groupe 6 : le gainage (le bâton, la boule)."],
   crit:"Chaque exercice proposé échauffe la bonne zone, sans à-coup ni rotation brusque de la tête.",
   reussite:"Les 6 zones ont été échauffées et chaque groupe sait pourquoi la sienne compte en gymnastique.",
   moins:"Le professeur donne 2 exercices au choix à chaque groupe.", plus:"Le groupe ajoute un exercice spécifique à l'élément qu'il veut faire valider.", schema:"vagues"},
  {titre:"Répétition en conditions de validation", duree:15, cat:"Partie commune", dispo:"Par groupe, sur son atelier. Un seul essai compte, comme pour la validation.",
   roles:"1 gymnaste, 1 pareur si l'élément le demande, 1 juge qui lit les 2 critères à voix haute avant l'essai et dit « validé » ou « pas encore ».",
   deroul:["Le juge lit les 2 critères du niveau visé.","Le gymnaste fait UN essai. Réussi du premier coup, critères respectés, réception maîtrisée : validé E dans l'appli.","Pas encore : le juge dit quel critère manque ; on retravaille avec l'aménagement avant de retenter au prochain tour.","« Simple et correct vaut mieux que difficile et incorrect » : on vise le niveau qu'on réussit à coup sûr."],
   crit:"Un seul essai ; le juge juge les critères, pas l'effort.",
   reussite:"Chaque élève a tenté une validation E sur un de ses 2 ateliers prioritaires.",
   moins:"Retenter le niveau déjà validé pour le sécuriser.", plus:"Enchaîner l'élément avec une liaison avant l'essai.", schema:""},
  ROTATION("Les élèves vont d'abord sur leurs 2 ateliers prioritaires ; le professeur valide en P au poste central.",["Toutes les 10 min, le professeur appelle les validations E en attente."]),
  FIN("Combien de niveaux as-tu validés en P ? Lequel te reste-t-il à faire valider en S8 ?",["Fin : le professeur vérifie dans l'outil prof › Tableau qui n'a encore rien de validé en P."])
 ]},

/* ============ S8 ============ */
{id:"S8", titre:"Dernières validations et bilan du cycle",
 obj:"Faire valider ses derniers niveaux, rattraper les absences, et faire le bilan de ses progrès sur les 6 ateliers.",
 tl:[["Accueil, appel, installation",10,"inst"],["Échauffement",15,"ech"],["Ateliers libres, validations",55,"ex"],["Validations P, bilan, rangement",30,"bil"]],
 install:"Chaque groupe installe son atelier. Liste des élèves sans validation P ou absents à une séance, préparée dans l'outil prof.",
 prepare:["Les dernières validations P.","La note du cycle : 16 points de validation, 4 de participation.","Le rangement complet du matériel de gymnastique."],
 bilan:"Sur quel atelier as-tu le plus progressé depuis S1 ? Qu'est-ce qui t'a aidé : le pareur, l'aménagement, la vidéo ?",
 fiches:[
  {titre:"Échauffement autonome de groupe", duree:15, cat:"Échauffement", dispo:"Chaque groupe s'échauffe sur un coin du praticable avec la fiche « Échauffements » (outil › Échauffements).",
   roles:"Un élève du groupe mène, les autres suivent ; le professeur passe et valide.",
   deroul:["2 min : activation (course, pas chassés, sauts) choisie par le groupe.","5 min : les 4 zones clés, un exercice par zone, pris dans les échauffements de S1 à S7.","3 min : gainage (bâton, boule, culbuto).","5 min : 3 éducatifs pour l'élément que chacun veut faire valider aujourd'hui (pris dans les fiches de l'appli)."],
   crit:"Les 4 zones clés sont toutes échauffées ; les éducatifs correspondent à l'élément visé.",
   reussite:"Le groupe mène ses 15 min sans aide et le professeur n'a rien à ajouter.",
   moins:"Le professeur donne la liste des exercices, le groupe les met dans l'ordre.", plus:"Le groupe adapte l'échauffement à 2 éléments différents.", schema:"vagues"},
  {titre:"Ateliers libres et dernières validations", duree:55, cat:"Ateliers libres",
   dispo:"Tous les ateliers ouverts ; 6 élèves au plus par atelier. Le professeur valide en P au poste central et se déplace pour les niveaux ⚠️.",
   roles:"Par trois : 1 gymnaste, 1 pareur, 1 observateur qui coche E ; on tourne à chaque passage.",
   deroul:["Les élèves absents à une séance commencent par l'atelier qu'ils ont manqué.","Chacun va sur ses 2 ateliers prioritaires, puis où il veut.","Validé E : « Montrer au professeur » tout de suite, pas en fin de séance.","20 min avant la fin : plus de nouveau niveau, on termine les validations en cours."],
   crit:"6 élèves au plus par atelier ; un passage à la fois ; on ne saute pas de niveau.",
   reussite:"Chaque élève a au moins une validation P de plus qu'en début de séance, ou a sécurisé son meilleur niveau.",
   moins:"Retravailler le niveau en cours avec l'aménagement.", plus:"Montrer au professeur un enchaînement de 2 éléments validés reliés par une liaison.", schema:"plan"},
  FIN("Sur quel atelier as-tu le plus progressé depuis S1 ? Qu'est-ce qui t'a aidé : le pareur, l'aménagement, la vidéo ?",["Le professeur annonce comment est calculée la note : 16 points de validation, 4 de participation."])
 ]}
];

/* ---------- Banque d'échauffements (catalogue pour l'outil et l'échauffement autonome) ---------- */
const ECHAUFF = SEANCES.map(s => ({id:s.id, titre:s.fiches.find(f => f.cat === "Échauffement").titre, theme:s.titre}));
const BANQUE_ECH = [
 ["Activation","Course, talons-fesses, montées de genoux, pas chassés (bras qui balancent, croisés), demi-tour en course arrière, au signal s'asseoir, se coucher, repartir."],
 ["Chevilles","Marche sur demi-pointes, talons, pieds en dedans et en dehors ; sauts pieds joints sur demi-pointes ; cloche-pied ; équilibre sur un pied en levant talon puis pointe."],
 ["Poignets","À 4 pattes, mains orientées devant, dehors, dedans ; appui léger sur les poings puis les doigts ; jamais d'appui sur le dos des mains."],
 ["Épaules","Cercles d'épaules, petits puis grands cercles de bras ; élévation des bras tendus de l'oblique basse à la verticale."],
 ["Cervicales","Flexion, extension, inclinaison lentes ; jamais de rotation brusque."],
 ["Dos et bassin","Enroulement vertèbre par vertèbre jusqu'à l'accroupi ; bassin en rétroversion (« je bois le bol ») et antéversion (« je vide le bol »)."],
 ["Hanches et adducteurs","Fentes avant à 90°, fentes latérales, battements de jambe tendue, « grenouille » sur le dos."],
 ["Gainage","Le bâton sur le dos (hollow) et sur le ventre ; planche faciale et latérale ; « dur comme un bâton » quand le partenaire pousse."],
 ["Quadrupédies","Ours, éléphant, crabe, araignée, chenille, alligator, singe, canard, grenouille, lapin, lièvre, phasme, flamant rose."],
 ["Préparation technique","Culbuto (assis, accroupi, mains posées, à la chandelle) ; placement du dos tenu aux chevilles ; ATR tenu avec pareur ; roue sur une ligne ; roulades groupée et jambes tendues."],
 ["Impulsions","Sauts pieds joints en avant, arrière, latéraux ; grenouille ; saut extension ; course d'élan, pré-appel, appel deux pieds ; réception plantée 2 s."],
 ["Par deux","Saute-mouton ; brouette (prise au-dessus des genoux, finir en roulade) ; culbutos face à face ; monter le partenaire vers l'ATR à deux (arrêter dès que l'alignement casse)."]
];

const SOURCES = [
 ["Appli élève Gymnastique","Les 6 ateliers, les niveaux A à F, les critères, les vidéos et le matériel de chaque fiche (gym-eleves)."],
 ["Fiche CA3 Gymnastique (version trampoline)","La fiche papier de co-évaluation : colonnes E et P."],
 ["Séances et fiches de travail de l'équipe","Cycle gymnastique, séances 4 et 5, ATR, roue et rondade, roulades, table de saut, trampoline, organisation des ateliers."],
 ["Échauffement gymnastique (animal flow)","Les déplacements quadrupédiques de S2."],
 ["Rappel exercices d'échauffement séance gym","Les 4 zones, la quadrupédie, le culbuto (S1, banque)."],
 ["Fiche 207 — Gymnastique niveau 2","L'échauffement au signal et les manipulations à deux (S3)."],
 ["echauffement.net","Le circuit gainage-renforcement (S6)."],
 ["L. Laumonier, leçon de Seconde","Les 4 zones clés, les élèves qui proposent l'échauffement (S7), les postures boule et bâton."],
 ["M. et M. Rejwerski, Gestion du couple risque-sécurité","Manipulation, aide, parade ; quand, où, comment intervenir (S6)."],
 ["Matériel par atelier, organisation et rotation 2024-2025","L'installation et la rotation des 6 groupes."]
];

/* ---------- Schémas ---------- */
const escG = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function svgPlan(){
  // la salle : le praticable au centre, les 6 ateliers autour
  const pos = [[30,30],[30,150],[30,270],[530,30],[530,150],[530,270]];
  const A = ATELIERS.map((a,i) => {const [x,y]=pos[i];return `<g><rect x="${x}" y="${y}" width="140" height="100" rx="12" fill="${a.coul}" fill-opacity=".14" stroke="${a.coul}" stroke-width="3"/><text x="${x+18}" y="${y+40}" style="font:800 30px Archivo,Arial;fill:${a.coul}">${a.n}</text><text x="${x+12}" y="${y+72}" style="font:700 15px Atkinson,Arial;fill:#1c2128">${escG(a.court)}</text></g>`}).join("");
  const fl = `<path d="M175 80 H515 M515 200 H175 M175 320 H515" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 6" fill="none"/>`;
  return `<svg viewBox="0 0 700 400" role="img" aria-label="Plan de la salle : 6 ateliers autour du praticable"><rect width="700" height="400" rx="16" fill="#eef1f0"/><rect x="200" y="40" width="290" height="320" rx="10" fill="#fff" stroke="#c9d0d3" stroke-width="2"/><text x="345" y="205" text-anchor="middle" style="font:700 18px Atkinson,Arial;fill:#5b6470">Praticable</text>${A}<text x="345" y="388" text-anchor="middle" style="font:700 14px Atkinson,Arial;fill:#5b6470">Rotation : 1 → 2 → 3 → 4 → 5 → 6 → 1, au signal</text></svg>`;
}
function svgVagues(){
  let r = "";
  for(let i=0;i<5;i++){const y=60+i*58;r+=`<line x1="90" y1="${y}" x2="610" y2="${y}" stroke="#c9d0d3" stroke-width="2" stroke-dasharray="8 6"/><circle cx="70" cy="${y}" r="13" fill="#0f766e"/><text x="70" y="${y+5}" text-anchor="middle" style="font:800 13px Archivo,Arial;fill:#fff">${i+1}</text><path d="M120 ${y} H${200+i*40}" stroke="#0f766e" stroke-width="4" marker-end="url(#fl)"/>`}
  return `<svg viewBox="0 0 700 360" role="img" aria-label="Passage par vagues sur le praticable"><defs><marker id="fl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#0f766e"/></marker></defs><rect width="700" height="360" rx="16" fill="#eef1f0"/><rect x="40" y="30" width="620" height="300" rx="10" fill="#fff" stroke="#c9d0d3" stroke-width="2"/><text x="40" y="352" style="font:700 14px Atkinson,Arial;fill:#5b6470">Côté mur : départ des vagues</text><text x="660" y="352" text-anchor="end" style="font:700 14px Atkinson,Arial;fill:#5b6470">côté tables de saut : retour par l'extérieur</text>${r}</svg>`;
}
function pictosHTML(liste){
  return `<div class="pictos">${liste.split(",").map(k => {const a=atelierById(k[0]),nv=a&&a.niv.find(x=>x[0]===k[1]);if(!nv)return "";
    return `<figure>${PICTOS.has(k)?`<img src="img/pictos/a${k}.png" alt="" loading="lazy">`:""}<figcaption><b class="L L${k[1]}">${k[1]}</b> ${escG(a.court)} · ${escG(nv[1])}${nv[2]?" ⚠️":""}</figcaption></figure>`}).join("")}</div>`;
}
function schema(spec){
  if(!spec) return "";
  if(spec === "plan") return svgPlan();
  if(spec === "vagues") return svgVagues();
  if(spec.startsWith("pictos:")) return pictosHTML(spec.slice(7));
  return "";
}
