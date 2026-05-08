/* ========================================
   CraftDev - Logique Principale
   ======================================== */

// === DONNÉES ===

const pluginsData = [
    {
        id: 1, name: "EssentialsX", category: "admin",
        desc: "Suite complète de commandes essentielles pour votre serveur : homes, teleportation, économie, surnoms et bien plus.",
        fullDesc: "EssentialsX est le plugin incontournable pour tout serveur Minecraft. Il fournit plus de 100 commandes et fonctionnalités couvrant la teleportation, la gestion de l'économie, les homes, les warps, les surnoms, la messagerie privée, et bien plus. Compatible avec Vault et la plupart des plugins d'économie et de permissions.",
        features: ["Commandes de teleportation (/tpa, /home, /warp)", "Système d'économie intégré", "Gestion des surnoms et préfixes", "Messagerie privée et mail", "Support MultiVerse", "Auto-update configurable"],
        downloads: 2850000, rating: 4.8, version: "2.20.1", author: "EssentialsX Team",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 2, name: "LuckPerms", category: "admin",
        desc: "Gestionnaire de permissions avancé et performant. Le standard de l'industrie pour la gestion des rangs et droits.",
        fullDesc: "LuckPerms est le gestionnaire de permissions le plus avancé et le plus performant disponible. Il supporte les groupes, les tracks, les contexts, le web editor, les prefixes/suffixes, et est compatible avec tous les mods de chat. Stockage MySQL, PostgreSQL, MongoDB, SQLite ou YAML.",
        features: ["Web editor intégré", "Système de tracks et de groupes", "Support des contexts", "Prefixes et suffixes", "Multi-serveur sync", "Logs et audit complets"],
        downloads: 1920000, rating: 4.9, version: "5.4.102", author: "Luck",
        tags: ["Spigot", "Paper", "Fabric"]
    },
    {
        id: 3, name: "Vault", category: "economy",
        desc: "API essentielle qui fait le pont entre les plugins d'économie, de permissions et de chat. Indispensable.",
        fullDesc: "Vault est l'API de référence qui fournit une interface unifiée pour les plugins d'économie, de permissions et de chat. Presque tous les plugins qui interagissent avec l'économie ou les permissions nécessitent Vault comme dépendance.",
        features: ["API économie unifiée", "API permissions unifiée", "API chat unifiée", "Support multi-backends", "Léger et performant", "Standard de la communauté"],
        downloads: 3100000, rating: 4.7, version: "1.7.3", author: "MilkBowl",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 4, name: "WorldGuard", category: "protection",
        desc: "Protection de régions avancée. Définissez des zones protégées avec des flags personnalisables pour chaque région.",
        fullDesc: "WorldGuard vous permet de définir des régions protégées dans votre monde avec des flags personnalisables. Empêchez le grief, contrôlez le PvP, gérez l'utilisation des blocs, et bien plus. Supporte les régions imbriquées et les priorités.",
        features: ["Régions protégées", "Flags personnalisables", "Régions imbriquées", "Protection anti-grief", "Contrôle PvP par zone", "Blacklist d'items"],
        downloads: 1750000, rating: 4.6, version: "7.0.9", author: "sk89q",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 5, name: "mcMMO", category: "gameplay",
        desc: "Système RPG complet avec compétences, niveaux et aptitudes spéciales. Transformez votre serveur en expérience RPG.",
        fullDesc: "mcMMO ajoute un système de compétences RPG complet à Minecraft. Les joueurs peuvent monter de niveau dans différentes compétences comme le minage, la pêche, le combat, l'excavation et bien plus. Chaque compétence débloque des aptitudes spéciales et des bonus passifs.",
        features: ["13 compétences uniques", "Système de niveaux et d'XP", "Aptitudes spéciales", "Leaderboards", "Parties et groupes", "Configurable en détail"],
        downloads: 1480000, rating: 4.5, version: "2.1.226", author: "nossr50",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 6, name: "Dynmap", category: "utility",
        desc: "Carte dynamique du monde accessible depuis votre navigateur. Visualisez votre monde en temps réel sur le web.",
        fullDesc: "Dynmap génère une carte dynamique et interactive de votre monde Minecraft, accessible depuis n'importe quel navigateur web. Supporte les vues isométriques et planes, les marqueurs, les joueurs en temps réel, et les frontières de régions WorldGuard.",
        features: ["Carte web en temps réel", "Vues isométriques et planes", "Marqueurs personnalisés", "Position des joueurs", "Support WorldGuard/Towny", "Thèmes personnalisables"],
        downloads: 1230000, rating: 4.4, version: "3.7", author: "mikeprimm",
        tags: ["Spigot", "Paper", "Forge"]
    },
    {
        id: 7, name: "Citizens", category: "gameplay",
        desc: "Créez des NPCs personnalisés avec des comportements variés. Gardes, marchands, guides, et bien plus.",
        fullDesc: "Citizens permet de créer des NPCs (Non-Player Characters) personnalisés sur votre serveur. Les NPCs peuvent avoir des skins, des dialogues, des routes de patrol, et être liés à des plugins comme Sentinel pour le combat ou Denizen pour les scripts.",
        features: ["NPCs avec skins personnalisés", "Dialogues et conversations", "Routes et patrol", "Compatibilité Sentinel", "Support Denizen", "Comportements modulaires"],
        downloads: 980000, rating: 4.3, version: "2.0.33", author: "CitizensDev",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 8, name: "GriefPrevention", category: "protection",
        desc: "Système de protection anti-grief intuitif basé sur les claims. Les joueurs protègent leurs constructions facilement.",
        fullDesc: "GriefPrevention offre un système de protection simple et intuitif basé sur les claims. Les joueurs utilisent un outil (par défaut la pelle dorée) pour définir leurs territoires. Aucune commande complexe à retenir, tout se fait de manière visuelle et intuitive.",
        features: ["Claims visuels et intuitifs", "Système de trust", "Protection automatique", "Subdivisions de claims", "Gestion des conflits", "Admin claims"],
        downloads: 870000, rating: 4.7, version: "16.18.1", author: "RoboMWM",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 9, name: "PlaceholderAPI", category: "utility",
        desc: "Système de placeholders centralisé. Utilisez des variables dynamiques partout : chat, tablist, scoreboard, etc.",
        fullDesc: "PlaceholderAPI fournit un système unifié de placeholders (variables dynamiques) utilisables dans tous vos plugins. Avec plus de 200 expansions disponibles, c'est l'outil indispensable pour personnaliser l'affichage de votre serveur.",
        features: ["200+ expansions disponibles", "Placeholders dynamiques", "Support JavaScript", "API pour développeurs", "Reloader en jeu", "Cloud expansions"],
        downloads: 1560000, rating: 4.6, version: "2.11.5", author: "HelpChat",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 10, name: "Towny", category: "gameplay",
        desc: "Système de villes et nations complet. Créez des communautés, gérez des territoires et bâtissez des nations.",
        fullDesc: "Towny est un plugin de gestion de villes et de nations. Les joueurs peuvent fonder des villes, inviter des citoyens, construire ensemble, et former des nations. Système d'économie intégré, guerres entre nations, taxes, et protection des territoires.",
        features: ["Système de villes et nations", "Protection de territoires", "Économie et taxes", "Guerres et conflits", "Gestion des perms par plot", "Dynmap intégré"],
        downloads: 720000, rating: 4.4, version: "0.99.5.0", author: "TownyAdvanced",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 11, name: "MythicMobs", category: "gameplay",
        desc: "Créez des mobs personnalisés avec des compétences, des drops et des mécaniques uniques. Boss fights épiques.",
        fullDesc: "MythicMobs est l'outil ultime pour créer des mobs personnalisés. Créez des boss avec des phases, des compétences spéciales, des drops custom, et des mécaniques avancées. Supporte les minions, les déclencheurs, et les conditions.",
        features: ["Mobs custom illimités", "Système de compétences", "Phases de boss", "Drops personnalisés", "Conditions et triggers", "Random spawns"],
        downloads: 650000, rating: 4.5, version: "5.6.2", author: "Ashijin",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 12, name: "WorldEdit", category: "world",
        desc: "Éditeur de monde in-game puissant. Sélection, copie, rotation, et manipulation de blocs à grande échelle.",
        fullDesc: "WorldEdit est l'éditeur de monde incontournable. Sélectionnez des zones, copiez, collez, rotatez, remplissez, et manipulez des milliers de blocs en quelques secondes. Supporte les schematics, les brushes, et les scripts CraftScript.",
        features: ["Sélection et manipulation de zone", "Copier/coller/rotate", "Brushes de terrain", "Schematics", "Génération de formes", "Undo/Redu illimité"],
        downloads: 2100000, rating: 4.7, version: "7.3.0", author: "sk89q",
        tags: ["Spigot", "Paper", "Fabric", "Forge"]
    },
    {
        id: 13, name: "ShopGUIPlus", category: "economy",
        desc: "Boutique GUI avancée et entièrement personnalisable. Créez des shops élégants pour votre économie.",
        fullDesc: "ShopGUIPlus vous permet de créer des boutiques élégantes avec une interface graphique intuitive. Supporte les catégories, les items custom, les enchants, les potions, et s'intègre avec Vault, EssentialsX et PlayerPoints.",
        features: ["Interface GUI moderne", "Catégories illimitées", "Items custom et NBT", "Achat/vente dynamique", "Support dynprix", "Intégration Vault"],
        downloads: 410000, rating: 4.3, version: "1.90.0", author: "HexeDev",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 14, name: "ProtocolLib", category: "utility",
        desc: "Bibliothèque pour intercepter et modifier les paquets réseau. Indispensable pour de nombreux plugins avancés.",
        fullDesc: "ProtocolLib fournit une API propre et thread-safe pour intercepter, modifier et envoyer des paquets réseau Minecraft. Utilisé comme dépendance par de nombreux plugins avancés qui nécessitent un contrôle bas niveau du protocole.",
        features: ["Interception de paquets", "API thread-safe", "Auto-compilation", "Compatibilité multi-versions", "PacketType sûr", "Filtres avancés"],
        downloads: 1890000, rating: 4.5, version: "5.1.0", author: "dmulloy2",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 15, name: "SlimeFun", category: "gameplay",
        desc: "Ajoutez plus de 500 items et machines tech. De l'industrie à la magie, un modpack complet en plugin.",
        fullDesc: "SlimeFun ajoute plus de 500 nouveaux items et mécaniques à Minecraft, allant de l'industrie lourde à la magie en passant par les ressources magiques. Système de recherche, de crafting custom, de machines, et de multi-blocks.",
        features: ["500+ items et blocs", "Arbre de recherche", "Machines et multi-blocks", "Système de crafting custom", "Addons communautaires", "Catégories tech et magie"],
        downloads: 580000, rating: 4.2, version: "RC-37", author: "TheBusyBiscuit",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 16, name: "CMI", category: "admin",
        desc: "Suite admin tout-en-un avec 300+ commandes. Remplace Essentials, Vault et bien d'autres plugins.",
        fullDesc: "CMI est une suite administration complète avec plus de 300 commandes et fonctionnalités. Il peut remplacer Essentials, Vault, et de nombreux autres plugins. Inclut un système de bounties, de kits, de homes, de teleportation, de métiers, et bien plus.",
        features: ["300+ commandes", "Système de kits avancé", "Bounties et récompenses", "Custom textures support", "BungeeCord compatible", "Web panel intégré"],
        downloads: 340000, rating: 4.4, version: "9.6.8.2", author: "Zrips",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 17, name: "Spartan", category: "protection",
        desc: "Anti-cheat avancé avec détection intelligente. Combat les hacks de mouvement, combat, et monde.",
        fullDesc: "Spartan est un anti-cheat avancé utilisant des algorithmes d'apprentissage pour détecter les cheats de mouvement, de combat, et d'interaction avec le monde. Faux positifs minimisés grâce à un système de vérification en cascade.",
        features: ["Détection movement hacks", "Détection combat hacks", "Détection world hacks", "Faux positifs minimes", "Auto-modération", "Logs et notifications"],
        downloads: 290000, rating: 4.1, version: "Build 578", author: "Vagdedes",
        tags: ["Spigot", "Paper"]
    },
    {
        id: 18, name: "CustomCrafting", category: "gameplay",
        desc: "Créez des recettes de craft custom avec des conditions avancées. Items NBT, recettes complexes et plus.",
        fullDesc: "CustomCrafting permet de créer des recettes de craft entièrement personnalisées avec support des items NBT, des conditions avancées, des recettes dans le fourneau, l'enclume, et le chaudron. Interface d'édition in-game intuitive.",
        features: ["Recettes custom illimitées", "Support NBT avancé", "Crafting, fourneau, enclume", "Conditions et requirements", "Éditeur in-game", "Categorie de livre de recettes"],
        downloads: 220000, rating: 4.3, version: "4.15.1", author: "WolfyScript",
        tags: ["Spigot", "Paper"]
    }
];

