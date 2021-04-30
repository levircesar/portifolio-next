import React from 'react';
import { 
  FaInstagram , 
  FaFacebook ,
  FaAddressCard
} from 'react-icons/fa';

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaInstagram/>
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FaInstagram/>
  },
  {
    title: 'Noticias',
    path: '/noticias',
    icon: <FaFacebook/>
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: <FaAddressCard/>
  }
]