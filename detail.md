Lecture : Aperçu du projet final (SecondChance)
Dans ce projet de fin d’études, vous allez créer une application web back-end appelée “SecondChance”. L’application SecondChance connecte des utilisateurs qui souhaitent donner des objets ménagers dont ils n’ont plus besoin avec des utilisateurs qui aiment le recyclage et préfèrent trouver des objets ménagers gratuits correspondant à leurs goûts plutôt que d’acheter des neufs.
Vous clonerez un répertoire GitHub contenant la structure de répertoire du projet et le code de base dans les fichiers respectifs.

Du point de vue de l’interface utilisateur, l’application comprend une page d’accueil, une page de listes, une barre de navigation, une fonction de recherche, une page de détails de l’objet, une page d’inscription, une page de connexion et une page de profil modifiable. Le répertoire GitHub que vous clonerez contiendra ces composants React front-end. Vous n’avez pas besoin de développer de code pour le front-end.

Vous écrirez des API et des points de terminaison pour le back-end. Vous utiliserez MongoDB, une base de données NoSQL pour le stockage des données. Vous veillerez également à assurer un processus d’authentification et de connexion sécurisé.

À la fin du cours, vous containeriserez et déploierez l’application en utilisant à la fois les modules front-end fournis et le code back-end que vous avez développé dans les trois modules précédents. De plus, tout au long du cours, vous mettrez en œuvre certaines pratiques Agile et DevOps courantes dans le cadre de l’expérience de développeur full-stack.

Examinons les modules et les descriptions du code que vous développerez pour l’application SecondChance.

Conception
Le diagramme ci-dessous montre l’architecture de l’application SecondChance.


Structure du Répertoire
directories

Module 1
Dans le premier module, vous utiliserez votre compte GitHub pour cloner le code de base, qui vous permettra de commencer avec diverses fonctions et vous fournira une partie du code pour les services backend. Vous écrirez une série d’histoires utilisateur pour créer un tableau Kanban afin de suivre vos progrès tout au long du projet. Vous configurerez également une base de données Mongo que votre application utilisera pour le stockage des données.

Module 2
Dans le deuxième module, vous définirez des points de terminaison API pour lister les ressources et mettre en œuvre deux services backend : l’un qui permet des recherches avec plusieurs paramètres et un autre pour l’analyse des sentiments.

Module 3
Dans le troisième module, vous écrirez des API pour les services back-end liés à l’authentification : l’inscription, la connexion et la fonctionnalité de profil utilisateur. Vous utiliserez des JSON Web Tokens comme moyen sécurisé de représenter les identifiants et les données de l’utilisateur.

Module 4
Dans le quatrième module, vous allez conteneuriser l’ensemble de l’application pour le déploiement, y compris le code front-end ainsi que les services back-end que vous avez développés dans les modules précédents. Vous utiliserez la plateforme Docker et appliquerez des pratiques DevOps, telles que les actions GitHub et CI/CD, pour déployer votre application sur plusieurs plateformes cloud, y compris un cluster Kubernetes et IBM Code Engine.

Module 5
Dans le cinquième module, vous collecterez et organiserez toutes les preuves requises—captures d’écran, URL et sorties—des laboratoires pratiques pour soumission. Votre travail sera évalué à l’aide d’une grille détaillée qui attribue des points en fonction de l’exhaustivité et de la justesse.

Chaque module d’instruction commence par un aperçu du module contenant des détails supplémentaires sur les services que vous développerez pour chaque module.

Critères d’évaluation – 40 Points
Vous pouvez soumettre vos livrables de projet de l’une des manières suivantes :

Option 1 : Soumission et évaluation notées par IA
Lorsque vous choisissez l’Option 1, vous serez redirigé vers un outil d’IA où vous pourrez télécharger vos livrables, qui peuvent inclure des URL, des sorties de terminal, des extraits de code ou des captures d’écran. Vous recevrez ensuite une note générée par l’IA qui se reflétera automatiquement sur votre page de progression Coursera.

