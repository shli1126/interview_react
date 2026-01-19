function great() {
  console.log(this);
}

great();

function selfIntro(age, city) {
  console.log(this.name, age, city);
}

const user = {
  name: "Bob",
};

selfIntro.call(user, 25, "CA")
selfIntro.apply(user, [25, "CA"])
const newSelfIntro = selfIntro.bind(user, [25, "CA"])
newSelfIntro()


fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(d => console.log(d))

async function fetchData() {
    const userURL = ""
    
}

