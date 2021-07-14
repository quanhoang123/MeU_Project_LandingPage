import React from 'react';						
import Donate from './Donation/Donate';
import Navbar from './Header/Navbar';
import Partner from './Partner/main_partner';

const routes = [						
	{					
		path : '/',				
		exact : true,				
		main : ()=> <Navbar />				
	},
	{					
		path : '/donate',				
		exact : true,				
		main : ()=> <Donate />				
	},
	{					
		path : '/partner',				
		exact : true,				
		main : ()=> <Partner />				
	}
	
];						
						
						
export default routes;						