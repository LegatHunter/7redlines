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

function searchWife(name, family) {
  let wifeName;
  let child;
  for (let person of family) {
    if (person.name === name) {
      wifeName = person.wife;
      if(person.name === wifeName && person.children) {
        child = person.children;
        return child
      }
      else if (person.children) {
        const result = searchWife(wifeName, person.children);
        if (result) {
          return result;
        }
      }
      // return wifeName;
    } else if (person.children) {
        const result = searchWife(name, person.children);
        if (result) {
          return result;
        }
      }
  }
  return null
}

function searchChildren(name, family) {
  const children = [];
  for (let person of family) {
    if (person.name === name && person.children) {
      return children;
    } else if (person.children) {
        const result = searchChildren(name, person.children);
        if (result) {
          return result;
        }
      }
    }
  }

const wife = searchWife("Алексей", family);
const children = searchChildren(wife, family);
console.log(wife);
console.log(children);




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
