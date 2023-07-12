const Projects = {
    Details: {//adding in opposite-chronological order, so it's easy to add later    
        Template: {
            ID: "Template",
            Name: "",
            SmallDescription: "",
            LargeDescription: "",
            DownloadLink: "",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 1
        },
        WorkInProgress: {
            ID: "WorkInProgress",
            Name: "Work In Progress",
            SmallDescription: "Python, SQL, Scikit",
            LargeDescription: "Have you heard my Under Construction joke?<br>It's not done yet",
            NoOfProjectImages: 1
        },
        FragmentedMind: {
            ID: "FragmentedMind",
            Name: "Fragmented Mind",
            SmallDescription: "Serious Game, Unity3D, C#",
            LargeDescription: 
            'Schizophrenia is a serious mental illness that is characterized by symptoms such as delusions, hallucinations, disorganized thinking, and abnormal behaviors. Despite its prevalence, schizophrenia remains a highly stigmatized and misunderstood condition, which often leads to misconceptions and discrimination towards people who suffer from it.<br> Our game aims to provide a unique perspective on schizophrenia by allowing players to experience firsthand what it is like to live with the disorder. This is achieved through our collective research into the common symptoms of schizophrenia, from existing games to books written on the matter. Through these, we decide to include features that will simulate the cognitive and perceptual distortions that people with schizophrenia often experience, such as altered sensory perceptions, paranoid delusions, and disorganized thinking. By immersing players in this simulated reality, the game seeks to raise awareness about the complexity and severity of the disorder and to promote empathy and understanding towards people with schizophrenia.',
            DownloadLink: "",
            EmbedVideoLinkID: "../vid/FragmentedMind.mp4",
            NoOfProjectImages: 13
        },
        GalaxiesCluster: {
            ID: "GalaxiesCluster",
            Name: "Simulation-based Inference on Galaxies Cluster",
            SmallDescription: "Computational Statistics, R",
            LargeDescription: "This is an academic project as part of my course: Computational Statistics, where we are required to apply statistical methods we’ve learnt on a self-sourced dataset, formulate a problem statement and find a solution to that problem. <br> Through conducted secondary research on scholarly articles and peer-reviewed journals, our group have decided to base our dataset on 820 galaxies in the Corona Borealis region. Our problem statement, thus, is whether these galaxies belongs to cluster(s) and if so, how many. <br> From preliminary data visualization, we concluded there are 3 major clusters in this dataset. We then decided to use Bayesian inference (A major topic in the course) to help determine which galaxies belong to which cluster in the following steps: <br><ol><li> Apply Bayes’s Theorem to model the relationship between the observed data (galaxies) and the latent variable (clusters)</li><li> Use the posterior distribution derived from Bayes’s Theorem along with the observed data in Gibb’s sampling to simulate a Markov chain, allowing for inference of latent variables and mixing proportions.</li> </ol>While we managed to estimate and validate our results, we later realized this can also be solved using EM Algorithm, which works as followed:<ol><li> In the E step, the Q function, which is the log likelihood function of observing the data given the parameters, is calculated</li><li> In the M step, the parameters that maximizes the above Q function is calculated..</li> </ol>The 2 steps are then repeated until convergence condition is met. With this method, we were able to achieve the same result but with less computational time.",
            DownloadLink: "",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 1
        },
        VRModelFactory: {
            ID: "VRModelFactory",
            Name: "VR @ Model Factory",
            SmallDescription: "Unity, VR, C#",
            LargeDescription: 'The Model Factory@SIMTech features an actual production environment that allows for experiential experimentation and learning of digitalisation technologies for Industry 4.0. <br> VR@Model Factory enables immersive capabilities to enable virtual training, reducing downtime on physical machines that matters in production to make way for training. Virtual training can also be performed many times over, ensuring staff are adequately trained, as well as allowing easy revisiting of training materials easily when required.',
            DownloadLink: "https://www.a-star.edu.sg/simtech/model-factory@simtech/overview",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 6
        },
        HateSpeech: {
            ID: "HateSpeech",
            Name: "Twitter Hate Speech Classification",
            SmallDescription: "Machine Learning, Scikit, Pandas",
            LargeDescription: "Online hate speech is an important issue that breaks the cohesiveness of online social communities and even raises public safety concerns in our societies. Motivated by this rising issue, our team has developed many traditional machine learning and deep learning methods to detect hate speech on online social platforms automatically. <br> In this project, we apply 6 different machine learning models to perform hate speech classification, namely Extra Trees, Logistic Regression, Gradient Boosting, Voting Classifier, Bagging Classifier and Random Forest Classifier. <br> For the given dataset, our best performing model was <b>Extra-Trees Classifier</b>, where we introduce variations into the decision tree by randomly selecting a random subset of features when building each node of a tree. By putting n number of randomized decision trees together, a single low accuracy classifier is then able to be turned into a high performing forest.",
            DownloadLink: "https://github.com/Huy0720/Hate-Speech-Classification",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 1
        },
        Reversi: {
            ID: "Reversi",
            Name: "Reversi",
            SmallDescription: "Python, Mathplotlib",
            LargeDescription: 'Reversi is a strategy board game played on an 8x8 or 4x4 board. The game is played using identical game pieces called discs/tiles, which are white on one side and black on the other.  The game begins with four disks placed in a square in the middle of the grid, two facing white-side-up, two black-side-up, so that the same-colored disks are on a diagonal. Players take turns placing disks on the board by inputting the coordinate in (x,y) format, where x denotes the horizontal position while y indicates the vertical position. <br> During a play, any disks of the opponent color that are in a straight line and bounded by the disk just placed and another disk of the current player color are turned over to the current player color. <br> The objective of the game is to capture as many disks as possible until there is no valid move available. The player with the most pieces on the board at the end of the game wins; the game can also end in a draw when 2 players end up with the same number of disks. <br> Our group implemented a variation of the game that ends as long as the player has no valid moves (not both). This removes the need for timed moves and allows us to shorten the length of each game.',
            DownloadLink: "https://github.com/Huy0720/Reversi",
            EmbedVideoLinkID: "",
            NoOfProjectImages: 1
        }
    }
};
