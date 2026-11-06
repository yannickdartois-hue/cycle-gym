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

/* ================== BANQUE ILLUSTRÉE D'EXERCICES D'ÉCHAUFFEMENT ==================
   Images : FFG, EvoluGym « Fiches échauffement » (img/echauff). Consignes : EvoluGym, fiches élèves CP3 (C. Peyrotte, 2015), Fiche 207. */
const EXOS = {
 // Activation
 lia:{cat:"Activation",nom:"Step touch en musique (type LIA)",txt:"Pas latéral aller-retour, arrêt pieds serrés jambes tendues, cercles de bras en arrière, puis double pas latéral bras à l'horizontale. Musique 110 à 130 BPM, on compte « 1-2-3-4 (aller) 5-6-7-8 (retour) »."},
 relais:{cat:"Activation",nom:"Navettes et relais",txt:"Courses avant, arrière, talons-fesses, pas chassés, organisées en navettes ou en relais par groupe : 2 à 5 min."},
 impuls:{cat:"Activation",nom:"Rebonds jambes tendues jusqu'au saut extension",img:"impuls",txt:"Pieds serrés, mains aux hanches, petits rebonds sur les chevilles, corps droit, ventre et fesses serrés ; puis grand saut extension bras au-dessus de la tête."},
 // Renforcement
 table:{cat:"Renforcement",nom:"La table",img:"table",txt:"Assis, mains derrière, pieds écartés : monter le bassin pour faire une table. Serrer les fesses, creuser le ventre. Tenir 5 à 10 s, 2 fois."},
 extension:{cat:"Renforcement",nom:"Extension des jambes, assis",img:"extension",txt:"Assis jambes tendues, serrées puis écartées : écraser l'arrière des genoux au sol, les gros orteils regardent le sol. 3 contractions de 3 s, puis lever une jambe, puis l'autre."},
 gcourbe:{cat:"Renforcement",nom:"Gainage courbe avant",img:"gcourbe",txt:"Du 4 pattes dos rond, avancer les mains pour poser les coudes. Puis sur les pieds : aligner jambes, tronc, tête. Tenir 5 à 10 s."},
 glateral:{cat:"Renforcement",nom:"Gainage latéral",img:"glateral",txt:"Allongé sur le côté, appui sur un coude : soulever le bassin, genoux fléchis puis jambes tendues. Tenir 5 à 10 s de chaque côté."},
 ventre:{cat:"Renforcement",nom:"Ventre creux",img:"ventre",txt:"Sur le dos, jambes fléchies, pieds au sol : sur l'expiration, coller le bas du dos au sol. Puis décoller la tête et les épaules. Tenir 5 à 10 s."},
 fermeture:{cat:"Renforcement",nom:"Fermeture jambes-tronc",img:"fermeture",txt:"Sur le dos, cuisses à la verticale, ventre creux : pousser les mains vers l'avant pendant que les cuisses reviennent vers la poitrine, sans bouger. Tenir 5 à 10 s."},
 aligne:{cat:"Renforcement",nom:"« Le plus grand du monde »",img:"aligne",txt:"À plat ventre, bras tendus devant : s'aligner, être « tout dur ». Le nombril ne touche pas le sol, les talons se touchent. Puis décoller les bras tendus."},
 equerre:{cat:"Renforcement",nom:"Vers l'équerre",img:"equerre",txt:"Assis jambes tendues, mains à plat à côté du bassin : serrer les cuisses et décoller le bassin, jambes serrées puis écartées."},
 adduc:{cat:"Renforcement",nom:"Adducteurs à deux",img:"adduc",txt:"Par deux : l'un, sur le dos, jambes fléchies, essaie d'écarter les genoux, l'autre l'en empêche ; puis l'inverse ; puis on change de rôle."},
 // Souplesse
 grandir:{cat:"Souplesse",nom:"Auto-grandissement et inclinaison",img:"grandir",txt:"Debout, bras verticaux : se grandir, puis passer sur un pied, l'autre pointé, et s'incliner sur le côté en expirant. 2 fois de chaque côté."},
 enroul:{cat:"Souplesse",nom:"Enroulement vertébral",img:"enroul",txt:"Debout, jambes à demi fléchies : descendre vertèbre par vertèbre jusqu'à l'accroupi, talons au sol, puis remonter en déroulant. 2 fois."},
 psoas:{cat:"Souplesse",nom:"Fente avant, genou au sol",img:"psoas",txt:"Grande fente, genou arrière au sol, bassin dans l'axe : expirer, rentrer le ventre, basculer le bassin. 2 × 16 temps de chaque côté."},
 ischios:{cat:"Souplesse",nom:"Arrière des cuisses",img:"ischios",txt:"Sur le dos, une jambe fléchie au sol, l'autre tendue vers le plafond, pied flex. 2 × 8 temps de chaque côté."},
 grenouille:{cat:"Souplesse",nom:"La grenouille",img:"grenouille",txt:"Sur le dos, cuisses à la verticale : sur l'expiration, ouvrir les genoux sur les côtés, perpendiculaires au tronc. Tenir 2 × 8 temps."},
 chien:{cat:"Souplesse",nom:"4 pattes, dos vers le plafond",img:"chien",txt:"Pieds sur un bloc, mains au sol : pousser le dos vers le plafond, creuser le ventre en expirant. Tenir 3 à 5 s, 2 fois."},
 // Préparation technique
 quadru:{cat:"Préparation technique",nom:"Quadrupédies variées",img:"quadru",txt:"À 4 pattes en avant, en arrière, sur le côté, avec ½ tour et tour complet. L'éléphant : jambes et bras tendus. L'araignée : pousse tes fesses vers le haut. Le canard : baisse-toi le plus bas possible."},
 planche:{cat:"Préparation technique",nom:"Des mains à la planche, des pieds à la fermeture",img:"planche",txt:"Debout, mains au sol : les mains avancent jusqu'à la planche, on tient 5 s aligné et gainé, puis les pieds avancent jusqu'aux mains."},
 lapin:{cat:"Préparation technique",nom:"Saut de lapin jusqu'au placement du dos",img:"lapin",txt:"Mains loin devant, bras tendus qui « bouchent les oreilles », puis les pieds ; de plus en plus lent, jusqu'à tenir le placement du dos, genoux et pieds serrés."},
 jambeh:{cat:"Préparation technique",nom:"Jambe tendue à l'horizontale",img:"jambeh",txt:"À 4 pattes, tendre une jambe en arrière et la monter jusqu'à l'horizontale, 3 à 4 battements puis tenir 3 s. Droite puis gauche."},
 groupe:{cat:"Préparation technique",nom:"Groupé au signal",img:"groupe",txt:"En marchant, au signal : assis, genoux serrés, pointes tirées, mains sur les tibias. Puis rouler en arrière et revenir dans la même position."},
 rouler:{cat:"Préparation technique",nom:"Rouler en arrière, mains à plat",img:"rouler",txt:"Départ assis groupé : rouler en arrière en posant les paumes à plat près des oreilles, revenir talons près des fesses et se relever."},
 rarbras:{cat:"Préparation technique",nom:"Rouler en arrière bras tendus",img:"rarbras",txt:"Assis, bras tendus, mains jointes au-dessus de la tête : rouler en arrière en appuyant les petits doigts au sol, revenir accroupi, puis debout."},
 roul2:{cat:"Préparation technique",nom:"Roulade arrière et retour, à deux",img:"roul2",txt:"Face à face, mains tenues : A roule en arrière mains à plat et revient en roulade avant à la station, B l'aide en tirant les mains. Jambes fléchies, talons près des fesses."},
 brouette:{cat:"Préparation technique",nom:"La brouette",txt:"Par deux, prise aux genoux ou aux cuisses : avancer et reculer sur les mains, tête dans le prolongement du tronc, ventre creux. Finir en roulade avant."},
 chandelle:{cat:"Préparation technique",nom:"Chandelle, puis pieds au mur",txt:"Chandelle alignée, « aligne-toi » ; puis, dos contre le mur, venir toucher le mur avec les pieds. Puis placement du dos avec une jambe au mur."},
 franchir:{cat:"Préparation technique",nom:"Franchir le plinth, fesses hautes",txt:"Mains sur le plinth, impulsion deux pieds : passer par-dessus en montant les fesses plus haut que la tête."},
 demitour:{cat:"Préparation technique",nom:"Saut ½ tour",txt:"Fléchir, bras devant ; saut extension bras au-dessus de la tête, ½ tour en l'air, réception fléchie, bras devant."}
};
/* 4 échauffements complets de rechange, à prendre à la place de celui du jour */
const VARIANTES = [
 {titre:"En musique (type LIA)", src:"EvoluGym", exos:["lia","relais","table","gcourbe","glateral","grandir","enroul","psoas"], note:"Musique 110 à 130 BPM. 5 min d'activation au rythme, 5 min de renforcement, 5 min de souplesse."},
 {titre:"Les animaux du gymnaste", src:"Fiches élèves CP3", exos:["relais","quadru","lapin","planche","chandelle","demitour","franchir"], note:"Une consigne par animal, dite à voix haute : l'éléphant jambes et bras tendus, le lapin bras qui bouchent les oreilles, le lièvre mains plus loin et fesses hautes, l'araignée fesses vers le haut, le canard le plus bas possible."},
 {titre:"Gainage et souplesse", src:"EvoluGym", exos:["relais","table","extension","ventre","fermeture","aligne","equerre","grenouille","ischios"], note:"Chaque posture tenue 5 à 10 s, 2 fois, en expirant. Utile avant les ateliers de renversement."},
 {titre:"Préparation aux roulades", src:"EvoluGym", exos:["relais","groupe","rouler","rarbras","roul2","jambeh","adduc"], note:"À placer avant le focus roulade arrière (S3) ou salto (S5)."}
];
/* Échauffement de chaque séance : les exercices illustrés à montrer */
const ECH_EXOS = {S1:["groupe","aligne","chien","grandir"],S2:["quadru","lapin","planche","chien"],S3:["groupe","ventre","roul2","rouler"],S4:["quadru","planche","lapin","jambeh"],
 S5:["impuls","demitour","franchir","extension"],S6:["table","gcourbe","glateral","fermeture","aligne"],S7:["enroul","psoas","grenouille","grandir"],S8:["equerre","adduc","ischios","rarbras"]};