const postsData = [
    {
        id: 1, title: "Comment configurer LuckPerms pour un serveur Roleplay ?", category: "help",
        author: "BuildMaster42", avatar: "BM",
        date: "2025-01-12", votes: 24, replies: [
            { author: "AdminPro", avatar: "AP", date: "2025-01-12", body: "Commence par créer tes groupes principaux : Admin, Modo, Joueur, Visiteur. Ensuite utilise les tracks pour la progression." },
            { author: "LuckFan", avatar: "LF", date: "2025-01-13", body: "N'oublie pas d'utiliser le web editor, c'est tellement plus pratique que les commandes ingame !" }
        ],
        body: "Bonjour,\n\nJe monte un serveur RP et j'ai besoin de configurer LuckPerms avec des groupes bien définis. J'ai 5 rangs de base mais je ne sais pas comment organiser les permissions.\n\nQuelqu'un pourrait me guider sur la meilleure façon de structurer les groupes et les tracks ?"
    },
    {
        id: 2, title: "Mon serveur lag énormément, comment optimiser ?", category: "help",
        author: "ServerPain", avatar: "SP",
        date: "2025-01-15", votes: 31, replies: [
            { author: "PerfGuru", avatar: "PG", date: "2025-01-15", body: "Utilise Spark pour profiler ton serveur. C'est le meilleur outil pour identifier les sources de lag." },
            { author: "PaperDev", avatar: "PD", date: "2025-01-16", body: "Passe à Paper si tu es encore sur Spigot. Les optimisations de chunk loading font une énorme différence." }
        ],
        body: "Salut à tous,\n\nMon serveur a des TPS qui chutent à 12-14 quand il y a plus de 30 joueurs connectés. J'ai déjà augmenté la RAM mais ça ne suffit pas.\n\nQuelles sont les meilleures pratiques pour optimiser les performances ?"
    },
    {
        id: 3, title: "[TUTO] Créer un système d'économie complet avec Vault", category: "tutorial",
        author: "EcoWizard", avatar: "EW",
        date: "2025-01-10", votes: 45, replies: [
            { author: "NewDev", avatar: "ND", date: "2025-01-11", body: "Super tuto, merci ! J'ai réussi à mettre en place l'économie en 30 minutes." },
            { author: "ProAdmin", avatar: "PA", date: "2025-01-12", body: "J'ajouterais qu'il faut aussi configurer les taux de conversion si tu utilises plusieurs devises." }
        ],
        body: "Dans ce tutoriel, je vais vous montrer comment configurer un système d'économie complet en utilisant Vault et EssentialsX.\n\nÉtape 1 : Installer Vault et EssentialsX\nÉtape 2 : Configurer les symboles monétaires\nÉtape 3 : Définir le solde de départ\nÉtape 4 : Configurer les shops avec ShopGUIPlus\nÉtape 5 : Mettre en place les jobs avec Jobs Reborn"
    },
    {
        id: 4, title: "[SHOWCASE] Mon serveur survie custom avec +200 joueurs", category: "showcase",
        author: "ProudOwner", avatar: "PO",
        date: "2025-01-18", votes: 52, replies: [
            { author: "Impressed", avatar: "IM", date: "2025-01-18", body: "Incroyable le travail ! Les builds sont magnifiques et le système de donjons est top." },
            { author: "CuriousCat", avatar: "CC", date: "2025-01-19", body: "Quel hébergeur tu utilises ? Et combien de RAM allouée ?" }
        ],
        body: "Après 8 mois de développement, je suis fier de vous présenter CraftRealms !\n\nLe serveur dispose de :\n- Système de donjons procéduraux (MythicMobs)\n- Économie complète avec marché boursier\n- 15 métiers uniques\n- Système de claims custom\n- Events hebdomadaires\n\nVenez tester et donnez-moi vos retours !"
    },
    {
        id: 5, title: "WorldGuard flags ne fonctionnent pas correctement", category: "help",
        author: "ConfusedAdmin", avatar: "CA",
        date: "2025-01-20", votes: 8, replies: [
            { author: "WGExpert", avatar: "WE", date: "2025-01-20", body: "Vérifie la priorité de tes régions. Les flags de __global__ sont override par les régions spécifiques." }
        ],
        body: "J'ai défini le flag pvp deny sur ma région spawn, mais les joueurs peuvent quand même se taper.\n\nJ'ai aussi essayé avec /rg flag spawn pvp deny mais rien n'y fait. Quelqu'un a déjà eu ce problème ?"
    },
    {
        id: 6, title: "Quel plugin pour un système de mini-jeux ?", category: "help",
        author: "MiniGameDev", avatar: "MD",
        date: "2025-01-22", votes: 15, replies: [
            { author: "GameMaster", avatar: "GM", date: "2025-01-22", body: "Pour du simple, BedWars2023 ou TNTRun. Pour du custom, utilise MythicMobs + CommandAPI." },
            { author: "ArcadeFan", avatar: "AF", date: "2025-01-23", body: "Je recommande PartyGames si tu veux plusieurs mini-jeux dans un seul plugin." }
        ],
        body: "Je veux ajouter des mini-jeux sur mon serveur : BedWars, SkyWars, TNTRun au minimum.\n\nEst-ce mieux d'utiliser un plugin par mini-jeu ou un framework comme MinigamesLib ?"
    },
    {
        id: 7, title: "[TUTO] Configurer Dynmap correctement", category: "tutorial",
        author: "MapGuru", avatar: "MG",
        date: "2025-01-08", votes: 38, replies: [
            { author: "VisualLearner", avatar: "VL", date: "2025-01-09", body: "Merci pour la section sur les templates de rendu, ça change tout visuellement !" }
        ],
        body: "Dynmap est souvent mal configuré, ce qui donne des cartes laides et des performances dégradées.\n\n1. Choisir le bon template de rendu (hd plutôt que lowres)\n2. Configurer les couches de surface\n3. Optimiser le taux de rafraîchissement\n4. Activer le rendu progressif\n5. Configurer les marqueurs de régions"
    },
    {
        id: 8, title: "Erreur au démarrage avec Vault et EssentialsX", category: "help",
        author: "CrashReport", avatar: "CR",
        date: "2025-01-25", votes: 6, replies: [
            { author: "FixMaster", avatar: "FM", date: "2025-01-25", body: "Vérifie que tu as la bonne version de Vault pour ta version de Minecraft. La 1.7.3 est pour 1.16+." }
        ],
        body: "Mon serveur crash au démarrage avec cette erreur :\n\n[SEVERE] Could not load 'plugins/Vault.jar'\n[SEVERE] org.bukkit.plugin.UnknownDependencyException: Vault\n\nJ'ai bien mis Vault dans le dossier plugins. Quelqu'un peut m'aider ?"
    },
    {
        id: 9, title: "[DISCUSSION] Spigot vs Paper en 2025 ?", category: "discussion",
        author: "TechDebater", avatar: "TD",
        date: "2025-01-28", votes: 67, replies: [
            { author: "PaperAdvocate", avatar: "PA2", date: "2025-01-28", body: "Paper sans hésitation. Les patchs de performance, l'API élargie, et la communauté plus active." },
            { author: "SpigotLoyal", avatar: "SL", date: "2025-01-29", body: "Spigot reste plus stable pour les plugins legacy. Paper casse parfois la compatibilité." },
            { author: "NeutralDev", avatar: "ND2", date: "2025-01-29", body: "Les deux ont leur place. Paper pour les gros serveurs, Spigot pour les petits setups simples." }
        ],
        body: "En 2025, quel est le meilleur choix pour un nouveau serveur ?\n\nSpigot est le classique mais Paper a des optimisations impressionnantes. Quels sont vos retours d'expérience sur la stabilité, la compatibilité plugins et les performances ?"
    },
    {
        id: 10, title: "Best practices pour sécuriser un serveur Minecraft", category: "tutorial",
        author: "SecurityFirst", avatar: "SF",
        date: "2025-01-05", votes: 41, replies: [
            { author: "SafeAdmin", avatar: "SA", date: "2025-01-06", body: "Excellent guide ! J'ajouterais : toujours utiliser un firewall et limiter l'accès RCON." }
        ],
        body: "Guide complet pour sécuriser votre serveur Minecraft :\n\n1. Utiliser un firewall (iptables/ufw)\n2. Changer le port par défaut\n3. Activer online-mode=true si possible\n4. Installer un anti-cheat (Spartan, Matrix)\n5. Limiter les permissions op\n6. Faire des backups réguliers\n7. Utiliser un proxy (BungeeCord/Velocity)\n8. Cacher l'IP derrière un domaine"
    }
];

