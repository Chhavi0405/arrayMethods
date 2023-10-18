'use client'
import _ from 'lodash';

export default function Home() {

  const numbers = [2, 5, 9,13,5,67,87,4,21];

  console.log(_.chunk(numbers,2),"chunk 1")
  console.log(_.chunk(['a','b','c','d','e'],3),"chunk2")
  let compact =[1,null,5,0,false,undefined,75,""]
  console.log(_.compact([1,null,5,0,false,undefined,75,""]),"COMPACT")
  let concaatArr1 = [2,6]
  let concatResult =_.concat (concaatArr1,[23],[45],[3])
 console.log(concatResult,"concat")

 let diffArray = [23,1,4,567,87,3]
 let removeValue=[23,87,6]
 console.log(_.difference(diffArray,removeValue),"difference")
 let diffBy= [23,45,67,98,90,256]
 let diffValue =[67,90,78]
 console.log(_.differenceBy(diffBy,diffValue),"differenceBy")
 let arr1 =[{'x':1,'y':3},{'y':4,'x':2},{'x':5,'y':5},{'x':8,'y':9}]
 let arr2 =[{'y':4,'x':2},{'x':8}]
 console.log(_.differenceWith(arr1,arr2,_.isEqual),"differenceWith")
 let drop1 =[23,2,4,6,7,90,1]
 console.log(_.drop(drop1,2),"drop")
 console.log(_.dropRight(drop1,3),"dropRight")
 let fil1 = [1,2,3,4,67,90,5]
 console.log(_.fill(fil1,'#',4,6),"fill")
 let fil2 = [1,,3,4,5]
 console.log(_.fill(fil2,'#'),"fill2")
 const data =[
  {name:"Joe",country:'England'},
  {name:'Max',country:'Australia'},
  {name:'Joe',country:'Britain'},
  {name:'Bravo',country:'Indies'}
 ]
 const findIndex= _.findIndex(data,person=>person.country==='Britain')
 console.log(findIndex,"findindex")

 const data1 =[
  {name:"Joe",country:'England',sal:1200},
  {name:'Max',country:'Australia',sal:1500},
  {name:'Joe',country:'Britain',sal:800},
  {name:'Bravo',country:'Indies',sal:200}
 ]
 const dropRightWhile = _.dropRightWhile(data1,{name:'Bravo',country:'Indies',sal:200})
 console.log(dropRightWhile,"dropRightWhile")

 const data2=[ { name: 'Neil', designation: 'Software Engineer', status: 'active'},
 { name: 'Josh', designation: 'Doctor', status: 'active'},
 { name: 'Rachel', designation: 'Content writer', status: 'inactive'},
 { name: 'Josh', designation: 'CTO', status: 'active'}]

 const dropWhile =(_.dropWhile(data2,post=>post.status==='active'))
 console.log(dropWhile,"dropwhile")

 const findlastIndex = _.findLastIndex(data1,info=>info.name==='Joe')
 console.log(findlastIndex,"findlastIndex")

 const arr3=[1,2,[3,4,[5,[20],6],7],8,9]
//  const flatten = _.flatten(arr3)
 console.log(_.flatten(arr3),"flatten")

 console.log(_.flattenDeep(arr3),"flattenDeep")
 console.log(_.flattenDepth(arr3,2),"flattendepth")
 const nameArr = [['name','chhavi'],['add','gzb']]
 console.log(_.fromPairs(nameArr),"fromPairs")
  return (
  <>
 <div style={{textAlign:'center', fontSize:'20px',fontWeight:"bolder"}}>lodash</div>
 <div
 className=' text-center'>
  <p>_.chunk</p>
  <p>_.COMPACT</p>
  <p>_.concat</p>
   <p>_.difference</p>
   <p>_.differenceBy</p>
   <p>_.differenceWith</p>
   <p>_.drop</p>
   <p>_.dropRight</p>
   <p>_.fill</p>
   <p>_.findIndex</p>
   <p>_.dropRightWhile</p>
   <p>_.dropWhile</p>
   <p>_.findlastIndex</p>
   <p>_.flatten</p>
   <p>_.flattenDeep</p>
   <p>_.flattenDepth</p>
   <p>_.fromPairs</p>
  </div>
  </>
  );
}