Option 2 : Soumission et évaluation par les pairs
Lorsque vous choisissez l’Option 2, vous téléchargerez vos livrables—comme des URL, des sorties de terminal, des extraits de code ou des captures d’écran—via la section Mes Soumissions. Votre soumission sera ensuite examinée soit par vos pairs, soit par le correcteur IA de Coursera.

Nous vous recommandons d’utiliser l’Option 1 pour une notation plus rapide. Cependant, si vous rencontrez des problèmes ou ne pouvez pas y accéder, vous pouvez utiliser l’Option 2 à la place.

Si vous rencontrez des problèmes de notation, veuillez contacter l’équipe du cours via les forums de discussion.

Veuillez trouver ci-dessous les détails des critères de notation :

Critères pour l'Option 1 : Soumission et évaluation notées par IA :
Tâche 1 : Soumettez l’URL publique du dépôt GitHub du fichier user-story.md qui contient le modèle d’histoire utilisateur. – 2 points

Tâche 2 : Téléchargez la capture d’écran du répertoire des problèmes GitHub qui contient au moins huit histoires utilisateur, chacune étiquetée comme nouvelle, icebox, dette technique ou backlog. – 4 points

Tâche 3 : Soumettez la sortie des données MongoDB enregistrées sous le nom inserted_items qui affiche que vous avez importé 16 documents dans MongoDB. – 2 points

Tâche 4 : Soumettez l’URL publique du dépôt GitHub du fichier db.js contenant une ligne pour se connecter à MongoDB par la méthode “await client.connect()”. – 2 points

Tâche 5 : Soumettez l’URL publique du dépôt GitHub de secondChanceItemsRoutes.js qui inclut la connexion à la base de données en utilisant connectToDatabase(), une méthode POST pour le téléchargement de fichiers, des routes pour /api/secondchance/items et /api/secondchance/items/:id, et une méthode DELETE pour supprimer un élément via /:id. – 8 points

Tâche 6 : Soumettez l’URL publique du dépôt GitHub du fichier searchRoutes.js qui contient le code pour filtrer par catégorie. – 2 points

Tâche 7 : Soumettez l’URL publique du dépôt GitHub du fichier app.js qui contient une route qui sert /api/secondchance/search. – 2 points

Tâche 8 : Soumettez l’URL publique du dépôt GitHub du fichier index.js qui contient une ligne pour importer le package npm natural. – 2 points

Tâche 9 : Soumettez l’URL publique du dépôt GitHub du fichier authRoutes.js qui contient les API mises en œuvre pour la connexion, l’inscription et la mise à jour des informations utilisateur. – 2 points

Tâche 10 : Téléchargez une capture d’écran nommée deployed_landingpage.png qui affiche clairement la page d’accueil de votre projet. La capture d’écran doit inclure l’URL de déploiement dans la barre d’adresse du navigateur et doit montrer visiblement le titre du projet ou le nom du site, une brève description ou un slogan, et un bouton ‘Commencer’. – 2 points

Tâche 11 : Copiez et collez la commande cURL et sa sortie, enregistrées dans le fichier nommé mainpage, qui liste tous les éléments pour les utilisateurs. – 2 points

Tâche 12 : Copiez et collez la commande cURL et sa sortie, enregistrées dans le fichier nommé register, qui enregistre les utilisateurs. – 2 points

Tâche 13 : Copiez et collez la commande cURL et sa sortie, enregistrées dans le fichier nommé login, qui connecte l’utilisateur enregistré. – 2 points

Tâche 14 : Copiez et collez la commande cURL et sa sortie, enregistrées dans le fichier nommé item_detail, qui montre les détails d’un élément. – 2 points

Tâche 15 : Copiez et collez la commande cURL et sa sortie, enregistrées dans le fichier nommé search_item, qui montre l(es) élément(s) correspondant aux critères. – 2 points