// Catégories et labels
const categoryLabels = {
    admin: "Administration",
    economy: "Économie",
    gameplay: "Gameplay",
    protection: "Protection",
    chat: "Chat",
    utility: "Utilitaires",
    world: "Monde",
    minigame: "Mini-jeux"
};

const postCategoryLabels = {
    help: "Aide",
    tutorial: "Tutoriel",
    showcase: "Showcase",
    discussion: "Discussion"
};

const postCategoryColors = {
    help: "admin",
    tutorial: "gameplay",
    showcase: "economy",
    discussion: "utility"
};

// === ÉTAT ===
let currentPluginFilter = 'all';
let currentPluginSearch = '';
let currentPluginSort = 'popular';
let currentPostCategory = 'all';
let currentPostSearch = '';
let bookmarks = JSON.parse(localStorage.getItem('craftdev-bookmarks') || '[]');
let userVotes = JSON.parse(localStorage.getItem('craftdev-votes') || '{}');

// === UTILITAIRES ===

function formatNumber(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toString();
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', info: 'fa-info-circle' };
    toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function getInitials(name) {
    return name.split(/(?=[A-Z])/).slice(0, 2).join('').toUpperCase().slice(0, 2);
}

// === RENDU PLUGINS ===

function renderPluginCard(plugin) {
    const isBookmarked = bookmarks.includes(plugin.id);
    return `
        <div class="plugin-card" data-plugin-id="${plugin.id}">
            <div class="plugin-card-header">
                <div class="plugin-icon ${plugin.category}">
                    ${getInitials(plugin.name)}
                </div>
                <button class="plugin-bookmark ${isBookmarked ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleBookmark(${plugin.id})"
                        title="${isBookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
                    <i class="fas fa-bookmark"></i>
                </button>
            </div>
            <h3 class="plugin-card-title">${plugin.name}</h3>
            <p class="plugin-card-desc">${plugin.desc}</p>
            <div class="plugin-card-meta">
                <span class="plugin-tag ${plugin.category}">${categoryLabels[plugin.category]}</span>
                ${plugin.tags.map(t => `<span class="plugin-tag">${t}</span>`).join('')}
                <span class="plugin-stat"><i class="fas fa-download"></i> ${formatNumber(plugin.downloads)}</span>
                <span class="plugin-stat"><i class="fas fa-star" style="color: var(--gold)"></i> ${plugin.rating}</span>
                <span class="plugin-stat"><i class="fas fa-code-branch"></i> v${plugin.version}</span>
            </div>
        </div>
    `;
}

function getFilteredPlugins() {
    let filtered = [...pluginsData];

    if (currentPluginFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentPluginFilter);
    }

    if (currentPluginSearch.trim()) {
        const q = currentPluginSearch.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.desc.toLowerCase().includes(q) ||
            p.category.includes(q) ||
            p.tags.some(t => t.toLowerCase().includes(q))
        );
    }

    switch (currentPluginSort) {
        case 'popular':
            filtered.sort((a, b) => b.downloads - a.downloads);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'newest':
            filtered.sort((a, b) => b.id - a.id);
            break;
    }

    return filtered;
}

