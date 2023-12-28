'use client';
import React from 'react'

interface props{
    linkName: string;
    linkAdd: string;
}

const Downloadbutton: React.FC<props> = (props) => {
    props.linkName
  return (
    <a href={props.linkAdd} download>{props.linkName}</a>
  )
}

export default Downloadbutton