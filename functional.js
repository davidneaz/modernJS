// Trend in JavaScript is towards functional programming with
// less state and loops. One of this is a lot easier to read
// and write

const allData = {
  data: {
    files: [
      {
        id: 32,
        name: "asd"
      },
      {
        id: 46,
        name: "dfgh"
      },
      {
        id: 34,
        name: "dfghf"
      },
      {
        id: 768,
        name: "ghj"
      }
    ]
  }
};

const idList = allData.data.files.map(f => f.id);
console.log(idList);

// How would we do this imperatively?

const fileList = allData.data.files;
const newList = [];
for (let i = 0; i < fileList.length; i += 1) {
  newList.push(fileList[i].id);
}
console.log(newList);
