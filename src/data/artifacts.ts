interface Artifact {
  name: string;
  image: object;
  description: string;
  storeInfo?: StoreInfo;
  ApplicationLink?: string;
  githubLink?: string;
  technologies: Technology[];
}

interface StoreInfo {
  appleLink: string;
  appleImage: object;
  googleLink: string;
  googleImage: object;
}

interface Technology {
  name: string;
  image: object;
}

const artifacts: Artifact[] = [
  {
    name: "Smoker's",
    image: require('../assets/portfolio/smokers/001.jpg'),
    description: `
    現在地の近くにある喫煙所、喫煙可能店舗を検索できるモバイルアプリです。
    
    業務委託契約でフロントエンド、バックエンドの開発を担当しています。
    `,
    storeInfo: {
      appleLink: 'https://apple.co/37h2RP3',
      appleImage: require('../assets/portfolio/smokers/apple.svg'),
      googleLink:
        'https://play.google.com/store/apps/details?id=smokers_app.web.app.smokers',
      googleImage: require('../assets/portfolio/smokers/google.png'),
    },
    technologies: [
      {
        name: 'firebase',
        image: require('../assets/tech/firebase.png'),
      },
      {
        name: 'react',
        image: require('../assets/tech/react.png'),
      },
      {
        name: 'typescript',
        image: require('../assets/tech/typescript.png'),
      },
    ],
  },
];

export { Artifact, artifacts };
