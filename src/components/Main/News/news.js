const bg1Logo =
  'https://img.gazeta.ru/files3/239/13166239/upload-TASS_40727536-pic_32ratio_900x600-900x600-11325.jpg';

const bg2Logo =
  'https://img.gazeta.ru/files3/239/13166239/upload-TASS_40727536-pic_32ratio_900x600-900x600-11325.jpg';

const bg3Logo =
  'https://img.gazeta.ru/files3/239/13166239/upload-TASS_40727536-pic_32ratio_900x600-900x600-11325.jpg';

const bg4Logo =
  'https://img.tsn.ua/cached/396/tsn-45ddb1c1da8bc78232f746637fde253d/thumbs/428x268/14/84/de7ec4e9ffba339d6bb52b5374318414.jpeg';

const bg5Logo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlV-sHCdeRSp2vGB60iANcuobraJq9Tms_ljaWTQRC0Oh9BvVQ9tBtewnyEt2W3Y6GsVQ&usqp=CAU';

const bg6Logo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvfD8pwqZX7ClfY0rDaitXL29-LE0EtXnpNxGqN14Svftm2rPqQGAsIIhCSkxjsv-6RE&usqp=CAU';

const date = new Date().toLocaleDateString('Ru-ru', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

export const newsArr = [
  {
    date,
    title:
      'Elementum ipsum eget venenatis at rutrum aenean. Neque gravida nunc dolor tellus ac tellus. Turpis.',
    description:
      'Euismod nunc vel sit orci odio eget semper pharetra risus. Nibh pharetra neque amet enim egestas tincidunt. Eu.',
    bg: bg1Logo,
  },
  {
    date,
    title:
      'Volutpat vehicula scelerisque consectetur nullam nunc vel. Sagittis enim feugiat maecenas.',
    description:
      'Facilisis aliquam in velit nibh ipsum quis. Diam nulla fringilla etiam id et egestas dui odio. Lectus nam gravida.',
    bg: bg2Logo,
  },
  {
    date,
    title: 'Etiam donec fames sed nunc senectus ut eget. Nibh felis eget.',
    description:
      'Volutpat egestas porttitor duis purus quam est quam. Tempor aliquam vel arcu euismod. Mattis ullamcorper.',
    bg: bg3Logo,
  },
  {
    date,
    title:
      'Amet volutpat urna vitae vitae. Varius accumsan mattis egestas sagittis arcu libero. Sit at.',
    description:
      'Vestibulum ut justo sagittis eu. Tincidunt viverra odio mauris ut nec tellus ante. Sit ac etiam sed vestibulum.',
    bg: bg4Logo,
  },
  {
    date,
    title:
      'Amet volutpat urna vitae vitae. Varius accumsan mattis egestas sagittis arcu libero. Sit at.',
    description:
      'Vestibulum ut justo sagittis eu. Tincidunt viverra odio mauris ut nec tellus ante. Sit ac etiam sed vestibulum.',
    bg: bg5Logo,
  },
  {
    date,
    title:
      'Amet volutpat urna vitae vitae. Varius accumsan mattis egestas sagittis arcu libero. Sit at.',
    description:
      'Vestibulum ut justo sagittis eu. Tincidunt viverra odio mauris ut nec tellus ante. Sit ac etiam sed vestibulum.',
    bg: bg6Logo,
  },
];