function renderPlugins() {
    const grid = document.getElementById('plugins-grid');
    if (!grid) return;

    const filtered = getFilteredPlugins();

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1">
                <i class="fas fa-search"></i>
                <p>Aucun plugin trouvé. Essayez d'ajuster vos filtres.</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(p => renderPluginCard(p)).join('');

    // Ajouter les events de clic pour le détail
    grid.querySelectorAll('.plugin-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.pluginId);
            showPluginDetail(id);
        });
    });
}

function showPluginDetail(id) {
    const plugin = pluginsData.find(p => p.id === id);
    if (!plugin) return;

    const modal = document.getElementById('plugin-modal');
    if (!modal) return;

    const body = modal.querySelector('.modal-body');
    body.innerHTML = `
        <div class="plugin-detail-header">
            <div class="plugin-detail-icon ${plugin.category}">
                ${getInitials(plugin.name)}
            </div>
            <div class="plugin-detail-info">
                <h2>${plugin.name}</h2>
                <div class="plugin-detail-author">Par ${plugin.author} &middot; v${plugin.version}</div>
            </div>
        </div>
        <p class="plugin-detail-desc">${plugin.fullDesc}</p>
        <h3 style="margin-bottom: 12px; font-size: 1rem;">Fonctionnalités principales</h3>
        <ul class="plugin-detail-features">
            ${plugin.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
        </ul>
        <div class="plugin-detail-stats">
            <div class="plugin-detail-stat">
                <div class="plugin-detail-stat-value">${formatNumber(plugin.downloads)}</div>
                <div class="plugin-detail-stat-label">Téléchargements</div>
            </div>
            <div class="plugin-detail-stat">
                <div class="plugin-detail-stat-value" style="color: var(--gold)">${plugin.rating}/5</div>
                <div class="plugin-detail-stat-label">Note</div>
            </div>
            <div class="plugin-detail-stat">
                <div class="plugin-detail-stat-value">${plugin.version}</div>
                <div class="plugin-detail-stat-label">Version</div>
            </div>
        </div>
        <div style="margin-top: 24px; display: flex; gap: 12px;">
            <button class="btn btn-primary" onclick="showToast('Lien copié dans le presse-papier !', 'info'); closeModal('plugin-modal')">
                <i class="fas fa-download"></i> Télécharger
            </button>
            <button class="btn btn-secondary" onclick="toggleBookmark(${plugin.id}); showPluginDetail(${plugin.id})">
                <i class="fas fa-bookmark"></i> ${bookmarks.includes(plugin.id) ? 'Retirer' : 'Favoris'}
            </button>
        </div>
    `;

    openModal('plugin-modal');
}

