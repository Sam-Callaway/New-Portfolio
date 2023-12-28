'use client';
import React from 'react'

interface props{
    linkName: string;
    linkAdd: string;
}

const Navbutton: React.FC<props> = (props) => {
    props.linkName
  return (
    <a href={props.linkAdd}>{props.linkName}</a>
  )
}

export default Navbutton