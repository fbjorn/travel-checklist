import { CheckListCategory } from './types';

const baseData = [
  {
    name: 'nisi',
    items: ['laborum anim nostrud', 'est aliquip magna', 'labore ea sunt'],
  },
  {
    name: 'dolor',
    items: [
      'qui ea qui',
      'duis pariatur deserunt',
      'in et laborum',
      'dolore consectetur do',
      'tempor do duis',
      'amet dolor commodo',
    ],
  },
  {
    name: 'veniam',
    items: ['magna do tempor', 'irure et eu', 'eu ea tempor'],
  },
  {
    name: 'sint',
    items: [
      'ipsum cupidatat aliqua',
      'eu dolor id',
      'adipisicing ea sint',
      'ad nulla consectetur',
      'exercitation culpa tempor',
      'sunt amet do',
      'velit aliqua enim',
      'ullamco dolor cillum',
      'est nostrud incididunt',
      'duis commodo incididunt',
    ],
  },
  {
    name: 'Huge list boy',
    items: [
      'ipsum cupidatat aliqua',
      'eu dolor id',
      'adipisicing ea sint',
      'ad nulla consectetur',
      'exercitation culpa tempor',
      'sunt amet do',
      'velit aliqua enimullamco dolor cillum',
      'ullamco dolor cillum',
      'est nostrud incididunt',
      'duis commodo incididunt',
      'sunt amet do',
      'velit aliqua enim',
      'ullamco dolor cillum ullamco dolor cillum',
      'est nostrud incididunt ullamco dolor cillum',
      'duis commodo incididunt ullamco dolor cillum',
    ],
  },
  {
    name: 'This is only for testing long headers',
    items: [
      'do eu aliquip',
      'aliquip proident in',
      'duis mollit aliqua',
      'adipisicing ut enim',
      'ipsum deserunt laborum',
      'anim eu minim',
    ],
  },
  {
    name: 'velit #2',
    items: [
      'its gonna be a long string bro offf this is such a long string',
      'do eu aliquip',
      'aliquip proident in',
      'duis mollit aliqua',
      'adipisicing ut enim',
      'ipsum deserunt laborum',
      'Русский текст',
    ],
  },
  {
    name: 'velit',
    items: [
      'ullamco eiusmod excepteur',
      'laborum culpa minim',
      'deserunt mollit excepteur',
      'tempor consectetur do',
      'deserunt id est',
      'Lorem ad velit',
      'elit tempor ex',
      'incididunt elit fugiat',
    ],
  },
  {
    name: 'esse',
    items: [
      'duis elit aliquip',
      'qui duis reprehenderit',
      'ea ipsum ex',
      'nisi esse eiusmod',
      'culpa velit eu',
    ],
  },
  {
    name: 'aliqua',
    items: [
      'aliqua id ex',
      'reprehenderit ad nostrud',
      'pariatur tempor consectetur',
      'pariatur ullamco magna',
      'ad minim ipsum',
      'sint tempor elit',
      'ipsum esse laboris',
      'consectetur consequat commodo',
    ],
  },
  {
    name: 'voluptate',
    items: ['magna fugiat irure', 'id Lorem nostrud', 'eiusmod tempor est'],
  },
  {
    name: 'Dummyin',
    items: ['aliquip elit occaecat', 'sint nulla velit', 'irure qui nisi', 'irure cupidatat anim'],
  },
];

let result: CheckListCategory[] = [];
baseData.forEach(category => {
  result.push({
    name: category.name.charAt(0).toUpperCase() + category.name.slice(1),
    items: category.items.map(val => val.charAt(0).toUpperCase() + val.slice(1)),
  });
});

export default result;
