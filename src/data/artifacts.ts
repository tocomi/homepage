interface Artifact {
  name: string;
  image: object;
  descriptions: string[];
  storeInfo?: StoreInfo;
  applicationLink?: string;
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
    descriptions: [
      '現在地の近くにある喫煙所、喫煙可能店舗を検索できるモバイルアプリです。',
      '業務委託契約でフロントエンド、バックエンドの開発を担当しています。',
    ],
    storeInfo: {
      appleLink: 'https://apple.co/37h2RP3',
      appleImage: require('../assets/portfolio/smokers/apple.svg'),
      googleLink:
        'https://play.google.com/store/apps/details?id=smokers_app.web.app.smokers',
      googleImage: require('../assets/portfolio/smokers/google.png'),
    },
    technologies: [
      {
        name: 'Firebase',
        image: require('../assets/tech/firebase.png'),
      },
      {
        name: 'React',
        image: require('../assets/tech/react.png'),
      },
      {
        name: 'Typescript',
        image: require('../assets/tech/typescript.png'),
      },
    ],
  },
  {
    name: 'Umaaji Calculator',
    image: require('../assets/portfolio/umaaji/001.jpg'),
    descriptions: [
      '競走馬をスコアリングするWebアプリです。',
      '過去5走のデータを使って独自指数を算出しています。',
      '元となるデータは競馬サイトからスクレイピングをして取得しています。',
    ],
    applicationLink: 'https://umaaji-calculator.firebaseapp.com/',
    githubLink: 'https://github.com/tocomi/umaaji-calculator',
    technologies: [
      {
        name: 'Firebase',
        image: require('../assets/tech/firebase.png'),
      },
      {
        name: 'Vue.js',
        image: require('../assets/tech/vuejs.png'),
      },
      {
        name: 'Typescript',
        image: require('../assets/tech/typescript.png'),
      },
      {
        name: 'PWA',
        image: require('../assets/tech/pwa.png'),
      },
      {
        name: 'Python',
        image: require('../assets/tech/python.png'),
      },
    ],
  },
  {
    name: 'kabuker',
    image: require('../assets/portfolio/kabuker/001.jpg'),
    descriptions: [
      'あつ森のカブ価を共有するWebアプリです。',
      '入力値を元にカブ価のパターンを判別することもできます。',
    ],
    applicationLink: 'https://kabuker.firebaseapp.com/',
    githubLink: 'https://github.com/tocomi/kabuker',
    technologies: [
      {
        name: 'Firebase',
        image: require('../assets/tech/firebase.png'),
      },
      {
        name: 'Vue.js',
        image: require('../assets/tech/vuejs.png'),
      },
      {
        name: 'PWA',
        image: require('../assets/tech/pwa.png'),
      },
    ],
  },
];

export { Artifact, artifacts };