function toggleBookmark(id) {
    const idx = bookmarks.indexOf(id);
    if (idx > -1) {
        bookmarks.splice(idx, 1);
        showToast('Plugin retiré des favoris', 'info');
    } else {
        bookmarks.push(id);
        showToast('Plugin ajouté aux favoris', 'success');
    }
    localStorage.setItem('craftdev-bookmarks', JSON.stringify(bookmarks));
    renderPlugins();
}

// === RENDU POSTS ===

function renderPostCard(post) {
    const voteState = userVotes[`post-${post.id}`] || 0;
    return `
        <div class="post-card" data-post-id="${post.id}">
            <div class="post-votes">
                <button class="vote-btn ${voteState === 1 ? 'active' : ''}" 
                        onclick="event.stopPropagation(); votePost(${post.id}, 1)">
                    <i class="fas fa-chevron-up"></i>
                </button>
                <span class="vote-count">${post.votes + voteState}</span>
                <button class="vote-btn down ${voteState === -1 ? 'active' : ''}" 
                        onclick="event.stopPropagation(); votePost(${post.id}, -1)">
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.body.slice(0, 150)}...</p>
                <div class="post-meta">
                    <div class="post-author">
                        <div class="post-avatar">${post.avatar}</div>
                        <span>${post.author}</span>
                    </div>
                    <span class="plugin-tag ${postCategoryColors[post.category]}">${postCategoryLabels[post.category]}</span>
                    <span class="post-info"><i class="far fa-clock"></i> ${post.date}</span>
                    <span class="post-replies"><i class="fas fa-comment"></i> ${post.replies.length} réponse${post.replies.length > 1 ? 's' : ''}</span>
                </div>
            </div>
        </div>
    `;
}

