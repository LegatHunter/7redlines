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

function grandchildren(family) {
  const alex = "Алексей";
  for (let person of family) {
    if (person.name === alex) {
      const polina = person.wife;
      for (let wife of family) {
        if (wife.name === polina && wife.children) {
          return person.children ? person.children : []
        }
      }
      return person.wife;
    } else {
      if (person.children) {
        return grandchildren(person.children);
      }
    }
  }
}

console.log(grandchildren(family));



function findChildrenByName(name) {
  let result = [];

  function searchFamily(familyArray) {
    for (const person of familyArray) {
      if (person.name === name) {
        return person;
      }
      if (person.children) {
        const found = searchFamily(person.children);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  return searchFamily(family);
}

function getChildrenOfWife(name) {
  const alexey = findChildrenByName("Алексей");

  if (!alexey || !alexey.wife) {
    console.log("Имя Алексей не найдено или у него нет жены.");
    return;
  }

  const wifeName = alexey.wife;
  const wife = findChildrenByName(wifeName);

  if (!wife || !wife.children) {
    console.log("Имя жены не найдено или у нее нет детей.");
    return;
  }

  const wifeChildren = wife.children;

  let larisaName = null;
  for (const child of wifeChildren) {
    if (child.wife) {
      larisaName = child.wife;
      break;
    }
  }

  if (!larisaName) {
    console.log("У жены нет супруга.");
    return;
  }

  const larisa = findChildrenByName(larisaName);

  if (!larisa || !larisa.children) {
    console.log("Имя супруга жены не найдено или у него нет детей.");
    return;
  }

  const finalChildren = larisa.children.map(child => child.name);
  console.log("Имена детей:", finalChildren);
}

getChildrenOfWife();

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