/* Photos des fiches Access Gym (FFG) pour les focus et l'onglet Ateliers */
const PHOTOS = {
 "roue-rondade":"Roue puis rondade au sol","rondade-plan":"Rondade depuis un plan incliné",
 "atr-bloc":"Vers l'ATR et le saut de mains","sdm-plan":"Saut de mains, arrivée plat dos",
 "salto-av-plinth":"Salto avant depuis un plinth et un tremplin","salto-av-tremplin":"Salto avant au tremplin",
 "lune-atr":"ATR tombé plat dos depuis le mini-trampoline","lune-tremplin":"Saut lune, de la course à la table","lune-table":"Saut lune avec mini-trampoline"
};
const PHOTOS_AT = {1:["salto-av-plinth","salto-av-tremplin"],3:["atr-bloc","sdm-plan"],4:["roue-rondade","rondade-plan"],5:["lune-atr","lune-tremplin","lune-table"]};
/* Les 8 règles des ateliers (d'après B. Di Crescenzo, 2020), adaptées à l'appli */
const REGLES8 = ["J'installe le matériel comme le professeur l'a dit.","Je ne commence pas les ateliers sans m'être échauffé et sans le feu vert.","J'attends que l'atelier soit entièrement libre pour commencer.","Je libère l'atelier dès que j'ai fini.","Je reste sur l'atelier de mon groupe pour ce tour.","Je lis la fiche de mon niveau dans l'appli avant de me lancer.","J'aide un camarade et je valide E s'il a réussi.","Je fais valider E par un camarade avant de demander le P au professeur."];