function getFilteredPosts() {
    let filtered = [...postsData];

    if (currentPostCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentPostCategory);
    }

    if (currentPostSearch.trim()) {
        const q = currentPostSearch.toLowerCase();
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.body.toLowerCase().includes(q) ||
            p.author.toLowerCase().includes(q)
        );
    }

    filtered.sort((a, b) => b.votes - a.votes);
    return filtered;
}

function renderPosts() {
    const list = document.getElementById('posts-list');
    if (!list) return;

    const filtered = getFilteredPosts();

    if (filtered.length === 0) {
        list.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-comments"></i>
                <p>Aucun post trouvé. Soyez le premier à poster !</p>
            </div>
        `;
        return;
    }

    list.innerHTML = filtered.map(p => renderPostCard(p)).join('');

    // Ajouter les events de clic pour le détail
    list.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.postId);
            showPostDetail(id);
        });
    });
}

function showPostDetail(id) {
    const post = postsData.find(p => p.id === id);
    if (!post) return;

    const modal = document.getElementById('post-modal');
    if (!modal) return;

    const body = modal.querySelector('.modal-body');
    body.innerHTML = `
        <h2 class="post-detail-title">${post.title}</h2>
        <div class="post-detail-meta">
            <div class="post-author">
                <div class="post-avatar">${post.avatar}</div>
                <span>${post.author}</span>
            </div>
            <span class="plugin-tag ${postCategoryColors[post.category]}">${postCategoryLabels[post.category]}</span>
            <span class="post-info"><i class="far fa-clock"></i> ${post.date}</span>
            <span class="post-replies"><i class="fas fa-comment"></i> ${post.replies.length} réponse${post.replies.length > 1 ? 's' : ''}</span>
        </div>
        <div class="post-detail-body">${post.body}</div>
        <div class="replies-section">
            <h3>${post.replies.length} Réponse${post.replies.length > 1 ? 's' : ''}</h3>
            ${post.replies.map(r => `
                <div class="reply-item">
                    <div class="reply-header">
                        <div class="post-avatar" style="width:22px;height:22px;font-size:0.6rem">${r.avatar}</div>
                        <span class="reply-author">${r.author}</span>
                        <span class="reply-date">${r.date}</span>
                    </div>
                    <div class="reply-body">${r.body}</div>
                </div>
            `).join('')}
            <div class="reply-form">
                <input type="text" id="reply-input" placeholder="Écrire une réponse...">
                <button class="btn btn-primary btn-sm" onclick="addReply(${post.id})">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    `;

    openModal('post-modal');
}

function addReply(postId) {
    const input = document.getElementById('reply-input');
    if (!input || !input.value.trim()) {
        showToast('Veuillez écrire une réponse', 'error');
        return;
    }

    const post = postsData.find(p => p.id === postId);
    if (!post) return;

    post.replies.push({
        author: "Vous",
        avatar: "VO",
        date: new Date().toISOString().split('T')[0],
        body: input.value.trim()
    });

    showToast('Réponse ajoutée avec succès', 'success');
    showPostDetail(postId);
    renderPosts();
}

function votePost(id, direction) {
    const key = `post-${id}`;
    const current = userVotes[key] || 0;

    if (current === direction) {
        userVotes[key] = 0;
    } else {
        userVotes[key] = direction;
    }

    localStorage.setItem('craftdev-votes', JSON.stringify(userVotes));
    renderPosts();
    renderHomeRecentPosts();
}

// === CRÉATION DE POST ===

function handleCreatePost(e) {
    e.preventDefault();

    const title = document.getElementById('post-title-input').value.trim();
    const category = document.getElementById('post-category-input').value;
    const body = document.getElementById('post-body-input').value.trim();
    const author = document.getElementById('post-author-input').value.trim();

    if (!title || !category || !body || !author) {
        showToast('Veuillez remplir tous les champs', 'error');
        return;
    }

    const newPost = {
        id: postsData.length + 1,
        title,
        category,
        author,
        avatar: author.slice(0, 2).toUpperCase(),
        date: new Date().toISOString().split('T')[0],
        votes: 0,
        replies: [],
        body
    };

    postsData.unshift(newPost);
    closeModal('create-post-modal');
    e.target.reset();
    renderPosts();
    showToast('Post publié avec succès !', 'success');
}

// === PARTICULES ===

function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animId;

    function resize() {
        const hero = canvas.parentElement;
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }

    function createParticle() {
        return {
            x: Math.random() * canvas.width,
            y: canvas.height + Math.random() * 20,
            size: Math.random() * 2.5 + 0.5,
            speedY: -(Math.random() * 0.8 + 0.2),
            speedX: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.2,
            color: Math.random() > 0.3 ? '34, 197, 94' : '234, 179, 8',
            life: 0,
            maxLife: Math.random() * 300 + 200
        };
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Ajouter des particules
        if (particles.length < 60 && Math.random() > 0.92) {
            particles.push(createParticle());
        }

        particles.forEach((p, i) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.life++;

            const progress = p.life / p.maxLife;
            const alpha = p.opacity * (1 - progress);

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
            ctx.fill();

            // Lueur
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color}, ${alpha * 0.15})`;
            ctx.fill();

            if (p.life >= p.maxLife || p.y < -20) {
                particles.splice(i, 1);
            }
        });

        animId = requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener('resize', resize);
    animate();

    // Nettoyer quand on quitte la page
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animId);
        } else {
            animate();
        }
    });
}

