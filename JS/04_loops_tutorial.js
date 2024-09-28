console.log("Looping Tutorial")

let a = 1;
for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Ritam Sanyal",
    age: "22",
    job: "web dev intern",
    city: "Kolkata",
    salary: "10LPA"
}

for (const key in obj) {
    // if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element)
    // }
}

for (const c of "Ritam Sanyal") {
    console.log(c)
}

let i = 0;
while (i <= 6) {
    console.log(i);
    i++;
}