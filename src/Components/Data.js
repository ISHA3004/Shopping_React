// const items = [{
//     id:1,
//     imgurl:"https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
//     itemname: "Earbuds",
//     cost: 200,
//     rating: 4.5
//   },
//   {
//     id:2,
//     imgurl:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
//     itemname: "Headphones",
//     cost: 350,
//     rating: 4.0
//   },
//   {
//     id:3,
//     imgurl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     itemname: "Laptop",
//     cost: 500,
//     rating: 3.5
//   },
//   {
//     id:4,
//     imgurl:"https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//     itemname: "Computer mouse",
//     cost: 1000,
//     rating: 4.7
//   },
//   {
//     id:5,
//     imgurl:"https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
//     itemname: "Printer",
//     cost: 190,
//     rating: 2.7
//   },
//   {
//     id:6,
//     imgurl:"https://images.unsplash.com/photo-1531104985437-603d6490e6d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
//     itemname: "Speaker",
//     cost: 670,
//     rating: 4.0
//   }]


const fetchitems = async () => {
  // var items = []
  const res = await fetch("http://localhost:5000/data",{
    method:'POST'
  })
  const data = await res.json()
  return data
}

let items = await fetchitems();
console.log(items)

export default items;