// === COMPTEURS ANIMÉS ===

function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);
        const suffix = counter.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Easing
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            counter.textContent = current.toLocaleString('fr-FR') + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                counter.textContent = target.toLocaleString('fr-FR') + suffix;
            }
        }

        requestAnimationFrame(update);
    });
}

// === SCROLL REVEAL ===

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Déclencher les compteurs si c'est la section stats
                if (entry.target.querySelector('[data-count]')) {
                    animateCounters();
                }
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
}

// === BACK TO TOP ===

function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// === NAVIGATION MOBILE ===

function initMobileNav() {
    const btn = document.getElementById('mobile-nav-btn');
    const menu = document.getElementById('mobile-nav-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
        const isOpen = menu.classList.contains('open');
        btn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Fermer au clic sur un lien
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menu.classList.remove('open');
            btn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

// === RENDU ACCUEIL ===

function renderHomeFeaturedPlugins() {
    const grid = document.getElementById('home-featured-plugins');
    if (!grid) return;

    const featured = pluginsData
        .sort((a, b) => b.downloads - a.downloads)
        .slice(0, 6);

    grid.innerHTML = featured.map(p => renderPluginCard(p)).join('');

    grid.querySelectorAll('.plugin-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.pluginId);
            showPluginDetail(id);
        });
    });
}