Tâche 16 : Soumettez la sortie du terminal de l’action workflow enregistrée sous le nom CICD, montrant les détails du processus CI/CD s’exécutant avec succès dans le workflow d’actions, contenant toutes les étapes. – 2 points

Critères pour l'Option 2 : Soumission et évaluation par les pairs :
Tâche 1 : Soumettez un lien vers votre dépôt GitHub public que vous avez créé à partir du modèle qui contient un fichier avec ce chemin : github/ISSUE_TEMPLATE/user-story.md
Votre dépôt doit avoir au moins huit histoires utilisateur. Chaque histoire utilisateur doit afficher l’une des étiquettes suivantes : nouvelle, icebox, dette technique ou backlog. – 6 points

Tâche 2 : Soumettez une capture d’écran qui affiche que vous avez importé 16 documents dans MongoDB. – 2 points

Tâche 3 : Soumettez un lien vers votre dépôt GitHub backend-nodejs-capstone fichier “/secondChance-backend/models/db.js” contenant une ligne pour se connecter à MongoDB “await client.connect().”. – 2 points

Tâche 4 : Soumettez un lien vers votre dépôt GitHub backend-nodejs-capstone fichier “/secondChance-backend/routes/secondChanceItemsRoutes.js” qui contient une ligne pour se connecter à la base de données en utilisant la méthode connectToDatabase(). – 2 points

Tâche 5 : Soumettez un lien vers votre dépôt GitHub backend-nodejs-capstone fichier “/secondChance-backend/routes/secondChanceItemsRoutes.js” qui contient des routes qui servent /api/secondchance/items et /api/secondchance/items/:id. – 2 points

/ servant /api/gifts

/:id servant /api/gifts/:id

Tâche 6 : Soumettez un lien vers votre dépôt GitHub backend-nodejs-capstone fichier “/secondChance-backend/routes/searchRoutes.js” qui contient le code pour filtrer par catégorie. – 2 points

Tâche 7 : Soumettez un lien vers votre dépôt GitHub backend-nodejs-capstone fichier “/secondChance-backend/app.js” qui contient une route qui sert /api/secondchance/search. – 2 points

Tâche 8 : Soumettez un lien vers votre dépôt GitHub backend-nodejs-capstone fichier “/sentiment/index.js” qui contient une ligne pour importer le package npm natural. – 2 points

Tâche 9 : Soumettez un lien vers votre dépôt GitHub backend-nodejs-capstone fichier “secondChance-backend/routes/secondChanceItemsRoutes.js” qui contient une méthode pour POST un fichier vers le backend. – 2 points

Tâche 10 : Soumettez un lien vers votre dépôt GitHub backend-nodejs-capstone fichier “secondChance-backend/routes/secondChanceItemsRoutes.js” qui contient une méthode pour DELETE un élément avec l’URL “/:id”. – 2 points

Tâche 11 : Soumettez un lien vers votre dépôt GitHub backend-nodejs-capstone fichier “/secondChance-backend/routes/secondChanceItemsRoutes.js” qui contient une méthode appropriée dans le point de terminaison POST pour télécharger un fichier. – 2 points

Tâche 12 : Soumettez une capture d’écran de la page d’accueil qui montre l’URL de déploiement. – 2 points

Tâche 13 : Soumettez une capture d’écran de la MainPage avant la connexion (liste tous les éléments) qui inclut l’URL de déploiement. – 2 points

Tâche 14 : Soumettez une capture d’écran de la page d’inscription montrant les détails de l’utilisateur sur le point d’être enregistré, y compris l’URL de déploiement. – 2 points

Tâche 15 : Soumettez une capture d’écran de la page montrant le nom d’utilisateur dans la barre de navigation de l’utilisateur connecté. Assurez-vous d’inclure l’URL de déploiement dans la capture d’écran. – 2 points

Tâche 16 : Soumettez une capture d’écran de la page de détails de l’élément montrant les détails d’un élément. Assurez-vous d’inclure l’URL de déploiement dans la capture d’écran. – 2 points

