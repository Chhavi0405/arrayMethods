'use client'
import {format,formatDistance, subDays,formatRelative, add, compareAsc, isMatch, isAfter, max, min, parse, set, daysToWeeks, hoursToMinutes, millisecondsToMinutes, quartersToMonths, yearsToQuarters, eachWeekendOfInterval, getOverlappingDaysInIntervals, isWithinInterval, fromUnixTime} from 'date-fns'
import { hoursToMilliseconds } from 'date-fns/esm'
export default function Home() {
 const today= format(new Date(), "'Today is a' eeee")
  console.log(today,"today")
  const dist =formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
  const dist2 =formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: false })
  const relative= formatRelative(subDays(new Date(), 3), new Date())

  const result = add(new Date(2014, 8, 1, 10, 19, 50), {
    years: 2,
    months: 9,
    weeks: 1,
    days: 7,
    hours: 5,
    minutes: 9,
    seconds: 30,
  })
  console.log(result,"result")
  const compare =compareAsc(new Date(1987,3,25),new Date(1986,7,2))
  const formats = format(new Date(2032, 1, 11), 'MM/dd/yyyy')
  const ismatch  =isMatch('02/11/2014', 'MM/dd/yyyy')
  console.log(ismatch,"ismatch")
  const isAfters = isAfter(new Date(1985, 6, 10), new Date(1987, 1, 11)) 
  console.log("isAfters",isAfters)
  const maxDate = max([
    new Date(1989, 6, 10),
    new Date(1987, 1, 11),
    new Date(1995, 6, 2),
    new Date(1990, 0, 1)
  ])
  console.log(maxDate,"maxDate")
  const mindate=min([
    new Date(1989, 6, 10),
    new Date(1987, 1, 11),
    new Date(1995, 6, 2),
    new Date(1990, 0, 1)
  ])
  console.log(mindate,"mindtae")
  const parseDate =  parse('2014/02/11', 'yyyy/MM/dd', new Date())
  console.log(parseDate,"parseDate")
  const setDate =  set(new Date(2014, 8, 20), { year: 2015, month: 9, date: 20 })
  console.log(setDate,"setDate")
  const setTime = set(new Date(2014, 8, 1, 1, 23, 45), { hours: 5 })
  console.log(setTime,"setTime")
  console.log(daysToWeeks(29),"daystoweeks")
  console.log(hoursToMinutes(3),"hourstominutes")
  console.log(hoursToMilliseconds(3),"hourstomilliseconds")
  console.log(millisecondsToMinutes(120040),"milltomin")
  console.log(quartersToMonths(6),"quarterstomonths")
  console.log(yearsToQuarters(5),"yearstoQuarter")
  console.log(eachWeekendOfInterval({start: new Date(2023,9,15),end:new Date(2023,10,12)}),"weekends")
  const overlappingss = getOverlappingDaysInIntervals(
    { start: new Date(2014, 0, 10), end: new Date(2014, 0, 20) },
    { start: new Date(2014, 0, 17), end: new Date(2014, 0, 21) }
  )
  console.log(overlappingss,"overlappingss")
  
  const withinIntervals = isWithinInterval(new Date(2014, 0, 3), {
    start: new Date(2014, 0, 1),
    end: new Date(2014, 0, 7)
  })
  
  console.log(  withinIntervals,"iswithinInterval")

  const withinIntervals2 = isWithinInterval(new Date(2014, 1, 5), {
    start: new Date(2014, 1, 1),
    end: new Date(2014, 1, 4)
  })
  
  console.log(  withinIntervals2,"iswithinInterval2")

  console.log(fromUnixTime(1303235),"unixtimestamp")


    return (
    <>
    <div className='text-center'>Date-fns</div>
    <div>
      <p>today:-{today}</p>
      <p>formatDistance:-{dist}</p>
      <p>formatDistance false:-{dist2}</p>
      <p>formatRelative:-{relative}</p>
      {/* <p>Result :- {result}</p> */}
      <p>compare:  {compare}</p>
      <p>formats:- {formats}  </p>
       <p>ismatch:- {ismatch}</p>
       <p>isAfters  {isAfters}</p>
    </div>
    </>
  )
}