function renderHomeRecentPosts() {
    const list = document.getElementById('home-recent-posts');
    if (!list) return;

    const recent = postsData.slice(0, 5);
    list.innerHTML = recent.map(p => renderPostCard(p)).join('');

    list.querySelectorAll('.post-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.postId);
            showPostDetail(id);
        });
    });
}

// === INITIALISATION PAR PAGE ===

function initHomePage() {
    initParticles();
    renderHomeFeaturedPlugins();
    renderHomeRecentPosts();
    initScrollReveal();
}

function initPluginsPage() {
    renderPlugins();

    // Filtres de catégorie
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentPluginFilter = pill.dataset.category;
            renderPlugins();
        });
    });

    // Recherche
    const searchInput = document.getElementById('plugin-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentPluginSearch = e.target.value;
            renderPlugins();
        });
    }

    // Tri
    const sortSelect = document.getElementById('plugin-sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentPluginSort = e.target.value;
            renderPlugins();
        });
    }
}

function initCommunityPage() {
    renderPosts();

    // Tabs de catégorie
    const tabs = document.querySelectorAll('.community-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentPostCategory = tab.dataset.category;
            renderPosts();
        });
    });

    // Recherche
    const searchInput = document.getElementById('post-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentPostSearch = e.target.value;
            renderPosts();
        });
    }

    // Formulaire de création
    const createForm = document.getElementById('create-post-form');
    if (createForm) {
        createForm.addEventListener('submit', handleCreatePost);
    }
}

// === INIT PRINCIPAL ===

document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initBackToTop();

    // Fermer les modals au clic overlay
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    });

    // Fermer les modals avec Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.open').forEach(overlay => {
                overlay.classList.remove('open');
            });
            document.body.style.overflow = '';
        }
    });

    // Détection de la page courante
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    if (page === 'index.html' || page === '' || page === '/') {
        initHomePage();
    } else if (page === 'plugins.html') {
        initPluginsPage();
    } else if (page === 'community.html') {
        initCommunityPage();
    }
});
