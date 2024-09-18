const family = [
  { name: "Иван", wife: "Елена" },
  { name: "Семен", wife: "Мария" },
  { name: "Гаврила", wife: "Оксана" },
  { name: "Дмитрий", wife: "Авдотья" },
  { name: "Елена",
    children: [
      { name: "Михаил" },
      { name: "Алексей", wife: "Полина" },
      { name: "Анастасия",
        children: [
          { name: "Лариса",
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
  { name: "Мария",
    children: [
      { name: "Афанасий" },
      { name: "Ярослав", wife: "Анастасия" },
      {
        name: "Екатерина",
        children: [{ name: "Петр" }, { name: "Станислав", wife: "Ольга" }],
      },
    ],
  },
  { name: "Оксана",
    children: [
      { name: "Валерий", wife: "Екатерина" },
      {
        name: "Полина",
        children: [{ name: "Илья" }, { name: "Аркадий", wife: "Лариса" }],
      },
    ],
  },
  { name: "Авдотья",
    children: [
      { name: "Ольга", children: [{ name: "Савелий" }, { name: "Марина" }] },
    ],
  },
];

// Нужно найти имена Григорий, Светлана, Анна имея во входных данных только имя Алексей

// Найти внуков Алексея

// function findA (family) {
//   for (let pers of family) {
//       if (pers.name === 'Алексей'){
//           return pers.name
//       }
//      else {
//           if (pers.children) {
//               return findA(pers.children)
//           }
//           if (pers.wife && pers.wife.children) {
//               return findA(pers.wife.children)
//           }
//       }
//   }
// }

// console.log(findA(family))

const findGrandchildren = (familyTree, name) => {
  let grandchildren = [];

  const findChildren = (person) => {
    if (person.name === name && person.children) {
      for (const child of person.children) {
        if (child.children) {
          grandchildren.push(...child.children.map((grandchild) => grandchild.name));
        }
      }
    }

    if (person.children) {
      for (const child of person.children) {
        findChildren(child);
      }
    }
  };

  for (const member of familyTree) {
    findChildren(member);
  }

  return grandchildren;
};

console.log(findGrandchildren(family, 'Алексей'));




// function findGrandchildren(name, familyTree) {
//   let grandchildren = [];

//   let alexeiChildren = [];

//   for (let person of familyTree) {
//     if (person.children) {
//       for (let child of person.children) {
//         if (child.name === name && child.wife === "Полина") {
//           alexeiChildren = person.children;
//         }
//       }
//     }
//   }

//   for (let child of alexeiChildren) {
//     for (let person of familyTree) {
//       if (person.children) {
//         for (let subChild of person.children) {
//           if (subChild.name === child.name && subChild.children) {
//             for (let grandChild of subChild.children) {
//               if (grandChild.children) {
//                 grandchildren.push(...grandChild.children.map(c => c.name));
//               }
//             }
//           }
//         }
//       }
//     }
//   }

//   return grandchildren;
// }

// const grandchildrenOfAlexei = findGrandchildren("Алексей", family);
// console.log(grandchildrenOfAlexei);

// Найти дедушек петра
