import _ from 'lodash';

export default function Home() {

  const numbers = [2, 5, 9,13,5,67,87,4,21];

  console.log(_.chunk(numbers,2))
  return (
  <>
 <p>lodash</p>
  </>
  );
}
