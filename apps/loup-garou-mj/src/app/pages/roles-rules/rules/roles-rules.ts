import { PlayerRoleEnum } from '../../../core/enums/player-role.enum';

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
  [PlayerRoleEnum.VOLEUR]: `En début de partie, il peut échanger son rôle avec 2 rôles non distribués et garder ce rôle jusqu'à la fin de la partie.

  S'il décide de ne pas échanger son rôle, il restera un villageois et son objectif sera d'éliminer tous les loups-garous.

  Si les 2 rôles non distribués sont des loups-garous, il est obligé d'échanger son rôle et de devenir un loup-garou, son objectif sera alors d'éliminer tous les innocents.`,
  [PlayerRoleEnum.VOYANTE]: `Son objectif est d'éliminer tous les loup-garous.
  
  Chaque nuit, elle peut regarder le rôle d'un joueur de son choix.`,
};