Tâche 17 : Soumettez une capture d’écran des résultats de recherche affichant les éléments qui correspondent aux critères. Assurez-vous d’inclure l’URL de déploiement dans la capture d’écran. – 2 points

Tâche 18 : Soumettez une capture d’écran de votre processus CI/CD exécuté avec succès. – 2 points

Auteur(s)
Skills Network





Le devoir comporte des critères pour 16 tâches, sur la base desquels vous serez noté sur un score global de 40 points, nécessitant un minimum de 70 % des points pour réussir. Veuillez suivre la liste ci-dessous pour connaître les critères de notation en détail.

Critères :

Tâche 1 (2 Points) :

 Soumettez l'URL du dépôt public GitHub du fichier user-story.md contenant le modèle d'histoire utilisateur.

Tâche 2 (4 Points) :

 Téléchargez la capture d'écran du répertoire des problèmes GitHub contenant au moins huit histoires utilisateur, chacune étiquetée comme nouvelle, icebox, dette technique ou backlog.

Tâche 3 (2 Points) :

 Soumettez la sortie des données MongoDB enregistrées sous inserted_items qui affiche que vous avez importé 16 documents dans MongoDB.

Tâche 4 (2 Points) :

 Soumettez l'URL du dépôt public GitHub du fichier db.js contenant une ligne pour se connecter à MongoDB en utilisant la méthode "await client.connect()".

Tâche 5 (8 Points) :

 Soumettez l'URL du dépôt public GitHub de secondChanceItemsRoutes.js qui inclut :

Connexion à la base de données en utilisant connectToDatabase()
Une méthode POST pour le téléchargement de fichiers
Routes pour /api/secondchance/items et /api/secondchance/items/:id
Une méthode DELETE pour supprimer un élément via /:id
Tâche 6 (2 Points) :

 Soumettez l'URL du dépôt public GitHub du fichier searchRoutes.js contenant le code pour filtrer par catégorie.

Tâche 7 (2 Points) :

 Soumettez l'URL du dépôt public GitHub du fichier app.js contenant une route servant /api/secondchance/search.

Tâche 8 (2 Points) :

 Soumettez l'URL du dépôt public GitHub du fichier index.js contenant une ligne pour importer le package npm natural.

Tâche 9 (2 Points) :

 Soumettez l'URL du dépôt public GitHub du fichier authRoutes.js contenant les API mises en œuvre pour la connexion, l'enregistrement et la mise à jour des informations utilisateur.

Tâche 10 (2 Points) :

 Téléchargez une capture d'écran nommée deployed_landingpage.png qui affiche clairement la page d'accueil de votre projet. La capture d'écran doit inclure :

L'URL de déploiement dans la barre d'adresse du navigateur
Le titre du projet ou le nom du site
Une brève description ou un slogan
Un bouton Commencer
Tâche 11 (2 Points) :

 Copiez et collez la commande cURL et sa sortie, enregistrées dans le fichier nommé mainpage, qui liste tous les éléments aux utilisateurs.

Tâche 12 (2 Points) :

 Copiez et collez la commande cURL et sa sortie, enregistrées dans le fichier nommé register, qui enregistre les utilisateurs.

Tâche 13 (2 Points) :

 Copiez et collez la commande cURL et sa sortie, enregistrées dans le fichier nommé login, qui connecte l'utilisateur enregistré.

Tâche 14 (2 Points) :

 Copiez et collez la commande cURL et sa sortie, enregistrées dans le fichier nommé item_detail, qui montre les détails d'un élément.

Tâche 15 (2 Points) :

 Copiez et collez la commande cURL et sa sortie, enregistrées dans le fichier nommé search_item, qui montre l(es) élément(s) correspondant aux critères.

Tâche 16 (2 Points) :

 Soumettez la sortie du terminal de l'action de workflow enregistrée sous CICD, montrant les détails du processus CI/CD s'exécutant avec succès dans le workflow d'actions avec toutes les étapes.