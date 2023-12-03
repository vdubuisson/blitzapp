import { PlayerRoleEnum } from '../enums/player-role.enum';

export const ROLES_RULES: Record<PlayerRoleEnum, string> = {
  [PlayerRoleEnum.NOT_SELECTED]: '',
  [PlayerRoleEnum.VILLAGEOIS]: `Son objectif est d'éliminer tous les loups-garous.

  Il n'a aucun pouvoir particulier. Pendant le jour il vote pour éliminer quelqu'un du village.`,
  [PlayerRoleEnum.LOUP_GAROU]: `Son objectif est d'éliminer tous les innocents.

  Chaque nuit, les loups-garous attaque un innocent pour essayer de le dévorer.

  Un loup-garou n'a pas le droit d'attaquer un autre loup-garou.`,
  [PlayerRoleEnum.CHASSEUR]: `Son objectif est d'éliminer tous les loups-garous.

  Quand il meurt, il tue immédiatement le joueur de son choix.`,
  [PlayerRoleEnum.CUPIDON]: `Son objectif est d'éliminer tous les loups-garous.

  Lors de la première nuit, il désigne 2 joueurs qui seront amoureux. Il peut se désigner parmi les amoureux.

  Les 2 amoureux n'auront alors pas le droit de voter contre leur moitié, et si l'un d'eux meurt, l'autre meurt immédiatement de chagrin.

  Si les 2 amoureux ne sont pas du même camp, alors ils devront terminer la partie ensemble en éliminant tous les autres joueurs.`,
  [PlayerRoleEnum.PETITE_FILLE]: `Son objectif est d'éliminer tous les loups-garous.

  Elle peut espionner discrètement les loups-garous pendant leur tour, sans essayer de se faire passer pour l'un des leurs.

  Si elle se fait prendre, les loups-garous la désignent immédiatement comme leur cible.`,
  [PlayerRoleEnum.SORCIERE]: `Son objectif est d'éliminer tous les loup-garous.

  Elle dispose d'une potion de vie permettant de soigner la victime des loups-garous, et d'une potion de mort permettant de tuer immédiatement un joueur de son choix.

  Elle ne peut utiliser chaque potion qu'une seule fois dans la partie.`,
  [PlayerRoleEnum.VOLEUR]: `Si on joue le Voleur, il faut ajouter 2 cartes Simple Villageois dans la partie.

  En début de partie, il peut échanger son rôle avec 2 rôles non distribués et garder ce rôle jusqu'à la fin de la partie.

  S'il décide de ne pas échanger son rôle, il restera un villageois et son objectif sera d'éliminer tous les loups-garous.

  Si les 2 rôles non distribués sont des loups, il est obligé d'échanger son rôle contre l'un des deux, son objectif sera alors celui du rôle qu'il aura choisi.`,
  [PlayerRoleEnum.VOYANTE]: `Son objectif est d'éliminer tous les loup-garous.

  Chaque nuit, elle peut regarder le rôle d'un joueur de son choix.`,
  [PlayerRoleEnum.JOUEUR_FLUTE]: `Son objectif est de charmer tous les autres joueurs.

  Chaque nuit, il charme 2 joueurs de son choix.

  Après son tour, les joueurs charmés sont appelés pour se découvrir.`,
  [PlayerRoleEnum.CORBEAU]: `Son objectif est d'éliminer tous les loup-garous.

  Chaque nuit, il accuse un joueur de son choix.

  Le joueur accusé aura automatiquement 2 votes contre lui de plus pendant le vote du jour.`,
  [PlayerRoleEnum.ENFANT_SAUVAGE]: `Son objectif peut changer en cours de partie.

  Lors de la première nuit, il choisit un joueur qui sera son modèle.

  Tant que son modèle est en vie, son objectif est d'éliminer tous les loups-garous avec les autres villageois.

  Si son modèle meurt, il devient alors un loup-garou, et son objectif devient d'éliminer tous les innocents avec les autres loups-garous.`,
  [PlayerRoleEnum.SALVATEUR]: `Son objectif est d'éliminer tous les loup-garous.

  Chaque nuit, il choisit un joueur qui sera protégé des loups-garous pour cette nuit. Il peut se choisir lui-même. Il ne peut pas choisir le même joueur 2 nuits de suite.

  La protection du Salvateur est inefficace sur la Petite fille.

  La Sorcière ne peut pas soigner la victime des loups-garous si celle-ci est déjà protégée par le Salvateur.`,
  [PlayerRoleEnum.GRAND_MECHANT_LOUP]: `Son objectif est d'éliminer tous les innocents.

  Chaque nuit, il se réveille avec les autres loups-garous pour attaquer un innocent.

  Tant qu'aucun loup-garou n'est éliminé, il se réveille une 2e fois juste après les loups-garous pour attaquer un 2e innocent.`,
  [PlayerRoleEnum.MONTREUR_OURS]: `Son objectif est d'éliminer tous les loups-garous.

  Tous les matins, si l'un de ses voisins est un loup-garou, alors son ours grogne.`,
  [PlayerRoleEnum.RENARD]: `Son objectif est d'éliminer tous les loups-garous.

  Chaque nuit, il peut renifler un groupe de 3 joueurs en désignant le joueur du milieu.

  Si ce joueur ou l'un de ses voisins est un loup-garou, alors le Renard garde son pouvoir. Sinon, le Renard perd son pouvoir pour le reste de la partie.

  Le Renard n'est pas obligé de renifler des joueurs pendant la nuit.

  Si le Renard perd son pouvoir, le meneur continue de l'appeler chaque nuit pour ne pas indiquer aux autres joueurs la perte de ce pouvoir.`,
  [PlayerRoleEnum.CHIEN_LOUP]: `Lors de la première nuit, il choisit s'il veut être un Villageois ou un Loup-Garou.

  S'il choisit d'être un Villageois, alors son objectif sera d'éliminer tous les loups-garous.

  S'il choisit d'être un Loup-Garou, alors son objectif sera d'éliminer tous les innocents, et il se réveillera chaque nuit avec les loups-garous pour dévorer un innocent.`,
  [PlayerRoleEnum.SOEUR]: `Son objectif est d'éliminer tous les loups-garous.

  Lors de la première nuit, les deux Sœurs se découvrent. Elles peuvent donc se faire confiance lors des votes du village.`,
  [PlayerRoleEnum.FRERE]: `Son objectif est d'éliminer tous les loups-garous.

  Lors de la première nuit, les trois Frères se découvrent. Ils peuvent donc se faire confiance lors des votes du village.`,
  [PlayerRoleEnum.LOUP_BLANC]: `Son objectif est de terminer la partie en étant le seul joueur en vie.

  Chaque nuit, il se réveille avec les autres loups-garous pour attaquer un innocent.

  Une nuit sur deux, il se réveille et peut éliminer un Loup-Garou s'il le souhaite.`,
};
