'use client'
import { GETEVENTS } from '@/app/api/graphql/queries';
import { useQuery } from '@apollo/client'
import React from 'react'

const Hero = () => {
    const { data, loading } = useQuery(GETEVENTS)
    console.log(data?.getEvents);
  return (
    <div>{JSON.stringify(data?.getEvents[0].name)}</div>
  )
}

export default Hero