function exosHTML(liste){
  return `<div class="exos">${liste.split(",").map(k => {const e = EXOS[k];if(!e) return "";
    return `<figure class="exo">${e.img ? `<img src="img/echauff/${e.img}.jpg" alt="" loading="lazy">` : ""}<figcaption><b>${escG(e.nom)}</b><span>${escG(e.txt)}</span></figcaption></figure>`}).join("")}</div>`;
}
function photosHTML(liste){
  return `<div class="photos">${liste.split(",").map(k => PHOTOS[k] ? `<figure><img src="img/ateliers/${k}.jpg" alt="" loading="lazy"><figcaption>${escG(PHOTOS[k])}</figcaption></figure>` : "").join("")}</div>`;
}


/* ---------- Logique de l'appli : échauffement commun, focus sur un atelier, puis 3 tours d'ateliers ---------- */
/* 6 groupes, 6 ateliers, 3 tours par cours : il faut 2 cours pour un tour complet des 6 ateliers.
   Cours « A » (S1, S3, S5, S7) : le groupe G fait les ateliers G, G+1, G+2. Cours « B » (S2, S4, S6, S8) : G+3, G+4, G+5. */
const TL_STD = [["Accueil, appel, installation",10,"inst"],["Échauffement commun",15,"ech"],["Focus atelier",10,"ex"],["Tour 1",20,"ex"],["Tour 2",20,"ex"],["Tour 3",20,"ex"],["Validations P, envoi, rangement",15,"bil"]];
const atelierDe = (g, idx, tour) => ((g - 1 + (idx % 2) * 3 + tour) % 6) + 1;        // idx : rang de la séance (0 = S1)
const tourTexte = (idx, tour) => [1,2,3,4,5,6].map(g => {const a = atelierById(atelierDe(g, idx, tour));return `G${g} → ${a.n}. ${a.court}`}).join(" ; ");
const TOUR = (idx, tour, consigne) => ({titre:`Tour ${tour + 1} · chaque groupe sur l'appli`, duree:20, cat:`Tour ${tour + 1} sur 3`,
 dispo:tourTexte(idx, tour) + `. Environ 18 min de travail, 2 min pour changer d'atelier au signal. Outil prof › Rotation des ateliers : 20 min, 3 tours, ${idx % 2 ? "cours B" : "cours A"}.`,
 roles:"Dans le groupe, à chaque passage : 1 gymnaste, 1 pareur ou aide si l'élément le demande, 1 observateur qui coche la validation E dans l'appli. On tourne à chaque passage.",
 deroul:["À l'arrivée : on vérifie les tapis (collés, à leur place) avant le premier passage.","L'appli élève, onglet Apprendre : chacun ouvre la fiche de SON niveau sur cet atelier (vidéo, consignes, matériel, 2 critères).","Chacun travaille le premier niveau non validé, jamais au-dessus.","Réussi du premier coup avec les 2 critères, réception maîtrisée : l'observateur valide E dans l'appli.","Validé E : « Montrer au professeur » pour la validation P, tout de suite ou en fin de séance. Niveau ⚠️ : seulement avec le professeur sur l'atelier."].concat(consigne ? [consigne] : []),
 crit:"Un passage à la fois, l'atelier libéré tout de suite, personne ne traverse la zone de travail.",
 reussite:"Chaque élève a tenté son niveau sur l'atelier et le groupe a coché ses validations E.",
 moins:"Rester au niveau en cours avec un aménagement de la fiche (plan incliné, tapis plus haut, pareur).",
 plus:"Niveau validé E : le refaire 3 fois de suite avant de demander la validation P.",
 schema:"plan"});
const FIN = (question, plus) => ({titre:"Validations P, envoi, rangement", duree:15, cat:"Fin de séance",
 dispo:"Les élèves qui ont une validation E à faire passer en P viennent au professeur avec leur téléphone, les autres rangent. Chaque groupe range SON atelier, toujours le même.",
 roles:"Le professeur scanne les QR « Montrer au professeur ». Un élève par groupe envoie la fiche du groupe (QR ou fichier dans le Nuage).",
 deroul:["5 min : validations P au poste du professeur (scan du QR, puis l'élève scanne la réponse ou l'aura avec le QR de la classe).","5 min : chaque groupe range son atelier, tapis empilés par taille.","2 min : un élève par groupe envoie la fiche du groupe (onglet Envoyer de l'appli).","3 min : bilan en cercle : " + question].concat(plus || []),
 crit:"Rangement complet avant de partir ; aucune fiche non envoyée.",
 reussite:"Tous les groupes ont envoyé leur fiche et l'atelier est rangé.",
 schema:""});
