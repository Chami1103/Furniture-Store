import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as Io5Icons from 'react-icons/io5';
export const SidebarData = [

  {
    title: 'Dashboard',
    path: '/welcome',
    icon: <AiIcons.AiFillHome />
  },
  {
    title: 'Customer',
    path: '#',
    icon: <BiIcons.BiSolidUserDetail />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      { // Customer 
        title: 'All Customers',
        path: '/all-customers',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },

  {
    title: 'Order',
    path: '#',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'All Orders',
        path: '/orders',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },
  
  {
    title: 'Catalogue',
    path: '#',
    icon: <BiIcons.BiSolidCategory />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All Categories',
        path: '/categories',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add New Category',
        path: '/new-category',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All Items',
        path: '/items',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Add New Item',
        path: '/add-Item',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },

  {
    title: 'Inventory',
    path: '#',
    icon: <FaIcons.FaChartLine />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Stock Details',
        path: '/inventory',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Add Item',
        path: '/new-item',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Suppliers',
        path: '/suppliers',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'New Supplier',
        path: '/new-supplier',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },

    ]
  },
  {
    title: 'Staff',
    path: '#',
    icon: <FaIcons.FaUserCog />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Employee List',
        path: '/employee-list',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'New Employee',
        path: '/new-employee',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Employee Tasks',
        path: '/employee-tasks',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Assign Task',
        path: '/assign-task',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Payment',
    path: '#',
    icon: <FaIcons.FaCcApplePay />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All Payments',
        path: '/payments',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Delivery',
    path: '#',
    icon: <BiIcons.BiSolidCar />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [

      {
        title: 'All Deliveries',
        path: '/all-deliveries',
        icon: <IoIcons.IoIosPaper />
      },
      {

        title: 'New Delivery',
        path: '/new-delivery',
        icon: <IoIcons.IoIosPaper />
      },
      
      {
        title: 'All Drivers',
        path: '/driver-list',
        icon: <IoIcons.IoIosPaper />
      },
      {

        title: 'New Driver',
        path: '/new-driver',
        icon: <IoIcons.IoIosPaper />
      },
      {

        title: 'All Vehicles',
        path: '/vehicle-list',
        icon: <IoIcons.IoIosPaper />
      },
      {

        title: 'New Vehicle',
        path: '/new-vehicle',
        icon: <IoIcons.IoIosPaper />
      },

    ]
  },
  {
    title: 'Customer Care',
    path: '#',
    icon: <FaIcons.FaHandsHelping />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'All Inquiries',
        path: '/inquiries',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All Feedbacks',
        path: '/feedbacks',
        icon: <IoIcons.IoIosPaper />
      },
      
    ]
  },
  {
    title: 'SignOut',
    path: '/',
    icon: <Io5Icons.IoLogOut />,
  },

];
