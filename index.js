const family = [
  { name: "Иван", wife: "Елена" },
  { name: "Семен", wife: "Мария" },
  { name: "Гаврила", wife: "Оксана" },
  { name: "Дмитрий", wife: "Авдотья" },
  {
    name: "Елена",
    children: [
      { name: "Михаил" },
      { name: "Алексей", wife: "Полина" },
      {
        name: "Анастасия",
        children: [
          {
            name: "Лариса",
            children: [
              { name: "Григорий" },
              { name: "Светлана" },
              { name: "Анна" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Мария",
    children: [
      { name: "Афанасий" },
      { name: "Ярослав", wife: "Анастасия" },
      {
        name: "Екатерина",
        children: [{ name: "Петр" }, { name: "Станислав", wife: "Ольга" }],
      },
    ],
  },
  {
    name: "Оксана",
    children: [
      { name: "Валерий", wife: "Екатерина" },
      {
        name: "Полина",
        children: [{ name: "Илья" }, { name: "Аркадий", wife: "Лариса" }],
      },
    ],
  },
  {
    name: "Авдотья",
    children: [
      { name: "Ольга", children: [{ name: "Савелий" }, { name: "Марина" }] },
    ],
  },
];

// Нужно найти имена Григорий, Светлана, Анна имея во входных данных только имя Алексей

// Найти внуков Алексея

// function findGrandchildren(family, name) {
//   for (let pers of family) {
//     if (pers.name === name) {
//       return pers.name;
//     } else {
//       if (pers.children) {
//         findGrandchildren(pers.children);
//       }
//       if (pers.wife && pers.wife.children) {
//         return findGrandchildren(pers.wife.children);
//       }
//     }
//   }
// }

// console.log(findGrandchildren(family, "Алексей"));


function findGrandchildren(name, familyTree) {
  let grandchildren = [];

  let alexeiChildren = [];

  for (let person of familyTree) {
    if (person.children) {
      for (let child of person.children) {
        if (child.name === name && child.wife === "Полина") {
          alexeiChildren = person.children;
        }
      }
    }
  }

  for (let child of alexeiChildren) {
    for (let person of familyTree) {
      if (person.children) {
        for (let subChild of person.children) {
          if (subChild.name === child.name && subChild.children) {
            for (let grandChild of subChild.children) {
              if (grandChild.children) {
                grandchildren.push(...grandChild.children.map(c => c.name));
              }
            }
          }
        }
      }
    }
  }

  return grandchildren;
}

const grandchildrenOfAlexei = findGrandchildren("Алексей", family);
console.log(grandchildrenOfAlexei);

// Найти дедушек петра

