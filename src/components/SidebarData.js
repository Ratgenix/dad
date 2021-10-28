import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData=[

    {
        title:'Services',
        path:'/',
        icon:<AiIcons.AiFillHome></AiIcons.AiFillHome>,
        iconClosed:<RiIcons.RiArrowDownFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav:[    
            {
                title:'Services',
                path:'/services',
                icon:null
            },
            {
                title:'Robotics Programming',
                path:'/robot',
                icon:null
            },
            {
                title:'Weld Support',
                path:'/weld',
                icon:null
            },
            {
                title:'Controls Design',
                path:'/controls',
                icon:null
            },
            {
                title:'Start-Up & Debug',
                path:'/start-up',
                icon:null
            }
        ]
    

    }
    
    
]

export default SidebarData