const ECH = {
 "S1": {
  "titre": "Échauffement de référence : les 4 zones clés",
  "duree": 15,
  "cat": "Échauffement",
  "dispo": "Toute la classe sur le praticable, en dispersion, puis en 2 lignes face au professeur.",
  "roles": "Tous pratiquent. Le professeur montre et nomme chaque zone : cet échauffement est la base de tous les autres.",
  "deroul": [
   "Activation 4 min : course dispersée, talons-fesses, montées de genoux, pas chassés, demi-tour en course arrière ; au signal, s'asseoir, se coucher sur le dos, sur le ventre, et repartir.",
   "Chevilles 2 min : marche sur demi-pointes, sur les talons, pieds en dedans, pieds en dehors ; sauts pieds joints sur demi-pointes, mains sur les hanches.",
   "Poignets et épaules 3 min : à 4 pattes, mains orientées devant, dehors, dedans, petites flexions des coudes ; cercles de bras petits puis grands, dans un sens puis l'autre.",
   "Cervicales 1 min : flexion, extension, inclinaison lentes, sans rotation brusque.",
   "Hanches et adducteurs 2 min : fentes avant à 90°, fentes latérales, battements de jambe tendue.",
   "Postures 3 min : « la boule » assis, groupé, tenir 5 s ; « le bâton » sur le dos, puis sur le ventre, tenir 5 s ; culbuto départ assis, puis départ accroupi."
  ],
  "crit": "Mouvements contrôlés, amplitude progressive. Le dos reste rond dans le culbuto pour garder la vitesse.",
  "reussite": "Chaque élève sait nommer les 4 zones clés et tenir la boule et le bâton 5 s.",
  "moins": "Culbuto départ assis seulement.",
  "plus": "Culbuto jusqu'à la chandelle, puis retour debout sans les mains.",
  "schema": "vagues"
 },
 "S2": {
  "titre": "Animal flow : les déplacements quadrupédiques",
  "duree": 15,
  "cat": "Échauffement",
  "dispo": "Par vagues, du mur vers les tables de saut ; une vague par groupe, la suivante part quand la précédente est à mi-chemin.",
  "roles": "Tous pratiquent. Le premier de chaque vague annonce l'animal suivant.",
  "deroul": [
   "Activation 3 min : footing, pas chassés bras qui balancent, pas croisés.",
   "L'ours : à 4 pattes, genoux décollés, dos parallèle au sol.",
   "Le crabe : planche faciale, déplacement latéral sur les mains.",
   "L'araignée : ventre vers le plafond, épaules, bassin et genoux alignés.",
   "La chenille : de la planche, les pieds viennent près des mains jambes tendues, puis les mains repartent.",
   "L'alligator : grande fente, main et pied opposés avancent ensemble.",
   "Le lapin puis le lièvre : les deux mains loin devant, puis les deux pieds ; le lièvre garde les jambes tendues et verrouille les épaules.",
   "Le phasme : bras tendus au-dessus de la tête, corps gainé, sauts d'une cheville à l'autre.",
   "Fin 2 min : culbuto départ accroupi ; poignets en appui à 4 pattes."
  ],
  "crit": "Épaules au-dessus des mains, coudes verrouillés, ventre rentré.",
  "reussite": "Chaque vague traverse sans s'arrêter, dos plat dans l'ours et l'éléphant.",
  "moins": "Ours genoux posés ; pas de lièvre.",
  "plus": "Ours à reculons, crabe avec ½ tour, lièvre sur 3 m.",
  "schema": "vagues"
 },
 "S3": {
  "titre": "Au signal ! Postures et gainage à deux",
  "duree": 15,
  "cat": "Échauffement",
  "dispo": "Toute la classe trottine sur le praticable ; par deux pour le gainage.",
  "roles": "Tous pratiquent. Par deux : 1 et 2 s'échangent les rôles à chaque signal.",
  "deroul": [
   "Trottiner ; au signal, faire la consigne puis repartir : saut extension ; accroupi groupé ; à plat ventre dur comme un bâton ; à plat dos dur comme un bâton.",
   "Au signal « deux » : 1 couché sur le dos genoux fléchis, 2 en appui mains sur les genoux de 1, aligné ; 1 fait 5 abdominaux, 2 tient l'alignement. Puis on échange.",
   "Mobilisation des 4 zones clés (3 min), comme en S1.",
   "Culbuto à deux, face à face : 5 culbutos et on se relève ensemble, sans les mains.",
   "Par deux : A sur le dos bras tendus derrière la tête, B à ses pieds essaie d'écarter les jambes de A ; A serre tout : c'est la sensation de l'ATR.",
   "Roulade avant groupée sur le praticable, puis roulade avant jambes tendues."
  ],
  "crit": "Le bâton ne plie pas quand le partenaire le touche ; la boule reste ronde dans le culbuto.",
  "reussite": "Chaque binôme réalise 5 culbutos synchronisés et se relève sans poser les mains.",
  "moins": "Culbuto seul ; abdominaux genoux fléchis, pieds tenus.",
  "plus": "Culbuto à la chandelle puis roulade arrière.",
  "schema": "vagues"
 },
 "S4": {
  "titre": "Par vagues vers le renversement",
  "duree": 15,
  "cat": "Échauffement",
  "dispo": "Par vagues, du mur vers les tables de saut ; puis par trois sur le praticable.",
  "roles": "Tous pratiquent. Par trois : 1 gymnaste, 2 pareurs pour l'ATR.",
  "deroul": [
   "Activation 3 min : footing, pas chassés, sauts pieds joints en avançant et en reculant.",
   "Quadrupédies : ours, éléphant, puis « ours bras fixes » : les deux bras repoussent le sol ensemble (préparation du saut de mains).",
   "Gainage et culbuto sur place, 3 × 10 s.",
   "Marcher sur les mains en placement du dos, le pareur tient les pieds.",
   "ATR tenu 3 s avec un pareur, puis rebondir sur les mains sur place.",
   "Roue sur une ligne, puis roue « fin d'ATR » : arriver face à la ligne."
  ],
  "crit": "Fente avant alignée ; épaules qui poussent le sol ; coudes verrouillés.",
  "reussite": "Chaque élève tient l'ATR 3 s avec le pareur et rebondit 3 fois sur les mains.",
  "moins": "Placement du dos au lieu de l'ATR.",
  "plus": "Rebonds sur les mains en avançant d'un pas.",
  "schema": "vagues"
 },
 "S5": {
  "titre": "Impulsions et réceptions",
  "duree": 15,
  "cat": "Échauffement",
  "dispo": "Par vagues sur le praticable, puis 5 couloirs avec un tremplin ou une ligne d'appel.",
  "roles": "Tous pratiquent. Dans chaque couloir, un élève contrôle la réception de celui qui le précède.",
  "deroul": [
   "Activation 3 min : course, pas chassés, talons-fesses, montées de genoux.",
   "Chevilles : sauts pieds joints sur demi-pointes, en avant, en arrière, latéraux ; cloche-pied droit puis gauche.",
   "Saut de grenouille (flexion jusqu'à 45°) puis saut extension complet, bras au-dessus de la tête.",
   "Phasme : bras tendus, corps gainé, petits sauts de chevilles.",
   "Réceptions « plantées » : saut extension, réception pieds joints, genoux fléchis, bras devant, tenir 2 s.",
   "Course d'élan : 3 pas, pré-appel (petit saut) et appel deux pieds sur la ligne, saut extension.",
   "Saute-mouton par deux : on pousse sur les mains, on ne s'assoit pas sur le dos."
  ],
  "crit": "Pieds joints à l'appel ; bras qui montent ensemble ; réception sans pas.",
  "reussite": "3 réceptions plantées de suite sans pas après un appel deux pieds.",
  "moins": "Appel sans pré-appel, départ de pied ferme.",
  "plus": "Appel deux pieds + ½ tour en l'air, réception plantée.",
  "schema": "vagues"
 },
 "S6": {
  "titre": "Circuit gainage et renforcement",
  "duree": 15,
  "cat": "Échauffement",
  "dispo": "6 stations sur le praticable, une par groupe ; 40 s d'effort, 20 s pour changer. Musique rythmée si possible.",
  "roles": "Tous pratiquent. Dans chaque groupe, un élève compte et donne le top.",
  "deroul": [
   "Activation 3 min : footing, pas chassés, montées de genoux, talons-fesses.",
   "Station 1 : pompes (sur les genoux ou sur les pieds), dos plat.",
   "Station 2 : sur les coudes, jambes serrées, monter et descendre le bassin sans toucher le sol, puis planche 10 s.",
   "Station 3 : sur le ventre, battements de jambes, relevés de buste, planche 10 s.",
   "Station 4 : chaise contre le mur, bras tendus aux oreilles.",
   "Station 5 : position « bâton » sur le dos, épaules et pieds décollés (hollow), 3 × 10 s.",
   "Station 6 : placement du dos pieds sur un cube, se grandir 3 fois en enfonçant le sol.",
   "Fin 2 min : mobilisation des poignets et des épaules."
  ],
  "crit": "Dos plat, ventre rentré, fesses serrées ; on s'arrête si le dos se creuse.",
  "reussite": "Chaque élève tient chaque station sans se creuser.",
  "moins": "20 s d'effort par station.",
  "plus": "Station 6 : ATR dos au mur, se grandir 3 fois.",
  "schema": "plan"
 },
 "S7": {
  "titre": "Les élèves mènent l'échauffement",
  "duree": 15,
  "cat": "Échauffement",
  "dispo": "Toute la classe en cercle, puis par vagues. Chaque groupe mène 2 min sur une zone.",
  "roles": "Chaque groupe prépare 1 exercice pour sa zone et le montre à la classe ; le professeur vérifie la sécurité.",
  "deroul": [
   "Activation menée par le professeur 3 min : course, pas chassés, talons-fesses.",
   "Groupe 1 : les chevilles (réceptions).",
   "Groupe 2 : les poignets (renversements).",
   "Groupe 3 : les épaules (ATR, saut de mains).",
   "Groupe 4 : les cervicales et le dos (rotations).",
   "Groupe 5 : les hanches et les adducteurs (fentes, écarts).",
   "Groupe 6 : le gainage (le bâton, la boule)."
  ],
  "crit": "Chaque exercice proposé échauffe la bonne zone, sans à-coup ni rotation brusque de la tête.",
  "reussite": "Les 6 zones ont été échauffées et chaque groupe sait pourquoi la sienne compte en gymnastique.",
  "moins": "Le professeur donne 2 exercices au choix à chaque groupe.",
  "plus": "Le groupe ajoute un exercice spécifique à l'élément qu'il veut faire valider.",
  "schema": "vagues"
 },
 "S8": {
  "titre": "Échauffement autonome de groupe",
  "duree": 15,
  "cat": "Échauffement",
  "dispo": "Chaque groupe s'échauffe sur un coin du praticable avec la fiche « Échauffements » (outil › Échauffements).",
  "roles": "Un élève du groupe mène, les autres suivent ; le professeur passe et valide.",
  "deroul": [
   "2 min : activation (course, pas chassés, sauts) choisie par le groupe.",
   "5 min : les 4 zones clés, un exercice par zone, pris dans les échauffements de S1 à S7.",
   "3 min : gainage (bâton, boule, culbuto).",
   "5 min : 3 éducatifs pour l'élément que chacun veut faire valider aujourd'hui (pris dans les fiches de l'appli)."
  ],
  "crit": "Les 4 zones clés sont toutes échauffées ; les éducatifs correspondent à l'élément visé.",
  "reussite": "Le groupe mène ses 15 min sans aide et le professeur n'a rien à ajouter.",
  "moins": "Le professeur donne la liste des exercices, le groupe les met dans l'ordre.",
  "plus": "Le groupe adapte l'échauffement à 2 éléments différents.",
  "schema": "vagues"
 }
};
/* Le focus : 10 min ensemble sur un atelier, pour que chaque groupe y arrive en sachant quoi faire. */
const FOCUS = {
 S1:{titre:"Focus sécurité : postures et premier geste de pareur", duree:10, cat:"Focus · tous les ateliers", dispo:"Toute la classe sur le praticable, par deux.",
  roles:"A gymnaste, B pareur, puis on échange. Le professeur montre, la classe refait.",
  deroul:["Les règles en 1 min : un passage à la fois, tapis collés, on ne traverse pas une zone de travail, on ne saute jamais un niveau.","Les 2 postures : la boule (menton-poitrine, genoux contre la poitrine) et le bâton (bras aux oreilles, regard sur les mains, fesses serrées).","Placement du dos à deux : B tient les chevilles, A monte les épaules au-dessus des mains, 3 s.","Premier geste de pareur : de profil, côté jambe arrière de la fente, B saisit la cuisse qui monte puis les chevilles.","L'appli : on montre une fiche (Apprendre), la validation E par un camarade, le bouton « Montrer au professeur »."],
  crit:"Pareur de profil, genoux fléchis, dos droit, prêt avant le départ.", reussite:"Chaque binôme fait 3 placements du dos parés sans chute.", moins:"Placement du dos pieds sur un cube.", plus:"Montée à l'ATR avec le pareur.", schema:"pictos:3A,3B"},
 S2:{titre:"Focus atelier 3 : l'ATR", duree:10, cat:"Focus · atelier 3", dispo:"Toute la classe devant l'atelier 3, puis par trois le long du mur.",
  roles:"Par trois : 1 gymnaste, 2 pareurs, un de chaque côté.",
  deroul:["Le professeur montre les niveaux A à C et leurs 2 critères.","Planche sur un pied, bras tendus devant ; le pareur attrape le pied arrière, mains loin devant, placement du dos.","Du placement du dos, une jambe monte à la verticale, le pareur la prend : ATR tenu 3 s.","Départ en fente avant, ATR, redescente en fente avec le pareur."],
  crit:"Regarder ses mains, coudes verrouillés, pousser sur la jambe d'appui, lancer la jambe libre tendue, serrer les fesses.", reussite:"ATR tenu 3 s avec les pareurs.", moins:"Placement du dos pieds sur un cube.", plus:"Marcher sur les mains, le pareur tient une cheville.", schema:"pictos:3A,3B,3C"},
 S3:{titre:"Focus atelier 2 : la roulade arrière", duree:10, cat:"Focus · atelier 2", dispo:"Toute la classe devant l'atelier 2, puis 3 plans inclinés sur le praticable.",
  roles:"Par deux : 1 gymnaste, 1 observateur qui regarde l'axe.",
  deroul:["Le professeur montre les niveaux A à C et leurs 2 critères.","Départ debout, bras aux oreilles ; descendre jambes tendues, poitrine près des genoux, mains au niveau des genoux.","Sur le dos : mains près des oreilles, coudes serrés, pour tourner dans l'axe.","Ouvrir le bassin, pousser sur les bras, jambes écartées et tendues jusqu'aux pieds."],
  crit:"Je roule dans l'axe sans arrêt ; coudes et genoux ne touchent pas le sol.", reussite:"3 roulades arrière dans l'axe sur le plan incliné.", moins:"Roulade arrière groupée sur plan incliné.", plus:"Roulade arrière écart au sol, jambes tendues.", schema:"pictos:2A,2B"},
 S4:{titre:"Focus atelier 4 : de la roue à la rondade", duree:10, cat:"Focus · atelier 4", dispo:"Toute la classe devant l'atelier 4, puis 5 lignes au sol sur le praticable.",
  roles:"Par deux : 1 gymnaste, 1 observateur qui regarde les 4 appuis sur la ligne.",
  deroul:["Le professeur montre les niveaux C à F et leurs 2 critères.","Roue : grande fente, bras dans le prolongement de la jambe arrière, main-main-pied-pied sur la ligne.","Main droite doigts vers la droite, main gauche face à elle ; jambes tendues au-dessus de la tête.","Rondade : sursaut, les jambes se rejoignent à l'ATR, les mains quittent le sol avant la pose des pieds, réception pieds joints face au départ."],
  crit:"Roue : 4 appuis alignés. Rondade : réception pieds joints, de face.", reussite:"Roue dans le couloir sans toucher les murs.", moins:"Roue mains sur un plinth.", plus:"Rondade sur le plan incliné, arrivée à plat ventre sur un gros tapis.", schema:"pictos:4C,4D,4F"},
 S5:{titre:"Focus atelier 1 : roulade avant élevée et salto", duree:10, cat:"Focus · atelier 1", dispo:"Toute la classe devant l'atelier 1.",
  roles:"Le professeur montre la parade du salto avec 2 élèves ; la classe observe.",
  deroul:["Le professeur montre les niveaux C à F ; D, E et F sont ⚠️ : jamais sans le professeur.","Roulade avant élevée : un pas, un saut, appel deux pieds, pousser fort, menton contre la poitrine, jambes tendues.","Salto : sursaut, impulsion deux pieds, bras vers l'oblique haute, attraper les tibias, regarder son ventre.","Parade du salto : sur le côté de la réception, une main dans le dos, une sur le ventre, on accompagne la rotation."],
  crit:"Appel deux pieds ; je tourne dans l'axe, mains sur les genoux.", reussite:"Chaque élève sait dire où se place le pareur du salto.", moins:"Roulade avant groupée sur plan incliné.", plus:"Roulade avant élevée par-dessus un cube.", schema:"pictos:1C,1D,1E"},
 S6:{titre:"Focus atelier 5 : la table de saut", duree:10, cat:"Focus · atelier 5", dispo:"Toute la classe devant l'atelier 5.",
  roles:"1 gymnaste, 2 pareurs (main sous l'épaule, main qui pousse à la cuisse) ; la classe observe.",
  deroul:["Le professeur montre les niveaux A à F et leurs 2 critères.","La course d'élan : 3 pas, pré-appel (petit saut), appel deux pieds sur le trampoline.","Mains sur la table, placement du dos jambes fléchies puis tendues, avec un pareur de chaque côté.","Saut lune : envol dos aligné, mains ensemble, repousser fort avec les bras."],
  crit:"Impulsion deux pieds dynamique ; corps tendu de la verticale à la réception.", reussite:"Chaque élève sait faire un pré-appel et un appel deux pieds.", moins:"Saut extension depuis le trampoline.", plus:"Saut lune avec les pareurs.", schema:"pictos:5A,5C,5E"},
 S7:{titre:"Focus atelier 6 : le trampoline", duree:10, cat:"Focus · atelier 6", dispo:"Toute la classe autour du trampoline.",
  roles:"1 sauteur, 4 élèves aux côtés de la toile, bras prêts, qui repoussent vers le centre.",
  deroul:["Le professeur montre les niveaux A à F ; E et F (pull-over, salto) sont ⚠️.","Impulsion pieds écartés largeur du bassin, jambes tendues, bras qui montent par l'avant.","Regard droit devant, corps gainé ; on s'arrête en fléchissant les genoux.","Saut tombé assis, tomber dos, se relever jambes tendues."],
  crit:"Corps gainé, regard devant, sauts au centre de la toile.", reussite:"10 sauts de suite au centre, arrêt maîtrisé.", moins:"5 sauts puis arrêt.", plus:"Enchaîner 3 sauts différents sans rebond intermédiaire.", schema:"pictos:6A,6C,6D"},
 S8:{titre:"Focus atelier 3 : vers le saut de mains", duree:10, cat:"Focus · atelier 3", dispo:"Toute la classe devant l'atelier 3.",
  roles:"1 gymnaste, 2 pareurs (main sous l'épaule, main sous les cuisses) ; la classe observe.",
  deroul:["Le professeur montre les niveaux C à F et leurs 2 critères.","ATR tombé plat dos, puis ATR repoussé : les mains rebondissent avant la verticale.","Saut de mains en contre-bas avec 2 pareurs : ils soutiennent la rotation, ils ne la créent pas.","Réception debout, bras verticaux."],
  crit:"Passage à l'ATR jambes écartées, la 2e jambe rejoint vite ; réception debout.", reussite:"Chaque élève sait où se placent les 2 pareurs.", moins:"ATR tombé plat dos sur tapis mou.", plus:"Sursaut et saut de mains au trampoline avec les pareurs.", schema:"pictos:3C,3D,3E,3F"}
};
const INFOS = [
 ["S1","Sécurité, postures et premier tour d'ateliers","Connaître les règles, les 2 postures et le rôle de pareur ; prendre en main l'appli ; faire 3 premiers ateliers.","Former 6 groupes de 5 ou 6 qui restent les mêmes tout le cycle ; chaque groupe installe et range toujours le même atelier (G1 l'atelier 1, G2 l'atelier 2…). Montrer le QR de la classe : chaque groupe crée son groupe dans l'appli. Tenue : cheveux attachés, sans bijou, sans chewing-gum.","Dans quel atelier as-tu le plus de marge ? Quel niveau vises-tu ?"],
 ["S2","ATR, et fin du premier tour complet","Monter à l'ATR aligné avec des pareurs ; faire les 3 ateliers qui manquent pour avoir vu les 6.","Chaque groupe installe son atelier. Les groupes commencent par l'atelier où ils n'étaient pas en S1.","Tu as vu les 6 ateliers : lequel sera ton point fort ?"],
 ["S3","Roulade arrière, 2e tour (1re moitié)","Tourner en arrière dans l'axe ; progresser d'un niveau sur 3 ateliers.","Chaque groupe installe son atelier ; 3 plans inclinés en plus sur le praticable pour le focus.","Ta roulade arrière tourne-t-elle dans l'axe ? Où étaient tes mains ?"],
 ["S4","De la roue à la rondade, 2e tour (2e moitié)","Aligner ses appuis dans la roue et découvrir la rondade ; progresser d'un niveau sur les 3 autres ateliers.","Chaque groupe installe son atelier ; 5 lignes au sol sur le praticable pour le focus.","Qu'est-ce qui change entre la roue et la rondade ?"],
 ["S5","Roulade avant élevée et salto, 3e tour (1re moitié)","Construire l'appel deux pieds et connaître la parade du salto ; viser les niveaux D sur les ateliers où C est validé.","Chaque groupe installe son atelier. Le professeur se place sur les ateliers des niveaux ⚠️.","Ton appel est-il bien sur deux pieds ? Qui t'a paré ?"],
 ["S6","Table de saut, 3e tour (2e moitié)","Construire la course d'élan et voler aligné ; progresser sur les 3 autres ateliers.","Chaque groupe installe son atelier ; table de saut basse avec tapis blocs au même niveau.","Ton pré-appel est-il un vrai petit saut ? Ton corps reste-t-il aligné ?"],
 ["S7","Trampoline, 4e tour (1re moitié)","Contrôler ses sauts au trampoline ; faire valider en P ce qui est validé en E.","Chaque groupe installe son atelier ; trampoline entouré, 4 élèves aux côtés de la toile.","Combien de niveaux as-tu validés en P ? Lequel te reste-t-il ?"],
 ["S8","Saut de mains, dernier tour et bilan","Connaître la parade du saut de mains ; faire ses dernières validations P ; faire le bilan du cycle.","Chaque groupe installe son atelier ; liste des élèves sans validation P préparée dans l'outil prof.","Sur quel atelier as-tu le plus progressé depuis S1 ? Qu'est-ce qui t'a aidé ?"]
];
const CONSIGNE_TOUR = {S1:"Aujourd'hui : niveaux A et B seulement, pas de niveau ⚠️.",S2:"Aujourd'hui : on vise le niveau suivant celui validé en S1.",S7:"Validé E : on vient en P tout de suite, sans attendre la fin.",S8:"20 min avant la fin : plus de nouveau niveau, on termine les validations en cours."};
const FOCUS_PHOTOS = {S2:"atr-bloc",S4:"roue-rondade,rondade-plan",S5:"salto-av-plinth,salto-av-tremplin",S6:"lune-atr,lune-tremplin",S8:"atr-bloc,sdm-plan"};
for(const k in FOCUS){if(FOCUS_PHOTOS[k]) FOCUS[k].schema = "photos:" + FOCUS_PHOTOS[k] + "+" + FOCUS[k].schema}
for(const k in ECH){ECH[k].schema = "exos:" + ECH_EXOS[k].join(",")}
const SEANCES = INFOS.map(([id, titre, obj, install, bilan], idx) => ({id, titre, obj, tl:TL_STD, install, bilan,
 prepare:[`${Math.floor(idx / 2) + 1}${idx < 2 ? "er" : "e"} tour complet des 6 ateliers, ${idx % 2 ? "2e moitié : les 3 ateliers que le groupe n'a pas faits la séance précédente (cours B)" : "1re moitié : 3 ateliers par groupe, les 3 autres à la séance suivante (cours A)"}.`, "Le focus du jour : " + FOCUS[id].titre.replace(/^Focus /, "") + ".", "Les validations E (camarade) et P (professeur) dans l'appli."],
 fiches:[ECH[id], FOCUS[id], TOUR(idx, 0, CONSIGNE_TOUR[id]), TOUR(idx, 1, CONSIGNE_TOUR[id]), TOUR(idx, 2, CONSIGNE_TOUR[id]),
   FIN(bilan, id === "S8" ? ["Le professeur annonce comment est calculée la note : 16 points de validation, 4 de participation."] : null)]}));

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
 ["FFG, EvoluGym « Fiches échauffement »","Les exercices illustrés de la banque et les 3 échauffements de rechange en musique, gainage-souplesse et roulades."],
 ["FFG, Access Gym « La gym comme j'aime »","Les photos de la rondade, du saut de mains, du salto avant et du saut lune."],
 ["C. Peyrotte, fiches élèves échauffement CP3 (2015)","Les consignes des animaux (éléphant, lapin, lièvre, araignée, canard), la chandelle, le franchissement du plinth."],
 ["B. Di Crescenzo, consignes de sécurité et d'organisation (2020)","Les 8 règles des ateliers."],
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
  return `<svg viewBox="0 0 700 400" role="img" aria-label="Plan de la salle : 6 ateliers autour du praticable"><rect width="700" height="400" rx="16" fill="#eef1f0"/><rect x="200" y="40" width="290" height="320" rx="10" fill="#fff" stroke="#c9d0d3" stroke-width="2"/><text x="345" y="205" text-anchor="middle" style="font:700 18px Atkinson,Arial;fill:#5b6470">Praticable</text>${A}<text x="345" y="388" text-anchor="middle" style="font:700 14px Atkinson,Arial;fill:#5b6470">3 tours par cours, au signal : 2 cours pour faire les 6 ateliers</text></svg>`;
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
  if(spec.startsWith("exos:")) return exosHTML(spec.slice(5));
  if(spec.startsWith("photos:")) return photosHTML(spec.slice(7));
  if(spec.includes("+")) return spec.split("+").map(schema).join("");
  return "";
}
