interface JobHistory {
  term: string;
  descriptions: string[];
}

export const jobHistories: JobHistory[] = [
  {
    term: '2015.04 - 2019.09',
    descriptions: [
      'ERPパッケージベンダーに新卒入社。',
      'Javaエンジニアやチームリーダー、スクラムマスターを担当しました。',
    ],
  },
  {
    term: '2019.10 - 2021.01',
    descriptions: [
      'Web業界を志し、人材系企業の新規サービス部門に転職。',
      'Webエンジニア(Nuxt.js,Firebase)、スクラムマスターを担当しました。',
    ],
  },
  {
    term: '2021.02 -',
    descriptions: [
      'DXを推進するスタートアップに転職。',
      'フロントエンドエンジニア(React)として働いています。',
    ],
  },
];
